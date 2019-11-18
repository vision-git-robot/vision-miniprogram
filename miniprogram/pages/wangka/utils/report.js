import { tdw } from '@tencent/imwxutils';
import { queryToObj } from './helper';

const _exposure = {
  comps: Object.create(null),
  observe(observer, targetSelector) {
    observer.observe(targetSelector, (res) => {
      if (res.intersectionRatio > 0) {
        let report = res.dataset.report || observer._component.dataset.report || ''; // 组件内部dataset | 组件外部dataset
        if (typeof report === 'string') {
          report = queryToObj(report);
        }
        let reportObj = report;
        reportObj = observer._component.onExposureReport(reportObj) || reportObj;
        tdw.report({
          action: 'exposure',
          ...reportObj,
        });
        observer.disconnect();
      }
    });
  },
  register(context, targetSelector, margins) {
    const observer = context.createIntersectionObserver({ observeAll: true });
    observer.relativeToViewport(margins);
    observer.targetSelector = targetSelector;
    const compId = context.__wxExparserNodeId__;
    let observers = this.comps[compId];
    if (!observers) {
      observers = Object.create(null, {
        length: {
          writable: true,
          enumerable: false, // 不可枚举,避免Object.keys访问到
          value: 0,
        },
      });
      this.comps[compId] = observers;
    }
    observers[targetSelector] = observer;
    observers.length++;

    this.observe(observer, targetSelector);
  },
  unregister(context, targetSelector) {
    const compId = context.__wxExparserNodeId__;
    const observers = this.comps[compId];
    if (observers) {
      const _unregister = (selector) => {
        const observer = observers[selector];
        if (observer) {
          observer.disconnect();
          delete observers[selector];
          observers.length--;
        }
      };
      if (targetSelector) {
        _unregister(targetSelector);
      } else {
        Object.keys(observers).forEach((selector) => _unregister(selector));
      }
      if (observers.length === 0) {
        delete this.comps[compId];
      }
    }
  },
};

// const _click = {
//   pages: Object.create(null),
//   register(context) {
//     const query = context.createSelectorQuery();
//     // debugger
//   },
//   unregister(context) {

//   },
// };

/**
 * 组件曝光上报Behavior
 */
export const exposureBehavior = Behavior({
  lifetimes: {
    ready() {
      _exposure.register(this, '.report-exposure');
    },
    detached() {
      _exposure.unregister(this);
    },
  },
  methods: {
    observeExposure(targetSelectors, margins = {}) {
      if (!targetSelectors) {
        return;
      }
      if (typeof targetSelectors === 'string') {
        _exposure.unregister(this, targetSelectors);
        _exposure.register(this, targetSelectors, margins);
      } else if (Array.isArray(targetSelectors)) {
        targetSelectors.forEach((targetSelector) => {
          _exposure.unregister(this, targetSelector);
          _exposure.register(this, targetSelector, margins);
        });
      }
    },
    deobserveExposure() {
      _exposure.unregister(this);
    },
    onExposureReport() {},
  },
});

/**
 * 组件点击上报Behavior
 */
export const clickBehavior = Behavior({
  lifetimes: {
    ready() {
    },
    detached() {
    },
  },
  methods: {
    onClickReport() {},
  },
});
