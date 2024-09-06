# 环境准备

::: tip 当前封装所使用的库版本

- **Node.js**: v18.20.2
- **Element Plus**: 2.7.7
- **Vue**: 3.4.31
- **ECharts**: 5.5.1

:::

## 安装

### 1. 安装 v-echarts-ui

为了使用`v-echarts-ui`组件库，你需要先将其安装到你的项目中。根据你的包管理工具，选择以下命令之一执行：

```bash
# npm
npm install v-echarts-ui
```

```bash
# yarn
yarn install v-echarts-ui
```

```bash
# pnpm
pnpm install v-echarts-ui
```

### 2. 安装相关依赖

由于`v-echarts-ui`依赖于`element-plus`和`echarts`，你还需要安装这些库。

#### 安装 element-plus

```bash
npm install element-plus
```

```bash
yarn add element-plus
```

```bash
pnpm install element-plus
```

#### 安装 echarts

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

v-echarts-ui 已经发布到 npm 镜像中，下载该包之前需要先切换到特定的 npm 镜像源。

推荐使用`nrm`（npm registry manager）来管理npm镜像源。

:::

#### 公有镜像

如果你正在使用私有npm仓库，但在安装`v-echarts-ui`及其依赖时需要切换到公有npm仓库，可以使用以下命令：

1. 切换到 npm 镜像。

```bash
nrm use npm
```

2. 下载 v-echarts-ui

```bash
npm install  v-echarts-ui
```

3. 安装相关依赖

```bash
# 切换镜像源到 npm 下载相关依赖
nrm use npm
# 安装相关依赖
npm install element-plus
npm install echarts
```

#### 私有镜像

如果你的项目依赖于私有npm仓库，你需要先全局安装`nrm`，然后添加并切换到你的私有npm镜像源。

可以按照以下步骤使用 nrm 切换镜像源：

1. 全局安装 nrm包：

   ```bash
   npm install -g nrm
   ```

2. 查看 nrm 的包源

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

5. 登录你的 npm 

   ```bash
   npm login
   ```

6. 完成以上步骤后，安装 v-echarts-ui

   ```bash
   npm install  v-echarts-ui
   ```

7. 安装相关依赖

   ```bash
   # 切换镜像源到 npm 下载相关依赖
   nrm use npm
   # 安装相关依赖
   npm install element-plus
   npm install echarts
   ```
   
   
