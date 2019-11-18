/*
 * @Author: eliyuan
 * @Email: eliyuan@tencent.com
 * @Date: 2019-08-06 17:06:09
 * @LastEditors: eliyuan
 * @LastEditTime: 2019-09-02 17:36:38
 */
import { tdw, monitor, badjs, bus, storage } from '@tencent/imwxutils';
import speed from './utils/speed';
import DB from './utils/DB';
import { app, setGlobalData, getMenuButtonBoundingClientRect } from './utils/helper';

function initReports() {
  badjs.init({
    id: 1456,
    projectname: '课堂小程序',
    ignore: [
      /Yn.env.USER_DATA_PATH/, // appServiceSDKScriptError 微信自身问题 不影响使用 微信小程序后台已经屏蔽的错误
    ], // 忽略的正则或函数
  });
  tdw.config({
    weapp_type: 1,
  }, {
    rule: 'ketang',
    debug: false,
  });
}
speed.init();
speed.register('22251-1-5', {
  pageOnLoad: 29, // 页面加载完成
  pageOnReady: 31, // 首屏渲染完成
  whitepage: 28, // 白屏时间
  domready: 23, // 可交互时间
});

// 挂载单例
app.bus = bus;

Page({
  data: {
    showLogin: false,
    showMobile: false,
    showLoadedFail: false,
    infos: [], // 楼层数据集合
    footerImg: {}, // 页面底部图片
    share: {},
  },
  onLoad() {
    initReports();
    speed.mark('pageOnLoad');
    speed.markStart('whitepage');
    speed.markStart('domready');
    // 初始化埋点
    tdw.configPage({ page: 'wangka_mini' });
    tdw.report({
      action: 'pageview',
    });
    this.checkPhone();
  },
  onReady() {
    speed.mark('pageOnReady');
    speed.markEnd('whitepage');
    // 测速上报
  },
  onShareAppMessage() {
    const shareConfig = {
      title: '王卡专享课程礼包',
      path: '/pages/wangka/wangka',
    };
    const { share } = this.data;
    if (share) {
      if (share.url) {
        shareConfig.imageUrl = `https:${share.url.replace('https?:', '')}`;
      }
      if (share.shareTitle) {
        shareConfig.title = share.shareTitle;
      }
    }
    return shareConfig;
  },
  onShow() {
    this.fetchData();
  },
  // 设置是否是iphonex
  checkPhone() {
    try {
      // eslint-disable-next-line no-sync
      const res = wx.getSystemInfoSync();
      const { model, system } = res;
      const isIPX = model.includes('iPhone X');
      const isIOS = /ios|iphone/.test(system.toLocaleLowerCase());
      setGlobalData('isIPX', isIPX);
      this.setData({ isIPX, isIOS });
      this.setNavigation(res, { isIPX, isIOS });
    } catch (err) {
      badjs.info(`【王卡】getSystemInfo失败, msg: ${err && String(err)}`);
    }
  },
  // 设置导航相关信息
  setNavigation(res, globalData) {
    const boundingClientRect = getMenuButtonBoundingClientRect(res, globalData);
    if (!res.statusBarHeight) {
      res.statusBarHeight = 20;
    }
    // 状态栏高度, 导航高度, 页面的padding高度
    const titleHeight = boundingClientRect.height + (boundingClientRect.top - res.statusBarHeight) * 2;
    setGlobalData({
      statusBarHeight: res.statusBarHeight,
      boundingClientRect,
      titleHeight,
      pagePaddingTop: res.statusBarHeight + titleHeight,
    });
  },
  // 拉取数据
  fetchData() {
    this.setData({ showLoadedFail: false });
    wx.showLoading({
      title: '请稍等',
    });
    DB.getSasData().then(res => {
      monitor.report(34523624);
      wx.hideLoading();
      const { headerImg, courseFree, courseMix, footerImg, share } = res;
      if (headerImg && courseFree && courseMix) {
        const infos = this.composeData(headerImg, courseFree, courseMix);
        this.setData({
          infos,
          footerImg,
          share,
        }, () => {
          speed.markEnd('domready');
          speed.report('22251-1-5');
        });
        if (share && share.title) {
          wx.setNavigationBarTitle({
            title: share.title,
          });
        }
      }
    }).catch((err) => {
      wx.hideLoading();
      badjs.info({
        msg: `【王卡】sas数据获取失败, msg: ${err && String(err)}`,
      });
      monitor.report(34523629);
      this.setData({ showLoadedFail: true });
      wx.showToast({
        title: err.errMsg || '请求免费课程数据失败',
        icon: 'none',
      });
    });
  },

  // 数据加上分类标签
  addType(data = [], type) {
    return data && data.map(item => {
      item.type = type;
      if (item.courses) {
        item.courses = this.removeInvalidCourse(item.courses, type);
      }
      return item;
    });
  },

  // 过滤掉无效的课程数据
  removeInvalidCourse(course = [], courseType) {
    course = course.filter(item => item.name && item.cover_url);
    const originCookies = storage.get(courseType);
    if (originCookies) {
      course = course.map(item => {
        if (originCookies.indexOf(item.cid) >= 0) {
          item.btnText = courseType === 'courseMix' ? '开始上课' : '立即学习';
        }
        return item;
      });
    }
    return course;
  },

  // 数据聚合并排序
  composeData(headerImg, courseFree, courseMix) {
    headerImg = this.addType(headerImg, 'headerImg');
    courseFree = this.addType(courseFree, 'courseFree');
    courseMix = this.addType(courseMix, 'courseMix');
    const infos = [].concat(headerImg, courseFree, courseMix).sort((a, b) => a.order - b.order);
    return infos;
  },

  // 登陆成功回调
  onLoginSuccess() {
    this.hideLogin();
  },

  // 显示登陆modal
  showLoginModal() {
    this.setData({ showLogin: true });
  },

  // 隐藏登陆modal
  hideLogin() {
    this.setData({ showLogin: false });
  },
  // 显示绑定手机的弹窗
  showMobileModal(e) {
    const dataset = e.detail;
    this.setData({
      showMobile: true,
    });
    setGlobalData('mobileArgs', { dataset });
  },
  hideMobileModal() {
    this.setData({ showMobile: false });
  },
  // 点击立即绑定回调
  mobileSuccess() {
    this.setData({ showMobile: false });
  },
});
