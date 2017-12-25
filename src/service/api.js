let base_url = 'http://115.182.66.198:18816'

if (process.env.NODE_ENV === 'production') {
  base_url = 'https://demo.solarule.cn/api/'
}

const axios = require('axios').create({
  baseURL: base_url,
  timeout: 10000,
  withCredentials: true, // 允许跨域 cookie
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  },
  transformResponse: [function(data) {
    let json = {};

    try {
      json = JSON.parse(data);
    } catch (e) {
      json = {};
    }

    if (json.msg === 'session error') {
      console.log('session error');
      router.push('/login');
    }

    return json;
  }],
});


// get
export const _get = (req) => {
  return axios({
    method: 'get',
    url: `/${req.url}`,
    data: req.data
  })
}

// put
export const _put = (req) => {
  return axios({
    method: 'put',
    url: `/${req.url}`,
    data: req.data
  })
}

// post
export const _post = (req) => {
  return axios({
    method: 'post',
    url: `/${req.url}`,
    data: req.data
  })
}

// delete
export const _delete = (req) => {
  return axios({
    method: 'delete',
    url: `/${req.url}`,
    data: req.data
  })
}

// patch
export const _patch = (req) => {
  return axios({
    method: 'patch',
    url: `/${req.url}`,
    data: req.data
  })
}
