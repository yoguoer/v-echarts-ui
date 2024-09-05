import path from 'path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { alias } from '../../scripts';

export default defineConfig({
    plugins: [vue()],
    build: {
      rollupOptions: {
        output: {
          // 根据不同的格式设置不同的目录
          entryFileNames: '[name].[format].js', // 为每种格式指定不同的文件名模板
          chunkFileNames: '[name]-[hash].[format].js', // 同样为chunks指定不同的文件名模板
        },
        manualChunks: {
          vue: ['vue', 'vue-router'],
          'v-echarts-ui': ['v-echarts-ui'],
        },
        external: ['vue'], // 打包结果排除第三方包，不打包 'vue'
      },
      //库模式: https://cn.vitejs.dev/guide/build.html#library-mode
      lib: {
        //打包纯组件(供用户在业务项目中安装、导入、使用的组件)，入口是 /components/index.(js/ts)
        entry: path.resolve(__dirname, './index.ts'),
        name: 'vEchartsCommonCharts',
        fileName: (format: string) => `vEcharts-v-echarts-ui.${format}.js`, // 根据格式自定义文件名
        formats: ['es', 'cjs'], // 构建输出 es、cjs、umd、iife 格式的包
      },
    },
    resolve: {
      alias: alias,
    },
});
