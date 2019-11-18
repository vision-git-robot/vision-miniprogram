import { objToQuery } from './helper';
import speed from './speed';
// 小程序中所有页面跳转集合

const MAX_LEVEL = 8; // 小程序支持打开的页面层数
/** 跳转页面 */
function goPage(obj) {
  const pages = getCurrentPages();
  const len = pages.length;
  speed.reset();
  if (len < MAX_LEVEL) {
    wx.navigateTo(obj);
  } else {
    wx.redirectTo(obj);
  }
}

export function goCourseDetail(params) {
  const { cid, termId, chNo, subNo, taskNo, isCoding } = params;
  let url = `/pages/course/course?cid=${cid}`;
  // 如果有班级
  if (termId) {
    url += `&termId=${termId}`;
  }
  // 如果有章节
  if (chNo) {
    url += `&chNo=${chNo}&subNo=${subNo}&taskNo=${taskNo}`;
  }
  // 如果是 NEXT 学院(todo 可以去除此块逻辑， 详情页里面自己判断了是否next跳转)
  if (isCoding) {
    url += `&isCoding=${isCoding}`;
  }
  goPage({ url });
}

export function goLive(params) {
  const url = Object.keys(params).reduce((res, key, index) => {
    res += `${index ? '&' : '?'}${key}=${params[key]}`;
    return res;
  }, '/pages/live/live');
  goPage({ url });
}

/**
 * 刷新当前页面方法
 */
export function refresh() {
  const pages = getCurrentPages();
  const len = pages.length;
  const page = pages[len - 1];
  // console.log(objToQuery(page.options));
  wx.redirectTo({
    url: `/${page.route}?${objToQuery(page.options)}`,
  });
}

export function goCoursePkg(params) {
  const { pid } = params;
  goPage({
    url: `/pages/course-pkg/course-pkg?pid=${pid}`,
  });
}

/** 跳转到首页tab */
export function goHomeTab(params) {  // eslint-disable-line
  // const { from } = params;

  wx.switchTab({
    url: '/pages/index/index',
  });
}

/** 跳转到分类tab */
export function goCateTab(params) { // eslint-disable-line
  // const { from } = params;
  wx.switchTab({
    url: '/pages/cate/cate',
  });
}

/** 跳转到课程表tab */
export function goPlanTab(params) { // eslint-disable-line
  // const { from } = params;
  wx.switchTab({
    url: '/pages/plan/plan',
  });
}

export function goLogin() {
  wx.navigateTo({
    url: '/pages/login/login',
  });
}

export function goOrder(params) {
  wx.navigateTo({
    url: `/pages/order/order?${objToQuery(params)}`,
  });
}

export function goTeacher() {
  // {id}
  // 一期不开放
  // goPage({
  //   url: `/pages/teacher/teacher?teacherId=${id}`,
  // });
}

export function goAgency() {
  // { aid }
  // 一期不开放
  // goPage({
  //   url: `/pages/agency/agency?aid=${aid}`,
  // });
}

export function goList(params) {
  // params: { mt, st, tt, word }
  // 分类： 一级mt，二级st，三级tt
  goPage({
    url: `/pages/list/list?${objToQuery(params)}`,
  });
}

export function goNextMp(params) {
  wx.navigateToMiniProgram({
    appId: 'wxe7aa635b9dbc3a54',
    path: `pages/home/courseDetail/courseDetail?${objToQuery(params)}`,
  });
}

export function goWKMp() {
  wx.navigateToMiniProgram({
    appId: 'wx55b926152a8c3bef',
    path: 'pages/index/index?channel=762',
  });
}
