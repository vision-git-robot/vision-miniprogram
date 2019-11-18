module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.middlewares = exports.request = undefined;

var _cookie = __webpack_require__(8);

Object.keys(_cookie).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _cookie[key];
    }
  });
});

var _request = __webpack_require__(9);

var _request2 = _interopRequireDefault(_request);

var _compose = __webpack_require__(10);

var _compose2 = _interopRequireDefault(_compose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middlewares = [];

// 1. cookie 插件
var useCookie = function useCookie(ctx, next) {
  if (ctx.req.useCookie) {
    var cookieStr = (0, _cookie.getCookieStr)();
    if (cookieStr) {
      ctx.req.header.Cookie = cookieStr;
    }
  }
  // 回写 set-cookie 头
  return next().then(function (res) {
    if (ctx.req.useCookie && ctx.req.enableSetCookie) {
      var setCookieHeader = res.header['set-cookie'] || '';
      // 这里的 , 号分隔很奇怪，已经反馈给微信方
      // 示例 test=,whistle_nohost_env=edu;
      // Expires=Thu, 15 Nov 2018 05:13:12 GMT; Max-Age=259200; Path=/; Domain=.qq.com
      var cookies = setCookieHeader.split(/,(?!\s)/).map(function (str) {
        return str.split(/;\s*/).reduce(function (acc, cur, i) {
          var _cur$split = cur.split('='),
              k = _cur$split[0],
              v = _cur$split[1];

          if (i === 0) {
            acc.key = k;
            acc.value = v;
          } else {
            acc[k] = v;
          }
          return acc;
        }, {});
      });
      cookies.forEach(function (cookie) {
        (0, _cookie.setCookie)(cookie.key, cookie.value);
      });
    }
    return res;
  });
};

// 2. loading 插件
var useLoadingText = function useLoadingText(ctx, next) {
  if (ctx.req.loadingText) {
    wx.showLoading({
      title: ctx.req.loadingText
    });
  }
  var hide = function hide() {
    if (ctx.req.loadingText) {
      wx.hideLoading();
    }
  };
  return next().then(function (res) {
    hide();
    return res;
  }).catch(function (err) {
    hide();
    return Promise.reject(err);
  });
};

middlewares.push(useCookie, useLoadingText);

var request = function request(req) {
  var defaultOptions = {
    timeout: 5000,
    useCookie: true, // 开启 cookie 插件
    enableSetCookie: false, // 关闭 set-cookie 回写
    loadingText: false, // 关闭 loading 插件
    header: { 'content-type': 'application/x-www-form-urlencoded' }
  };
  var ctx = { req: Object.assign({}, defaultOptions, req), res: {} };
  return (0, _compose2.default)(middlewares)(ctx, function () {
    return (0, _request2.default)(ctx.req).then(function (res) {
      ctx.res = res;
      return res;
    });
  });
};

exports.request = request;
exports.middlewares = middlewares;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/* eslint-disable no-bitwise */
/* eslint-disable no-extend-native */
if (!String.prototype.padStart) {
  // String.prototype.padStart() polyfill
  String.prototype.padStart = function padStart(targetLength, padString) {
    targetLength >>= 0; // floor if number or convert non-number to 0;
    padString = String(typeof padString !== 'undefined' ? padString : ' ');
    if (this.length > targetLength) {
      return String(this);
    }

    targetLength -= this.length;
    if (targetLength > padString.length) {
      // append to original to ensure we are longer than needed
      padString += padString.repeat(targetLength / padString.length);
    }
    return padString.slice(0, targetLength) + String(this);
  };
}

/**
 * DJB Hash 算法，又称 time33
 * @param {String} 待 hash 的字符串
 */
function time33(str) {
  if (!str) {
    return '';
  }
  var hash = 5381;
  for (var i = 0, len = str.length; i < len; i += 1) {
    hash += (hash << 5) + str.charAt(i).charCodeAt();
  }
  return hash & 0x7fffffff;
}

/**
 * 格式化时间戳，默认格式为'Y-m-d'.
 * Y - 4位数字完整表示的年份,
 * y - 2位数字表示的年份,
 * m - 数字表示的月份，有前导零
 * d - 月份中的第几天，有前导零的 2 位数字,
 * H - 小时，24 小时格式，有前导零,
 * h - 小时，12 小时格式，有前导零,
 * i - 有前导零的分钟数,
 * s - 秒数，有前导零,
 * @param {number} timestamp 时间戳
 * @param {string} [format=Y-m-d] 格式字符串，自动替换字符串中的字符
 */
function formatTime(timestamp) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Y-m-d';

  var parsedTimestamp = String(timestamp).length === 10 ? timestamp * 1000 : timestamp;
  var date = new Date(parsedTimestamp);
  var times = {
    Y: String(date.getFullYear()),
    y: String(date.getFullYear()).substr(-2),
    m: String(date.getMonth() + 1).padStart(2, 0),
    d: String(date.getDate()).padStart(2, 0),
    H: String(date.getHours()).padStart(2, 0),
    h: String((date.getHours() + 11) % 12 + 1).padStart(2, 0),
    i: String(date.getMinutes()).padStart(2, 0),
    s: String(date.getSeconds()).padStart(2, 0)
  };
  var replaceExp = /[YymdHhis]/g;
  return format.replace(replaceExp, function (c) {
    return times[c];
  });
}

/**
 * 将小程序接口转换成 promise 形式
 * @param {Object} api 小程序接口
 */
function promisify(api) {
  return function (options) {
    for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      params[_key - 1] = arguments[_key];
    }

    return new Promise(function (resolve, reject) {
      api.apply(undefined, [Object.assign({}, options, { success: resolve, fail: reject })].concat(params));
    });
  };
}

/**
 * 一段时间后执行的 promise
 * @param {Number} ms 延迟的毫秒数
 */
function delay(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

/**
 * 将query解析为键值对
 * @param {string} query
 * @return {Object} parsedQuery
 */
function parseQuery(query) {
  var str = decodeURIComponent(query || '');
  return str.split('&').reduce(function (acc, cur) {
    var _cur$split = cur.split('='),
        k = _cur$split[0],
        v = _cur$split[1];

    if (k) {
      acc[k] = v;
    }
    return acc;
  }, {});
}

// 从url解析出各个部分
function parseUrl(url) {
  var parser = /^(?:((?:[A-Za-z]+):)?(?:\/{2})([0-9.\-A-Za-z:]+))?(\/(?:[^?#]*))?(?:\?([^#]*))?(#.*)?$/;
  var res = parser.exec(url);
  var fields = ['url', 'protocol', 'host', 'path', 'query', 'hash'];
  return fields.reduce(function (prev, field, i) {
    if (res[i]) {
      prev[field] = res[i];
    }
    return prev;
  }, {});
}

/**
 * 获取带query的页面url
 * @param {object} page getCurrentPages页面栈中的对象
 */
function getPageUrlWithQuery(page) {
  var url = '';
  if (page.options) {
    var query = Object.keys(page.options).map(function (key) {
      return key + '=' + page.options[key];
    }).join('&');
    url = query.length ? page.route + '?' + query : page.route;
  } else {
    url = page.route;
  }
  return url;
}

var sysinfoRes = wx.getSystemInfoSync();

/**
 * 判断是否QQ轻应用环境
 */
function isQQ() {
  var AppPlatform = sysinfoRes.AppPlatform;

  return AppPlatform && AppPlatform.toLowerCase() === 'qq';
}

exports.formatTime = formatTime;
exports.time33 = time33;
exports.promisify = promisify;
exports.delay = delay;
exports.parseQuery = parseQuery;
exports.parseUrl = parseUrl;
exports.getPageUrlWithQuery = getPageUrlWithQuery;
exports.isQQ = isQQ;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var configs = {
  url: 'https://ke.qq.com/cgi-bin/activity_platform/tdw/report',
  slicer: 6, // 异步过程中，如果数据量过大，请求参数就会过长，这个时候应该分片上报，默认 6 个/片
  asyncTime: 300, // 异步上报的时间间隔
  debug: false
};
var basicData = {};
var basicOption = {};

// 由传入data解析出上报的fields
function getReportFields(data) {
  var keys = {};
  // basicData的keys
  Object.keys(basicData).forEach(function (k) {
    keys[k] = 1;
  });
  // 传入data的keys
  data.forEach(function (item) {
    Object.keys(item).forEach(function (k) {
      keys[k] = 1;
    });
  });
  return Object.keys(keys);
}

// 由传入data解析出上报的fields和对应的datas
function getReportFieldsAndDatas(data) {
  var fields = getReportFields(data);
  var datas = data.map(function (item) {
    return fields.map(function (key) {
      return item[key] === undefined ? '' : item[key];
    });
  });
  return {
    fields: fields,
    datas: datas
  };
}

// 组合自定义option和basicOption
function getReportOption(option) {
  if ((typeof option === 'undefined' ? 'undefined' : _typeof(option)) !== 'object') {
    return Object.assign({}, basicOption);
  }
  return Object.assign({}, basicOption, option);
}

// 组合自定义data和basicData
function getReportData(data) {
  return Object.assign({}, basicData, data);
}

/**
 * 发起上报请求
 * @param {array} data 需要上报的数据字段，异步上报时可能有多项
 * @param {object} option 其他配置选项
 */
function __report(data, option) {
  if ((typeof option === 'undefined' ? 'undefined' : _typeof(option)) !== 'object') {
    option = {};
  }
  var _option = option,
      _option$table = _option.table,
      table = _option$table === undefined ? '' : _option$table,
      _option$pr_ip = _option.pr_ip,
      pr_ip = _option$pr_ip === undefined ? '' : _option$pr_ip,
      _option$pr_t = _option.pr_t,
      pr_t = _option$pr_t === undefined ? '' : _option$pr_t; // eslint-disable-line

  if (!Array.isArray(data)) {
    return Promise.reject(new Error('参数错误'));
  }

  var _getReportFieldsAndDa = getReportFieldsAndDatas(data),
      fields = _getReportFieldsAndDa.fields,
      datas = _getReportFieldsAndDa.datas;

  if (configs.debug) {
    // QQ轻应用会报错
    // console.table([fields, ...datas]);
  }
  return new Promise(function (resolve, reject) {
    return wx.request({
      url: configs.url,
      method: 'GET',
      data: {
        table: table,
        pr_ip: pr_ip,
        pr_t: pr_t,
        fields: fields,
        datas: datas
      },
      success: function success(res) {
        if (res.data.ret !== 0 && res.data.retcode !== 0) {
          reject(res);
          return;
        }
        resolve(res);
      },
      fail: function fail(err) {
        reject(err);
      }
    });
  }).catch(function (err) {
    console.log(err);
  });
}

var Pool = {
  cache: [],
  add: function add(data) {
    this.cache.push(data);
  },

  // 批量上报， 将pool中缓存的内容全部上报
  batchReport: function batchReport() {
    for (var i = 0; i < this.cache.length; i += configs.slicer) {
      __report(this.cache.slice(i, i + configs.slicer), basicOption);
    }
    this.cache = [];
    this.timer = null;
  }
};

/**
 * 基础配置
 * @param {object} data 基础的上报字段
 * @param {object} option tdw上报的其他字段(包括table, pr_id, pr_t)
 *                        以及配置上报方式configs的url, slicer, asyncTimer等
 */
function config(data, option) {
  if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object' || (typeof option === 'undefined' ? 'undefined' : _typeof(option)) !== 'object') {
    return;
  }
  Object.assign(basicData, data);
  Object.assign(basicOption, option);
  Object.assign(configs, option);
}

function reconfig(data, option) {
  basicData = data;
  basicOption = option;
  Object.assign(configs, option);
}

// 异步上报
function report(data) {
  var reportData = getReportData(data);
  if (!Pool.timer) {
    Pool.timer = setTimeout(function () {
      Pool.batchReport();
    }, configs.asyncTime);
  }
  Pool.add(reportData);
}

// 同步上报
function reportSync(data) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object') {
    return Promise.reject(new Error('参数错误'));
  }
  var reportData = getReportData(data);
  var reportOption = getReportOption(option);
  // 同步上报时data只有一项，放入array中传入
  return __report([reportData], reportOption);
}

exports.report = report;
exports.reportSync = reportSync;
exports.config = config;
exports.reconfig = reconfig;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.TDW_REFER_FIELDS = exports.TDW_DEFAULT_FIELDS = undefined;
exports.getRandomUin = getRandomUin;
exports.getUrlWithQuery = getUrlWithQuery;
exports.getCurrentPage = getCurrentPage;
exports.getPreviousPage = getPreviousPage;
exports.setCurrentPageField = setCurrentPageField;
exports.parseFrom = parseFrom;

var _utils = __webpack_require__(1);

/**
 * 获取一个随机的 uin，8位
 */
function getRandomUin() {
  return ('' + Math.random()).substring(2, 10);
}

/**
 * 返回某一页带query的url
 * @param {Object} page getCurrentPages()中获得的page对象
 */
function getUrlWithQuery(page) {
  var url = '';
  if (page.options) {
    var query = Object.keys(page.options).map(function (key) {
      return key + '=' + page.options[key];
    }).join('&');
    url = query.length ? page.route + '?' + query : page.route;
  } else {
    url = page.route;
  }
  return url;
}

var TDW_DEFAULT_FIELDS = exports.TDW_DEFAULT_FIELDS = '__tdw_default_fields__';
var TDW_REFER_FIELDS = exports.TDW_REFER_FIELDS = '__tdw_refer_fields__';

function getCurrentPage() {
  var currentPages = getCurrentPages();
  if (currentPages.length > 0) {
    return currentPages[currentPages.length - 1];
  }
  return null;
}

function getPreviousPage() {
  var currentPages = getCurrentPages();
  if (currentPages.length > 1) {
    return currentPages[currentPages.length - 2];
  }
  return null;
}

function setCurrentPageField(data, field) {
  var currentPage = getCurrentPage();
  if (currentPage) {
    currentPage[field] = Object.assign({}, currentPage[field] || {}, data);
  }
}

function parseFrom(query, field) {
  var from = void 0;
  if (query[field]) {
    // 进入页面的path中query带有field
    from = query[field];
  } else if (query.q) {
    // 生成普通链接二维码打开小程序，链接在query.q中，从中解析出真实的query
    var uri = decodeURIComponent(query.q);
    if (uri.indexOf('?') > 0) {
      var uriQuery = uri.split('?')[1].split('#')[0];
      from = (0, _utils.parseQuery)(uriQuery)[field];
    }
  } else if (query.scene) {
    // 生成B型二维码，query在query.scene中
    from = (0, _utils.parseQuery)(query.scene)[field];
  }
  return from;
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var defaultOptions = {
  scope: 'userInfo',
  title: '获取权限失败',
  content: '是否打开设置页，手动开启对应权限',
  guideToSetting: true
};

var noPopupAuthList = ['userInfo'];

/**
 * 用于判断、请求用户权限及引导用户打开设置页授权
 * @param {object} userOptions
 * @param {string} userOptions.scope
 * @param {string=} userOptions.title
 * @param {string=} userOptions.content
 * @param {boolean=} userOptions.guideToSetting
 * @return {boolean} 最终授权结果
 */
var authorize = function authorize(userOptions) {
  var options = Object.assign({}, defaultOptions, userOptions);
  var scope = options.scope,
      guideToSetting = options.guideToSetting;

  // Q: 为什么这里不用async/await？
  // A: wx.openSetting放在promise.then中就会调用失败了QAQ坑
  // 流程:
  // 1、判断是否已经授权
  // 2、没有则请求授权
  // 3、请求授权失败（拒绝过）则showmodal指引打开setting
  // 4、modal被confirm后openSetting
  // 5、打开setting后再判断是否已授权
  // 6、resolve(授权结果);

  return new Promise(function (resolve) {
    wx.getSetting({
      // 1
      success: function success(res) {
        if (!res.authSetting['scope.' + scope]) {
          // 2
          // 排除必须要opentype button的权限
          if (noPopupAuthList.indexOf(scope) > -1) {
            resolve(false);
          }

          wx.authorize({
            scope: 'scope.' + scope,
            success: function success() {
              resolve(true);
            },
            fail: function fail() {
              // 3
              if (guideToSetting) {
                var title = options.title,
                    content = options.content;

                wx.showModal({
                  title: title,
                  content: content,
                  success: function success(_ref) {
                    var confirm = _ref.confirm;

                    if (confirm) {
                      // 4
                      wx.openSetting({
                        success: function success(sRes) {
                          if (sRes.authSetting['scope.' + scope]) {
                            // 5
                            // 权限生效属于异步操作，留点 timeout
                            setTimeout(function () {
                              resolve(true);
                            }, 100);
                          } else {
                            resolve(false);
                          }
                        },
                        fail: function fail() {
                          resolve(false);
                        }
                      });
                    } else {
                      resolve(false);
                    }
                  },
                  fail: function fail() {
                    // 安卓下某些版本modal取消归为fail
                    resolve(false);
                  }
                });
              }
            }
          });
        } else {
          // 已经授权了
          resolve(true);
        }
      },
      fail: function fail() {
        resolve(false);
      }
    });
  });
};

exports.default = authorize;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.badjs = exports.authorize = exports.speed = exports.monitor = exports.mmReport = exports.tdw = undefined;

var _index = __webpack_require__(6);

Object.keys(_index).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _index[key];
    }
  });
});

var _index2 = __webpack_require__(0);

Object.keys(_index2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _index2[key];
    }
  });
});

var _index3 = __webpack_require__(11);

Object.keys(_index3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _index3[key];
    }
  });
});

var _index4 = __webpack_require__(14);

Object.keys(_index4).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _index4[key];
    }
  });
});

var _utils = __webpack_require__(1);

Object.keys(_utils).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _utils[key];
    }
  });
});

var _authorize = __webpack_require__(4);

Object.defineProperty(exports, 'authorize', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_authorize).default;
  }
});

var _badjs = __webpack_require__(16);

Object.defineProperty(exports, 'badjs', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_badjs).default;
  }
});

var _index5 = __webpack_require__(17);

var tdw = _interopRequireWildcard(_index5);

var _mmReport = __webpack_require__(20);

var mmReport = _interopRequireWildcard(_mmReport);

var _monitor = __webpack_require__(21);

var monitor = _interopRequireWildcard(_monitor);

var _speed = __webpack_require__(22);

var speed = _interopRequireWildcard(_speed);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.tdw = tdw;
exports.mmReport = mmReport;
exports.monitor = monitor;
exports.speed = speed;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.Storage = exports.storage = undefined;

var _storage = __webpack_require__(7);

var _storage2 = _interopRequireDefault(_storage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storage = new _storage2.default({ namespace: 'global' });

exports.storage = storage;
exports.Storage = _storage2.default;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Storage = function () {
  /**
   * Storage 构造函数
   * @param {String} options.namespace 命名空间
   */
  function Storage() {
    var _this = this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$namespace = _ref.namespace,
        namespace = _ref$namespace === undefined ? 'temp' : _ref$namespace;

    _classCallCheck(this, Storage);

    this.namespace = '__storage__/' + namespace + '/';
    this.cache = Object.create(null);

    var _wx$getStorageInfoSyn = wx.getStorageInfoSync(),
        keys = _wx$getStorageInfoSyn.keys;

    if (Object.prototype.toString.call(keys) === '[object Array]') {
      this.cache = keys.filter(function (k) {
        return k.indexOf(_this.namespace) > -1;
      }).reduce(function (acc, cur) {
        acc[cur.replace(_this.namespace, '')] = undefined;
        return acc;
      }, this.cache);
    }
  }

  Storage.prototype.has = function has(key) {
    return Object.prototype.hasOwnProperty.call(this.cache, key);
  };

  Storage.prototype.clear = function clear() {
    var _this2 = this;

    Object.keys(this.cache).forEach(function (key) {
      return _this2.remove(key);
    });
  };

  Storage.prototype.remove = function remove(key) {
    if (this.has(key)) {
      wx.removeStorageSync('' + this.namespace + key);
      delete this.cache[key];
    }
  };

  Storage.prototype.get = function get(key) {
    if (this.has(key)) {
      var value = this.cache[key];
      if (value === undefined) {
        var data = wx.getStorageSync('' + this.namespace + key);
        this.cache[key] = data;
        return data;
      }
      return value;
    }
    return undefined;
  };

  Storage.prototype.set = function set(key, data) {
    if (key === undefined || data === undefined) {
      throw new Error('STORAGE_ERROR_SET_UNDEFINED_DISALLOWED');
    } else {
      // TODO: 预留操作符，等哪位有能力的后生来实现 eg: storage.set('a.b[0].c',1)
      if (/[[]/.test(key)) {
        throw new Error('STORAGE_ERROR_SET_BRACKET_NOT_SUPPORTED');
      }
      if (/\./.test(key)) {
        var _key$split = key.split('.'),
            root = _key$split[0],
            first = _key$split[1],
            rest = _key$split.slice(2);
        // 只支持一个层级


        if (rest.length > 0) {
          throw new Error('STORAGE_ERROR_SET_MUTIL_DOT_NOT_SUPPORTED');
        } else {
          var rootData = this.get(root);
          rootData[first] = data;
          this.set(root, rootData);
        }
      } else {
        try {
          this.cache[key] = data;
          wx.setStorageSync('' + this.namespace + key, data);
        } catch (err) {
          throw new Error('STORAGE_ERROR_SET_FAIL:' + err.message);
        }
      }
    }
  };

  return Storage;
}();

exports.default = Storage;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/* eslint-disable no-sync */
var STORAGE_KEY_COOKIE = '__request__cookie__';

/**
 * 返回 cookie 头字符串
 * @returns {String}
 */
function getCookieStr() {
  return wx.getStorageSync(STORAGE_KEY_COOKIE);
}

/**
 * 返回解析后的 cookie 键值对对象
 * @returns {Object}
 */
function getCookieJar() {
  var cookieStr = getCookieStr();
  return cookieStr.split(';').filter(function (s) {
    return s;
  }).reduce(function (acc, cur) {
    var _cur$split = cur.split('='),
        k = _cur$split[0],
        v = _cur$split[1];

    acc[k] = v;
    return acc;
  }, {});
}

/**
 * 写 cookie 包
 * @param {String|Object} sessionObj 传入的字符串或对象
 */
function setCookieJar(sessionObj) {
  var cookieStr = sessionObj;
  if (typeof sessionObj !== 'string') {
    cookieStr = Object.keys(sessionObj).map(function (k) {
      return k + '=' + sessionObj[k];
    }).join(';');
  }
  wx.setStorageSync(STORAGE_KEY_COOKIE, cookieStr);
}

/**
 * 取 cookie 值
 * @param {String} key cookie 键名
 * @returns {String}
 */
function getCookie(key) {
  var cookieJar = getCookieJar();
  return cookieJar[key] || '';
}

/**
 * 写 cookie 值
 * @param {String} key cookie 键名
 * @param {String} value 值
 */
function setCookie(key, value) {
  var cookieJar = getCookieJar();
  if (key) {
    cookieJar[key] = value;
    setCookieJar(cookieJar);
  }
}

exports.getCookie = getCookie;
exports.setCookie = setCookie;
exports.getCookieStr = getCookieStr;
exports.setCookieJar = setCookieJar;
exports.getCookieJar = getCookieJar;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**
 *
 * @param {Object} option 发起请求的配置对象
 * @param {String} option.url 请求 url
 * @param {String} option.method 请求 method
 * @param {Object} option.data 请求 data，无需序列化
 * @param {Object} option.header 请求 header
 * @param {Object} option.timeout 请求超时时间
 */
function request(option) {
  var url = option.url,
      method = option.method,
      data = option.data,
      header = option.header,
      timeout = option.timeout;

  var client = void 0;
  return new Promise(function (resolve, reject) {
    var timer = void 0;
    if (timeout > 0) {
      timer = setTimeout(function () {
        reject(new Error('REQUEST_ERROR_TIMEOUT:' + timeout));
        client.abort();
      }, timeout);
    }
    client = wx.request({
      url: url,
      data: data,
      method: method,
      header: header,
      success: function success(res) {
        var statusCode = res.statusCode;

        if (statusCode >= 200 && statusCode <= 209) {
          resolve(res);
        } else {
          reject(new Error('REQUEST_ERROR_SERVER:' + statusCode));
        }
      },
      fail: function fail(err) {
        console.log('fail', err);
        wx.getNetworkType({
          success: function success(_ref) {
            var networkType = _ref.networkType;

            reject(new Error('REQUEST_ERROR_NETWORK:' + networkType));
          },
          fail: function fail() {
            reject(new Error('REQUEST_ERROR_NETWORK:unknown'));
          }
        });
      },
      complete: function complete() {
        clearTimeout(timer);
      }
    });
  });
}

exports.default = request;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**
 * Compose `middleware` returning
 * a fully valid middleware comprised
 * of all those which are passed.
 *
 * @param {Array} middleware
 * @return {Function}
 * @api public
 */

function compose(middleware) {
  if (!Array.isArray(middleware)) {
    throw new TypeError('Middleware stack must be an array!');
  }
  middleware.forEach(function (fn) {
    if (typeof fn !== 'function') {
      throw new TypeError('Middleware must be composed of functions!');
    }
  });

  /**
   * @param {Object} context
   * @return {Promise}
   * @api public
   */

  return function _compose(context, next) {
    var index = -1;
    function dispatch(i) {
      if (i <= index) {
        return Promise.reject(new Error('next() called multiple times'));
      }
      index = i;
      var fn = middleware[i];
      if (i === middleware.length) {
        fn = next;
      }
      if (!fn) {
        return Promise.resolve();
      }
      try {
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
      } catch (err) {
        return Promise.reject(err);
      }
    }
    return dispatch(0);
  };
}

exports.default = compose;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isLogin = exports.login = undefined;

var _runtimeModule = __webpack_require__(12);

var _runtimeModule2 = _interopRequireDefault(_runtimeModule);

var _utils = __webpack_require__(1);

var _authorize = __webpack_require__(4);

var _authorize2 = _interopRequireDefault(_authorize);

var _index = __webpack_require__(0);

var _index2 = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } // eslint-disable-line

// QQ轻应用登录


var wxGetUserInfo = (0, _utils.promisify)(wx.getUserInfo);
var wxLogin = (0, _utils.promisify)(wx.login);

var MINICO = null;
var wxLoginRequest = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_runtimeModule2.default.mark(function _callee(opt) {
    var loginCgi, appid, buzid, scene, _ref2, code, userInfoRes, signature, rawData, iv, encryptedData, requestData;

    return _runtimeModule2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            loginCgi = opt.loginCgi, appid = opt.appid, buzid = opt.buzid, scene = opt.scene;
            // 2. 获取微信端登录票据，如果这两个 API 调用顺序调转，会出现 326 报错

            _context.next = 3;
            return wxLogin();

          case 3:
            _ref2 = _context.sent;
            code = _ref2.code;
            _context.next = 7;
            return wxGetUserInfo();

          case 7:
            userInfoRes = _context.sent;
            signature = userInfoRes.signature, rawData = userInfoRes.rawData, iv = userInfoRes.iv, encryptedData = userInfoRes.encryptedData;
            requestData = {
              signature: signature,
              rawData: rawData,
              iv: iv,
              encryptedData: encryptedData,
              code: code,
              appid: appid,
              buzid: buzid
            };

            // pc扫码actid

            if (scene) {
              Object.assign(requestData, {
                actid: scene
              });
            }

            // 3. 调用登录接口
            return _context.abrupt('return', (0, _index.request)({
              url: loginCgi,
              data: requestData,
              loadingText: '登录中'
            }).then(function (res) {
              var _res$data = res.data,
                  retcode = _res$data.retcode,
                  result = _res$data.result,
                  msg = _res$data.msg;

              if (retcode === 0) {
                (0, _index.setCookieJar)(result);
                return result;
              }
              var errMsg = msg || 'LOGIN_ERROR_RETCODE';
              return Promise.reject(new Error(errMsg + ':' + retcode));
            }));

          case 12:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function wxLoginRequest(_x) {
    return _ref.apply(this, arguments);
  };
}();

var qqLoginRequest = function qqLoginRequest(appid) {
  wx.showLoading({
    title: '登录中'
  });
  return MINICO.login().then(function (result) {
    // 如果token过期
    // if (new Date().getTime() > result.expire) {
    //   try {
    //     result = await MINICO.login();
    //   } catch (err) {
    //     wx.hideLoading();
    //     return Promise.reject(new Error(`LOGIN_ERROR_RETCODE:${err.retcode}`));
    //   }
    // }
    wx.hideLoading();
    var token = result.minico_token,
        openid = result.openid,
        uid_uin = result.uid,
        expire = result.expire;

    (0, _index.setCookieJar)({ token: token,
      openid: openid,
      uid_uin: uid_uin,
      uid_type: 1005,
      appid: appid,
      expire: expire
    });
    return result;
    // }
  }, function (err) {
    wx.hideLoading();
    return Promise.reject(new Error('LOGIN_ERROR_RETCODE:' + err.retcode));
  });
};

var sendLoginRequest = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_runtimeModule2.default.mark(function _callee2(_ref3) {
    var _ref3$loginCgi = _ref3.loginCgi,
        loginCgi = _ref3$loginCgi === undefined ? 'https://ke.qq.com/cgi-bin/uidaccount/wx_smallapp_login_auth' : _ref3$loginCgi,
        _ref3$appid = _ref3.appid,
        appid = _ref3$appid === undefined ? '' : _ref3$appid,
        _ref3$buzid = _ref3.buzid,
        buzid = _ref3$buzid === undefined ? 0 : _ref3$buzid,
        _ref3$scene = _ref3.scene,
        scene = _ref3$scene === undefined ? null : _ref3$scene;
    return _runtimeModule2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!appid) {
              if (wx.getAccountInfoSync) {
                appid = wx.getAccountInfoSync().miniProgram.appId;
              } else {
                console.warn('login 组件未设置 appid，且基础库不支持 wx.getAccountInfoSync 自动获取');
              }
            }
            // 1. 清空登录态
            (0, _index.setCookieJar)('');
            //  微信登录

            if ((0, _utils.isQQ)()) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt('return', wxLoginRequest({
              loginCgi: loginCgi,
              appid: appid,
              buzid: buzid,
              scene: scene
            }));

          case 4:
            // QQ轻应用登录
            MINICO = (0, _index2.MiniCo)({
              // 必填，小程序 appid
              appid: appid,
              // 必填，业务域名，MiniCo 服务请求通过该域名发送
              domain: 'h5.qzone.qq.com',
              // 选填，有设置name的话，登录鉴权时会把name作为uin上报log，可以染色name看问题
              name: 'Edu',
              // 选填，QQ小程序传入qq，微信小程序不传
              platform: 'qq',
              // 选填，登录业务代理支持透传业务数据
              // extra: { text: 'abc' },
              // 选填，websocket心跳间隔，无论是微信还是QQ，客户端都对socket有超时限制（目前是30s）
              // 所以不设置的话，没有数据交换超30秒就会自动断开（不过之后的数据请求还会自动重新发起连接）
              heartBeat: 20000,
              // 选填，是否开启调试模式，默认不开启。开启时请求协议为 http | ws 以便于代理抓包，不开启时为 https | wss
              debug: false
            });
            return _context2.abrupt('return', qqLoginRequest(appid));

          case 6:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function sendLoginRequest(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

var login = function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_runtimeModule2.default.mark(function _callee3() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var hasRight;
    return _runtimeModule2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return (0, _authorize2.default)({
              scope: 'userInfo',
              title: '获取用户信息失败',
              content: '是否打开设置页，允许小程序使用您的用户信息'
            });

          case 2:
            hasRight = _context3.sent;

            if (hasRight) {
              _context3.next = 5;
              break;
            }

            return _context3.abrupt('return', Promise.reject(new Error('LOGIN_ERROR_DENY')));

          case 5:
            return _context3.abrupt('return', sendLoginRequest(options));

          case 6:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function login() {
    return _ref5.apply(this, arguments);
  };
}();

/**
 * loginType: 0：微信，1：QQ轻应用
 */
var isLogin = function isLogin() {
  if (!(0, _utils.isQQ)()) {
    var session = (0, _index.getCookie)('openid');
    return !!session;
  }
  var openid = (0, _index.getCookie)('openid');
  var token = (0, _index.getCookie)('token');
  var isExpire = new Date().getTime() > (0, _index.getCookie)('expire');
  return !!openid && !!token && !isExpire;
};

exports.login = login;
exports.isLogin = isLogin;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function request(option) {
    return new Promise(function (resolve, reject) {
        var setting = {
            url: option.url,
            success: function success(res) {
                resolve(res);
            },
            fail: function fail(res) {
                reject(res);
            }
        };
        if (option.data) {
            setting.data = option.data;
        }
        if (option.header) {
            setting.header = option.header;
        }
        if (option.method) {
            setting.method = option.method;
        }
        if (option.protocols) {
            setting.protocols = option.protocols;
        }
        //发起网络请求
        if (option.mode === 'socket') {
            wx.connectSocket(setting);
        } else {
            wx.request(setting);
        }
    });
}

//为解耦不用util.formatTime
function formatTime(date, milli) {
    date = date || new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();

    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var milliseconds = date.getMilliseconds();

    return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':') + (milli ? '.' + milliseconds : '');
}

function formatNumber(n) {
    n = n.toString();
    return n[1] ? n : '0' + n;
}

// module.exports = (function () {
var logData = [];
var lastTime = void 0;
var timer = void 0;
var heartBeatInterval = void 0;
var Module = function Module(option) {
    var self = this;

    this.option = option || {};
    this.status = 0;
    this.logining = false;
    this.loginQueue = [];
    this.socketMap = {};
    this.listener = {
        'open': {
            'map': {},
            'queue': []
        },
        'connect': {
            'map': {},
            'queue': []
        },
        'message': {
            'map': {},
            'queue': []
        },
        'push': {
            'map': {},
            'queue': []
        },
        'close': {
            'map': {},
            'queue': []
        },
        'error': {
            'map': {},
            'queue': []
        }
    };
    this.formIdList = [];

    wx.onSocketOpen(function (res) {
        self.status = 101;
        self.log('socket open');
        self.emit('open', res);
    });
    wx.onSocketError(function (res) {
        self.status = 600;
        rejectAll();
        self.log('socket error, res: ' + JSON.stringify(res));
        self.emit('error', res);
    });
    wx.onSocketMessage(function (res) {
        var data = void 0;
        try {
            data = JSON.parse(res.data);
        } catch (e) {
            // do nothing
        }

        if (data) {
            //心跳pong检测
            if (data.probe) {
                if (data.type === 'pong') {
                    self.log('socket pong frame receive');
                }
                return;
            }
            if (data.ret === -3000 || data.ret === -3001 || data.ret === -3002 || data.ret === -3003) {
                //票据无效，重新登录
                self.log('socket connect token out of date, res: ' + res.data);
                self.login().then(function () {
                    if (!self.retry) {
                        self.log('minico relogin');
                        self.retry = true;
                        self.connect().then(function () {}, rejectAll);
                    } else {
                        self.retry = false;
                        rejectAll();
                    }
                }, rejectAll);
            } else {
                if (data.seq === 'connect') {
                    //鉴权通过，发起请求
                    self.status = 200;
                    for (var key in self.socketMap) {
                        self.socketMap[key].param.token = self.token;
                        self.message(self.socketMap[key].param);
                    }
                    //发送心跳ping
                    if (self.option.heartBeat) {
                        heartBeatInterval && clearInterval(heartBeatInterval);
                        heartBeatInterval = setInterval(function () {
                            self.message({
                                'probe': true,
                                'type': 'ping'
                            });
                        }, self.option.heartBeat);
                    }
                    self.log('socket connect success, res: ' + res.data + ', end: ' + formatTime(new Date(), true));
                    self.emit('connect', data);
                } else if (data.seq === 'push') {
                    self.log('socket data push received, res: ' + res.data);
                    self.emit('push', data);
                } else if (data.seq && self.socketMap[data.seq]) {
                    //数据请求响应
                    if (data.ret === 0) {
                        self.socketMap[data.seq].resolve(data);
                    } else {
                        self.socketMap[data.seq].reject(data);
                    }
                    delete self.socketMap[data.seq];
                    self.log( true ? res.data.substr(0, 200) + '...' : undefined);
                    self.emit('message', data);
                } else {
                    self.log('socket message unprocessed branch, res: ' + JSON.stringify(res));
                    self.emit('error', data);
                }
            }
        } else {
            self.log('socket message parse error, res: ' + res.data);
            self.emit('error', res);
        }
    });
    wx.onSocketClose(function (res) {
        self.status = 300;
        heartBeatInterval && clearInterval(heartBeatInterval);
        self.log('socket close, res: ' + JSON.stringify(res));
        self.emit('close', res);
    });

    function rejectAll(res) {
        for (var key in self.socketMap) {
            self.socketMap[key].reject(res);
            delete self.socketMap[key];
        }
        self.log('minico socket request fail, res: ' + JSON.stringify(res));
    }

    self.log('minico config success: ' + JSON.stringify(option));
};

Module.prototype.getLoginInfo = function () {
    var self = this;

    return new Promise(function (resolve, reject) {
        if (self.token) {
            //登录票据已存在
            self.log('login wx.checkSession success');
            resolve(self.token);
        } else {
            //无登录票据，检查本地缓存
            try {
                self.token = wx.getStorageSync('minico_data');
            } catch (e) {
                self.log('get storage fail, error: ' + e);
            }
            if (self.token) {
                self.log('login wx.checkSession success, storage exist');
                resolve(self.token);
            } else {
                self.log('login wx.checkSession success, token empty, get login token');
                self.login().then(resolve, reject);
            }
        }
    });
};

Module.prototype.login = function () {
    var self = this;
    var url = (self.option.debug ? 'http:' : 'https:') + '//' + self.option.domain + '/minico/oauth20';

    return new Promise(function (resolve, reject) {
        self.loginQueue.push({
            resolve: resolve,
            reject: reject
        });
        self.log('login wx.login queue, length: ' + self.loginQueue.length);
        if (self.logining) {
            return;
        }
        self.logining = true;
        wx.login({
            success: function success(res) {
                if (res.code) {
                    //发起网络请求
                    self.log('login wx.login success, request minico login');
                    request({
                        url: url + '?uin=' + self.option.name,
                        data: {
                            code: res.code,
                            appid: self.option.appid,
                            platform: self.option.platform || 'wx',
                            extra: self.option.extra
                        },
                        method: 'POST'
                    }).then(function (res_oauth) {
                        var result = (res_oauth || {}).data || {};
                        if (result.retcode === 0) {
                            self.token = result.data;
                            try {
                                wx.setStorageSync('minico_data', self.token);
                            } catch (e) {
                                self.log('set storage fail, error: ' + e);
                            }
                            self.log('oauth success');
                            handlerLoginQueue(true, self.token);
                        } else {
                            //鉴权失败
                            self.log('oauth fail, retcode: ' + (result.retcode || res_oauth.statusCode));
                            handlerLoginQueue(false, res_oauth);
                        }
                    }, function (res_oauth) {
                        self.log(url + ' failed! res: ' + JSON.stringify(res_oauth));
                        handlerLoginQueue(false, {
                            'retcode': 100020,
                            'retmsg': res_oauth
                        });
                    });
                } else {
                    self.log('login wx.login success, code empty');
                    handlerLoginQueue(false, {
                        'retcode': 100021,
                        'retmsg': res
                    });
                }
            },
            fail: function fail(res) {
                self.log('login wx.login failed');
                handlerLoginQueue(false, {
                    'retcode': 100022,
                    'retmsg': res
                });
            }
        });

        function handlerLoginQueue(status, result) {
            for (var _iterator = self.loginQueue, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
                var _ref;

                if (_isArray) {
                    if (_i >= _iterator.length) break;
                    _ref = _iterator[_i++];
                } else {
                    _i = _iterator.next();
                    if (_i.done) break;
                    _ref = _i.value;
                }

                var task = _ref;

                if (status) {
                    task.resolve(result);
                } else {
                    task.reject(result);
                }
            }
            self.loginQueue = [];
            self.logining = false;
        }
    });
};

Module.prototype.webapp = function (param) {
    var self = this;
    return new Promise(function (resolve, reject) {
        if (typeof param.withCredentials === 'undefined' || param.withCredentials) {
            //登录态校验
            self.getLoginInfo().then(function (token) {
                //发起网络请求
                send(token);
            }, function (res) {
                reject(res);
            });
        } else {
            send();
        }

        function send(token) {
            self.log('webapp ' + param.protocol + '/' + param.name + ' send, openid: ' + token.openid + ', uid: ' + (token.uid ? token.uid : ''));
            var url = (self.option.debug ? 'http:' : 'https:') + '//' + self.option.domain + '/minico/json/' + param.protocol + '/' + param.name;
            var data = param.data;
            var header = {
                Cookie: 'minico_appid=' + self.option.appid
            };
            if (token) {
                header.Cookie += '; minico_token=' + token.minico_token + '; minico_openid=' + token.openid + (token.uid ? '; minico_uid=' + token.uid : '');
            }
            request({
                url: url + '?uin=' + (token.uid || token.openid || self.option.name),
                data: data,
                header: header,
                method: param.method || 'POST'
            }).then(function (result) {
                var res = (result || {}).data || {};
                if (res.ret === -3000 || res.ret === -3001 || res.ret === -3002 || res.ret === -3003) {
                    self.login().then(function () {
                        self.webapp(param).then(resolve, reject);
                    }, reject);
                } else {
                    resolve(result);
                }
            }, function (res) {
                reject(res);
            });
        }
    });
};

Module.prototype.upload = function (param) {
    var self = this;
    return new Promise(function (resolve, reject) {
        if (typeof param.withCredentials === 'undefined' || param.withCredentials) {
            //登录态校验
            self.getLoginInfo().then(function (token) {
                //发起网络请求
                send(token);
            }, function (res) {
                reject(res);
            });
        } else {
            send();
        }

        function send(token) {
            var url = (self.option.debug ? 'http:' : 'https:') + '//' + self.option.domain + '/minico/upload/' + param.protocol + '/' + param.name;
            url = url + '?uin=' + (token.uid || token.openid);
            var header = {
                Cookie: 'minico_appid=' + self.option.appid
            };
            if (token) {
                header.Cookie += '; minico_token=' + token.minico_token + '; minico_openid=' + token.openid + (token.uid ? '; minico_uid=' + token.uid : '');
            }
            self.log('minico upload, url: ' + url);
            wx.uploadFile({
                url: url,
                filePath: param.filePath,
                name: param.fileField,
                header: header,
                formData: param.data,
                success: function success(res) {
                    if (res && res.statusCode === 200 && res.errMsg === 'uploadFile:ok') {
                        if (typeof res.data === 'string') {
                            try {
                                res.data = JSON.parse(res.data);
                            } catch (e) {
                                // do nothing
                            }
                        }
                        if (res.data.ret === 0) {
                            resolve(res);
                        } else if (res.data.ret === -3000 || res.data.ret === -3001 || res.data.ret === -3002 || res.data.ret === -3003) {
                            self.login().then(function () {
                                self.upload(param).then(resolve, reject);
                            }, reject);
                        } else {
                            reject(res);
                        }
                    } else {
                        reject(res);
                    }
                },
                fail: function fail(res) {
                    reject(res);
                }
            });
        }
    });
};

Module.prototype.connect = function () {
    var self = this;

    //置为1防止重复connect
    self.status = 1;
    self.log('minico connect start: ' + formatTime(new Date(), true));
    return new Promise(function (resolve, reject) {
        //登录态校验
        self.getLoginInfo().then(function (token) {
            //发起websocket请求
            self.log('getLoginInfo success, token: ' + JSON.stringify(token));
            send(token);
        }, function (res) {
            reject(res);
        });

        function send(token) {
            var url = (self.option.debug ? 'ws:' : 'wss:') + '//' + self.option.domain + '/minico/ws?seq=' + new Date().getTime() + (Math.random() * 9999).toFixed(0);
            var header = {
                Cookie: 'minico_appid=' + self.option.appid
            };
            if (token) {
                header['x-client-proto'] = 'https';
                if (token.uid) {
                    header['minico-uid'] = token.uid;
                }
                header.Cookie += '; minico_token=' + token.minico_token + '; minico_openid=' + token.openid + (token.uid ? '; minico_uid=' + token.uid : '');
            }
            self.log('socket connect request sent, header: ' + JSON.stringify(header));
            request({
                url: url + '&uin=' + (self.option.name || token.uid || token.openid),
                header: header,
                mode: 'socket'
            }).then(function (res) {
                if (res.errMsg === 'connectSocket:ok') {
                    self.status = 100;
                    resolve(res);
                } else {
                    self.status = 400;
                    reject(res);
                }
                self.log('socket connect respond, res: ' + JSON.stringify(res));
            }, function (res) {
                self.status = 500;
                reject(res);
                self.log('socket connect request fail, res: ' + JSON.stringify(res));
            });
        }
    });
};

Module.prototype.socket = function (param) {
    var self = this;

    return new Promise(function (resolve, reject) {
        //消息包序列号
        var seq = new Date().getTime() + (Math.random() * 9999).toFixed(0);
        param.seq = seq;
        self.socketMap[seq] = {
            param: param,
            resolve: resolve,
            reject: reject
        };

        self.log('minico.socket new message in queue, seq: ' + seq);

        if (self.status === 200) {
            self.message(param);
        } else if (self.status === 0 || self.status === 300) {
            handler();
        } else if (self.status === 1 || self.status === 100 || self.status === 101) {
            //正在连接中，等待就行，连接成功后，会从socketMap队列中重新发请求
        } else {
            wx.closeSocket({
                code: 1000, //1000是正常关闭
                reason: 'socket close to reconnect',
                success: handler,
                fail: handler
            });
        }

        function handler() {
            self.connect().then(function () {}, function (res) {
                for (var key in self.socketMap) {
                    self.socketMap[key].reject(res);
                    delete self.socketMap[key];
                }
            });
        }
    });
};

Module.prototype.message = function (param) {
    var self = this;

    wx.sendSocketMessage({
        data: JSON.stringify(param),
        success: function success() {},
        fail: function fail(res) {
            if (self.socketMap[param.seq]) {
                self.socketMap[param.seq].reject(res);
                delete self.socketMap[param.seq];
            }
        }
    });
};

Module.prototype.rebuild = function (param) {
    var self = this;

    return new Promise(function (resolve, reject) {
        if (self.status === 101 || self.status === 200) {
            //先把旧的关掉
            wx.closeSocket();
        }
        //重登录
        self.login().then(function () {
            //重连socket
            self.socket(param).then(resolve, reject);
        }, reject);
    });
};

Module.prototype.on = function (eventType, key, handler) {
    if (!eventType) {
        this.log('minico.on no event type specify');
        return;
    }
    if (typeof key === 'function') {
        handler = key;
        key = null;
    }
    if (key) {
        this.listener[eventType]['map'][key] = handler;
    } else {
        this.listener[eventType]['queue'].push(handler);
    }
};

Module.prototype.off = function (eventType, key) {
    if (!eventType) {
        this.log('minico.off no event type specify');
        return;
    }
    if (key) {
        delete this.listener[eventType]['map'][key];
    } else {
        this.listener[eventType]['map'] = {};
        this.listener[eventType]['queue'] = [];
    }
};

Module.prototype.emit = function (eventType, respond) {
    var map = this.listener[eventType]['map'];
    var queue = this.listener[eventType]['queue'];

    for (var key in map) {
        if (typeof map[key] === 'function') {
            map[key](respond);
        }
    }

    for (var i = 0, len = queue.length; i < len; i++) {
        if (typeof queue[i] === 'function') {
            queue[i](respond);
        }
    }
};

Module.prototype.log = function (str) {
    var pages = getCurrentPages();
    var currentPage = ' [' + (pages && pages.length ? pages[pages.length - 1].route : 'app') + '] ';
    str = (typeof str === 'undefined' ? 'undefined' : _typeof(str)) === 'object' ? JSON.stringify(str) : str;
    logData.push(formatTime(new Date()) + currentPage + ' : ' + str);
    console.log(currentPage + str);
};

Module.prototype.report = function () {
    var self = this;
    var logCgi = (this.option.debug ? 'http:' : 'https:') + '//' + this.option.domain + '/log/post/' + this.option.appid;
    var now = +new Date();
    var timeout = lastTime && now - lastTime < 3000 ? 3000 - now + lastTime : 0;
    var userId = void 0;
    try {
        logData.push('openid: ' + ((self.token || {}).openid || 'none'));
        logData.push(JSON.stringify(wx.getSystemInfoSync()));
    } catch (e) {
        // do nothing
    }

    userId = (self.token || {}).openid || this.option.appid;
    send();

    function send() {
        timer && clearTimeout(timer);
        timer = setTimeout(function () {
            wx.request({
                url: logCgi + '?uin=' + (self.option.name || userId),
                method: 'POST',
                dataType: 'json',
                data: logData.join('\n'),
                header: {
                    'Content-Type': 'text/html; charset=UTF-8'
                }
            });
            logData = [];
            lastTime = +new Date();
        }, timeout);
    }
};

Module.prototype.record = function (id) {
    if (id && id !== 'the formId is a mock one') {
        this.log('set form id: ' + id);
        this.formIdList.push({
            formid: id,
            time: new Date().getTime()
        });
    }
};

Module.prototype.submit = function () {
    var self = this;
    var url = (this.option.debug ? 'http:' : 'https:') + '//' + self.option.domain + '/minico/record';
    var userId = (this.token || {}).openid || this.option.appid;

    return new Promise(function (resolve, reject) {
        if (self.formIdList.length) {
            self.getLoginInfo().then(function (token) {
                var header = {
                    Cookie: 'minico_appid=' + self.option.appid
                };
                if (token) {
                    header.Cookie += '; minico_token=' + token.minico_token + '; minico_openid=' + token.openid + (token.uid ? '; minico_uid=' + token.uid : '');
                }
                //发起网络请求
                request({
                    url: url + '?uin=' + (self.option.name || userId),
                    data: {
                        formid: self.formIdList
                    },
                    header: header,
                    method: 'POST'
                }).then(function () {
                    self.formIdList = [];
                    self.log('submit form id, count: ' + self.formIdList.length);
                    resolve();
                }, function (result) {
                    self.log('submit form id fail, res: ' + JSON.stringify(result));
                    reject();
                });
            }, function (res) {
                self.log('submit form id fail, openid deficiency, res: ' + JSON.stringify(res));
                reject();
            });
        } else {
            reject();
        }
    });
};

var MiniCo = function MiniCo(option) {
    return new Module(option);
};
exports.MiniCo = MiniCo;
// }
// })()

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.EventEmitter = exports.bus = undefined;

var _emitter = __webpack_require__(15);

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bus = new _emitter2.default();

exports.bus = bus;
exports.EventEmitter = _emitter2.default;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventEmitter = function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this.listenerMap = {};
  }

  EventEmitter.prototype.$emit = function $emit(type, payload) {
    var callbacks = this.listenerMap[type] || [];
    callbacks.forEach(function (e) {
      // console.log(type, payload)
      e.callback.call(e.context, payload);
    });
  };

  EventEmitter.prototype.$on = function $on(type, handler, context) {
    this.listenerMap[type] = this.listenerMap[type] || [];
    this.listenerMap[type].push({
      callback: handler,
      context: context
    });
  };

  EventEmitter.prototype.$off = function $off(type, handler) {
    if (handler) {
      this.listenerMap[type] = this.listenerMap[type].filter(function (e) {
        return e.callback !== handler;
      });
    } else {
      this.listenerMap[type] = [];
    }
  };

  return EventEmitter;
}();

exports.default = EventEmitter;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _index = __webpack_require__(0);

var _utils = __webpack_require__(1);

/**
 * 原本是拼接字符串，由于wx.request支持自动展开data，上报参数全部转为object的形式。避免拼接字符串。
 *
 * 首先需要在小程序控制后台配置可访问地址: https://badjs.qq.com
 * 栗子:
  report.init({
    projectname: '高考改革地区大学专业查询',
    id: 1446
    });
    App({
      ...
      onError:report.onError(error),
      ...
    })
 */

var _error = [];

var _config = {
  uin: 0,
  url: 'https://badjs.qq.com/badjs',
  combo: 1, // 组合上传
  ext: {},
  level: 4, // 1-debug 2-info 4-error 8-fail
  ignore: [], // 忽略的正则或函数
  random: 1, // 上报的概率？
  delay: 100, // 延迟上报，可以合并多个上报
  submit: null,
  projectname: '小程序',
  initPv: true, // 是否在初始化上报 PV，默认上报
  pvMsg: '!#imweb-badjs-pv#!' // pv 上报 msg 字段值
};
var errorList = [];
var comboTimeout = 0;

function formatStack(stack) {
  return stack.replace(/\n/gi, '').split(/\bat\b/).slice(0, 5).join('@').replace(/\?[^:]+/gi, '');
}
function _processStackMsg(err) {
  var stack = formatStack(err.stack);
  var msg = err.toString();
  if (stack.indexOf(msg) < 0) {
    stack = msg + '@' + stack;
  }
  return stack;
}

function _isOBJ(o) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Object';

  return Object.prototype.toString.call(o) === '[object ' + type + ']';
}

/**
 * 处理一条上报信息， 返回三种形式的上报参数
 * @param {Object} err
 * @param {Number} index
 * @return {Array} 三种形式的参数[combo组合上报的object, 用于判断ignore的字符串, 单独上报的object]
 */
function _processError(err, index) {
  var singleParams = {}; // 单独上报参数
  var comboParams = {}; // combo组合上报参数
  var stringify = []; // 将参数转化成字符串，用于ignore判断
  if (_isOBJ(err)) {
    err.level = err.level || _config.level;
    Object.keys(err).forEach(function (key) {
      var value = err[key] || '';
      if (value) {
        if (_isOBJ(value)) {
          try {
            value = JSON.stringify(value);
          } catch (e) {
            value = '[BJ_REPORT detect value stringify error] ' + e.toString();
          }
        }
        stringify.push(key + ':' + value);
        singleParams[key] = value;
        comboParams[key + '[' + index + ']'] = value;
      }
    });
  }
  return [comboParams, stringify.join(','), singleParams];
}

function _submit(data) {
  if (_config.submit) {
    _config.submit(data);
  } else {
    var uin = (0, _index.getCookie)('uid_uin');
    wx.request({
      url: _config.url,
      data: Object.assign({
        id: _config.id,
        uin: _config.uin || uin || 0,
        ext: _config.ext
      }, data, {
        _t: Date.now()
      }),
      success: function success() {},
      fail: function fail() {}
    });
  }
}

/**
 * 发送上报信息
 * @param {Boolean} isReoprtNow 是否立即上报
 */
function _send(isReoprtNow) {
  if (!_config.id) {
    return;
  }

  while (_error.length) {
    var isIgnore = false;
    var err = _error.shift();
    var errorStr = _processError(err, errorList.length);
    for (var i = 0, l = _config.ignore.length; i < l; i++) {
      var rule = _config.ignore[i];
      if (_isOBJ(rule, 'RegExp') && rule.test(errorStr[1]) || _isOBJ(rule, 'Function') && rule(err, errorStr[1])) {
        isIgnore = true;
        break;
      }
    }
    if (!isIgnore) {
      if (_config.combo) {
        errorList.push(errorStr[0]);
      } else {
        _submit(errorStr[2]);
      }
      if (_config.onReport) {
        _config.onReport(_config.id, err);
      }
    }
  }
  // 合并上报
  var count = errorList.length;
  if (count) {
    var comboReport = function comboReport() {
      clearTimeout(comboTimeout);
      _submit(errorList.reduce(function (prev, cur) {
        return Object.assign({}, prev, cur);
      }, { count: count }));
      comboTimeout = 0;
      errorList = [];
    };

    if (isReoprtNow) {
      comboReport(); // 立即上报
    } else if (!comboTimeout) {
      comboTimeout = setTimeout(comboReport, _config.delay); // 延迟上报
    }
  }
}

function wrapMsg(msg) {
  var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _config.level;

  if (!msg) {
    return null;
  }
  if (msg instanceof Error) {
    // 传入的是Error
    msg = {
      msg: formatStack(msg.message),
      level: level
    };
  } else if (_isOBJ(msg) && msg.msg) {
    // 传入的对象有msg字段
    msg.level = msg.level || level;
  } else {
    // 传入的整个对象作为上报的msg
    msg = {
      msg: msg,
      level: level
    };
  }
  return msg;
}

var _report = {
  init: function init(config) {
    // 初始化
    if (_isOBJ(config)) {
      Object.keys(config).forEach(function (key) {
        _config[key] = config[key];
      });
    }
    // 没有设置id将不上报
    var id = parseInt(config.id, 10);
    if (id || _config.id) {
      config.id = id;
      if (config.uin) {
        _config.uin = parseInt(config.uin, 10);
      }
      if (config.ext) {
        _config.ext = JSON.stringify(config.ext);
      }
      if (config.initPv) {
        _report.pv();
      }
    }
    return _report;
  },
  push: function push(msg) {
    var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _config.level;

    // 将错误推到缓存池
    if (Math.random() >= _config.random) {
      return _report;
    }
    var wrappedMsg = wrapMsg(msg, level);

    var pages = getCurrentPages();
    var route = void 0;
    if (pages.length) {
      route = (0, _utils.getPageUrlWithQuery)(pages[pages.length - 1]);
    } else {
      route = '';
    }

    wrappedMsg.from = _config.projectname + '/' + route;
    _error.push(wrappedMsg);
    _send();
    return _report;
  },
  report: function report(msg) {
    // 立即上报
    if (msg) {
      _report.push(msg);
    }
    _send(true);
    return _report;
  },
  onError: function onError(err) {
    _report.error(err, true);
  },
  error: function error(err) {
    var newMsg = err;
    if (err && err.stack) {
      newMsg = _processStackMsg(err);
    } else if (typeof err === 'string') {
      newMsg = formatStack(err);
    }
    _report.push(newMsg, 4);
    return _report;
  },
  info: function info(msg) {
    _report.push(msg, 2);
    return _report;
  },
  debug: function debug(msg) {
    _report.push(msg, 1);
    return _report;
  },
  pv: function pv() {
    return _report.info(_config.pvMsg);
  }
};

// Page扩展生命周期事件
var originalPage = Page;
Page = function Page(config) {
  var myOnShow = config.onShow;

  config.onShow = function (onShowOptions) {
    // 每次onShow会执行
    _report.pv();
    if (typeof myOnShow === 'function') {
      myOnShow.call(this, onShowOptions);
    }
  };
  return originalPage(config);
};

wx.onError(_report.onError);

exports.default = _report;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.reportSync = exports.report = exports.configSource = exports.configPage = exports.config = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _tdw = __webpack_require__(2);

var _fudao = __webpack_require__(18);

var tdwFudao = _interopRequireWildcard(_fudao);

var _ketang = __webpack_require__(19);

var tdwKetang = _interopRequireWildcard(_ketang);

var _utils = __webpack_require__(3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var KETANG = 'ketang';
var FUDAO = 'fudao';
var tdw = {};
tdw[KETANG] = tdwKetang;
tdw[FUDAO] = tdwFudao;

var rule = KETANG; // 默认为ketang的上报规则，兼容旧的小程序
tdw[rule].basicConfig();

// 上报前对数据预处理
function processData(data) {
  var currentPage = (0, _utils.getCurrentPage)();
  if (!currentPage) {
    return data;
  }

  // 自动获取的上报字段
  var params = tdw[rule].getDefaultParams(data);

  // 如果configPage配置过当前页面的默认上报字段, 也自动上报
  var fields = currentPage[_utils.TDW_DEFAULT_FIELDS];
  if (fields) {
    Object.assign(params, fields);
  }

  // 拼合为最终上报数据
  var reportData = Object.assign({}, params, data);

  // 记录部分数据，作为下一页上报refer相关信息使用
  tdw[rule].recordReferInfo(reportData);

  return reportData;
}

/**
* 基础配置
* @param {object} data 基础的上报字段
* @param {object} option tdw上报的其他字段(包括table, pr_id, pr_t等)以及配置上报方式configs的url, slicer, asyncTimer等
* @param {string} option.rule 'fudao'/'ketang'采用不同的上报规则
* @param {boolean} option.debug 是否开启调试模式，输出上报内容
*/
function config(data, option) {
  if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object' || (typeof option === 'undefined' ? 'undefined' : _typeof(option)) !== 'object') {
    throw new Error('tdw config传参类型错误');
  }
  if (option.rule && option.rule !== rule) {
    if (option.rule === FUDAO || option.rule === KETANG) {
      rule = option.rule;
      tdw[rule].basicConfig();
    }
  }
  (0, _tdw.config)(data, option);
}

/**
 * 给当前的页面绑定需要默认上报的字段
 * 种入页面上下文中
 * @param {string} page
 */
function configPage(fields) {
  (0, _utils.setCurrentPageField)(fields, _utils.TDW_DEFAULT_FIELDS);
}

// 如果不需要自定义field的话也可以不调用
function configSource(data) {
  var field = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'from';

  tdw[rule].configSource(data, field);
}

// 异步上报
function report(data) {
  var reportData = processData(data);
  (0, _tdw.report)(reportData);
}

// 同步上报
function reportSync(data) {
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var reportData = processData(data);
  (0, _tdw.reportSync)(reportData, option);
}

exports.config = config;
exports.configPage = configPage;
exports.configSource = configSource;
exports.report = report;
exports.reportSync = reportSync;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDefaultParams = exports.recordReferInfo = exports.configSource = exports.basicConfig = undefined;

var _index = __webpack_require__(0);

var _tdw = __webpack_require__(2);

var _utils = __webpack_require__(3);

// 记录渠道值
var fromSource = void 0; /* eslint-disable no-sync */

var cookieid = void 0;
var noFromSource = false;

// 固定字段的基础配置
function basicConfig() {
  var platform = 'other';

  var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
      system = _wx$getSystemInfoSync.system,
      _wx$getSystemInfoSync2 = _wx$getSystemInfoSync.AppPlatform,
      AppPlatform = _wx$getSystemInfoSync2 === undefined ? 'wechat' : _wx$getSystemInfoSync2;

  if (system.indexOf('iOS') >= 0) {
    platform = 'ios';
  } else if (system.indexOf('Android') >= 0) {
    platform = 'android';
  }
  (0, _tdw.reconfig)({
    opername: 'fudao.qq.com',
    platform: platform, // 取值： pc,  ios（手机或pad）,  android（手机或pad）， other
    terminal: 'xcx', // xcx小程序
    env: AppPlatform, // 环境信息： qq, weibo, wechat,app,other
    module: ''
  }, {
    // 这里复制了edu_modules
    table: 'dc03920',
    pr_ip: 'userip',
    pr_t: 'event_time'
  });
}

// 在click时注入module，position
function recordReferInfo(data) {
  if (data.event && data.event === 'click') {
    var _data$page = data.page,
        page = _data$page === undefined ? '' : _data$page,
        _data$module = data.module,
        module = _data$module === undefined ? '' : _data$module,
        _data$position = data.position,
        position = _data$position === undefined ? '' : _data$position;

    var fields = {
      page: page,
      module: module,
      position: position
    };
    (0, _utils.setCurrentPageField)(fields, _utils.TDW_REFER_FIELDS);
  }
}

/**
 * 用于上报渠道信息，在App.onLaunch中可以获取
 * 在上报时会自动带上
 * @param {object} options App.onLaunch的入参
 */
function configSource(options) {
  var field = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'from';
  var _options$query = options.query,
      query = _options$query === undefined ? {} : _options$query;

  var from = (0, _utils.parseFrom)(query, field);
  if (from) {
    fromSource = from;
  } else {
    noFromSource = true;
  }
}

/**
 * 获取必填默认字段
 * 包括 url, uid, cookieid, refer, refer_page, refer_module, refer_position, from_source
 * @return {object} params
 */
function getDefaultParams() {
  var params = {};

  var currentPage = (0, _utils.getCurrentPage)();
  // 当前页面的url
  params.url = (0, _utils.getUrlWithQuery)(currentPage);

  // 如果页面栈中多于一个页面，上报refer, refer_page, refer_module, refer_position信息
  var previousPage = (0, _utils.getPreviousPage)();
  if (previousPage) {
    params.refer = (0, _utils.getUrlWithQuery)(previousPage);

    var _ref = previousPage[_utils.TDW_REFER_FIELDS] || {},
        page = _ref.page,
        module = _ref.module,
        position = _ref.position;

    if (page) {
      params.refer_page = page;
    }
    if (module) {
      params.refer_module = module;
    }
    if (position) {
      params.refer_position = position;
    }
  }

  // 用户信息 uid, cookieid
  var uid = (0, _index.getCookie)('uid_uin');
  if (uid) {
    params.uid = uid;
    params.uid_type = 2; // QQ: 1  微信: 2   手机号: 3   未登录: 4
  } else {
    params.uid_type = 4;
  }
  if (!cookieid) {
    cookieid = wx.getStorageSync('tdw_cookieid');
    if (!cookieid) {
      cookieid = (0, _utils.getRandomUin)();
      wx.setStorage({ key: 'tdw_cookieid', data: cookieid });
    }
  }
  params.cookieid = cookieid;

  if (!noFromSource) {
    if (!fromSource) {
      configSource(wx.getLaunchOptionsSync());
    }
    if (fromSource) {
      params.from_source = fromSource;
    }
  }

  return params;
}

exports.basicConfig = basicConfig;
exports.configSource = configSource;
exports.recordReferInfo = recordReferInfo;
exports.getDefaultParams = getDefaultParams;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDefaultParams = exports.recordReferInfo = exports.configSource = exports.basicConfig = undefined;

var _index = __webpack_require__(0);

var _tdw = __webpack_require__(2);

var _utils = __webpack_require__(3);

// 记录渠道值
var sourcetype = void 0; /* eslint-disable no-sync */

var sourcefrom = void 0;
var hasReportedSource = false;

var visitorId = void 0;

// 固定字段的基础配置
function basicConfig() {
  var phonetype = void 0;

  var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
      system = _wx$getSystemInfoSync.system,
      _wx$getSystemInfoSync2 = _wx$getSystemInfoSync.AppPlatform,
      AppPlatform = _wx$getSystemInfoSync2 === undefined ? 'wx' : _wx$getSystemInfoSync2;

  if (system.indexOf('iOS') >= 0) {
    phonetype = 'ios';
  } else if (system.indexOf('Android') >= 0) {
    phonetype = 'android';
  } else {
    phonetype = '';
  }
  (0, _tdw.reconfig)({
    opername: 'edu',
    platform: 7, // 1PC 2H5 3native andriod 4native ios 5PC用户客户端 6PC老师客户端 7小程序
    environment: AppPlatform, // PC为空 H5填取到的app 如edu_APP，如QQ
    phonetype: phonetype // android ios
  }, {
    // 这里复制了edu_modules
    table: 'dc03514',
    pr_ip: 'clientip',
    pr_t: 'reporttime'
  });
}

function recordReferInfo(data) {
  // 在click时注入module，position
  if (data.action && data.action === 'click') {
    var _data$page = data.page,
        page = _data$page === undefined ? '' : _data$page,
        _data$module = data.module,
        module = _data$module === undefined ? '' : _data$module,
        _data$position = data.position,
        position = _data$position === undefined ? '' : _data$position;

    var fields = {
      page: page,
      module: module,
      position: position
    };
    (0, _utils.setCurrentPageField)(fields, _utils.TDW_REFER_FIELDS);
  }
}

/**
 * 用于上报渠道信息，在App.onLaunch中可以获取
 * 在第一次上报pageview时会自动带上
 * @param {object} options App.onLaunch的入参
 */
function configSource(options) {
  var field = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'from';
  var _options$query = options.query,
      query = _options$query === undefined ? {} : _options$query,
      scene = options.scene;

  if (scene) {
    sourcetype = scene;
  }
  var from = (0, _utils.parseFrom)(query, field);
  if (from) {
    sourcefrom = from;
  }
}

/**
 * 获取必填默认字段
 * 包括 url, uin, visitor_id, refer, url_page, url_module, url_positoin, sourcetype, sourcefrom
 * @return {object} params
 */
function getDefaultParams(data) {
  var params = {};

  var currentPage = (0, _utils.getCurrentPage)();
  // 当前页面的url
  params.url = (0, _utils.getUrlWithQuery)(currentPage);

  // 如果页面栈中多于一个页面，上报refer, url_page, url_module, url_position信息
  var previousPage = (0, _utils.getPreviousPage)();
  if (previousPage) {
    params.refer = (0, _utils.getUrlWithQuery)(previousPage);

    var _ref = previousPage[_utils.TDW_REFER_FIELDS] || {},
        page = _ref.page,
        module = _ref.module,
        position = _ref.position;

    if (page) {
      params.url_page = page;
    }
    if (module) {
      params.url_module = module;
    }
    if (position) {
      params.url_position = position;
    }
  }

  // 用户信息 uin, visitorId
  var uin = (0, _index.getCookie)('uid_uin');
  if (uin) {
    params.uin = uin;
  }
  if (!visitorId) {
    visitorId = wx.getStorageSync('tdw_visitor_id');
    if (!visitorId) {
      visitorId = (0, _utils.getRandomUin)();
      wx.setStorage({ key: 'tdw_visitor_id', data: visitorId });
    }
  }
  params.visitor_id = visitorId;

  // 在第一次上报pageview时附带sourcetype和sourcefrom
  if (data.action === 'pageview') {
    if (!hasReportedSource) {
      if (!sourcetype && !sourcefrom) {
        // 若不存在则设置sourcetype和sourcefrom的值
        configSource(wx.getLaunchOptionsSync());
      }
      if (sourcetype) {
        params.sourcetype = sourcetype;
      }
      if (sourcefrom) {
        params.sourcefrom = sourcefrom;
      }
      hasReportedSource = true;
    }
  }

  return params;
}

exports.basicConfig = basicConfig;
exports.configSource = configSource;
exports.recordReferInfo = recordReferInfo;
exports.getDefaultParams = getDefaultParams;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.config = exports.report = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _utils = __webpack_require__(1);

var _index = __webpack_require__(0);

var taskList = [];
var timer = null;

var configs = {
  url: 'https://report.huatuo.qq.com/code.cgi',
  slicer: 8, // 异步过程中，如果数据量过大，请求参数就会过长，这个时候应该分片上报，默认 8 个/片
  delay: 2000, // 异步上报的时间间隔
  debug: false
};

var basicData = {
  appid: 20566,
  // platform: '', // 不设置 自动获取
  app: 'wechat',
  domain: 'm.ke.qq.com',
  rate: 1,
  apn: '' // 用户网络类型(2g,3g,4g,wifi,unknow)，不上报根据ip库识别
};

function config() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object' || (typeof option === 'undefined' ? 'undefined' : _typeof(option)) !== 'object') {
    throw new Error('mmReport config传参类型错误');
  }
  Object.assign(basicData, data);
  Object.assign(configs, option);
}

wx.getSystemInfo({
  success: function success(_ref) {
    var _ref$model = _ref.model,
        model = _ref$model === undefined ? '' : _ref$model;

    config({
      device: model
    });
  }
});

wx.getNetworkType({
  success: function success(_ref2) {
    var _ref2$networkType = _ref2.networkType,
        networkType = _ref2$networkType === undefined ? '' : _ref2$networkType;

    config({
      apn: networkType
    });
  }
});

function doReport() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var params = Object.assign({}, basicData);
  if (data) {
    // 直接上报
    Object.assign(params, data);
  } else {
    var list = taskList;
    var len = list.length;
    if (len > configs.slicer) {
      len = configs.slicer; // 每次最多合并上报10条数据
    }
    var tempArray = list.splice(0, len);
    if (!tempArray.length) {
      return;
    }
    var attrArray = ['cgi', 'type', 'code', 'time', 'uin'];
    params.key = attrArray.join(',');
    tempArray.forEach(function (item, i) {
      attrArray.forEach(function (attr, j) {
        params[i + 1 + '_' + (j + 1)] = item[attr];
      });
    });
  }
  wx.request({
    url: configs.url,
    data: Object.assign({}, params, {
      t: Date.now()
    })
  });
}

/**
 * 特殊情况下需要立即上报
 * 1. delay设置为0
 * 2. domain与全局参数domain不一样
 */
function reportImmediate(data) {
  doReport(data);
}

/**
 * @param  {object} data
 * @param  {string} data.url  [url的pathname]
 * @param  {number} data.code [返回码直接上报]
 * @param  {number} data.type [返回码类型 1-正常 2-网络错误 3-逻辑错误]
 * @param  {number} data.time [请求耗时]
 * @param  {string=} data.uin  [用户uin]
 * @param  {object} opt  [扩展参数配置 ]
 * @return {undefined}   [无返回值]
 */
function report(_ref3) {
  var url = _ref3.url,
      code = _ref3.code,
      type = _ref3.type,
      time = _ref3.time,
      _ref3$uin = _ref3.uin,
      uin = _ref3$uin === undefined ? '' : _ref3$uin;
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (!uin) {
    uin = (0, _index.getCookie)('uid_uin') || '';
  }

  var _parseUrl = (0, _utils.parseUrl)(url),
      domain = _parseUrl.host,
      cgi = _parseUrl.path;

  var params = {
    cgi: cgi,
    code: code,
    type: type,
    time: time,
    uin: uin
  };

  // 是否立即上报
  if (opt.delay === 0 || domain && basicData.domain !== domain) {
    params.domain = domain;
    reportImmediate(params);
    return;
  }

  taskList.push(params);
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(doReport, configs.delay);
}

// 监听网络情况变化
wx.onNetworkStatusChange(function (_ref4) {
  var _ref4$networkType = _ref4.networkType,
      networkType = _ref4$networkType === undefined ? '' : _ref4$networkType;

  // 把taskList中已有的任务报完
  if (timer) {
    clearTimeout(timer);
  }
  doReport();
  // 设置新的apn值
  config({
    apn: networkType
  });
});

exports.report = report;
exports.config = config;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**
 * monitor 上报
 */

// copy from http://tc-svn.tencent.com/basic/basic_imweb_rep/edu_proj/trunk/htdocs/lego_modules/tx-monitor/0.0.4
var cfg = {
  // url: 'https://cgi.connect.qq.com/report/report_vm',
  url: 'https://ke.qq.com/cgi-bin/activity_platform/report/report_vm',
  delay: 1000
};
var isArray = function isArray(obj) {
  return obj && Object.prototype.toString.call(obj) === '[object Array]';
};
var pool = [];
var timer = null;

var send = function send() {
  var ids = [];
  for (var i = 0; i < pool.length; i++) {
    var id = pool[i].id;

    ids.push(id);
  }

  if (pool.length > 0) {
    wx.request({
      url: cfg.url,
      data: {
        monitors: '[' + ids.join(',') + ']',
        t: Date.now()
      }
    });
  }
  pool = [];
};

/**
 * 上报属性id
 * @param {number|[number]} id 上报的id
 */
var report = function report(id) {
  if (!id) {
    return;
  }

  if (isArray(id)) {
    Object.keys(id).forEach(function (i) {
      if (!id[i]) {
        return;
      }
      pool.push({ id: id[i] });
    });
  } else {
    pool.push({ id: id });
  }

  if (!timer) {
    timer = setTimeout(function () {
      timer = null;
      send();
    }, cfg.delay);
  }
};

exports.report = report; // eslint-disable-line

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**
 * huatuo 测速上报
 *
 * @file speed.js
 * @description 这里仅仅实现了 huatuo 测速上报的基础能力，如果需要有意义的 key 的功能的话，需要另外写组件
 * @author lqlongli
 *
 */

var cfg = {
  appid: 20466, // 产品id 固定
  // device: '',
  platform: 'unknown',
  apn: 'unknown'
  // userid: ''
};
var reportCgi = 'https://report.huatuo.qq.com/report.cgi?';
var testIsdFlagsReg = /\d+-\d+-\d+/;
// const NETWORKTYPE = ['unknown', 'wifi', '2g', '3g', '4g'];

/* 处理 platform */
wx.getSystemInfo({
  success: function success(res) {
    // console.log('>>>>> speed getSystemInfo:', res);
    cfg.platform = res.platform;
  }
});
/* 处理 platform */

/* 处理 apn */
wx.getNetworkType({
  success: function success(res) {
    cfg.apn = res.networkType === 'none' ? 'unknown' : res.networkType;
  }
});
wx.onNetworkStatusChange(function (res) {
  cfg.apn = res.networkType === 'none' ? 'unknown' : res.networkType;
});
/* 处理 apn */

function getParamsFromObj(obj) {
  var arr = [];

  Object.keys(obj).forEach(function (key) {
    arr.push(key + '=' + obj[key]);
  });

  return arr.join('&');
}

function toReport(optStr, reportDataStr) {
  wx.request({
    url: '' + reportCgi + optStr + '&speedparams=' + encodeURIComponent(reportDataStr)
  });
}

/**
 *
 * report 上报
 * @param  {object} speed 测速数据，key 为从 1 开始的数字，value 为测速值，单位 ms
 * @param  {object} opts  参数
 * @param  {string} opts.isdFlags       页面标志位，格式：flag1-flag2-flag3
 *
 * @example
 * speed.report({
 *     1: 123,
 *     2: 156,
 *     3: 177
 * }, {
 *     isdFlags: '1-2-3'
 * });
 *
 */
function report(speed) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // console.log('speed report:', speed, opts);
  if (!testIsdFlagsReg.test(opts.isdFlags)) {
    throw new Error('the option: isdFlags[' + opts.isdFlags + '] is wrong!');
  }

  var flags = opts.isdFlags.split('-');
  var reportDict = Object.assign({
    flag1: flags[0],
    flag2: flags[1],
    flag3: flags[2]
  }, speed);

  var paramStr = getParamsFromObj(cfg);
  var reportArgStr = getParamsFromObj(reportDict);

  toReport(paramStr, reportArgStr);
}

function config(opts) {
  Object.assign(cfg, opts);
}

exports.config = config;
exports.report = report;

/***/ })
/******/ ]);
