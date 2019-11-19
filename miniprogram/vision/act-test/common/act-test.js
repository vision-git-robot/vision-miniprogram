module.exports = function(window, document) {const App = function(options) {window.appOptions = options};var navigator = window.navigator;var HTMLElement = window.HTMLElement;var localStorage = window.localStorage;var sessionStorage = window.sessionStorage;var location = window.location;window["createApp"] =
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
/******/ 	deferredModules.push([225,1,2]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return onComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return emitComponent; });
/* harmony import */ var _utils_eventProxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);

const componentEvents = new _utils_eventProxy__WEBPACK_IMPORTED_MODULE_0__[/* EventProxy */ "a"]();
function onComponent(eventType, callback) {
  componentEvents.on(eventType, callback);
}
function emitComponent(eventType, instance, meta, global) {
  // eslint-disable-next-line
  const params = getComponentEventListenerCallbackParams(instance, global, meta);
  componentEvents.emit(eventType, params);
}

function getComponentEventListenerCallbackParams({
  key,
  component: {
    id,
    info,
    name,
    projKey,
    projId
  }
}, global, meta) {
  return {
    global,
    meta,
    component: {
      key,
      id,
      info,
      name,
      projId,
      projKey
    }
  };
}

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return onHotArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return emitHotArea; });
/* harmony import */ var _utils_eventProxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);

const hotAreaEventListeners = new _utils_eventProxy__WEBPACK_IMPORTED_MODULE_0__[/* EventProxy */ "a"]();
function onHotArea(eventType, callback) {
  hotAreaEventListeners.on(eventType, callback);
}
function emitHotArea(eventType, hotArea, instance, meta, global) {
  // eslint-disable-next-line
  const params = getHotAreaEventListenerCallbackParams(hotArea, instance, global, meta);
  hotAreaEventListeners.emit(eventType, params);
}

function getHotAreaEventListenerCallbackParams({
  key,
  position,
  size
}, {
  key: componentKey,
  component: {
    id,
    info,
    name,
    projKey,
    projId
  }
}, global, meta) {
  return {
    global,
    meta,
    hotArea: {
      key,
      position,
      size
    },
    component: {
      key: componentKey,
      id,
      info,
      name,
      projId,
      projKey
    }
  };
}

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return onPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return emitPage; });
/* harmony import */ var _utils_eventProxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);

const pageEvents = new _utils_eventProxy__WEBPACK_IMPORTED_MODULE_0__[/* EventProxy */ "a"]();
function onPage(eventType, callback) {
  pageEvents.on(eventType, callback);
}
function emitPage(eventType, params) {
  pageEvents.emit(eventType, params);
}

/***/ }),

/***/ 104:
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

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getComponentId; });
function getComponentId(key) {
  return `__impage-component-wrapper-${key}`;
}

/***/ }),

/***/ 148:
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

  const style = document.createElement('style');
  style.setAttribute('type', 'text/css');
  style.setAttribute('class', className);
  style.innerHTML = content;
  document.head.appendChild(style);
}

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return componentNodeMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setComponentNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deleteComponentNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getComponentNode; });
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(105);

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

if (typeof window !== 'undefined') {
  Object.defineProperty(window, '__componentInstanceNodeMap', {
    get() {
      return componentNodeMap;
    }

  });
}

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* unused harmony export renderToString */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _handlers_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(218);
/* harmony import */ var _handlers_injectStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(148);
/* harmony import */ var _handlers_instanceMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(104);
/* harmony import */ var _libraries_base_components_Image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(223);
/* harmony import */ var _libraries_base_components_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(222);
/* harmony import */ var _libraries_base_components_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(213);
/* harmony import */ var _libraries_base_components_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(220);
/* harmony import */ var _libraries_base_components_Phone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(221);
/* harmony import */ var _libraries_base_components_Select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(214);
/* harmony import */ var _libraries_base_components_RichText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(212);
/* harmony import */ var _libraries_base_actions_Toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(209);
/* harmony import */ var _libraries_base_actions_Alert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(204);
// Import Libs and Handlers







let ReactDOMServer;

if (process.env.SSR) {
  __webpack_require__(232);

  ReactDOMServer = __webpack_require__(405);
} // Import Components








 // Import Plugins
// Import Actions


 // Global Style

Object(_handlers_injectStyle__WEBPACK_IMPORTED_MODULE_2__[/* injectStyle */ "a"])(`body {
	border: 1px none #161616 !important;
background-color: #ffffff !important;
background-repeat: repeat-y !important;
background-size: auto !important;
background-position: center top !important;
}`, '__impage_injected-global-styles'); // Auto Inject Style

Object(_handlers_injectStyle__WEBPACK_IMPORTED_MODULE_2__[/* injectStyle */ "a"])(``, '__impage_injected-component-styles'); // Global Data

const meta = {
  "title": "test",
  "desc": "test",
  "start": new Date('Tue Nov 05 2019 15:59:56 GMT+0800 (中国标准时间)'),
  "end": new Date('Sat Nov 30 2019 15:59:56 GMT+0800 (中国标准时间)'),
  "actId": 1,
  "actKey": "test",
  "containerType": "*",
  "isTemplate": false,
  "isEditor": false,
  "isTestEnv": false
};
const global = {
  "jumpUrl": ""
}; // Inject JIMU_Vars

if (typeof window !== 'undefined') {
  Object.defineProperty(window, 'JIMU_VARS', {
    value: {
      "key": "test",
      "actStartTime": "2019-11-05T07:59:56.000Z",
      "actEndTime": "2019-11-30T07:59:56.000Z",
      "isJimu": false,
      "jumpUrl": ""
    },
    writable: false,
    configurable: false
  }); // Inject Global

  Object.defineProperty(window, 'VISION', {
    value: {
      meta,
      global
    },
    writable: false,
    configurable: false
  });
} // Actions


const actions = {
  "1": {
    "action": _libraries_base_actions_Alert__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"],
    "id": 1,
    "projId": 1,
    "projKey": "base",
    "name": "Alert",
    "info": {
      "name": "弹窗（Alert）",
      "author": "elliothu"
    },
    "maxTimeout": "Infinity"
  },
  "4": {
    "action": _libraries_base_actions_Toast__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"],
    "id": 4,
    "projId": 1,
    "projKey": "base",
    "name": "Toast",
    "info": {
      "name": "消息提醒（Toast）",
      "author": ""
    },
    "maxTimeout": "Infinity"
  }
}; // Components

const components = {
  "1": {
    "component": _libraries_base_components_Button__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],
    "id": 1,
    "projId": 1,
    "projKey": "base",
    "name": "Button",
    "info": {
      "name": "按钮",
      "desc": "基础按钮组件",
      "author": "elliothu"
    }
  },
  "3": {
    "component": _libraries_base_components_Container__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],
    "id": 3,
    "projId": 1,
    "projKey": "base",
    "name": "Container",
    "info": {
      "name": "通用容器",
      "desc": "通用容器组件，用于分组和布局等",
      "author": "elliothu"
    }
  },
  "6": {
    "component": _libraries_base_components_Image__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"],
    "id": 6,
    "projId": 1,
    "projKey": "base",
    "name": "Image",
    "info": {
      "name": "图片",
      "desc": "图片组件",
      "author": "elliothu"
    },
    "__implementHotArea": true
  },
  "7": {
    "component": _libraries_base_components_RichText__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"],
    "id": 7,
    "projId": 1,
    "projKey": "base",
    "name": "RichText",
    "info": {
      "name": "富文本",
      "desc": "富文本组件（支持图文混排）",
      "author": "elliothu"
    }
  },
  "8": {
    "component": _libraries_base_components_Text__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"],
    "id": 8,
    "projId": 1,
    "projKey": "base",
    "name": "Text",
    "info": {
      "name": "文本",
      "desc": "纯文本组件",
      "author": "elliothu"
    }
  },
  "32": {
    "component": _libraries_base_components_Phone__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"],
    "id": 32,
    "projId": 1,
    "projKey": "base",
    "name": "Phone",
    "info": {
      "name": "手机号",
      "desc": "获取手机号",
      "author": "howenhuo"
    }
  },
  "33": {
    "component": _libraries_base_components_Select__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"],
    "id": 33,
    "projId": 1,
    "projKey": "base",
    "name": "Select",
    "info": {
      "name": "下拉选择",
      "desc": "下拉选择组件",
      "author": "howenhuo"
    }
  }
};
const componentInstances = [{
  "key": 24,
  "component": components['6'],
  "data": {
    "src": "//127.0.0.1:6001/image/static/static_1572940909066.png",
    "hotAreas": [{
      "key": 30,
      "position": {
        "x": 6.142857142857143,
        "y": 45.57575757575758
      },
      "size": {
        "width": 88,
        "height": 7.3939393939393945
      },
      "actions": [{
        "key": 31,
        "action": actions['4'],
        "data": {
          "text": "提示消息",
          "duration": 2
        },
        "trigger": "__impage_action_trigger_click",
        "target": null
      }]
    }]
  },
  "style": {},
  "commonStyle": {
    "maxWidth": "100%",
    "margin": "0px auto 0px auto",
    "border": "1px none #161616"
  },
  "wrapperStyle": {
    "backgroundColor": "transparent",
    "backgroundRepeat": "repeat-y",
    "backgroundSize": "auto",
    "backgroundPosition": "center top"
  },
  "actions": []
}, {
  "key": 25,
  "component": components['6'],
  "data": {
    "src": "//127.0.0.1:6001/image/static/static_1572941309345.jpg",
    "hotAreas": []
  },
  "style": {},
  "commonStyle": {
    "maxWidth": "100%",
    "margin": "-200px 0px 0px 0px",
    "padding": "0px 10px 0px 10px",
    "border": "1px none #161616"
  },
  "wrapperStyle": {
    "backgroundColor": "transparent",
    "backgroundRepeat": "repeat-y",
    "backgroundSize": "auto",
    "backgroundPosition": "center top"
  },
  "actions": []
}, {
  "key": 29,
  "component": components['3'],
  "data": {},
  "style": {},
  "commonStyle": {
    "maxWidth": "100%",
    "margin": "-100px auto 0px auto",
    "color": "#161616",
    "fontSize": 14,
    "lineHeight": "20px",
    "textAlign": "center",
    "fontWeight": "normal",
    "border": "1px none #161616",
    "backgroundColor": "transparent",
    "backgroundRepeat": "repeat-y",
    "backgroundSize": "auto",
    "backgroundPosition": "center top"
  },
  "wrapperStyle": {},
  "actions": [],
  "children": [{
    "key": 28,
    "component": components['8'],
    "data": {
      "text": "输入手机号免费领取资料"
    },
    "style": {},
    "commonStyle": {
      "width": 180,
      "height": 40,
      "margin": "0px 0px 0px 30px",
      "color": "#9b9b9b",
      "fontSize": 14,
      "lineHeight": "40px",
      "textAlign": "center",
      "fontWeight": "normal",
      "border": "1px solid #9b9b9b",
      "backgroundColor": "transparent",
      "backgroundRepeat": "repeat-y",
      "backgroundSize": "auto",
      "backgroundPosition": "center top"
    },
    "wrapperStyle": {},
    "actions": []
  }, {
    "key": 26,
    "component": components['1'],
    "data": {
      "text": "立即领取",
      "newTable": false,
      "deliverParams": true
    },
    "style": {},
    "commonStyle": {
      "width": 100,
      "height": 40,
      "borderRadius": "5px",
      "margin": "-40px 50px 0px auto",
      "color": "#FFFFFF",
      "fontSize": 18,
      "lineHeight": "40px",
      "textAlign": "center",
      "fontWeight": "normal",
      "border": "1px none #161616",
      "backgroundColor": "#4EC7F6",
      "backgroundRepeat": "repeat-y",
      "backgroundSize": "auto",
      "backgroundPosition": "center top"
    },
    "wrapperStyle": {
      "backgroundColor": "transparent",
      "backgroundRepeat": "repeat-y",
      "backgroundSize": "auto",
      "backgroundPosition": "center top"
    },
    "actions": [{
      "key": 32,
      "action": actions['1'],
      "data": {
        "title": "提示",
        "text": "提示内容"
      },
      "trigger": "__impage_action_trigger_click",
      "target": null
    }]
  }]
}, {
  "key": 33,
  "component": components['3'],
  "data": {},
  "style": {},
  "commonStyle": {
    "maxWidth": "100%",
    "margin": "70px auto 0px auto",
    "color": "#161616",
    "fontSize": 14,
    "lineHeight": "20px",
    "textAlign": "center",
    "fontWeight": "normal",
    "border": "1px none #161616",
    "backgroundColor": "transparent",
    "backgroundRepeat": "repeat-y",
    "backgroundSize": "auto",
    "backgroundPosition": "center top"
  },
  "wrapperStyle": {},
  "actions": [],
  "children": [{
    "key": 34,
    "component": components['32'],
    "data": {
      "input": "输入手机号",
      "button": "立即领取"
    },
    "style": {},
    "commonStyle": {},
    "wrapperStyle": {},
    "actions": []
  }]
}, {
  "key": 36,
  "component": components['33'],
  "data": {},
  "style": {},
  "commonStyle": {},
  "wrapperStyle": {},
  "actions": []
}, {
  "key": 37,
  "component": components['7'],
  "data": {
    "content": "<h1 style=\"text-align:right;\" size=\"0\" _root=\"undefined\" __ownerid=\"undefined\" __hash=\"undefined\" __altered=\"false\">标题</h1><p><strong>外界高度瞩目的美中贸易第一阶段协议迟迟未有公开进展，美国总统特朗普12日表示两国“接近” 达成<span style=\"color:#f39c12\">首期协议</span>，但未透露关于协议的任何细节。专家分析，协议公开信息缺失，显示双方仍在就条款拉锯，虽然协议“接近”达成，但谈判的最后一里路也许十分艰难。</strong></p><p></p><p><em>特朗普当日表示：“这可能很快发生，不过我们只会接受一个对美国、我们工人以及伟大公司有好处的协议，因为我们受了很大打击，很多年来都存有贸易逆差。”</em></p><p></p><ul><li>特朗普：中美达成“相当实质性第一阶段协议”</li><li>中美&quot;第一阶段”协议：美媒称中国欲继续谈</li><li>美国前贸易代表巴尔舍夫斯基：美中贸易谈判20年的变与不变</li></ul><p><u>特朗普当日在纽约以美国经济为题发表演讲，借强劲经济的东风，为明年大选造势。外界原本预期特朗普将在演讲中提及中美贸易协议的新进展，然而，他没有透露任何具体政策信息。</u></p><p></p><blockquote>在这场极具特氏风格的演讲中，他维持一贯口风，批评中国是偷走美国工作岗位和财富的盗贼，但把主要矛头指向此前的美国政府不作为。“我责怪我们（以往的）领袖，而不是中国。”他回顾早前访问北京，形容中国国家主席习近平“颇有气势”。</blockquote><p></p><p>特朗普还表示，如果中国不与美国达成<sup>协议</sup>，他会“在很大程度上”提高对中国商品的<sub>关税</sub>，还威胁对其他亏待美国的国家采取同样的措施。</p><p></p><p><span style=\"font-size:20px\">亚洲协会政策研究所副总裁、前贸易谈判代表卡特勒（Wendy Cutler）</span>分析，特朗普形容中国的经济下行，美国在谈判中占绝对优势，但北京很可能并不这样想。特朗普在国内的政治地位并不稳如泰山，他正面临民主党人发起的弹劾调查，<span style=\"text-decoration:line-through\">并将在明年11月迎来总统大选</span>。</p><pre><code>卡特勒认为，双方矛盾的看法无疑将复杂化谈判局面。</code></pre><p>????????</p><hr/><p style=\"text-align:center;\"><strong><span style=\"color:#df1c1c\"><span style=\"font-size:20px\">协议</span></span></strong></p><ol><li>特朗普：中美达成“相当实质性第一阶段协议”</li><li>中美&quot;第一阶段”协议：美媒称中国欲继续谈</li><li>美国前贸易代表巴尔舍夫斯基：美中贸易谈判20年的变与不变</li></ol><p></p><p style=\"text-indent:2em;\" size=\"0\" _root=\"undefined\" __ownerid=\"undefined\" __hash=\"undefined\" __altered=\"false\"><span style=\"letter-spacing:4px\"><span style=\"line-height:1.75\">澳洲前总理陆克文认为，第一阶段协议会在2019年年底前出炉，而第二阶段协议在明年达成的前提，很可能是美方因应中方要求，移除所有在贸易战期间新增的关税。“在大选年，移除所有关税将十分困难，所以谈判很可能持续至2020年年底。”</span></span></p><p></p><p></p><div class=\"media-wrap image-wrap\"><img src=\"//127.0.0.1:6001/image/static/static_1572942829981.png\"/></div><p></p>"
  },
  "style": {},
  "commonStyle": {
    "margin": "16px auto 16px auto",
    "padding": "0px 12px 0px 12px",
    "border": "1px none #161616"
  },
  "wrapperStyle": {
    "backgroundColor": "transparent",
    "backgroundRepeat": "repeat-y",
    "backgroundSize": "auto",
    "backgroundPosition": "center top"
  },
  "actions": []
}]; // Plugin

const plugins = {};
const pluginInstances = []; // Init

Object(_handlers_instanceMap__WEBPACK_IMPORTED_MODULE_3__[/* initComponentInstanceIndexMap */ "b"])(componentInstances);
function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_handlers_render__WEBPACK_IMPORTED_MODULE_1__[/* AppRender */ "a"], {
    componentInstances: componentInstances,
    pluginInstances: pluginInstances,
    global: global,
    meta: meta
  });
}
function renderToString() {
  return ReactDOMServer.renderToString(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(231)))

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_mobile_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(183);
/* harmony import */ var antd_mobile_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_modal_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_mobile_lib_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(103);
/* harmony import */ var antd_mobile_lib_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(224);




function alert({
  data: {
    title,
    text,
    url
  }
}) {
  return new Promise(resolve => {
    const onPress = Object(_lib_utils__WEBPACK_IMPORTED_MODULE_2__[/* isUrl */ "a"])(url) ? () => Object(_lib_utils__WEBPACK_IMPORTED_MODULE_2__[/* openWithUrlParams */ "c"])(url) : () => {};
    antd_mobile_lib_modal__WEBPACK_IMPORTED_MODULE_1___default.a.alert(title, text, [{
      text: '确定',
      onPress: () => {
        onPress();
        return resolve();
      }
    }]);
  });
}

/* harmony default export */ __webpack_exports__["a"] = (alert);

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_mobile_lib_toast_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(454);
/* harmony import */ var antd_mobile_lib_toast_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_toast_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(106);
/* harmony import */ var antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_1__);



function toast({
  data: {
    text,
    duration
  }
}) {
  return new Promise(resolve => {
    antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_1___default.a.hide();
    antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_1___default.a.show(text, 0);
    setTimeout(() => {
      antd_mobile_lib_toast__WEBPACK_IMPORTED_MODULE_1___default.a.hide();
      resolve();
    }, (duration || 2) * 1000);
  });
}

/* harmony default export */ __webpack_exports__["a"] = (toast);

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(463);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_1__);



function RichText({
  data,
  commonStyle
}) {
  const {
    content
  } = data;
  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
    className: "impage-material-rich_text",
    style: commonStyle,
    dangerouslySetInnerHTML: {
      __html: content
    }
  });
}

/* harmony default export */ __webpack_exports__["a"] = (RichText);

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78);



function Text({
  data,
  commonStyle
}) {
  const {
    text
  } = data;

  if (!text || !text.trim()) {
    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_lib_components__WEBPACK_IMPORTED_MODULE_1__[/* EmptyData */ "a"], null);
  }

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("p", {
    style: commonStyle,
    dangerouslySetInnerHTML: {
      __html: text.replace(/[\n\r]/g, '<br/>')
    }
  });
}

/* harmony default export */ __webpack_exports__["a"] = (Text);

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_mobile_lib_picker_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(465);
/* harmony import */ var antd_mobile_lib_picker_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_picker_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_mobile_lib_list_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(469);
/* harmony import */ var antd_mobile_lib_list_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_list_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_mobile_lib_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(215);
/* harmony import */ var antd_mobile_lib_picker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_picker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_mobile_lib_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(149);
/* harmony import */ var antd_mobile_lib_list__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_mobile_lib_list__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Created By Vision CLI
 * Issues and merge requests are welcomed：https://git.code.oa.com/impage/vision
 *
 * API 参考：
 * http://vision.oa.com/docs/dev-component/#
 */





const seasons = [[{
  label: '2017',
  value: '2017'
}, {
  label: '2018',
  value: '2018'
}, {
  label: '2019',
  value: '2019'
}, {
  label: '2020',
  value: '2020'
}], [{
  label: '春',
  value: '春'
}, {
  label: '夏',
  value: '夏'
}, {
  label: '秋',
  value: '秋'
}, {
  label: '冬',
  value: '冬'
}]];
/* harmony default export */ __webpack_exports__["a"] = (function ({
  componentKey,
  // {number} 用于标识每一个组件实例的全局唯一且持久化的 key
  data,
  // {object} “数据”表单内容
  style,
  // {object} “样式”表单内容
  global,
  // {object} 页面容器自定义的全局配置项
  meta,
  // {object} 页面元数据
  componentsMap,
  // {Map<number, HTMLElement>} 所有组件 DOM 节点的 Map，key 为组件的 key（number）
  getComponentByKey // {(key: number) => HTMLElement | undefined} 通过组件 key 获取组件 DOM 节点的 API

}) {
  const y = seasons[0][0].value;
  const s = seasons[1][0].value;
  const [season, setSeason] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([y, s]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_mobile_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      backgroundColor: 'white'
    },
    className: "picker-list"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_mobile_lib_picker__WEBPACK_IMPORTED_MODULE_3___default.a, {
    data: seasons,
    title: "\u9009\u62E9\u5B63\u8282",
    cascade: false,
    extra: "\u8BF7\u9009\u62E9(\u53EF\u9009)",
    value: season,
    onChange: setSeason,
    onOk: setSeason
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd_mobile_lib_list__WEBPACK_IMPORTED_MODULE_4___default.a.Item, {
    arrow: "horizontal"
  }, "Multiple")));
});

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: F:/workplace/vision/myvision/workspace/libraries/materials-fudao/node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: F:/workplace/vision/myvision/workspace/libraries/materials-fudao/node_modules/ramda/es/isEmpty.js + 17 modules
var isEmpty = __webpack_require__(487);

// EXTERNAL MODULE: ./handlers/componentNodeMap.js
var componentNodeMap = __webpack_require__(18);

// EXTERNAL MODULE: ./handlers/eventListener/componentEventListener.js
var componentEventListener = __webpack_require__(100);

// EXTERNAL MODULE: ./handlers/utils/common.js
var common = __webpack_require__(105);

// EXTERNAL MODULE: ./handlers/utils/eventProxy.js
var eventProxy = __webpack_require__(44);

// CONCATENATED MODULE: ./handlers/utils/events.js

const EventEmitTypes = {
  COMPONENT_INTERSECTING_CHANGE: 'component_intersecting_change',
  HOT_AREA_INTERSECTING_CHANGE: 'hot_area_intersecting_change'
};
const events = new eventProxy["a" /* EventProxy */]();
// EXTERNAL MODULE: ./handlers/actionHandler/types.js
var types = __webpack_require__(9);

// EXTERNAL MODULE: ./handlers/actionHandler/utils.js
var utils = __webpack_require__(68);

// CONCATENATED MODULE: ./handlers/actionHandler/ComponentActionHandler.jsx
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const LONG_PRESS_TIMEOUT = 1000;
const DOUBLE_CLICK_TIMEOUT = 200;
const INTERSECTION_TIMEOUT = 500;
class ComponentActionHandler_ComponentActionHandler extends react["PureComponent"] {
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

    _defineProperty(this, "initIntersectionObserver", () => {
      this.intersectionObserver = new window.IntersectionObserver(entries => {
        entries.forEach(({
          target,
          isIntersecting
        }) => {
          const key = parseInt(target.getAttribute('data-key'), 10);
          events.emit(EventEmitTypes.COMPONENT_INTERSECTING_CHANGE, isIntersecting, key);
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
        this.handlers.onEnterView();
      }
    });

    _defineProperty(this, "onComponentLeaveView", () => {
      if (this.handlers.onLeaveView) {
        this.handlers.onLeaveView();
      }
    });

    _defineProperty(this, "onComponentPress", () => {
      if (!this.handlers.onLongPress) {
        return;
      }

      this.longPressTimer = window.setTimeout(this.handlers.onLongPress, LONG_PRESS_TIMEOUT);
    });

    _defineProperty(this, "onComponentPressRelease", () => {
      if (this.longPressTimer) {
        window.clearTimeout(this.longPressTimer);
      }

      this.longPressTimer = null;
    });

    _defineProperty(this, "onSingleClick", () => {
      this.doubleClickTimer = window.setTimeout(() => {
        if (!this.preventClick) {
          try {
            this.handlers.onClick();
          } catch (e) {
            console.error('Exec onClick action error:', e);
          }
        }
      }, DOUBLE_CLICK_TIMEOUT);
    });

    _defineProperty(this, "onDoubleClick", () => {
      if (this.doubleClickTimer) {
        clearTimeout(this.doubleClickTimer);
        this.doubleClickTimer = null;
      }

      this.preventClick = true;

      try {
        this.handlers.onDoubleClick();
      } catch (e) {
        console.error('Exec onClick action error:', e);
      }

      setTimeout(() => this.preventClick = false, DOUBLE_CLICK_TIMEOUT);
    });

    _defineProperty(this, "emitComponentEvent", type => {
      const {
        props: {
          instance
        },
        handlerParams: {
          global,
          meta
        }
      } = this;
      return Object(componentEventListener["a" /* emitComponent */])(type, instance, meta, global);
    });

    _defineProperty(this, "withEmitComponentEvent", (type, handler) => () => {
      this.emitComponentEvent(type);

      if (handler) {
        return handler(this.handlerParams);
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
      } = Object(utils["a" /* generateHandlers */])(actions);
      const {
        withEmitComponentEvent,
        handlers
      } = this;
      handlers.onInit = withEmitComponentEvent(types["b" /* ComponentEventListenerTypes */].INIT, onInit);
      handlers.onClick = withEmitComponentEvent(types["b" /* ComponentEventListenerTypes */].CLICK, onClick);
      handlers.onMouseEnter = withEmitComponentEvent(types["b" /* ComponentEventListenerTypes */].MOUSE_ENTER, onMouseEnter);
      handlers.onMouseLeave = withEmitComponentEvent(types["b" /* ComponentEventListenerTypes */].MOUSE_LEAVE, onMouseLeave);
      handlers.onDoubleClick = withEmitComponentEvent(types["b" /* ComponentEventListenerTypes */].DOUBLE_CLICK, onDoubleClick);
      handlers.onLongPress = withEmitComponentEvent(types["b" /* ComponentEventListenerTypes */].LONG_PRESS, onLongPress);
      handlers.onEnterView = withEmitComponentEvent(types["b" /* ComponentEventListenerTypes */].ENTER_VIEW, onEnterView);
      handlers.onLeaveView = withEmitComponentEvent(types["b" /* ComponentEventListenerTypes */].LEAVE_VIEW, onLeaveView);
    });

    _defineProperty(this, "setNode", node => {
      this.containerRef = node;
      Object(componentNodeMap["d" /* setComponentNode */])(this.props.instance.key, node);
    });

    this.handlerParams = {
      global: props.global,
      meta: props.meta
    };
    this.updateHandlersWithParams(props.instance.actions);
  }

  componentDidMount() {
    if (false) {}

    events.on(EventEmitTypes.COMPONENT_INTERSECTING_CHANGE, this.onComponentIntersectionChange);

    if (this.handlers.onInit) {
      this.handlers.onInit();
    }
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

    events.cancel(EventEmitTypes.COMPONENT_INTERSECTING_CHANGE, this.onComponentIntersectionChange);
    Object(componentNodeMap["b" /* deleteComponentNode */])(this.props.instance.key);

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
    return react["createElement"]("div", {
      className: "__impage-component-actions-proxy",
      id: Object(common["a" /* getComponentId */])(this.props.instance.key),
      style: this.props.instance.wrapperStyle,
      ref: this.setNode,
      "data-key": this.props.instance.key,
      onClick: this.onSingleClick,
      onDoubleClick: this.onDoubleClick,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onTouchStart: this.onComponentPress,
      onTouchEnd: this.onComponentPressRelease,
      onMouseDown: this.onComponentPress,
      onMouseUp: this.onComponentPressRelease
    }, isEmpty["a" /* default */](rest) ? children : react["Children"].map(children, child => react["cloneElement"](child, rest)));
  }

}
// CONCATENATED MODULE: ./handlers/componentEventActionEmitter.js
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
// EXTERNAL MODULE: ./handlers/customEventTrigger.js
var customEventTrigger = __webpack_require__(77);

// EXTERNAL MODULE: ./handlers/eventListener/hotAreaEventListener.js
var hotAreaEventListener = __webpack_require__(101);

// CONCATENATED MODULE: ./handlers/actionHandler/HotAreaActionHandler.jsx
function HotAreaActionHandler_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const HotAreaActionHandler_LONG_PRESS_TIMEOUT = 1000;
const HotAreaActionHandler_DOUBLE_CLICK_TIMEOUT = 200;
const HotAreaActionHandler_INTERSECTION_TIMEOUT = 500;
class HotAreaActionHandler_HotAreaActionHandler extends react["PureComponent"] {
  constructor(props) {
    super(props);

    HotAreaActionHandler_defineProperty(this, "intersectionObserver", null);

    HotAreaActionHandler_defineProperty(this, "handlerParams", {});

    HotAreaActionHandler_defineProperty(this, "handlers", {});

    HotAreaActionHandler_defineProperty(this, "containerRef", null);

    HotAreaActionHandler_defineProperty(this, "longPressTimer", null);

    HotAreaActionHandler_defineProperty(this, "preventClick", false);

    HotAreaActionHandler_defineProperty(this, "doubleClickTimer", null);

    HotAreaActionHandler_defineProperty(this, "intersectionTimer", null);

    HotAreaActionHandler_defineProperty(this, "initIntersectionObserver", () => {
      this.intersectionObserver = new window.IntersectionObserver(entries => {
        entries.forEach(({
          target,
          isIntersecting
        }) => {
          const key = parseInt(target.getAttribute('data-key'), 10);
          events.emit(EventEmitTypes.HOT_AREA_INTERSECTING_CHANGE, isIntersecting, key);
        });
      });
    });

    HotAreaActionHandler_defineProperty(this, "observeIntersection", () => this.intersectionObserver.observe(this.containerRef));

    HotAreaActionHandler_defineProperty(this, "unobserveIntersection", () => this.intersectionObserver.unobserve(this.containerRef));

    HotAreaActionHandler_defineProperty(this, "onHotAreaIntersectionChange", (isIntersecting, key) => {
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
      }, HotAreaActionHandler_INTERSECTION_TIMEOUT);
    });

    HotAreaActionHandler_defineProperty(this, "onHotAreaEnterView", () => {
      if (this.handlers.onEnterView) {
        this.handlers.onEnterView();
      }
    });

    HotAreaActionHandler_defineProperty(this, "onHotAreaLeaveView", () => {
      if (this.handlers.onLeaveView) {
        this.handlers.onLeaveView();
      }
    });

    HotAreaActionHandler_defineProperty(this, "onHotAreaPress", () => {
      if (!this.handlers.onLongPress) {
        return;
      }

      this.longPressTimer = window.setTimeout(this.handlers.onLongPress, HotAreaActionHandler_LONG_PRESS_TIMEOUT);
    });

    HotAreaActionHandler_defineProperty(this, "onHotAreaPressRelease", () => {
      if (this.longPressTimer) {
        window.clearTimeout(this.longPressTimer);
      }

      this.longPressTimer = null;
    });

    HotAreaActionHandler_defineProperty(this, "onSingleClick", () => {
      this.doubleClickTimer = window.setTimeout(() => {
        if (!this.preventClick) {
          try {
            this.handlers.onClick();
          } catch (e) {
            console.error('Exec onClick action error:', e);
          }
        }
      }, HotAreaActionHandler_DOUBLE_CLICK_TIMEOUT);
    });

    HotAreaActionHandler_defineProperty(this, "onDoubleClick", () => {
      if (this.doubleClickTimer) {
        clearTimeout(this.doubleClickTimer);
        this.doubleClickTimer = null;
      }

      this.preventClick = true;

      try {
        this.handlers.onDoubleClick();
      } catch (e) {
        console.error('Exec onClick action error:', e);
      }

      setTimeout(() => this.preventClick = false, HotAreaActionHandler_DOUBLE_CLICK_TIMEOUT);
    });

    HotAreaActionHandler_defineProperty(this, "emitHotAreaEvent", type => {
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
      return Object(hotAreaEventListener["a" /* emitHotArea */])(type, hotArea, instance, meta, global);
    });

    HotAreaActionHandler_defineProperty(this, "withEmitHotAreaEvent", (type, handler) => () => {
      this.emitHotAreaEvent(type);

      if (handler) {
        return handler(this.handlerParams);
      }
    });

    HotAreaActionHandler_defineProperty(this, "updateHandlerParams", (meta, global) => {
      this.handlerParams.meta = meta;
      this.handlerParams.global = global;
    });

    HotAreaActionHandler_defineProperty(this, "updateHandlersWithParams", actions => {
      const {
        onInit,
        onClick,
        onMouseEnter,
        onMouseLeave,
        onDoubleClick,
        onLongPress,
        onEnterView,
        onLeaveView
      } = Object(utils["a" /* generateHandlers */])(actions);
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

    HotAreaActionHandler_defineProperty(this, "setNode", node => this.containerRef = node);

    this.handlerParams = {
      global: props.global,
      meta: props.meta
    };
    this.updateHandlersWithParams(props.hotArea.actions);
  }

  componentDidMount() {
    if (false) {}

    events.on(EventEmitTypes.HOT_AREA_INTERSECTING_CHANGE, this.onHotAreaIntersectionChange);

    if (this.handlers.onInit) {
      this.handlers.onInit();
    }
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

    events.cancel(EventEmitTypes.HOT_AREA_INTERSECTING_CHANGE, this.onHotAreaIntersectionChange);

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
    return react["createElement"]("div", {
      className: "__impage-hot-area-actions-proxy",
      ref: this.setNode,
      "data-key": this.props.hotArea.key,
      onClick: this.onSingleClick,
      onDoubleClick: this.onDoubleClick,
      onMouseEnter: onMouseEnter,
      onMouseLeave: onMouseLeave,
      onTouchStart: this.onHotAreaPress,
      onTouchEnd: this.onHotAreaPressRelease,
      onMouseDown: this.onHotAreaPress,
      onMouseUp: this.onHotAreaPressRelease,
      style: style
    }, children);
  }

}
// CONCATENATED MODULE: ./handlers/HotAreas.js



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
    return react["createElement"](HotAreaActionHandler_HotAreaActionHandler, {
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
// CONCATENATED MODULE: ./handlers/adaptor/react/index.jsx
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
  const hotAreas = component.__implementHotArea ? react["createElement"](HotAreas, {
    global: global,
    meta: meta,
    instance: instance
  }) : null;

  const emit = trigger => Object(customEventTrigger["a" /* emitCustomEvent */])(instance, trigger, global, meta);

  const on = (eventName, callback) => onComponentEventAction(instance, eventName, callback);

  if (!View) {
    console.error(`Cannot find component [${component.name}] by id [${component.id}]`);
    return null;
  }

  return react["createElement"](View, _extends({
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
// EXTERNAL MODULE: F:/workplace/vision/myvision/workspace/libraries/materials-fudao/node_modules/lodash.template/index.js
var lodash_template = __webpack_require__(217);
var lodash_template_default = /*#__PURE__*/__webpack_require__.n(lodash_template);

// CONCATENATED MODULE: ./handlers/adaptor/jimu/index.jsx
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
    return react_default.a.createElement("div", {
      ref: this.setNode
    });
  }

}
// CONCATENATED MODULE: ./handlers/adaptor/vue/index.jsx
// import React from 'react';
// import { useEffect } from 'react';
function VueAdaptor() {
  // TODO
  return null;
}
// CONCATENATED MODULE: ./handlers/adaptor/index.jsx




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
    return react["createElement"](ReactAdaptor, {
      instance: instance,
      injectProps: injectProps,
      global: global,
      meta: meta
    });
  }

  if (runtime === 'jimu') {
    return react["createElement"](jimu_JimuAdaptor, {
      instance: instance,
      global: global,
      meta: meta
    });
  }

  if (runtime === 'vue') {
    return react["createElement"](VueAdaptor, {
      instance: instance,
      injectProps: injectProps,
      global: global,
      meta: meta
    });
  }

  throw new Error(`Invalid runtime [${runtime}]`);
}
// EXTERNAL MODULE: ./handlers/eventListener/index.js
var eventListener = __webpack_require__(76);

// EXTERNAL MODULE: ./handlers/eventListener/pageEventListener.js
var pageEventListener = __webpack_require__(102);

// EXTERNAL MODULE: ./handlers/eventListener/types.js
var eventListener_types = __webpack_require__(38);

// CONCATENATED MODULE: ./handlers/PositionHandler.jsx
/*
eslint-disable
 */

function PositionHandler({
  positionStyle,
  children
}) {
  return react_default.a.createElement("div", {
    style: { ...positionStyle,
      width: '100%',
      zIndex: 999
    }
  }, children);
}
// CONCATENATED MODULE: ./handlers/render.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render_AppRender; });









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
    position
  } = instance;

  const emit = trigger => Object(customEventTrigger["a" /* emitCustomEvent */])(instance, trigger, global, meta);

  const on = (eventName, callback) => onComponentEventAction(instance, eventName, callback);

  if (children) {
    return react_default.a.createElement(ComponentActionHandler_ComponentActionHandler, {
      instance: instance,
      meta: meta,
      global: global
    }, react_default.a.createElement(Component, {
      key: key,
      componentKey: key,
      data: data,
      meta: meta,
      global: global,
      style: style,
      commonStyle: commonStyle,
      emit: emit,
      on: on
    }, children.map(childInstance => react_default.a.createElement(ComponentItem, {
      key: childInstance.key,
      instance: childInstance,
      meta: meta,
      global: global
    }))));
  }

  const content = react_default.a.createElement(ComponentActionHandler_ComponentActionHandler, {
    instance: instance,
    meta: meta,
    global: global
  }, react_default.a.createElement(Adaptor, {
    instance: instance,
    injectProps: injectProps,
    meta: meta,
    global: global
  }));

  if (position) {
    return react_default.a.createElement(PositionHandler, {
      positionStyle: position
    }, content);
  }

  return content;
}

class render_AppRender extends react_default.a.Component {
  componentWillMount() {
    const {
      pluginInstances,
      global,
      meta
    } = this.props;
    pluginInstances.forEach(({
      plugin: {
        plugin
      },
      data,
      key
    }) => {
      plugin({
        data,
        key,
        global,
        meta,
        on: eventListener["a" /* on */],
        componentsMap: componentNodeMap["a" /* componentNodeMap */],
        getComponentByKey: componentNodeMap["c" /* getComponentNode */]
      });
    });
    Object(pageEventListener["a" /* emitPage */])(eventListener_types["b" /* PageEventListenerTypes */].INIT, {
      global,
      meta
    });
  }

  render() {
    const {
      componentInstances,
      global,
      meta
    } = this.props;
    return react_default.a.createElement(react_default.a.Fragment, null, componentInstances.map(instance => react_default.a.createElement(ComponentItem, {
      key: instance.key,
      instance: instance,
      meta: meta,
      global: global
    })));
  }

}

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: F:/workplace/vision/myvision/workspace/libraries/materials-fudao/node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./libraries/base/lib/utils/url.js + 1 modules
var url = __webpack_require__(224);

// EXTERNAL MODULE: F:/workplace/vision/myvision/workspace/libraries/materials-fudao/node_modules/antd-mobile/lib/button/index.js
var lib_button = __webpack_require__(211);
var button_default = /*#__PURE__*/__webpack_require__.n(lib_button);

// EXTERNAL MODULE: F:/workplace/vision/myvision/workspace/libraries/materials-fudao/node_modules/antd-mobile/lib/button/style/css.js
var css = __webpack_require__(458);

// EXTERNAL MODULE: ./libraries/base/components/Button/view/index.scss
var view = __webpack_require__(460);

// CONCATENATED MODULE: ./libraries/base/components/Button/view/index.js






function Button({
  data,
  commonStyle
}) {
  const {
    text,
    link,
    newTable,
    deliverParams = true
  } = data;

  const onClick = () => deliverParams ? Object(url["c" /* openWithUrlParams */])(link, newTable) : Object(url["b" /* open */])(link, newTable);

  return react["createElement"](button_default.a, {
    className: "impage-material-button",
    onClick: onClick,
    style: commonStyle
  }, text);
}

/* harmony default export */ var Button_view = (Button);
// CONCATENATED MODULE: ./libraries/base/components/Button/index.js

/* harmony default export */ var components_Button = __webpack_exports__["a"] = (Button_view);

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: F:/workplace/vision/myvision/workspace/libraries/materials-fudao/node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// CONCATENATED MODULE: ./libraries/base/components/Phone/WxButton.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * 由于react不会将非标准的event绑定到dom上
 * 需要将小程序open-type的button的回调手动绑定到dom上，让kbone触发
 * 将此过程封装成一个组件，外部只需要将回调由wxOnxxxxxx格式传进来即可
 */

class WxButton_WxButton extends react["PureComponent"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "buttonRef", Object(react["createRef"])());

    _defineProperty(this, "addEventToDom", (eventName, fn) => {
      const buttonDom = this.buttonRef.current;

      if (buttonDom && buttonDom[eventName] !== fn) {
        buttonDom[eventName] = fn;
      }
    });

    _defineProperty(this, "removeEventFromDom", eventName => {
      const buttonDom = this.buttonRef.current;

      if (buttonDom) {
        buttonDom[eventName] = null;
      }
    });

    _defineProperty(this, "processWxEvents", fn => {
      if (true) {
        Object.keys(this.props).forEach(k => {
          if (k.indexOf('wxOn') === 0) {
            const eventName = `on${k.slice(4)}`;
            fn(eventName, this.props[k]);
          }
        });
      }
    });
  }

  componentDidMount() {
    this.processWxEvents(this.addEventToDom);
  }

  componentDidUpdate() {
    this.processWxEvents(this.addEventToDom);
  }

  componentWillUnmount() {
    this.processWxEvents(this.removeEventFromDom);
  }

  render() {
    const {
      children,
      className
    } = this.props;
    return react_default.a.createElement("wx-button", _extends({}, this.props, className ? {
      class: className
    } : null, {
      ref: this.buttonRef
    }), children);
  }

}

/* harmony default export */ var Phone_WxButton = (WxButton_WxButton);
// EXTERNAL MODULE: F:/workplace/vision/myvision/workspace/libraries/materials-fudao/node_modules/antd-mobile/lib/modal/style/css.js
var css = __webpack_require__(183);

// EXTERNAL MODULE: F:/workplace/vision/myvision/workspace/libraries/materials-fudao/node_modules/antd-mobile/lib/modal/index.js
var modal = __webpack_require__(103);
var modal_default = /*#__PURE__*/__webpack_require__.n(modal);

// EXTERNAL MODULE: ./libraries/base/components/Phone/index.scss
var Phone = __webpack_require__(464);

// CONCATENATED MODULE: ./libraries/base/components/Phone/index.js
/**
 * Created By Vision CLI
 * Issues and merge requests are welcomed：https://git.code.oa.com/impage/vision
 *
 * API 参考：
 * http://vision.oa.com/docs/dev-component/#
 */






function Phone_Phone({
  componentKey,
  // {number} 用于标识每一个组件实例的全局唯一且持久化的 key
  data,
  // {object} “数据”表单内容
  style,
  // {object} “样式”表单内容
  global,
  // {object} 页面容器自定义的全局配置项
  meta,
  // {object} 页面元数据
  componentsMap,
  // {Map<number, HTMLElement>} 所有组件 DOM 节点的 Map，key 为组件的 key（number）
  getComponentByKey // {(key: number) => HTMLElement | undefined} 通过组件 key 获取组件 DOM 节点的 API

}) {
  const {
    input,
    button
  } = data;

  if (!button || !button.trim()) {
    return null;
  }

  const [inputValue, setInputValue] = Object(react["useState"])('');
  /**
  * 包装领取按钮点击的默认行为
  * 1. stopPropagation; 2. 上报事件
  */

  const getReceiveBtnClickHandler = func => {
    return evt => {
      // tdw({
      //   action: 'click',
      //   module: 'receive',
      // });
      if (func) {
        func(evt);
      }
    };
  };

  const receiveSuccess = () => {
    modal_default.a.alert('提示', '领取成功', [{
      text: '确定',
      onPress: () => {}
    }]);
  };

  const bindWXMobile = evt => {
    const {
      encryptedData = '',
      iv = ''
    } = evt.detail || {};

    if (!(encryptedData && iv)) {
      wx.showToast({
        title: '手机号获取失败...',
        icon: 'none'
      });
    } else {
      // 用户授权成功
      // 调后台接口，获取手机号，并绑定手机号
      // getUserPhone(evt.detail)
      //   .then(() => {
      //     this.receiveCourse();
      //     this.props.updateUserStatus();
      //   })
      //   .catch(() => {
      //     showDialog({
      //       title: '提示',
      //       text: '手机号绑定失败，请重试',
      //     });
      //   });
      receiveSuccess();
    }
  };

  const inputPhoneHandler = evt => {
    setInputValue(evt.currentTarget.value);
  };

  if (true) {
    return react_default.a.createElement("div", {
      className: "phone-container"
    }, react_default.a.createElement(Phone_WxButton, {
      className: "wx-phone-button",
      "open-type": "getPhoneNumber",
      onClick: getReceiveBtnClickHandler(),
      wxOngetphonenumber: bindWXMobile
    }, button));
  } else {}
}

/* harmony default export */ var components_Phone = __webpack_exports__["a"] = (Phone_Phone);

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: F:/workplace/vision/myvision/workspace/libraries/materials-fudao/node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./libraries/base/lib/components/EmptyData/index.js
var EmptyData = __webpack_require__(78);

// CONCATENATED MODULE: ./libraries/base/lib/utils/common.js
function preventSyntheticEvent(e) {
  e.preventDefault();
  e.stopPropagation();
  return false;
}
function px(px) {
  return `${px}px`;
}
function percent(percent) {
  return `${percent}%`;
}
function isChildrenEmpty(children) {
  if (!children) {
    return true;
  }

  if (Array.isArray(children)) {
    return children.length <= 0;
  }

  return false;
}
function getMetaDesc() {
  const metas = document.getElementsByTagName('meta');
  const meta = Array.from(metas).find(i => i.name.toLowerCase() === 'description');

  if (meta) {
    return meta.content;
  }

  return '';
}
// CONCATENATED MODULE: ./libraries/base/components/Container/index.js




function Container({
  children,
  commonStyle
}) {
  if (isChildrenEmpty(children)) {
    return react["createElement"](EmptyData["a" /* EmptyData */], {
      text: "\u672A\u6DFB\u52A0\u5B50\u7EC4\u4EF6"
    });
  }

  return react["createElement"]("div", {
    style: {
      position: 'relative',
      ...commonStyle
    }
  }, children);
}

/* harmony default export */ var components_Container = __webpack_exports__["a"] = (Container);

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./libraries/base/components/Image/view/index.scss
var view = __webpack_require__(462);

// EXTERNAL MODULE: F:/workplace/vision/myvision/workspace/libraries/materials-fudao/node_modules/react/index.js
var react = __webpack_require__(0);

// EXTERNAL MODULE: ./libraries/base/lib/components/EmptyData/index.js
var EmptyData = __webpack_require__(78);

// CONCATENATED MODULE: ./libraries/base/components/Image/view/index.js



function Image({
  data,
  commonStyle,
  hotAreas
}) {
  const {
    src
  } = data;

  if (!src || !src.trim()) {
    return react["createElement"](EmptyData["a" /* EmptyData */], null);
  }

  return react["createElement"]("div", {
    className: "impage-material-image-container",
    style: { ...commonStyle
    }
  }, hotAreas, react["createElement"]("img", {
    className: "impage-material-image",
    src: src,
    alt: "[\u56FE\u7247]",
    mode: "widthFix"
  }));
}
// CONCATENATED MODULE: ./libraries/base/components/Image/index.js

/* harmony default export */ var components_Image = __webpack_exports__["a"] = (Image);

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: F:/workplace/vision/myvision/workspace/libraries/materials-fudao/node_modules/strict-uri-encode/index.js
var strict_uri_encode = __webpack_require__(206);
var strict_uri_encode_default = /*#__PURE__*/__webpack_require__.n(strict_uri_encode);

// EXTERNAL MODULE: F:/workplace/vision/myvision/workspace/libraries/materials-fudao/node_modules/decode-uri-component/index.js
var decode_uri_component = __webpack_require__(207);
var decode_uri_component_default = /*#__PURE__*/__webpack_require__.n(decode_uri_component);

// EXTERNAL MODULE: F:/workplace/vision/myvision/node_modules/split-on-first/index.js
var split_on_first = __webpack_require__(208);
var split_on_first_default = /*#__PURE__*/__webpack_require__.n(split_on_first);

// CONCATENATED MODULE: ./libraries/base/lib/utils/query-string/index.js
/* eslint-disable */




function encoderForArrayFormat(options) {
  switch (options.arrayFormat) {
    case 'index':
      return key => (result, value) => {
        const index = result.length;

        if (value === undefined) {
          return result;
        }

        if (value === null) {
          return [...result, [encode(key, options), '[', index, ']'].join('')];
        }

        return [...result, [encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')];
      };

    case 'bracket':
      return key => (result, value) => {
        if (value === undefined) {
          return result;
        }

        if (value === null) {
          return [...result, [encode(key, options), '[]'].join('')];
        }

        return [...result, [encode(key, options), '[]=', encode(value, options)].join('')];
      };

    case 'comma':
      return key => (result, value, index) => {
        if (value === null || value === undefined || value.length === 0) {
          return result;
        }

        if (index === 0) {
          return [[encode(key, options), '=', encode(value, options)].join('')];
        }

        return [[result, encode(value, options)].join(',')];
      };

    default:
      return key => (result, value) => {
        if (value === undefined) {
          return result;
        }

        if (value === null) {
          return [...result, encode(key, options)];
        }

        return [...result, [encode(key, options), '=', encode(value, options)].join('')];
      };
  }
}

function parserForArrayFormat(options) {
  let result;

  switch (options.arrayFormat) {
    case 'index':
      return (key, value, accumulator) => {
        result = /\[(\d*)\]$/.exec(key);
        key = key.replace(/\[\d*\]$/, '');

        if (!result) {
          accumulator[key] = value;
          return;
        }

        if (accumulator[key] === undefined) {
          accumulator[key] = {};
        }

        accumulator[key][result[1]] = value;
      };

    case 'bracket':
      return (key, value, accumulator) => {
        result = /(\[\])$/.exec(key);
        key = key.replace(/\[\]$/, '');

        if (!result) {
          accumulator[key] = value;
          return;
        }

        if (accumulator[key] === undefined) {
          accumulator[key] = [value];
          return;
        }

        accumulator[key] = [].concat(accumulator[key], value);
      };

    case 'comma':
      return (key, value, accumulator) => {
        const isArray = typeof value === 'string' && value.split('').indexOf(',') > -1;
        const newValue = isArray ? value.split(',') : value;
        accumulator[key] = newValue;
      };

    default:
      return (key, value, accumulator) => {
        if (accumulator[key] === undefined) {
          accumulator[key] = value;
          return;
        }

        accumulator[key] = [].concat(accumulator[key], value);
      };
  }
}

function encode(value, options) {
  if (options.encode) {
    return options.strict ? strict_uri_encode_default()(value) : encodeURIComponent(value);
  }

  return value;
}

function decode(value, options) {
  if (options.decode) {
    return decode_uri_component_default()(value);
  }

  return value;
}

function keysSorter(input) {
  if (Array.isArray(input)) {
    return input.sort();
  }

  if (typeof input === 'object') {
    return keysSorter(Object.keys(input)).sort((a, b) => Number(a) - Number(b)).map(key => input[key]);
  }

  return input;
}

function removeHash(input) {
  const hashStart = input.indexOf('#');

  if (hashStart !== -1) {
    input = input.slice(0, hashStart);
  }

  return input;
}

function extract(input) {
  input = removeHash(input);
  const queryStart = input.indexOf('?');

  if (queryStart === -1) {
    return '';
  }

  return input.slice(queryStart + 1);
}

function parseValue(value, options) {
  if (options.parseNumbers && !Number.isNaN(Number(value)) && typeof value === 'string' && value.trim() !== '') {
    value = Number(value);
  } else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
    value = value.toLowerCase() === 'true';
  }

  return value;
}

function parse(input, options) {
  options = Object.assign({
    decode: true,
    sort: true,
    arrayFormat: 'none',
    parseNumbers: false,
    parseBooleans: false
  }, options);
  const formatter = parserForArrayFormat(options); // Create an object with no prototype

  const ret = Object.create(null);

  if (typeof input !== 'string') {
    return ret;
  }

  input = input.trim().replace(/^[?#&]/, '');

  if (!input) {
    return ret;
  }

  for (const param of input.split('&')) {
    let [key, value] = split_on_first_default()(param.replace(/\+/g, ' '), '='); // Missing `=` should be `null`:
    // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters

    value = value === undefined ? null : decode(value, options);
    formatter(decode(key, options), value, ret);
  }

  for (const key of Object.keys(ret)) {
    const value = ret[key];

    if (typeof value === 'object' && value !== null) {
      for (const k of Object.keys(value)) {
        value[k] = parseValue(value[k], options);
      }
    } else {
      ret[key] = parseValue(value, options);
    }
  }

  if (options.sort === false) {
    return ret;
  }

  return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
    const value = ret[key];

    if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
      // Sort object keys, not values
      result[key] = keysSorter(value);
    } else {
      result[key] = value;
    }

    return result;
  }, Object.create(null));
}
const stringify = (object, options) => {
  if (!object) {
    return '';
  }

  options = Object.assign({
    encode: true,
    strict: true,
    arrayFormat: 'none'
  }, options);
  const formatter = encoderForArrayFormat(options);
  const keys = Object.keys(object);

  if (options.sort !== false) {
    keys.sort(options.sort);
  }

  return keys.map(key => {
    const value = object[key];

    if (value === undefined) {
      return '';
    }

    if (value === null) {
      return encode(key, options);
    }

    if (Array.isArray(value)) {
      return value.reduce(formatter(key), []).join('&');
    }

    return encode(key, options) + '=' + encode(value, options);
  }).filter(x => x.length > 0).join('&');
};
const parseUrl = (input, options) => {
  return {
    url: removeHash(input).split('?')[0] || '',
    query: parse(extract(input), options)
  };
};
// CONCATENATED MODULE: ./libraries/base/lib/utils/url.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isUrl; });
/* unused harmony export deliverUrlParams */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return url_open; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return openWithUrlParams; });

const protocolAndDomainRE = /^(?:\w+:)?\/\/(\S+)$/;
const localhostDomainRE = /^localhost[:?\d]*(?:[^:?\d]\S*)?$/;
const nonLocalhostDomainRE = /^[^\s.]+\.\S{2,}$/;
function isUrl(string) {
  if (typeof string !== 'string') {
    return false;
  }

  const match = string.match(protocolAndDomainRE);

  if (!match) {
    return false;
  }

  const everythingAfterProtocol = match[1];

  if (!everythingAfterProtocol) {
    return false;
  }

  return localhostDomainRE.test(everythingAfterProtocol) || nonLocalhostDomainRE.test(everythingAfterProtocol);
}
function deliverUrlParams(url) {
  const {
    url: link,
    query: originalQuery
  } = parseUrl(url);
  const query = { ...originalQuery,
    ...parseUrl(window.location.href).query
  };

  if (window.VISION && window.VISION.meta) {
    const {
      isTest,
      actKey,
      isEditor
    } = window.VISION.meta;
    query.vision_fr = `${actKey}${isTest ? '_test' : ''}${isEditor ? '_editor' : ''}`;
  }

  return `${link.endsWith('/') ? link.slice(0, link.length - 1) : link}?${stringify(query)}`;
}
function url_open(url, newTab = false) {
  if (!isUrl(url)) {
    return;
  }

  if (newTab) {
    window.open(url);
  } else {
    window.open(url, '_self');
  }
}
function openWithUrlParams(url, newTab = false) {
  if (!isUrl(url)) {
    return;
  }

  const link = deliverUrlParams(url);

  if (newTab) {
    window.open(link);
  } else {
    window.open(link, '_self');
  }
}

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createApp; });
/* harmony import */ var _assets_style_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(226);
/* harmony import */ var _assets_style_reset_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_style_reset_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tencent_imutils_src_util_26_tdw_report__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(219);
/* harmony import */ var _src_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(203);





window.addEventListener("load", init);

function init() {
  // 罗盘
  _tencent_imutils_src_util_26_tdw_report__WEBPACK_IMPORTED_MODULE_3__[/* tdwReport */ "a"].init({
    page: `[vision]${window.VISION.meta.actKey}`
  }); // badjs 上报

  if (window.BJ_REPORT) {
    window.BJ_REPORT.init({
      id: 1412
    });
  }
}

function createApp() {
  const container = document.createElement('div');
  container.id = 'app';
  document.body.appendChild(container);
  react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_src_app__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null), container);
}
 true || false;

/***/ }),

/***/ 38:
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

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventProxy; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @author elliothu@tencent.com
 * @date 2019-05-07
 * @desc 事件系统，用于全局通信
 */
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

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return pipeActions; });
/* unused harmony export generateHandler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return generateHandlers; });
/* harmony import */ var promise_timeout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(216);
/* harmony import */ var promise_timeout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(promise_timeout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _componentNodeMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _instanceMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(104);




const DEFAULT_MAX_TIMEOUT = 10 * 1000;
function pipeActions(iActions) {
  return async ({
    meta,
    global
  }) => {
    for (const {
      action: {
        action,
        maxTimeout = DEFAULT_MAX_TIMEOUT
      },
      key,
      data,
      target
    } of iActions) {
      const params = {
        data,
        key,
        global,
        meta,
        componentsMap: _componentNodeMap__WEBPACK_IMPORTED_MODULE_2__[/* componentNodeMap */ "a"],
        getComponentByKey: _componentNodeMap__WEBPACK_IMPORTED_MODULE_2__[/* getComponentNode */ "c"],
        target
      };

      if (typeof target === 'number') {
        Object.defineProperty(params, 'target', {
          value: {
            key: target,

            get instance() {
              return Object(_instanceMap__WEBPACK_IMPORTED_MODULE_3__[/* getComponentInstance */ "a"])(target);
            },

            get node() {
              return Object(_componentNodeMap__WEBPACK_IMPORTED_MODULE_2__[/* getComponentNode */ "c"])(target);
            }

          }
        });
      }

      try {
        if (maxTimeout === 'Infinity') {
          await action(params);
        } else {
          const p = action(params);

          if (p instanceof Promise) {
            await Object(promise_timeout__WEBPACK_IMPORTED_MODULE_0__["timeout"])(action(params), maxTimeout);
          }
        }
      } catch (e) {
        console.error('Action throw error: ', e);
      }
    }
  };
}
function generateHandler(actions, trigger) {
  if (!actions || !actions.length) {
    return undefined;
  }

  const iActions = actions.filter(a => a.trigger === trigger);

  if (!iActions.length) {
    return undefined;
  }

  return pipeActions(iActions);
}
function generateHandlers(actions) {
  const handlers = {};
  const onInit = generateHandler(actions, _types__WEBPACK_IMPORTED_MODULE_1__[/* BaseActionTrigger */ "a"].INIT);

  if (onInit) {
    handlers.onInit = onInit;
  }

  const onClick = generateHandler(actions, _types__WEBPACK_IMPORTED_MODULE_1__[/* BaseActionTrigger */ "a"].CLICK);

  if (onClick) {
    handlers.onClick = onClick;
  }

  const onMouseEnter = generateHandler(actions, _types__WEBPACK_IMPORTED_MODULE_1__[/* BaseActionTrigger */ "a"].MOUSE_ENTER);

  if (onMouseEnter) {
    handlers.onMouseEnter = onMouseEnter;
  }

  const onMouseLeave = generateHandler(actions, _types__WEBPACK_IMPORTED_MODULE_1__[/* BaseActionTrigger */ "a"].MOUSE_LEAVE);

  if (onMouseLeave) {
    handlers.onMouseLeave = onMouseLeave;
  }

  const onDoubleClick = generateHandler(actions, _types__WEBPACK_IMPORTED_MODULE_1__[/* BaseActionTrigger */ "a"].DOUBLE_CLICK);

  if (onDoubleClick) {
    handlers.onDoubleClick = onDoubleClick;
  }

  const onLongPress = generateHandler(actions, _types__WEBPACK_IMPORTED_MODULE_1__[/* BaseActionTrigger */ "a"].LONG_PRESS);

  if (onLongPress) {
    handlers.onLongPress = onLongPress;
  }

  const onEnterView = generateHandler(actions, _types__WEBPACK_IMPORTED_MODULE_1__[/* BaseActionTrigger */ "a"].ENTER_VIEW);

  if (onEnterView) {
    handlers.onEnterView = onEnterView;
  }

  const onLeaveView = generateHandler(actions, _types__WEBPACK_IMPORTED_MODULE_1__[/* BaseActionTrigger */ "a"].LEAVE_VIEW);

  if (onLeaveView) {
    handlers.onLeaveView = onLeaveView;
  }

  return handlers;
}

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return on; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _componentEventListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(100);
/* harmony import */ var _pageEventListener__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(102);
/* harmony import */ var _hotAreaEventListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(101);




function on(target, eventType, callback) {
  switch (target) {
    case _types__WEBPACK_IMPORTED_MODULE_0__[/* EventListenerTarget */ "a"].PAGE:
      {
        return Object(_pageEventListener__WEBPACK_IMPORTED_MODULE_2__[/* onPage */ "b"])(eventType, callback);
      }

    case _types__WEBPACK_IMPORTED_MODULE_0__[/* EventListenerTarget */ "a"].COMPONENT:
      {
        return Object(_componentEventListener__WEBPACK_IMPORTED_MODULE_1__[/* onComponent */ "b"])(eventType, callback);
      }

    case _types__WEBPACK_IMPORTED_MODULE_0__[/* EventListenerTarget */ "a"].HOT_AREA:
      {
        return Object(_hotAreaEventListener__WEBPACK_IMPORTED_MODULE_3__[/* onHotArea */ "b"])(eventType, callback);
      }

    default:
      {
        // eslint-disable-next-line
        throw `Invalid [target], must one of '${_types__WEBPACK_IMPORTED_MODULE_0__[/* EventListenerTarget */ "a"].PAGE}', '${_types__WEBPACK_IMPORTED_MODULE_0__[/* EventListenerTarget */ "a"].COMPONENT}', '${_types__WEBPACK_IMPORTED_MODULE_0__[/* EventListenerTarget */ "a"].HOT_AREA}'`;
      }
  }
}





/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return emitCustomEvent; });
/* harmony import */ var _actionHandler_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(68);

function emitCustomEvent(instance, trigger, global, meta) {
  const actions = instance.actions.filter(i => i.trigger === trigger);

  if (!actions.length) {
    return;
  }

  const handler = Object(_actionHandler_utils__WEBPACK_IMPORTED_MODULE_0__[/* pipeActions */ "b"])(actions);
  return handler({
    global,
    meta
  });
}

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyData; });
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(461);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function EmptyData({
  text
}) {
  return react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", {
    className: "material_empty_data"
  }, text || '无数据');
}

/***/ }),

/***/ 9:
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

/***/ })

/******/ })["default"];}