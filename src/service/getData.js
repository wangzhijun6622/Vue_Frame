import axios from 'axios'

/**
 * 格式化请求参数
 */
const resetSearchParams  = function (params) {
  let data = new URLSearchParams();
  for (let v in params){
    data.append(v, params[v]);
    console.log(v)
  }

  return data
}
/**
 * 区分生产环境和开发环境
 */
let api = '/api'
if (process.env.NODE_ENV === 'production') {
  api = ''
}
/**
 * 登陆
 */

export const login = (data) => axios.post(`${api}/background/dologin.html`,resetSearchParams(data))


