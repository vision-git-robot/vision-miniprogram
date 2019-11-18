import { badjs, monitor } from '@tencent/imwxutils';
import { wkLogin, wxSetCookie } from '../../utils/imwxutils';

Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    isModal: {
      type: Boolean,
      value: false,
    },
    canClose: {
      type: Boolean,
      value: true,
    },
    visible: {
      type: Boolean,
      value: true,
    },
    loginText: {
      type: String,
      value: '微信登录',
    },
    fromScene: {
      type: String,
      value: null,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
  },
  // lifetimes: {
  //   attached() {
  //     console.log(this.data)
  //   }
  // },
  /**
   * 组件的方法列表
   */
  methods: {
    onLoginTap() {
      // tdw.report({
      //   action: 'click',
      // });
      wx.showLoading({
        title: '登录中',
        mask: true,
      });
      monitor.report(34286218);
      badjs.info({
        msg: '点击登陆, 正常登陆',
      });
      if (!this.loginLock) {
        this.loginLock = true;
        wkLogin()
          .then((res) => {
            const { openid } = res;
            this.loginLock = false;
            wx.hideLoading();
            badjs.info({
              msg: '登陆成功, 正常登陆',
            });
            monitor.report(34286220);
            wx.showToast({
              title: '登录成功',
              icon: 'success',
              duration: 1000,
              mask: true,
              success: () => {
                // 设置openid
                wxSetCookie('openid', openid);
                this.triggerEvent('loginSuccess', openid);
              },
            });
          }, (err) => {
            this.loginLock = false;
            wx.hideLoading();
            badjs.info({
              msg: `登陆失败, 小程序王卡活动页登陆, msg: ${err && err.message}`,
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
      }
    },
    onOverlayTap() {
      const { isModal } = this.data;
      if (isModal) {
        this.triggerEvent('loginCancel');
      }
    },
    onReportEvent(e) {
      this.formId = e.detail.formId;
    },
  },
});
