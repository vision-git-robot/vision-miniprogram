/*
 * @Author: eliyuan
 * @Email: eliyuan@tencent.com
 * @Date: 2019-08-12 14:58:07
 * @LastEditors: eliyuan
 * @LastEditTime: 2019-08-13 15:39:07
 */
import { getGlobalData } from '../../utils/helper';

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showBack: {
      type: Boolean,
      value: true,
    },
    showHome: {
      type: Boolean,
      value: true,
    },
    title: {
      type: String,
      value: '腾讯课堂',
    },
    bgColor: {
      type: String,
      value: '#fff',
    },
    // 是否需要padding，沉浸式页面传入false
    needPadding: {
      type: Boolean,
      value: true,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    statusBarHeight: 0,
    titleHeight: 0,
  },

  lifetimes: {
    ready() {
      const { statusBarHeight, titleHeight, boundingClientRect, pagePaddingTop } = getGlobalData();
      this.setData({
        statusBarHeight, titleHeight, boundingClientRect, pagePaddingTop,
      });
      const { showHome, showBack } = this.data;
      let titleMargin = 5;
      if (showHome && showBack) {
        titleMargin = 5;
      } else if (showHome || showBack) {
        titleMargin = 49;
      } else {
        titleMargin = 102;
      }
      this.setData({ titleMargin });
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goBack() {
      const pageStackLength = getCurrentPages().length;
      if (pageStackLength > 1) {
        wx.navigateBack({ delta: 1 });
      } else {
        this.goHome();
      }
    },
    // 返回首页
    goHome() {
      wx.switchTab({
        url: '/pages/index/index',
      });
    },
  },
});
