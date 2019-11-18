import { badjs, tdw, monitor, storage } from '@tencent/imwxutils';
import { wkLogin, isLogined } from '../../utils/imwxutils';
import { goCourseDetail, goWKMp } from '../../utils/router';
import DB from '../../utils/DB';
import { exposureBehavior } from '../../utils/report';
import { app, getGlobalData, setGlobalData } from '../../utils/helper';

const errMap = {
  0: '领取成功，可以开始学习啦！',
  166415: '您已报名过该课程，可以开始学习啦！',
  1678151: '您已报名过该课程，可以开始学习啦！',
  1678152: '课程不能免费赠送',
  1678153: '已达到免费领取课程上限，您可以去详情页直接购买',
  1678154: '不在活动时间内，无法领取',
  106409: '课程已经结束，无法领取',
};

const reportModule = {
  courseMix: 'freeclass',
  courseFree: 'payclassfree',
};

Component({
  externalClasses: ['cnt-cls'],
  options: {
    addGlobalClass: true,
  },
  behaviors: [exposureBehavior],
  properties: {
    ui: { type: Object, value: {} },
    courses: { type: Array, value: null },
    courseType: { type: String, value: 'courseMix' },
    btnText: { type: String, value: '免费领取' },
  },
  data: {
    scopeType: 'getUserInfo',
    report: null, // 曝光上报用
  },
  lifetimes: {
    attached() {
      const { courseType, courses } = this.data;
      const courseid = courses.map(item => item.cid).join('_');
      this.setData({
        report: {
          module: reportModule[courseType],
          courseid,
        },
      });
    },
  },
  methods: {
    // 点击button，获取课程
    getCourse(e) {
      const { courseType } = this.data;
      const { dataset } = e.currentTarget;
      const { id, btntext, termid } = dataset;
      tdw.report({
        action: 'click',
        module: reportModule[courseType],
        courseid: id,
      });
      if (btntext === '立即学习' || btntext === '开始上课') {
        goCourseDetail({ cid: id, termId: termid });
      } else {
        const that = this;
        wx.checkSession({
          success() {
            if (courseType === 'courseMix') {
              that.courseMixHandler(dataset);
            } else {
              that.courseFreeHandler(dataset);
            }
          },
          fail() {
            wkLogin().then(({ openid }) => {
              storage.set('openid', openid);
              setGlobalData('openid', openid);
              if (courseType === 'courseMix') {
                that.courseMixHandler(dataset);
              } else {
                that.courseFreeHandler(dataset);
              }
            }).catch(err => {
              wx.hideLoading();
              badjs.info({
                msg: `【王卡】登陆失败, 小程序王卡活动页登陆, msg: ${err && String(err)}`,
              });
              monitor.report(34286222);
              const errMsg = '登陆失败，请稍后重试';
              if (!(/LOGIN_ERROR_DENY/.test(err))) {
                wx.showModal({
                  title: '登录失败',
                  content: errMsg,
                  confirmColor: '#009eef',
                  showCancel: false,
                });
              }
            });
          },
        });
      }
    },
    // 课程合辑
    courseMixHandler(dataset) {
      const { id, termid } = dataset;
      // 报名免费课程
      DB.getFreeCourse(id, termid).then(() => {
        monitor.report(34523731);
        this.setButtonType(dataset);
        wx.showModal({
          title: '提示',
          content: '报名成功，可以开始学习啦！',
        });
      }).catch((err) => {
        monitor.report(34523736);
        if (/101402/.test(err)) {
          this.setButtonType(dataset);
          wx.showModal({
            title: '提示',
            content: '您已报名该课程，可以开始学习啦！',
          });
        } else {
          badjs.info({
            msg: `【王卡】免费课报名失败, msg: ${err && String(err)}`,
          });
          wx.showModal({
            title: '提示',
            content: '报名失败或课程已结束',
          });
        }
      });
    },
    // 免费课程
    courseFreeHandler(dataset) {
      const { phoneInfo } = getGlobalData();
      const openid = storage.get('openid');
      if (!phoneInfo) {
        if (!openid) {
          wkLogin().then((res) => {
            storage.set('openid', res.openid);
            setGlobalData('openid', res.openid);
          });
        } else {
          // 拿手机号弹窗
          this.showMobileModal(dataset);
          if (app.bus) {
            app.bus.$off('triggerGetCourse');
            app.bus.$on('triggerGetCourse', (args) => {
              this.checkWKUser(args.dataset, args.phoneInfo);
            });
          }
        }
      } else {
        this.checkWKUser(dataset, phoneInfo);
      }
    },
    // 检测王卡用户
    checkWKUser(dataset, phoneInfo) {
      wx.showLoading({
        title: '正在加载',
        mask: true,
      });
      const { phoneNumber, bindStatus, bindStatement } = phoneInfo;
      DB.checkWKUser(phoneNumber).then((wkres = {}) => {
        monitor.report(34523717);
        wx.hideLoading();
        const { status, code } = wkres;
        if (code === '10000' && status === '00') {
          // 是王卡用户
          if (bindStatus === 0) {
            this.fetchGetCourse(dataset);
          } else {
            setGlobalData('phoneInfo', null);
            wx.showModal({
              title: '提示',
              content: bindStatement || '请重新绑定手机号',
            });
          }
        } else if (code === '10000' && status !== '00') {
          // 非王卡用户，引导开卡
          wx.showModal({
            title: '提示',
            content: '该权益仅限王卡用户领取，您可学习精选专区免费课',
            confirmText: '立即开卡',
            success({ confirm }) {
              // 需求变更：取消或者确认开卡都需清除手机号相关信息
              setGlobalData('phoneInfo', null);
              if (confirm) {
                goWKMp();
              }
            },
          });
        } else {
          wx.showModal({
            title: '提示',
            content: '王卡用户检测失败，请稍后再试',
          });
        }
      }).catch(err => {
        monitor.report(34523722);
        wx.hideLoading();
        badjs.info({
          msg: `【王卡】王卡用户检测失败, msg: ${err && String(err)}`,
        });
        wx.showModal({
          title: '提示',
          content: err.Msg || '王卡用户检测失败，请稍后再试',
        });
      });
    },
    // 调领课接口，领取课程
    fetchGetCourse(dataset) {
      const { id, termid } = dataset;
      DB.getVipCourse(id, termid).then(res => {
        monitor.report(34523741);
        const { ret } = res;
        if ([0, 166415, 1678151].indexOf(ret) !== -1) {
          this.setButtonType(dataset);
          tdw.report({
            action: 'exposure',
            module: 'success',
            courseid: id,
          });
        }
        wx.showModal({
          title: '提示',
          content: errMap[ret] || '课程领取失败，请稍后再试',
        });
      }).catch((err) => {
        badjs.info({
          msg: `【王卡】免费课程领取失败, msg: ${err && String(err)}`,
        });
        monitor.report(34523742);
        wx.showModal({
          title: '提示',
          content: '课程领取失败，请稍后再试',
        });
      });
    },
    // 设置按钮文案状态
    setButtonType(dataset) {
      const { courses, courseType } = this.data;
      const { index, id } = dataset;
      courses[index].btnText = courseType === 'courseFree' ? '立即学习' : '开始上课';
      this.setData({ courses });
      // 存缓存 { [courseType]: [type-id]}
      const originCookie = storage.get(courseType) || [];
      originCookie.push(id);
      storage.set(courseType, originCookie);
    },
    // 点击课程块
    goCourse(e) {
      const { courseType } = this.data;
      const { dataset } = e.currentTarget;
      const { id } = dataset;
      tdw.report({
        action: 'click',
        module: reportModule[courseType],
        courseid: id,
      });
      const that = this;
      wx.checkSession({
        success() {
          if (isLogined()) {
            // 跳课程详情
            that.goCourseHandler(dataset);
          } else {
            that.triggerEvent('showLoginModal');
          }
        },
        fail() {
          // 没登陆弹登陆窗口
          that.triggerEvent('showLoginModal');
        },
      });
    },
    // 具体跳转逻辑
    goCourseHandler(dataset) {
      const { id, termid } = dataset;
      goCourseDetail({ cid: id, termId: termid });
    },
    // 绑定手机号，领课
    showMobileModal(dataset, phoneInfo) {
      this.triggerEvent('showMobileModal', dataset, phoneInfo);
    },
  },
});
