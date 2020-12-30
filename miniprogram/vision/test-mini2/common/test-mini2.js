module.exports = function(window, document) {const App = function(options) {window.appOptions = options};var HTMLElement = window.HTMLElement;var Element = window.Element;var localStorage = window.localStorage;var sessionStorage = window.sessionStorage;var navigator = window.navigator;var location = window.location;var performance = window.performance;var Image = window.Image;var CustomEvent = window.CustomEvent;var Event = window.Event;window["createApp"] =
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
/******/ 		1: 0
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
/******/ 	deferredModules.push([214,0,2]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 105:
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

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return emitCustomEvent; });
/* harmony import */ var _actionHandler_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70);

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

/***/ 107:
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

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return onPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return emitPage; });
/* harmony import */ var _utils_eventProxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);

const pageEvents = new _utils_eventProxy__WEBPACK_IMPORTED_MODULE_0__[/* EventProxy */ "a"]();
function onPage(eventType, callback) {
  pageEvents.on(eventType, callback);
}
function emitPage(eventType, params) {
  pageEvents.emit(eventType, params);
}

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return onComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return emitComponent; });
/* harmony import */ var _utils_eventProxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
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

/***/ 151:
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: styleOBj
  }, children);
}

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

// EXTERNAL MODULE: ./handlers/shared/eventListener/types.js
var types = __webpack_require__(44);

// EXTERNAL MODULE: ./handlers/shared/eventListener/pageEventListener.js
var pageEventListener = __webpack_require__(149);

// EXTERNAL MODULE: ./handlers/shared/eventListener/componentEventListener.js
var componentEventListener = __webpack_require__(150);

// EXTERNAL MODULE: ./handlers/shared/eventListener/hotAreaEventListener.js
var hotAreaEventListener = __webpack_require__(208);

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
var hotAreaNodeMap = __webpack_require__(80);

// CONCATENATED MODULE: ./handlers/shared/actionParams.js
/* unused harmony export ACTION_TRIGGER_PREFIX */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return generateComponentActionParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return generateHotareaActionParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return generatePluginParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return generatePluginEventListenerCallbackParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getComponentData; });
/* unused harmony export getHotAreaData */
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

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* unused harmony export renderToString */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _handlers_reactHandlers_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(206);
/* harmony import */ var _handlers_shared_injectStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(148);
/* harmony import */ var _handlers_shared_instanceMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(105);
/* harmony import */ var _handlers_shared_selectVersion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(205);
/* harmony import */ var _libraries_base_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(210);
// Import Libs and Handlers




 // Import Components

 // Import Plugins
// Import Actions

let ReactDOMServer;

if (process.env.SSR) {
  // TODO: Remove
  __webpack_require__(222);

  ReactDOMServer = __webpack_require__(395);
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
  "title": "测试小程序",
  "desc": "123123",
  "start": new Date('Thu Dec 24 2020 16:52:59 GMT+0800 (GMT+08:00)'),
  "end": new Date('Wed Dec 30 2020 16:52:59 GMT+0800 (GMT+08:00)'),
  "actId": 5,
  "actKey": "test-mini2",
  "containerType": "mp",
  "isTemplate": false,
  "isEditor": false,
  "isTestEnv": false
};
const _global = {}; // Inject JIMU_Vars

if (typeof window !== 'undefined') {
  if (!window['JIMU_VARS']) {
    Object.defineProperty(window, 'JIMU_VARS', {
      value: {
        "key": "test-mini2",
        "actStartTime": "2020-12-24T08:52:59.000Z",
        "actEndTime": "2020-12-30T08:52:59.000Z",
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
  "20": {
    "component": _libraries_base_components_Button__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"],
    "id": 20,
    "projId": 2,
    "projKey": "base",
    "name": "Button",
    "info": {
      "name": "按钮",
      "desc": "基础按钮组件",
      "author": "elliothu"
    }
  }
}; // Plugin

const plugins = {}; // InstanceMap { [versionId]: { componentInstances: [], pluginInstances: [] } }

const instanceVersionMap = {
  "dbd7dafe": {
    "componentInstances": [{
      "key": 0,
      "component": components['20'],
      "data": {
        "text": "按钮",
        "isMpTab": false
      },
      "style": {},
      "commonStyle": {
        "maxWidth": "100%",
        "borderRadius": "25px",
        "margin": "16px 32px 16px 32px",
        "padding": "0px 40px 0px 40px",
        "color": "#FFFFFF",
        "fontSize": "18px",
        "lineHeight": "46px",
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
      "fixedWrapperStyle": {},
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_handlers_reactHandlers_render__WEBPACK_IMPORTED_MODULE_1__[/* AppRender */ "a"], {
    componentInstances: componentInstances,
    pluginInstances: pluginInstances,
    global: _global,
    meta: meta
  });
}
function renderToString() {
  return ReactDOMServer.renderToString(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(153)))

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventEmitTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return events; });
/* harmony import */ var _eventProxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);

const EventEmitTypes = {
  COMPONENT_INTERSECTING_CHANGE: 'component_intersecting_change',
  HOT_AREA_INTERSECTING_CHANGE: 'hot_area_intersecting_change'
};
const events = new _eventProxy__WEBPACK_IMPORTED_MODULE_0__[/* EventProxy */ "a"]();

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return selectVersion; });
function selectVersion(instanceVersionMap, versionId) {
  const versionIds = Object.keys(instanceVersionMap);
  const useVersion = versionIds.indexOf(versionId) > -1 ? versionId : versionIds[0];
  return instanceVersionMap[useVersion];
}

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRender; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actionHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(212);
/* harmony import */ var _adaptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(211);
/* harmony import */ var _shared_componentEventActionEmitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(107);
/* harmony import */ var _shared_customEventTrigger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(106);
/* harmony import */ var _shared_eventListener__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(149);
/* harmony import */ var _shared_eventListener__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44);
/* harmony import */ var _PositionHandler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(151);
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
    const content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, {
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
    }, children.map(childInstance => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ComponentItem, {
      key: childInstance.key,
      instance: childInstance,
      meta: meta,
      global: global,
      slot: childInstance.slot
    })));
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_actionHandler__WEBPACK_IMPORTED_MODULE_1__[/* ComponentActionHandler */ "a"], {
      instance: instance,
      meta: meta,
      global: global
    }, position ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PositionHandler__WEBPACK_IMPORTED_MODULE_7__[/* PositionHandler */ "a"], {
      positionStyle: position,
      instance: instance
    }, content) : content);
  }

  const content = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_actionHandler__WEBPACK_IMPORTED_MODULE_1__[/* ComponentActionHandler */ "a"], {
    instance: instance,
    meta: meta,
    global: global
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_adaptor__WEBPACK_IMPORTED_MODULE_2__[/* Adaptor */ "a"], {
    instance: instance,
    injectProps: injectProps,
    meta: meta,
    global: global
  }));

  if (position) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PositionHandler__WEBPACK_IMPORTED_MODULE_7__[/* PositionHandler */ "a"], {
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, componentInstances.map(instance => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ComponentItem, {
    key: instance.key,
    instance: instance,
    meta: meta,
    global: global
  })));
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(76)))

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return onHotArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return emitHotArea; });
/* harmony import */ var _utils_eventProxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
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

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: F:/Tencent/vision/external/workspace/libraries/materials-base/node_modules/react/index.js
var react = __webpack_require__(2);

// EXTERNAL MODULE: F:/Tencent/vision/external/workspace/libraries/materials-base/node_modules/antd-mobile/lib/button/index.js
var lib_button = __webpack_require__(201);
var button_default = /*#__PURE__*/__webpack_require__.n(lib_button);

// EXTERNAL MODULE: F:/Tencent/vision/external/workspace/libraries/materials-base/node_modules/strict-uri-encode/index.js
var strict_uri_encode = __webpack_require__(202);
var strict_uri_encode_default = /*#__PURE__*/__webpack_require__.n(strict_uri_encode);

// EXTERNAL MODULE: F:/Tencent/vision/external/workspace/libraries/materials-base/node_modules/decode-uri-component/index.js
var decode_uri_component = __webpack_require__(203);
var decode_uri_component_default = /*#__PURE__*/__webpack_require__.n(decode_uri_component);

// EXTERNAL MODULE: F:/Tencent/vision/external/workspace/libraries/materials-base/node_modules/split-on-first/index.js
var split_on_first = __webpack_require__(204);
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
function deliverUrlParams(url, params = null) {
  const {
    url: link,
    query: originalQuery
  } = parseUrl(url);
  let query = { ...originalQuery,
    ...parseUrl(window.location.href).query
  };

  if (params) {
    query = { ...query,
      ...params
    };
  }

  ;

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
    window.location.href = url;
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
// EXTERNAL MODULE: F:/Tencent/vision/external/workspace/libraries/materials-base/node_modules/antd-mobile/lib/button/style/css.js
var css = __webpack_require__(440);

// EXTERNAL MODULE: ./libraries/base/components/Button/view/index.scss
var view = __webpack_require__(447);

// CONCATENATED MODULE: ./libraries/base/components/Button/view/index.js






function Button({
  data,
  commonStyle
}) {
  const {
    text,
    link,
    newTable,
    deliverParams = true,
    mpLink,
    isMpTab
  } = data;

  const onClick = () => {
    if (true) {
      const mpParams = {
        url: mpLink,

        fail() {
          // switchTab 跳转失败时尝试 navigateTo
          if (isMpTab) {
            wx.navigateTo({
              url: mpLink
            });
          }
        }

      };
      return isMpTab ? wx.switchTab(mpParams) : wx.navigateTo(mpParams);
    }

    return deliverParams ? openWithUrlParams(link, newTable) : url_open(link, newTable);
  };

  return react["createElement"](react["Fragment"], null, react["createElement"](button_default.a, {
    className: "impage-material-button",
    onClick: onClick,
    style: commonStyle
  }, text));
}

/* harmony default export */ var Button_view = (Button);
// EXTERNAL MODULE: F:/Tencent/vision/external/workspace/libraries/materials-base/node_modules/@sentry/browser/esm/sdk.js + 33 modules
var sdk = __webpack_require__(457);

// EXTERNAL MODULE: F:/Tencent/vision/external/workspace/libraries/materials-base/node_modules/@sentry/minimal/esm/index.js
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


// CONCATENATED MODULE: ./libraries/base/components/Button/index.js



/* harmony default export */ var components_Button = __webpack_exports__["a"] = (props => {
  return react["createElement"](errReport_ErrorBoundary, null, react["createElement"](Button_view, props));
});

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: F:/Tencent/vision/external/workspace/libraries/materials-base/node_modules/react/index.js
var react = __webpack_require__(2);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./handlers/shared/componentEventActionEmitter.js
var componentEventActionEmitter = __webpack_require__(107);

// EXTERNAL MODULE: ./handlers/shared/componentNodeMap.js
var componentNodeMap = __webpack_require__(17);

// EXTERNAL MODULE: ./handlers/shared/customEventTrigger.js
var customEventTrigger = __webpack_require__(106);

// EXTERNAL MODULE: ./handlers/shared/eventListener/hotAreaEventListener.js
var hotAreaEventListener = __webpack_require__(208);

// EXTERNAL MODULE: ./handlers/shared/utils/events.js
var events = __webpack_require__(20);

// EXTERNAL MODULE: ./handlers/shared/actionHandler/types.js
var types = __webpack_require__(7);

// EXTERNAL MODULE: ./handlers/shared/actionHandler/utils.js
var utils = __webpack_require__(70);

// EXTERNAL MODULE: ./handlers/shared/actionParams.js + 1 modules
var actionParams = __webpack_require__(18);

// EXTERNAL MODULE: ./handlers/shared/utils/common.js
var common = __webpack_require__(19);

// EXTERNAL MODULE: ./handlers/shared/hotAreaNodeMap.js
var hotAreaNodeMap = __webpack_require__(80);

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
    return react["createElement"](elementType, {
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
  const hotAreas = component.__implementHotArea ? react["createElement"](HotAreas, {
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
// EXTERNAL MODULE: F:/Tencent/vision/external/workspace/libraries/materials-base/node_modules/lodash.template/index.js
var lodash_template = __webpack_require__(209);
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
    return react_default.a.createElement("div", {
      ref: this.setNode
    });
  }

}
// CONCATENATED MODULE: ./handlers/reactHandlers/adaptor/index.jsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Adaptor; });



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

  throw new Error(`Invalid runtime [${runtime}]`);
}

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentActionHandler; });
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(452);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_componentNodeMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _shared_eventListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(150);
/* harmony import */ var _shared_utils_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var _shared_utils_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20);
/* harmony import */ var _shared_actionHandler_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var _shared_actionHandler_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(70);
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
    return react__WEBPACK_IMPORTED_MODULE_1__["createElement"](elementType, {
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
    }, ramda__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](rest) ? children : react__WEBPACK_IMPORTED_MODULE_1__["Children"].map(children, child => react__WEBPACK_IMPORTED_MODULE_1__["cloneElement"](child, rest)));
  }

}

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(198);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(199);
/* harmony import */ var _assets_style_reset_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(220);
/* harmony import */ var _assets_style_reset_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_style_reset_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_style_vision_mp_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(221);
/* harmony import */ var _assets_style_vision_mp_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_style_vision_mp_css__WEBPACK_IMPORTED_MODULE_4__);
/**
 * Created By Vision CLI
 * Issues and merge requests are welcomed：https://git.code.oa.com/impage/vision
 *
 * API 参考：
 * http://vision.oa.com/docs/dev-container/#
 */

 // ⚠️ 请勿修改，引入自动生成的 App




function createApp() {
  const container = document.createElement('div');
  container.id = 'app';
  document.body.appendChild(container);
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_app__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null), container);
} // 你也可以在此文件中进行一些初始化操作：
// 如引入公共样式、初始化上报等。

/***/ }),

/***/ 43:
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

/***/ 44:
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

/***/ 447:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return pipeActions; });
/* unused harmony export generateHandler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return generateHandlers; });
/* harmony import */ var promise_timeout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(207);
/* harmony import */ var promise_timeout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(promise_timeout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _instanceMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(105);
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

/***/ 80:
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

/***/ })

/******/ })["default"];}