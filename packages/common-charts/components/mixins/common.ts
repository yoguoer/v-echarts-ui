import * as echarts from 'echarts/core';
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
} from 'echarts/components';
// 标签自动布局，全局过渡动画等特性
import { LabelLayout, UniversalTransition } from 'echarts/features';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';
// 调色后主题
import macarons from '../theme/trical.json'; // 假设这是你的自定义主题
import { debounce } from '../utils';
import { ref, watch, onMounted, onUnmounted, Ref } from 'vue';
import { ECharts } from 'echarts/core';

echarts.use([
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
]);

echarts.use([CanvasRenderer]); // 确保在组件中使用前注册渲染器
echarts.registerTheme('macarons', macarons);

export function useECharts(
  chartRef: Ref<HTMLElement | null>,
  options: any,
  data: any,
  loading = false,
) {
  const chart = ref<ECharts | null>(null);
  const resizeHandler = ref(null);

  onMounted(() => {
    if (chartRef.value) {
      // 使用 DOM 元素初始化 ECharts 实例
      chart.value = echarts.init(chartRef.value, 'macarons');
      // 设置图表选项
      chart.value.setOption(options);

      if (loading) {
        chart.value.showLoading({
          text: '正在加载...',
          maskColor: 'rgba(0, 0, 0,0)',
          color: 'rgb(255,255,255)',
          textColor: '#fff',
        });
      }

      initResizeHandler();
    }
  });

  onUnmounted(() => {
    if (chart.value) {
      chart.value.dispose();
      destroyResizeHandler();
    }
  });

  watch(
    data,
    () => {
      if (chart.value) {
        // chart.value.setOption(options, true); // 第二个参数为true表示不合并之前的option
        setOption();
      }
    },
    { deep: true, immediate: true },
  );

  watch(
    () => loading,
    newVal => {
      if (chart.value) {
        newVal ? chart.value.showLoading() : chart.value.hideLoading();
      }
    },
    { immediate: true },
  );

  function initResizeHandler() {
    resizeHandler.value = debounce(() => {
      if (chart.value) {
        chart.value.resize();
      }
    }, 100);

    window.addEventListener('resize', resizeHandler.value);
  }

  function destroyResizeHandler() {
    if (resizeHandler.value) {
      window.removeEventListener('resize', resizeHandler.value);
      resizeHandler.value = null;
    }
  }

  function setOption() {
    if (!chart.value) return;
    chart.value.clear();
    options && chart.value.setOption(options);
  }
  return {
    chart,
  };
}
