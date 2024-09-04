# 筛选项配置方法

## 单个筛选项

​	提供了 `vBasicComponent`  组件，支持渲染你所能想到的所有类型的组件，包括自定义组件。

### 使用示例

<vEcharts-demo
  demo-height="300px"
  source-code="common-charts:::BasicComponent/Basic-demo"
/>

## 多个筛选项

​	提供了 `vSearch` 组件，其内置了  `vBasicComponent`  组件，能够支持 `elementPlus` 中的各种组件，通过一个二维数组，能够渲染出一个含多种不同参数的表单，帮助你进行多参数筛选，根据条件渲染出不同的图表。

### 使用示例

<vEcharts-demo
  demo-height="300px"
  source-code="common-charts:::Search/Search-demo"
/>