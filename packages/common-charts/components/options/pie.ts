import { recursionObject, isArray } from '../utils/index.ts';
import { getToolBox } from './common.ts';
import echart from '../theme/theme.json';

// 获取系列配置
function getSeriesConfig(pieParams) {
  // 如果指定了嵌套饼图（isNested.show 为真），则生成两个饼图的配置：内层饼图和外层饼图
  if (pieParams?.isNested?.show) {
    const firstSecond = {
      name: pieParams.isNested.firstSecond.name,
      type: 'pie',
      radius: [0, 70],
      minShowLabelAngle: 1,
      selectedMode: 'single',
      // roseType: 'radius',
      encode: {
        itemName: pieParams.isNested.firstSecond.itemName,
        value: pieParams.isNested.firstSecond.value,
      },
      label: {
        color: '#00FFF7',
      },
      labelLine: {
        show: true,
        length: 4,
      },
    };
    const seriesSecond = {
      name: pieParams.isNested.seriesSecond.name,
      type: 'pie',
      radius: [90, 150],
      minShowLabelAngle: 1,
      selectedMode: 'single',
      // roseType: 'radius',
      encode: {
        itemName: pieParams.isNested.seriesSecond.itemName,
        value: pieParams.isNested.seriesSecond.value,
      },
      label: {
        color: echart.$fontColor || echart.fontColor, // 注意: mac 中无法获取 $变量, mac中直接通过变量名获取
      },

      labelLine: {
        show: true,
        length: 4,
      },
    };
    const newSeries = [firstSecond, seriesSecond];
    return newSeries;
  } else { // 如果没有指定嵌套饼图，则生成一个标准的饼图配置
    return [
      {
        name: '',
        type: 'pie',
        selectedMode: 'single',
        data: [],
        radius: ['0%', '60%'],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
          },
        },
        label: {
          overflow: 'breakAll', // 文字超出宽度是否截断或者换行
          color: echart.$fontColor || echart.fontColor, // 注意: mac 中无法获取 $变量, mac中直接通过变量名获取
          textStyle: {
            color: echart.$fontColor || echart.fontColor, // 注意: mac 中无法获取 $变量, mac中直接通过变量名获取
            fontSize: 16,
          },
          formatter: function (params) {
            return params.name + '\n' + params.percent + '%';
          },
        },
        labelLine: {
          show: true,
          length: 15,
          length2: 5,
          smooth: true,
          minTurnAngle: 135,
        },
        center: ['50%', '50%'],
      },
    ];
  }
}

/**
 * 获取默认配置参数
 * @param { Object } pieParams 实例配置参数：
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
  constructor(pieParams) {
    this.option = {
      toolbox: getToolBox(pieParams),
      title: {
        text: '',
      },
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          return `${params.marker}${params.name}: ${params.value} (${pieParams.unit || 'h'})`;
        },
      },
      legend: {
        show: pieParams.showLegend,
        bottom: 0,
      },
      dataset: {
        dimensions: [],
        source: [],
      },
      series: getSeriesConfig(pieParams),
    };
  }
}

// 导出 pieOptions 函数，用于生成饼图配置项
export function pieOptions(props) {
  const { data = null } = props;

  const getDefaultOpt = new defaultOpt(props.params).option;
  const opt = recursionObject({}, getDefaultOpt, props.options);

  if (props.params.dataset && data.length > 1) {
    opt.dataset.source = data.reverse();
    opt.dataset.dimensions = Object.keys(data[0]);
  }
  if (data) {
    const len = opt.series?.length || 0;
    if (len === 1) {
      opt.series[0].data = data;
    }
    if (len > 1 && isArray(data)) {
      opt.series.forEach((item, index) => {
        item[index] = data[index];
      });
    }
  }
  return opt;
}
