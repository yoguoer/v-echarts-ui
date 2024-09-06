<template>
  <div :class="[`${prefixCls}`]">
    <Tools
      :showTips="showTips"
      :showCheckbox="showCheckbox"
      @setShowLabel="handleShowLabel"
      :style="{ width: width }" />
    <div :id="id" :class="className" :style="{ height: height, width: width }" ref="lineChartRef" />
  </div>
</template>

<script setup lang="ts" name="Line">
import { ref, computed, onBeforeUpdate, defineProps, defineEmits } from 'vue'
import * as echarts from 'echarts/core'
import { LineChart } from 'echarts/charts'
import Tools from '../../Extend/index.vue'
import { lineOptions } from '../../options/line'
import { setShowLabel } from '../../options/utils'
import { useEcharts } from '../../mixins/useEcharts'
import { emitEvents } from '../../mixins/emitEvents'
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  MarkPointComponent,
  MarkLineComponent,
} from 'echarts/components'
import { useDesign } from '../../../hooks/useDesign'

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  MarkPointComponent,
  MarkLineComponent,
  LineChart,
])

const emit = defineEmits(emitEvents)

const props = defineProps({
  id: {
    type: String,
    default: null,
  },
  height: {
    type: String,
    default: '500px',
  },
  width: {
    type: String,
    default: '100%',
  },
  showCheckbox: {
    type: Boolean,
    default: true,
  },
  showTips: {
    type: Boolean,
    default: true,
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
    type: Object,
    default: () => ({}),
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

const chartOptions = computed(() => lineOptions(props))

// 定义一个 ref 用于 DOM 引用
const lineChartRef = ref<HTMLElement | null>(null)
const { chart } = useEcharts(lineChartRef, chartOptions.value, props.data, emit, props.loading)

function handleShowLabel(newChecked: boolean) {
  setShowLabel(chartOptions.value, newChecked)
  chart.value.setOption(chartOptions.value)
}

onBeforeUpdate(() => {
  chart.value.setOption(chartOptions.value)
})

const { getPrefixCls } = useDesign()
const prefixCls = getPrefixCls('line')
</script>

<style lang="less" scoped>
@prefix-cls: ~'@{vEchartsNamespace}-line';
.@{prefix-cls} {
  position: relative;
}
</style>
