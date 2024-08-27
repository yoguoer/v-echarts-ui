<template>
  <vBar
    :data="chartData"
    :options="chartOptions"
    :params="params"
    :height="height"
    :width="width"
    :showCheckbox="true"
    :showTips="true"
    :id="id"
    :loading="false" />
</template>

<script setup lang="ts">
import vBar from '../../components/Bar';
import { computed, onMounted, ref } from 'vue';
import axios from 'axios';

const id = 'bar';
const chartData = ref();
const width = '100%';
const height = '500px';
// 在组件挂载后获取数据
onMounted(() => {
  getData();
});

const chartOptions = computed(() => {
  return {
    toolbox: {
      top: 0,
      right: 30, // toolbox的定位位置
    },
    legend: {
      top: 10,
      right: 65,
      padding: [0, 0, 0, 0],
      itemGap: 30,
      itemHeight: 3,
      textStyle: {
        color: '#000000',
        fontSize: 12,
      },
    },
    grid: {
      bottom: 30,
      top: 40,
      left: 25,
      right: 50,
      // grid.left grid.right grid.top grid.bottom grid.width grid.height 决定的是包括了坐标轴标签在内的所有内容所形成的矩形的位置
      // 常用于『防止标签溢出』的场景，标签溢出指的是，标签长度动态变化时，可能会溢出容器或者覆盖其他组件。
      containLabel: true,
    },
    textStyle: {
      fontSize: 14,
    },
    tooltip: {},
    dataset: {},
    xAxis: {
      type: 'category',
      axisLabel: {
        width: 120,
        hideOverlap: false,
        interval: 0,
        overflow: 'break',
        rotate: '10',
        align: 'center',
        verticalAlign: 'top',
      },
    },
  };
});

const params = computed(() => {
  return {
    showToolBox: true, // 显示工具栏
    position: 'top', // 柱状图数字提示位置
    isCross: false, // 柱状图是否为横向,
  };
});

async function getData() {
  const formData = { stat_config_key: 'rdEfficiencyByMonth' };
  try {
    const response = await axios.post('http://10.118.1.89:8086/stat/charts/histogram', formData);
    chartData.value = response.data.data.data;
    // console.log('==response==', response, chartData.value);
  } catch (error) {
    console.log('🚀 ~ getData ~ error:', error);
  }
}
</script>
<!-- 
数据结构如下：
{
  "code": 200,
  "msg": "OK",
  "requestId": "66cd8c7c35dd4",
  "data": {
    "stat_config_key": "rdEfficiencyByMonth",
    "data": {
      "xAxis": [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月"
      ],
      "series": [
        {
          "name": 2023,
          "data": [
            0.97,
            0.97,
            1.03,
            1.05,
            1.05,
            1.07,
            1.08,
            1.09,
            1.1,
            1.12,
            1.14,
            1.16
          ]
        },
        {
          "name": 2024,
          "data": [
            1.08,
            1.11,
            1.14,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null
          ]
        }
      ],
      "row": [
        {
          "month": "2024-01"
        },
        {
          "month": "2024-02"
        },
        {
          "month": "2024-03"
        },
        {
          "month": "2023-04"
        },
        {
          "month": "2023-05"
        },
        {
          "month": "2023-06"
        },
        {
          "month": "2023-07"
        },
        {
          "month": "2023-08"
        },
        {
          "month": "2023-09"
        },
        {
          "month": "2023-10"
        },
        {
          "month": "2023-11"
        },
        {
          "month": "2023-12"
        }
      ],
      "msg": "研发人效指数=单位时间内关闭NPI项目的总标准工时/上述项目的全期间申报工时"
    }
  },
  "time": "2024-08-27 16:21"
}
 -->
