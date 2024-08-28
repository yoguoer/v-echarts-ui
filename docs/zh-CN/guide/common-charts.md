# 使用指南

​	基础图表主要用于基本展示，即无动态变化的图表，含有条形图、折线图、饼图和仪表盘。如果只需要基础图表，根据按需引入，可以只导入这部分。使用基础图表时，可以与后端协定好固定的接口数据返回格式，更方便复用，具体可以查阅对应图表的介绍文档。

## 引入

> 在此之前，确保你已经安装了 `v-echarts` 和 `echarts`。

### 完整引入

可以在入口文件中引入

```typescript
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { commonChartsInstall } from 'v-echarts/common-charts'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
// 注册v-echarts/common-charts所有组件
commonChartsInstall(app)
app.mount('#app')
```

### 按需引入

可以直接在组件中需要用到图表的地方直接引入对应图表

```typescript
<template>
  <vBar
    :data="chartData"
    :params="params"
    :height="height"
    :width="width"
    :showCheckbox="true"
    :id="id"
    :loading="loading" />
</template>

<script setup lang="ts">
import { vBar } from 'v-echarts/common-charts'
import { computed, onMounted, ref } from 'vue';

const id = 'BarStack';
const chartData = ref();
const width = '100%'; // 可选
const height = '400px'; // 可选
const loading = ref(true); // 可选
// 可选，不传则使用默认Options
// const chartOptions = computed(() => {});

const params = computed(() => {
  return {
    showToolBox: true, 
    isCross: false,
    stackLabel: ['none', 'apply', 'apply', 'standard'], // 效果同 stackIndex: [1,2]
    dataset: false,
    showAverage: false,
  };
});

async function getData() {
  try {
    chartData.value = {
        xAxis: ['管理室', '数字化室'],
        series: [
          {
            name: '打卡工时',
            data: [220, 430],
          },
          {
            name: '项目工时',
            data: [80, 247],
          },
          {
            name: '平台工时',
            data: [144, 20],
          },
          {
            name: '标准工时',
            data: [18, 17.64],
          },
        ],
    };
  } catch (error) {
    console.log('🚀 ~ getData ~ error:', error);
  }
}

// 在组件挂载后获取数据
onMounted(() => {
  getData();
});
</script>

```

