import axios from "axios"

export function request(config) {

  // 常见实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000
  })

  // 添加请求拦截器
  instance.interceptors.request.use(
    config => {
      return config;
    }, 
    err => {
      console.log(err);
    }
  )

  // 添加响应拦截器
  instance.interceptors.response.use(
    res => {
      return res.data;
    }, 
    err => {
      console.log(err);
    }
  )

  // 返回实例，等待调用实例
  return instance(config);
}