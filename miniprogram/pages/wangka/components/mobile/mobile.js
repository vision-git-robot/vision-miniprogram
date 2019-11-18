import { monitor, badjs, storage } from '@tencent/imwxutils';
import DB from '../../utils/DB';
import { app, getGlobalData, setGlobalData } from '../../utils/helper';

Component({
  externalClasses: ['cnt-cls'],
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    visible: {
      type: Boolean,
      value: false,
    },
    title: {
      type: String,
      value: '提示',
    },
    content: {
      type: String,
      value: '绑定手机号，领取王卡用户专享权益',
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 取消弹层
    onOverlayTap() {
      this.triggerEvent('mobileCancel');
    },
    // 绑定手机号确认按钮点击后用户授权回调
    bindMobile(res) {
      // if (res.detail.errMsg && /fail/.test(res.detail.errMsg)) {
      const { encryptedData, iv } = res.detail;
      if (!(encryptedData && iv)) {
        this.triggerEvent('mobileCancel');
      } else {
        // 用户授权成功
        // 调后台接口，获取手机号，并绑定手机号
        this.getUserPhone(res.detail);
        this.triggerEvent('mobileSuccess');
      }
    },
    // 获取手机号
    getUserPhone(res) {
      // 获取手机号成功后绑定手机号
      const { encryptedData, iv } = res;
      const openid = storage.get('openid') || getGlobalData().openid;
      wx.showLoading({
        title: '请稍等',
        mask: true,
      });
      DB.getUserPhone({ openid, encryptedData, iv })
        .then((result = {}) => {
          const { phoneNumber, countryCode, decryptStatus, bindStatus, bindStatement } = result;
          wx.hideLoading();
          if (decryptStatus === 0) {
            monitor.report(34523707);
            setGlobalData('phoneInfo', { phoneNumber, countryCode, bindStatus, bindStatement });
            const { mobileArgs } = getGlobalData();
            if (app.bus && mobileArgs) {
              const { dataset } = mobileArgs;
              app.bus.$emit('triggerGetCourse', { dataset, phoneInfo: result });
            } else {
              wx.showToast({
                title: '手机号获取成功',
                icon: 'none',
              });
            }
          } else {
            monitor.report(34523708);
            wx.showModal({
              title: '提示',
              content: '手机号获取失败，请重试',
            });
          }
        }).catch(err => {
          monitor.report(34523708);
          badjs.info({
            msg: `【王卡】手机号获取失败, msg: ${err && String(err)}`,
          });
          wx.hideLoading();
          wx.showModal({
            title: '提示',
            content: err.Msg || '手机号获取失败，请重试！',
          });
        });
    },
  },
});
