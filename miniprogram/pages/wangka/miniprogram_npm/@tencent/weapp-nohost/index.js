// components/nohost/index.js
const W_CGI_GET_LIST = 'https://HOST/...whistle-path.5b6af7b9884e1165...///whistle.nohost/cgi-bin/list';
const W_CGI_SELECT = 'https://HOST/...whistle-path.5b6af7b9884e1165...///whistle.nohost/cgi-bin/select';

function getCurrentPage() {
  const currentPages = getCurrentPages();
  if (currentPages.length > 0) {
    return currentPages[currentPages.length - 1];
  }
  return null;
}

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    host: String,
  },

  /**
   * 组件的初始数据
   */
  data: {
    show: false,
    showTips: false,
    left: '20px',
    top: '400px',
    tips: '',
    showList: false,
    title: '',
    step: 1,
    list: [],
    selectIdx: -1,
    isOnline: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    showStepOne() {
      const { name = '正式环境', envName } = this.cur;

      let selectIdx = -1;
      const list = this.list.map((item, idx) => {
        if (name === item.name) {
          selectIdx = idx;
        }
        return `${item.name}${name === item.name ? `(${envName})` : ''}`;
      });
      this.setData({
        step: 1,
        title: `当前环境: ${name}${name !== '正式环境' ? ` / ${envName}` : ''}`,
        isOnline: name === '正式环境',
        selectIdx,
        list,
      });
    },
    showStepTwo() {
      const { envName } = this.cur;
      const { name, envList } = this.curItem;

      let selectIdx = -1;
      const list = envList.map(({ name: itemName }, idx) => {
        if (envName === itemName) {
          selectIdx = idx;
        }
        return itemName;
      });
      this.setData({
        step: 2,
        title: `返回用户列表 / ${name}`,
        selectIdx,
        list,
      });
    },
    onTapNavBtn() {
      this.setData({
        showList: !this.data.showList,
      });
    },
    onTapNavItem(e) {
      const { idx } = e.target.dataset;
      const { step } = this.data;

      if (step === 1) {
        this.curItem = this.list[idx];
        this.showStepTwo();
      } else {
        const { name, id } = this.curItem.envList[idx];
        this.cur = {
          name: this.curItem.name,
          envName: name,
          id,
        };
        this.selectEnv();
        this.setData({
          showList: false,
        });
      }
    },
    onTapTitle() {
      const { step } = this.data;

      if (step === 2) {
        this.showStepOne();
      }
    },
    onTapMask() {
      this.setData({
        showList: false,
      });
    },
    onTouchStart(e) {
      if (this.data.showList) {
        return;
      }

      this.startX = e.touches[0].clientX;
      this.startY = e.touches[0].clientY;
      this.startLeft = parseInt(this.data.left, 10);
      this.startTop = parseInt(this.data.top, 10);
    },
    onTouchMove(e) {
      if (this.data.showList) {
        return;
      }

      const { clientX, clientY } = e.touches[0];
      const left = `${clientX - this.startX + this.startLeft}px`;
      const top = `${clientY - this.startY + this.startTop}px`;
      this.setData({
        left,
        top,
      });
    },
    showTips() {
      const { name = '正式环境', envName } = this.cur;

      this.setData({
        tips: `当前环境: ${name}${name !== '正式环境' ? ` / ${envName}` : ''}`,
        showTips: true,
      });

      setTimeout(() => {
        this.setData({
          showTips: false,
        });
      }, 1500);
    },
    selectEnv() {
      const { name, id } = this.cur;

      wx.request({
        url: W_CGI_SELECT.replace('HOST', this.data.host || 'ke.qq.com'),
        data: {
          name,
          envId: id,
          time: Date.now(),
        },
        success: (res) => {
          const { errMsg, statusCode } = res;
          console.log('nohost select succ:', res);
          if (errMsg === 'request:ok' && statusCode === 200) {
            this.showTips();
            this.showStepOne();
            this.triggerEvent('select', this.cur);

            // reload page
            const p = getCurrentPage();
            if (p.onLoad) {
              p.onLoad(p.options || {});
            }
          }
        },
        fail: (e) => {
          console.log('nohost select fail:', e);
        },
      });
    },
    onTapOnline() {
      this.cur = {
        name: '正式环境',
        envName: '正式环境',
        id: '正式环境',
      };
      this.selectEnv();
      this.setData({
        showList: false,
      });
    },
  },

  lifetimes: {
    created() {
      wx.getSystemInfo({
        success: ({ windowHeight }) => {
          setTimeout(() => {
            this.setData({
              top: `${windowHeight - 40 - 40}px`,
            });
          }, 100);
        },
      });
      wx.request({
        url: W_CGI_GET_LIST.replace('HOST', this.data.host || 'ke.qq.com'),
        success: (res) => {
          const { errMsg, statusCode, data: { curEnv, list } = {} } = res;
          console.log('nohost get list succ:', res);
          if (errMsg === 'request:ok' && statusCode === 200 && list) {
            this.cur = curEnv;
            this.showTips();

            this.list = list;
            this.showStepOne();

            this.setData({
              show: true,
            });
          } else {
            this.setData({
              show: false,
            });
          }
        },
        fail: (e) => {
          console.log('nohost get list fail:', e);
          this.setData({
            show: false,
          });
        },
      });
    },
  },
});
