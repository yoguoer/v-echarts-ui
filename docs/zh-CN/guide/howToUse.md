# 环境准备

::: tip 当前封装所使用的库版本
node 版本为：v18.20.2

element-plus 版本为：2.7.7

vue 版本为：3.4.31
:::

## 安装

### 1. 安装 v-echarts-library

```bash
# npm
npm install v-echarts-library
```

```bash
# yarn
yarn install v-echarts-library
```

```bash
# pnpm
pnpm install v-echarts-library
```

### 2. 安装相关依赖

#### element-plus

```bash
npm install element-plus
```

```bash
yarn add element-plus
```

```bash
pnpm install element-plus
```

#### echarts

```bash
npm install echarts
```

```bash
yarn add echarts
```

```bash
pnpm install echarts
```

### 注意

::: danger 关于 npm 镜像源
v-echarts-library 发布在私有 npm 镜像中，下载该包之前先切换 npm 镜像源
:::

如果你使用的私有 npm 仓库，请先将镜像源切换到你的私有 npm 仓库，推荐使用 [nrm](https://www.npmjs.com/package/nrm)  来管理你的镜像源。

你可以按照以下步骤使用 nrm 切换镜像源：

1. 全局安装nrm包：

   ```bash
   npm install -g nrm
   ```

2. 查看nrm的包源

   ```bash
   nrm ls // 查看当前npm的包源
   ```

3. 添加 npm 镜像源，将你的 npm 私有仓库地址添加到 nrm:

   ```bash
   nrm add your-private-npm http://your-private-npm-domain/
   ```

   > 将以上 `your-private-npm` 替换成你的镜像源名称（自定义），`http://your-private-npm-domain/` 替换成你的 npm 仓库地址

4. 使用 nrm 切换成私有 npm 仓库：

   ```bash
   nrm use your-private-npm
   ```

5. 安装以上步骤安装 v-echarts-library

   ```bash
   npm install  v-echarts-library
   ```

6. 安装相关依赖

   ```bash
   # 切换镜像源到 npm 下载相关依赖
   nrm use npm
   # 安装相关依赖
   npm install element-plus
   ```

   
