import axios from 'axios'
import qs from 'qs'

axios.interceptors.request.use(
  config => {
    config.headers['accessToken'] = localStorage.getItem('token')
    // 检查是否有需要发送为表单数据的字段
    if (config.headers['Content-Type'] === 'application/x-www-form-urlencoded' && config.data) {
      // 使用 qs 库或其他方法转换数据
      config.data = qs.stringify(config.data)
    }
    return config
  },
  error => {
    // 处理请求错误
    return Promise.reject(error)
  },
)

export default {
  install(app, options) {
    // 将 axios 添加到 Vue 应用的 globalProperties 上
    app.config.globalProperties.$axios = axios
  },
}
