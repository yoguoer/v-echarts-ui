import * as echarts from 'echarts/core'
import {
  TitleComponent,
  TooltipComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
  MarkLineComponent,
  GridComponent,
  DataZoomComponent,
  ToolboxComponent,
} from 'echarts/components'
// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features'
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers'
// 调色后主题
import macarons from '../theme/trical.json' // 假设这是你的自定义主题
import { debounce } from '../utils'
import { ref, watch, onMounted, onUnmounted, Ref, onActivated, onDeactivated } from 'vue'
import { ECharts } from 'echarts/core'

echarts.use([
  // 注册所有图表公共组件
  TitleComponent,
  TooltipComponent,
  CanvasRenderer,
  DatasetComponent,
  LabelLayout,
  TransformComponent,
  UniversalTransition,
  LegendComponent,
  MarkLineComponent,
  GridComponent,
  DataZoomComponent,
  ToolboxComponent,
])

echarts.use([CanvasRenderer]) // 确保在组件中使用前注册渲染器
echarts.registerTheme('macarons', macarons) // 颜色主题

export function useEcharts(
  chartRef: Ref<HTMLElement | null>,
  options: any,
  data: any,
  emit: (event: string, ...args: any[]) => void,
  loading = false,
) {
  const chart = ref<ECharts | null>(null)
  let $_resizeHandler
  let $_sidebarElm

  onMounted(() => {
    initListener() // 初始化尺寸监听器
    initCharts(chartRef) // 初始化 echart
    bindEvent()
    loading = false
  })

  onUnmounted(() => {
    destroyListener() // 销毁尺寸监听器
    destroyChartInst() // 销毁 echart
  })

  onActivated(() => {
    if ($_resizeHandler) {
      initListener()
    }
    resize()
  })

  onDeactivated(() => {
    destroyChartInst() // 销毁 echart
  })

  watch(
    data,
    () => {
      setOption()
    },
    { deep: true, immediate: true },
  )

  watch(
    () => loading,
    newVal => {
      if (!chart.value) return
      newVal
        ? chart.value.showLoading({
            text: '正在加载...',
            maskColor: 'rgba(0, 0, 0,0)',
            color: 'rgb(255,255,255)',
            textColor: '#fff',
          })
        : chart.value.hideLoading()
    },
    { immediate: true },
  )

  function initCharts(chartRef) {
    if (chartRef.value) {
      // 使用 DOM 元素初始化 ECharts 实例
      chart.value = echarts.init(chartRef.value, 'macarons')
      // 设置图表选项
      options && chart.value && chart.value.setOption && chart.value.setOption(options)
    }
  }

  function bindEvent() {
    if (!chart.value) return
    const events = [
      'click',
      'dblclick',
      'mousedown',
      'mousemove',
      'mouseup',
      'mouseover',
      'mouseout',
      'globalout',
      'contextmenu',
      'legendselectchanged',
    ]
    events.forEach(eventName => {
      chart.value.on(eventName, params => {
        emit(`chart-${eventName}`, params)
      })
    })
  }

  function $_sidebarResizeHandler(e) {
    if (e.propertyName === 'width') {
      $_resizeHandler()
    }
  }

  function initListener() {
    $_resizeHandler = debounce(
      () => {
        resize()
      },
      100,
      false,
    )
    window.addEventListener('resize', $_resizeHandler)
    $_sidebarElm = document.getElementsByClassName('sidebar-container')[0]
    $_sidebarElm && $_sidebarElm.addEventListener('transitionend', $_sidebarResizeHandler)
    // 全屏自适应
    window.addEventListener('resize', () => resize())
  }

  function destroyListener() {
    window.removeEventListener('resize', $_resizeHandler)
    $_resizeHandler = null
    $_sidebarElm && $_sidebarElm.removeEventListener('transitionend', $_sidebarResizeHandler)
    // 全屏自适应
    window.removeEventListener('resize', () => resize())
  }

  function destroyChartInst() {
    if (!chart.value) {
      return
    }
    chart.value.clear()
    chart.value.dispose()
    chart.value = null
  }

  function resize() {
    chart.value && chart.value.resize()
  }

  function setOption() {
    if (!chart.value) return
    chart.value.clear()
    // chart.value.setOption(options, true); // 第二个参数为true表示不合并之前的option
    options && chart.value.setOption(options)
  }
  return {
    chart,
  }
}
