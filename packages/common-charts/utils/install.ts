import type { App } from 'vue';
import vEchartsTest from '../components/test'
import vBar from '../components/Bar'
import vLine from '../components/Line'
import vPie from '../components/Pie'
import vGauge from '../components/Gauge'

// 存储组件列表
export const components = [
    vEchartsTest,
    vBar,
    vLine,
    vPie,
    vGauge
]

// 插件注册：在 Vue 项目的入口文件中，通过 ( app.use(插件) ) 进行注册
export const installComponents = (app: App) => {
  components.forEach((comp: any) => {
    // app.component(comp.name as string, comp)
    app.use(comp)
  })
}

// 导出组件
export const installer = (app: any, router?: any) => {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  installComponents(app)
}

