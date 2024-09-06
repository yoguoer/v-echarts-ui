<template>
  <div :class="[`${prefixCls}`]">
    <div
      :id="id"
      :class="className"
      :style="{ height: height, width: width }"
      ref="gaugeChartRef" />
    <slot name="content" />
  </div>
</template>

<script setup lang="ts" name:="Gauge">
import { ref, computed, defineProps, defineEmits, onBeforeUpdate } from 'vue'
import * as echarts from 'echarts/core'
import { TooltipComponent, TitleComponent, PolarComponent } from 'echarts/components'
import { GaugeChart, BarChart } from 'echarts/charts'
import { guageOptions } from '../../options/guage'
import { useEcharts } from '../../mixins/useEcharts'
import { emitEvents } from '../../mixins/emitEvents'
import { useDesign } from '../../../hooks/useDesign'

echarts.use([TooltipComponent, TitleComponent, PolarComponent, GaugeChart, BarChart])

const emit = defineEmits(emitEvents)

const props = defineProps({
  id: {
    type: String,
    default: 'GuageChart',
    require: true,
  },
  height: {
    type: String,
    default: '300px',
  },
  width: {
    type: String,
    default: '300px',
  },
  dataFormat: {
    type: Function,
    default: null,
  },
  className: {
    type: String,
    default: null,
  },
  options: {
    type: Object,
    default: () => ({}),
  },
  data: {
    type: Array,
    default: () => [],
  },
  params: {
    type: Object,
    default: () => ({}),
  },
  loading: {
    type: Boolean,
    default: false,
  },
})

const chartOptions = computed(() => guageOptions(props))

// 定义一个 ref 用于 DOM 引用
const gaugeChartRef = ref<HTMLElement | null>(null)
const { chart } = useEcharts(gaugeChartRef, chartOptions.value, props.data, emit, props.loading)
// console.log('🚀 ~ chart:', chart);

onBeforeUpdate(() => {
  chart.value.setOption(chartOptions.value)
})

const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('gauge')
</script>
<style lang="less" scoped>
@prefix-cls: ~'@{vEchartsNamespace}-gauge';
.@{prefix-cls} {
  position: relative;

  &::deep canvas {
    cursor: pointer;
  }
}
</style>
