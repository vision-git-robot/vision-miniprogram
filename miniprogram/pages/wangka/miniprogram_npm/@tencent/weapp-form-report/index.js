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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _imwxutils = __webpack_require__(1);

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 课程ID和用户openId
    reportInfo: {
      type: Object,
      value: {
        // courseId: "83820366",
        // openId: "34536731234253346",
        // ...
        // 若选择自动上报则不能为空
      }
    },
    // 是否上报
    shouldSubmit: {
      type: Boolean,
      value: true
    },
    // 自动上报
    autoCommit: {
      type: Boolean,
      value: true
    },
    // 上报路径
    reportPath: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    formIdSubmit: function formIdSubmit(e) {
      var formId = e.detail.formId;
      var _properties = this.properties,
          reportInfo = _properties.reportInfo,
          autoCommit = _properties.autoCommit,
          shouldSubmit = _properties.shouldSubmit;

      if (!formId) {
        console.error('report error: formId not exist');
        return;
      }

      if (shouldSubmit) {
        var submitObj = { formId: formId };
        Object.assign(submitObj, reportInfo);
        if (autoCommit) {
          // 自动上报时reportInfo不能为空
          if (Object.keys(reportInfo).length === 0) {
            console.error('report error: input data missing');
            return;
          }
          this.fetchFormId(submitObj);
        } else {
          // 不自动上报，可通过回调函数在page中定义上报行为
          this.triggerEvent('submit', submitObj);
        }
      }
    },
    fetchFormId: function fetchFormId(submitObj) {
      var reportPath = this.properties.reportPath;

      if (!reportPath) {
        console.error('missing reportPath');
      } else {
        var opt = {
          url: reportPath,
          data: submitObj
        };
        return (0, _imwxutils.request)(opt).then(function (res) {
          if (res !== 0) {
            console.error('FORM_REPORT_ERROR_RETCODE:' + res.retcode);
          }
        });
      }
    }
  }
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@tencent/imwxutils");

/***/ })
/******/ ]);