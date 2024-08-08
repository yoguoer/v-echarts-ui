import Bar from './src/index.vue'
import { withInstall } from '../../utils/withInstall'

// 使用 withInstall 注册组件并导出组件
const vBar = withInstall(Bar)
export default vBar

