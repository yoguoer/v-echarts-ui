import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import '../style/tailwind.css'
import axiosPlugin from './plugins/axios.ts'

const app = createApp(App)
// 使用 Element Plus
app.use(ElementPlus)

// 使用 Axios 插件
app.use(axiosPlugin)

// 使用路由
app.use(router)

// 挂载 Vue 应用
app.mount('#app')
