# 使用图表

​	在使用本指南之前，请确保已经成功安装了`v-echarts-ui`和`echarts`库。这两个库将帮助我们在 Vue 项目中轻松集成和使用各种图表。

> 如果尚未安装，可以使用以下命令：
>
> ```bash
> # npm 
> npm install v-echarts-ui echarts  
> # yarn  
> yarn add v-echarts-ui echarts
> # pnpm
> pnpm install v-echarts-ui
> ```

## 引入 v-echarts-ui

​	在 Vue 项目的入口文件（通常是`main.ts`或`main.js`）中，引入`v-echarts-ui`和`ElementPlus`：

```typescript
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { vCommonChartsInstall } from 'v-echarts-ui'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
// 注册 v-echarts-ui 所有组件
vCommonChartsInstall(app)
app.mount('#app')
```

## 在组件中使用图表

​	引入之后，我们就可以可以直接在组件中需要用到图表的地方直接引入对应图表了。

### 示例：使用柱状图（vBar）

#### 模板部分

在 Vue 组件的模板中，可以直接使用`vBar`组件来展示柱状图。通过`props`传递数据和配置选项。

```typescript
<template>  
  <vBar  
    :data="chartData"  
    :params="params"  
    :height="height"  
    :width="width"  
    :showCheckbox="true"  
    :id="id"  
    :loading="loading"  
  />  
</template>
```

#### 脚本部分

在`<script setup>`中，我们需要引入`vBar`组件，并定义用于图表的数据和配置。

```typescript
<script setup lang="ts">  
import { vBar } from 'v-echarts-ui'  
import { computed, onMounted, ref } from 'vue';  
  
// 图表ID  
const id = 'BarStack';  
  
// 图表数据  
const chartData = ref<any>({});  
  
// 图表尺寸  
const width = '100%';  
const height = '400px';  
  
// 加载状态  
const loading = ref(true);  
  
// 图表配置参数  
const params = computed(() => {  
  return {  
    showToolBox: true,   
    isCross: false,  
    stackLabel: ['none', 'apply', 'apply', 'standard'],  
    dataset: false,  
    showAverage: false,  
  };  
});  
  
// 异步获取数据  
async function getData() {  
  try {  
    chartData.value = {  
      xAxis: ['管理室', '数字化室'],  
      series: [  
        { name: '打卡工时', data: [220, 430] },  
        { name: '项目工时', data: [80, 247] },  
        { name: '平台工时', data: [144, 20] },  
        { name: '标准工时', data: [18, 17.64] },  
      ],  
    };  
    loading.value = false; // 数据加载完成后关闭加载状态  
  } catch (error) {  
    console.error('获取数据失败:', error);  
  }  
}  
  
// 组件挂载后获取数据  
onMounted(() => {  
  getData();  
});  
</script>
```

> #### 注意事项
>
> - **数据响应性**：`chartData`是响应式的，当数据更新时，图表将自动重新渲染。
> - **配置参数**：`params`用于传递图表的额外配置参数，具体参数根据`v-echarts-ui`的文档设置。
> - **尺寸和加载状态**：您可以通过`width`、`height`和`loading`来控制图表的尺寸和加载状态。
> - **异常处理**：在`getData`函数中，使用`try...catch`来捕获并处理可能出现的异常。
