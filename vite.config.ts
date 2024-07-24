import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import sourceCode from './plugins/source-code'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    sourceCode()//将 Markdown 文件中的代码示例转换为可显示在网页上的代码片段
  ],
  build: {
    outDir: 'lib',
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
    lib: {
      entry: './packages/index.ts',
      name: 'v-echarts',
    }
  },

})