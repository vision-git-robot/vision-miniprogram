import { speed } from '@tencent/imwxutils';

const customPoints = {};
let basePoint; // 自定义点的基准
let startPoints = {};
let endPoints = {};

function calPoints(points, timeObj) {
  Object.keys(points).forEach((pointName) => {
    const startPoint = startPoints[`${pointName}Start`];
    const endPoint = endPoints[`${pointName}End`];
    let time;
    if (startPoint && endPoint) {
      time = endPoint - startPoint;
    } else if (startPoint && !endPoint) {
      time = startPoint - basePoint;
    } else if (!startPoint && endPoint) {
      time = endPoint - basePoint;
    }
    if (time) {
      const index = points[pointName];
      timeObj[index] = Math.max(time, 1);
    }
  });
}

export default {
  init() {
    const sysInfo = wx.getSystemInfoSync(); // eslint-disable-line
    speed.config({
      appid: 20566,
      device: sysInfo.model || '',
    });
    this.reset();
  },
  report(pageid) {
    const pointsTime = {};
    calPoints(customPoints[pageid], pointsTime);
    speed.report(pointsTime, { isdFlags: pageid });
  },
  register(pageid, points) {
    Object.assign(customPoints, {
      [pageid]: points,
    });
  },
  reset() {
    basePoint = Date.now();
    startPoints = {};
    endPoints = {};
  },
  markStart(p) {
    startPoints[`${p}Start`] = Date.now();
  },
  markEnd(p) {
    endPoints[`${p}End`] = Date.now();
  },
  mark(p) {
    this.markEnd(p);
  },
};
