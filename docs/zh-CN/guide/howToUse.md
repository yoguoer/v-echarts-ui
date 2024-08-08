# 环境准备

::: tip 当前封装所使用的库版本
node 版本为：v18.20.2

element-plus 版本为：2.7.7

vue 版本为：3.4.31"
:::

## 安装

### 1. 安装 v-echarts

```js [NPM]
# npm
npm install v-echarts
```

```js [Yarn]
# yarn
yarn install v-echarts
```

```js [PNPM]
# pnpm
pnpm install v-echarts
```

### 2. 安装相关依赖

```js [NPM]
npm install element-plus
```

```js [Yarn]
yarn add element-plus
```

```js [PNPM]
pnpm install element-plus
```

### 注意

::: danger 关于 npm 镜像源
v-echarts 发布在私有 npm 镜像中，下载该包之前先切换 npm 镜像源
:::

如果你使用的私有 npm 仓库，请先将镜像源切换到你的私有 npm 仓库，推荐使用 [nrm](https://www.npmjs.com/package/nrm)  来管理你的镜像源。

你可以按照以下步骤使用 nrm 切换镜像源：

1. 全局安装nrm包：

   ```shell
   npm install -g nrm
   ```

2. 查看nrm的包源

   ```shell
   nrm ls // 查看当前npm的包源
   ```

3. 添加 npm 镜像源，将你的 npm 私有仓库地址添加到 nrm:

   ```shell
   nrm add your-private-npm http://your-private-npm-domain/
   ```

   > 将以上 `your-private-npm` 替换成你的镜像源名称（自定义），`http://your-private-npm-domain/` 替换成你的 npm 仓库地址

4. 使用 nrm 切换成私有 npm 仓库：

   ```shell
   nrm use your-private-npm
   ```

5. 安装以上步骤安装 XW-UI

   ```shell
   npm install xw-ui
   ```

6. 安装相关依赖

   ```shell
   # 切换镜像源到 npm 下载相关依赖
   nrm use npm
   # 安装相关依赖
   npm install element-plus
   ```

   

## 快速开始

::: danger 关于依赖库
组件库打包时会对第三方包如 `element-plus` 、`vue` 进行 `externals` 处理，所以 v-echarts 源代码中没有将 Vue 相关代码打包。

务必保证使用组件的项目中导入必须要的第三方库。
:::



v-echarts 的 Vue3 组件库是基于 [Element Plus](https://element-plus.org/zh-CN/guide/quickstart.html) 进行二次封装，因此在使用 v-echarts 之前，需要将 Element Plus 完整导入到你的项目。

**完整导入 Element Plus**

在 main.js 中写入以下内容：

```javascript{3-4,9}
// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
```
