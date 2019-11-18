Component({
  externalClasses: ['cnt-cls'],
  /**
   * 组件的属性列表
   */
  properties: {
    visible: {
      type: Boolean,
      value: false,
      observer: 'transitionVisible',
    },
    duration: {
      type: Number,
      value: 250,
    },
    type: {
      type: String,
    },
    visibleStyle: {
      type: String,
    },
    invisibleStyle: {
      type: String,
    },
  },

  data: {
    animationData: null,
    isRender: false,
    isVisibleStyle: false,
  },
  attached() {
    const { visible } = this.properties;
    this.setData({ isVisibleStyle: visible });
  },
  /**
   * 组件的方法列表
   */
  methods: {
    /** 设置组件显示隐藏 */
    setVisible(visible) {
      this.transitionVisible(visible, this.properties.visible);
    },
    transitionVisible(newVisible, oldVisible) {
      if (newVisible === oldVisible) {
        return;
      }
      const { type, visibleStyle, invisibleStyle, duration } = this.properties;
      if (visibleStyle && invisibleStyle) {
        if (newVisible) {
          // 先使得wx:if为true 再播放动画
          this.setData({ isRender: newVisible });
          wx.nextTick(() => {
            this.setData({ isVisibleStyle: newVisible });
          });
        } else {
          // 先播放动画 再使得wx:if为false
          this.setData({ isVisibleStyle: newVisible }, () => {
            setTimeout(() => this.setData({ isRender: newVisible }), duration);
          });
        }
      } else if (type) {
        // 使用内置默认动画
        const animationData = this.getAnimation(type, newVisible);
        if (newVisible) {
          // 先使得wx:if为true 再播放动画
          this.setData({ isRender: newVisible }, () => {
            this.setData({ animationData });
          });
        } else {
          // 先播放动画 再使得wx:if为false
          this.setData({ animationData }, () => {
            setTimeout(() => this.setData({ isRender: newVisible }), duration);
          });
        }
      }
    },
    getAnimation(type, visible) {
      if (!this.animation) {
        this.createAnimation();
      }
      this.animation.opacity(visible ? 1 : 0);
      switch (type) {
        case 'opacity':
          return this.animation.step().export();
        case 'left':
          return this.animation.translateX(visible ? 0 : -400).step().export();
        case 'right':
          return this.animation.translateX(visible ? 0 : 400).step().export();
        case 'top':
          return this.animation.translateY(visible ? 0 : -800).step().export();
        case 'bottom':
          return this.animation.translateY(visible ? 0 : 800).step().export();
        default: // 默认用opacity
          this.animation.export();
          return null;
      }
    },
    createAnimation() {
      const { duration } = this.properties;
      this.animation = wx.createAnimation({
        duration,
        timingFunction: 'ease',
      });
    },
  },
});
