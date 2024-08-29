import { recursionObject } from '../utils';
import echart from '../theme/theme.json';
import { getMarkLine, getTooltip, getToolBox, yAxis, axisLabel } from './common.ts';

// 获取系列配置
function getSeriesConfig({ seriesItem, options, params }) {
  return {
    type: 'line',
    areaStyle: {
      opacity:
        seriesItem?.areaStyle?.opacity ||
        (params.areaStyleOpacity === 0 ? '0' : params.areaStyleOpacity) ||
        0.2,
    },
    emphasis: {
      focus: 'series',
    },
    label: {
      show: true, // 开启显示
    },
    markLine: getMarkLine(),
  };
}

/**
 * 获取默认配置参数
 * @param { Object } lineParams 实例配置参数：
 * {
 *      position: 'top', // 柱状图数字提示位置
 *      isCross: false, // 柱状图是否为横向,
 *      stackIndex: [1, 2], // 堆叠图形下标值
 *      dataset: false, //源数据是否为 dataset 格式
 *      showAverage: true // 是否显示平均线
 * }
 */
class defaultOpt {
  option: any; // 或更具体的类型
  constructor(lineParams) {
    this.option = {
      toolbox: getToolBox(lineParams),
      tooltip: getTooltip(lineParams),
      title: {
        // 标题
        text: '',
        left: 'center',
        textStyle: {
          color: echart.$fontColor || echart.fontColor, // 注意: mac 中无法获取 $变量, mac中直接通过变量名获取
        },
      },
      legend: {
        textStyle: {
          color: echart.$fontColor || echart.fontColor, // 注意: mac 中无法获取 $变量, mac中直接通过变量名获取
          fontSize: 16,
        },
        show: true,
      },

      grid: {
        top: 50,
        left: 50,
        right: 50,
        bottom: 50,
      },
      xAxis: {
        type: 'category',
        splitLine: {
          show: lineParams?.xAxis?.splitLine, // 去掉网格线
        },
        data: [],
        axisLabel,
      },
      yAxis: {
        type: 'value',
        ...yAxis,
      },
      series: [],
    };
  }
}

// 导出 lineOptions 函数，用于生成 line 图表的配置项
export function lineOptions(props) {
  const { data } = props;
 
  const getDefaultOpt = new defaultOpt(props.params).option;
  const opt = recursionObject({}, getDefaultOpt, props.options);
  //使用数据集处理
  if (props.params.dataset && data.length > 1) {
    const dataset = {
      source: data,
      dimensions: Object.keys(data[0]),
    };
    opt.dataset = dataset;
    opt.legend.data = Object.keys(data[0]);
  } else {
    //非数据集处理
    opt.xAxis.data = (data && data.xAxis) || [];
    if (data && data.series) {
      opt.series =
        data.series.map(item =>
          Object.assign(
            {},
            item,
            getSeriesConfig({
              series: item,
              options: opt,
              params: props.params,
            }),
          ),
        ) || [];
    }
  }
  return opt;
}
