import { badjs } from '@tencent/imwxutils';

export const app = getApp({ allowDefault: true }) || {};

export function getGlobalData() {
  if (!app.globalData) {
    app.globalData = {};
  }
  return app.globalData;
}

export function setGlobalData(key, value) {
  const globalData = getGlobalData();
  if (typeof key === 'string') {
    globalData[key] = value;
  }
  if (typeof key === 'object') {
    Object.keys(key).forEach(item => {
      globalData[item] = key[item];
    });
  }
  return globalData;
}

export function getStore() {
  return app.globalData.store;
}

/**
 * 数字补零
 * @param {number} x
 */
export function fillZero(x) {
  return `${x < 10 ? '0' : ''}${x}`;
}

let diffTime = 0; // 默认秒差

/** 当前时间戳，单位s */
export function currentTime() {
  return parseInt(Date.now() / 1000, 10) + diffTime;
}

/**
 * 根据服务器时间，计算秒差
 * @param {number} seconds 秒数
 */
export function setSvrTime(seconds) {
  diffTime = seconds - parseInt(Date.now() / 1000, 10);
}

/**
 * 格式化日期为字符串
 * @param  {Date/string} date    日期
 * @param  {String}    format    格式化的字符串，如"yyyyMMddhhmmss"、"yyyy-MM-dd"等
 * @return {[type]}                [description]
 */
export function formatDate(date, format) {
  if (!date) {
    return '';
  }
  if (typeof date === 'string') {
    date = new Date(date.replace(/-/g, '/'));
  }
  format = format || 'yyyy-MM-dd';

  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3), // quarter
    S: date.getMilliseconds(),
  };
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (`${date.getFullYear()}`).substr(4 - RegExp.$1.length));
  }
  for (const k in o) {if (new RegExp(`(${k})`).test(format)) { format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : (`00${o[k]}`).substr((`${o[k]}`).length)); }} // eslint-disable-line
  return format;
}

/**
* 获取文件后缀
* @param {string} fileUrl
*/
export function getFileExt(fileUrl) {
  if (!fileUrl) {
    return '';
  }
  const ret = fileUrl.match(/\.([\w]+)$/);
  if (ret && ret.length > 1) {
    return ret[1];
  }
  return '';
}

/**
 *
 * 按位与
 * @param {number} bitsA
 * @param {number} bitsB
 */
export function bitsAnd(bitsA, bitsB) {
  return !!(bitsA & bitsB); // eslint-disable-line
}

/**
 *
 * 如果某位是1，则为true，否则为false
 * @param {number} bitFlag
 * @param {number} index
 */
// 如果某位是1，则为true，否则为false
export function checkBitFlag(bitFlag, index) {
  return bitsAnd(bitFlag, 1 << index); // eslint-disable-line
}

/**
 * @param {any} obj 要检查的对象
 * @returns {boolean} 如果是普通对象，则为True
 */
export function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return false;
  }
  let proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

export function objToQuery(params) {
  return Object.keys(params)
    .filter(k => params[k] || params[k] === 0)
    .map(k => `${k}=${params[k]}`)
    .join('&');
}

export function queryToObj(params) {
  const result = {};
  if (params) {
    params.split('&').forEach((param) => {
      const kv = param.split('=');
      result[kv[0]] = kv[1];
    });
  }
  return result;
}

export function getCurrPageQuery() {
  const pages = getCurrentPages(); // 获取加载的页面
  const currentPage = pages[pages.length - 1]; // 获取当前页面的对象
  return currentPage.options || {}; // 如果要获取url中所带的参数可以查看options
}

/**
 * 获取胶囊坐标
 * @param {Object} getSystemInfo返回值
 * @param {Object} globalData app lanuch 里获取不到getApp，这种场景需要传入globalData
 * */
export function getMenuButtonBoundingClientRect(systemInfo, globalData) {
  if (!(systemInfo && systemInfo.statusBarHeight)) {
    // eslint-disable-next-line no-sync
    systemInfo = wx.getSystemInfoSync() || {};
  }
  if (!globalData) {
    globalData = getGlobalData() || {};
  }
  let boundingClientRect = {};
  let { statusBarHeight = 20, screenWidth } = systemInfo;
  try {
    boundingClientRect = wx.getMenuButtonBoundingClientRect() || {};
  } catch (err) {
    badjs.error(`王卡: boundingClientRect获取异常: ${err}`);
    boundingClientRect = {};
  }
  let { left: boundLeft, top: boundTop, height: boundHeight } = boundingClientRect;
  if (!boundLeft || boundLeft <= 160) {
    if (!screenWidth) {
      if (globalData.isIPX) {
        screenWidth = 350;
      } else {
        screenWidth = 320;
      }
    }
    // 胶囊宽度
    const boundWidth = globalData.isIOS ? 87 : 96;
    boundLeft = screenWidth - boundWidth - 10;
    boundingClientRect.left = boundLeft;
    boundingClientRect.width = boundWidth;
    boundingClientRect.right = screenWidth - 10;
  }
  if (!boundTop || boundTop <= 20) {
    // 状态栏高度加上间隙
    if (globalData.isIOS) {
      boundTop = statusBarHeight + 6;
    } else {
      boundTop = statusBarHeight + 8;
    }
    boundingClientRect.top = boundTop;
  }
  if (!boundHeight || boundHeight <= 30 || boundHeight > 40) {
    boundHeight = 32;
    boundingClientRect.height = boundHeight;
  }
  boundingClientRect.bottom = boundHeight + boundTop;
  return boundingClientRect;
}
