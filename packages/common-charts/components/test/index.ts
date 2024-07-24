import Test from './src/index.vue'
import { withInstall } from '../../withInstall'

// 使用 withInstall 注册组件并导出组件
const vEchartsTest = withInstall(Test)
export default vEchartsTest

