import { keFetch } from './imwxutils';

export default {
  // 拉取sas配置数据
  getSasData() {
    return keFetch('https://sas.qq.com/cgi-bin/ke_operation_570', {}, {
      timeout: 5000,
    });
  },
  // 报名免费课程
  getFreeCourse(id, termid) {
    const params = {
      course_id: id,
      term_id: termid,
      courseId: id,
      termId: termid,
      aid: 0,
      productType: '',
      source: 4,
      platform: 100,
      monitor: JSON.stringify({
        platform: 7,
        phonetype: 'ios',
        environment: 'wx',
        opername: 'edu',
      }),
      ios_h5: 0,
      report: JSON.stringify({
        platform: 100,
        monitor: JSON.stringify({
          platform: 7,
          phonetype: 'ios',
          environment: 'wx',
          opername: 'edu',
        }),
      }),
      order_report: JSON.stringify({
        os: 3,
        entrance: 0,
        scenes: 0,
        sub_scenes: 0,
      }),
      productid: JSON.stringify({
        fid: id,
        sid: termid,
        type: 'course',
      }),
    };
    return keFetch(
      'https://m.ke.qq.com/cgi-bin/apply_course_sect',
      params,
      {
        method: 'POST',
      });
  },
  // 免费领取付费课程
  getVipCourse(id, termid) {
    return keFetch('https://ke.qq.com/cgi-proxy/pay_access/present', {
      productid: JSON.stringify({
        type: 'course',
        fid: String(id),
        sid: String(termid),
      }),
    }, { method: 'POST' });
  },
  // 获取用户手机号
  getUserPhone({ openid, encryptedData, iv }) {
    const params = {
      xcxAppId: 'wxa2c453d902cdd452',
      account: openid,
      accountType: 1,
      encryptedData,
      iv,
    };
    // return keFetch('https://ke.qq.com/cgi-proxy/get_user_phonenum', params);
    return keFetch('https://ke.qq.com/cgi-proxy/activity/get_set_phonenum', params);
  },
  // 校验王卡用户
  checkWKUser(phoneNum) {
    return keFetch('https://ke.qq.com/cgi-proxy/activity/get_wk_siminfo', { phoneNum }, {
      timeout: 5000,
    });
  },
};
