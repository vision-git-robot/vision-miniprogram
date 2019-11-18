import { time33, getCookie, request, mmReport, badjs, monitor, login, isLogin } from '@tencent/imwxutils';
// import { goLogin } from './router';

function keFetch(url, data = {}, options = {}) {
  const reqTime = Date.now();
  let resTime;
  const bkn = time33(getCookie('uid_a2'));
  return request({ ...options, data: { ...data, bkn, r: Math.random() }, url })
    .then(res => {
      const { retcode, result } = res.data;
      resTime = Date.now();

      if (retcode === 0) {
        monitor.report(33632522); // 请求成功
        mmReport.report({ url, code: 0, type: 1, time: resTime - reqTime });
        // 请求成功 返回结果
        return result;
      }
      // 需要重新登录的错误码
      // if ([100000].indexOf(retcode) > -1) {
      //   goLogin();
      // }
      const err = new Error(`REQUEST_ERROR_RETCODE:${retcode}`);
      err.code = retcode;
      return Promise.reject(err);
    })
    .catch((err) => {
      // 返回码上报
      if (!resTime) {
        resTime = Date.now();
      }
      if (err.message.indexOf('REQUEST_ERROR_SERVER') > -1) { // 状态码错误
        const statusCode = err.message.split(':')[1];
        mmReport.report({ url, code: statusCode, type: 2, time: resTime - reqTime });
        badjs.error({
          msg: `url: ${url},
          data: ${JSON.stringify(data)}, statusCode: ${statusCode}`,
          ext: { msid: 33632523 },
        });
      } else if (err.message.indexOf('REQUEST_ERROR_RETCODE') > -1) { // 返回码错误
        const retcode = err.message.split(':')[1];
        mmReport.report({ url, code: retcode, type: 3, time: resTime - reqTime });
        if (retcode === '100000') {
          badjs.info({
            msg: `url: ${url},
            data: ${JSON.stringify(data)},retcode: ${retcode}`,
            ext: { msid: 33632524 },
          });
        } else {
          badjs.error({
            msg: `url: ${url},
            data: ${JSON.stringify(data)},retcode: ${retcode}`,
            ext: { msid: 33632524 },
          });
        }
      }

      return Promise.reject(err);
    });
}

function wkLogin() {
  return login({
    loginCgi: 'https://ke.qq.com/cgi-proxy/login_by_jscode',
  });
}

function wxSetCookie(key, value) {
  // eslint-disable-next-line no-sync
  return wx.setStorageSync(key, value);
}

function wxGetCookie(key) {
  // eslint-disable-next-line no-sync
  return wx.getStorageSync(key) || '';
}

function wxRmCookie(key) {
  // eslint-disable-next-line no-sync
  return wx.removeStorageSync(key);
}

function isLogined() {
  // oginType: 0：微信，1：QQ轻应用
  return isLogin(0);
}

export {
  keFetch,
  wkLogin,
  isLogined,
  wxSetCookie,
  wxGetCookie,
  wxRmCookie,
};
