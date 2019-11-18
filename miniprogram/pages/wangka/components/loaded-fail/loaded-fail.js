Component({
  externalClasses: ['cnt-cls'],
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    text: {
      type: String,
      value: '加载失败 请轻触重试',
    },
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    onTap() {
      this.triggerEvent('loadedFailTap');
    },
  },
});
