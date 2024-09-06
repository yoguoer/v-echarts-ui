import { recursionObject } from '../utils/index.ts'
import { getToolBox } from './common.ts'

// 获取系列配置
function getSeriesConfig(options, dataStas, dataFormat) {
  if (dataStas && Object.keys(dataStas).length > 0) {
    return [
      {
        type: 'bar',
        smooth: true,
        animationDelay: 500,
        animationDuration: 1500,
        data: [
          {
            // 上层圆环，显示数据
            value: options?.charRate || (dataStas[0] / dataStas[1]) * 100,
          },
        ],
        barGap: '-100%', // 柱间距离,上下两层圆环重合
        coordinateSystem: 'polar',
        roundCap: true, // 顶端圆角
        z: 2, // 圆环层级，同zindex
      },
      {
        // 下层圆环，显示最大值
        type: 'bar',
        smooth: true,
        animationDelay: 500,
        animationDuration: 1500,
        data: [
          {
            value: 100,
          },
        ],
        barGap: '-100%',
        coordinateSystem: 'polar',
        roundCap: true,
        z: 1,
      },
      // 仪表盘
      {
        name: options?.title,
        smooth: true,
        animationDelay: 500,
        animationDuration: 1500,
        type: 'gauge',
        startAngle: 225, // 起始角度，同极坐标
        endAngle: -45, // 终止角度，同极坐标
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        splitLabel: {
          show: false,
        },
        pointer: {
          show: false,
        },
        title: {
          offsetCenter: [0, '-20%'],
        },
        detail: {
          valueAnimation: true,
        },
        data: dataFormat
          ? dataFormat(dataStas)
          : [
              {
                value: dataStas[0],
                detail: {
                  offsetCenter: (() => {
                    const len = dataStas[0].toString().length - 1
                    const lenMap = [
                      -(options?.width || 300) / 10,
                      -(options?.width || 300) / 7.5,
                      -(options?.width || 300) / 6.6,
                      -(options?.width || 300) / 5.5,
                      -(options?.width || 300) / 5,
                    ]
                    return [lenMap[len], 0]
                  })(),
                  fontWeight: 400,
                  fontSize:
                    dataStas[0].toString().length - 1 < 3
                      ? (options?.width || 300) / 4
                      : (options?.width || 300) / 8,
                },
              },
              {
                value: dataStas[1],
                detail: {
                  offsetCenter: (() => {
                    const len = dataStas[0].toString().length - 1
                    const lenMap = [
                      (options?.width || 300) / 12,
                      (options?.width || 300) / 6,
                      (options?.width || 300) / 4.8,
                      (options?.width || 300) / 5.5,
                      (options?.width || 300) / 6,
                    ]
                    return [lenMap[len], 8]
                  })(),
                  fontWeight: 350,
                  fontSize:
                    dataStas[0].toString().length - 1 < 3
                      ? (options?.width || 300) / 7
                      : (options?.width || 300) / 8,
                  formatter: function (value) {
                    return `/${value}`
                  },
                },
              },
            ],
      },
    ]
  } else {
    return [
      {
        type: 'gauge',
        progress: {
          show: true,
          width: 8,
        },

        axisLine: {
          // x轴刻度线
          show: true,
          lineStyle: {
            width: 8,
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          length: 5,
          distance: 2,
          lineStyle: {
            width: 1,
          },
        },
        axisLabel: {
          distance: 5,
          fontSize: 12,
        },
        title: {
          show: true,
          fontSize: 20,
          offsetCenter: [0, '125%'],
        },
        anchor: {
          // 指针中心圆点样式
          show: true,
          showAbove: true,
          size: 5,
          itemStyle: {
            borderWidth: 15,
          },
        },
        pointer: {
          // 指针
          show: true,
          showAbove: true,
        },
        detail: {
          valueAnimation: true,
          fontSize: 22,
          offsetCenter: [0, '85%'],
          formatter: function (value) {
            return value + '%'
          },
        },
        smooth: true,
        animationDelay: 500,
        animationDuration: 2000,
        data: dataStas,
      },
    ]
  }
}

// 获取标题配置
function getTitle(options) {
  return options?.title
    ? [
        {
          text: options?.title,
          bottom: '5',
          x: 'center',
          backgroundColor: 'white',
          borderWidth: 1,
          borderRadius: 5,
          padding: [(options?.width || 300) / 20, (options?.width || 300) / 7.5],
          textStyle: {
            fontWeight: 'normal',
            fontSize: (options?.width || 300) / 10,
          },
        },
      ]
    : []
}
class defaultOptTemp {
  option: any // 或更具体的类型
  constructor({ options, dataStas, dataFormat }) {
    this.option = {
      toolbox: getToolBox(options),
      title: getTitle(options),
      angleAxis: {
        show: false,
        max: (100 * 360) / 270, // -45度到225度，二者偏移值是270度除360度
        type: 'value',
        startAngle: 225, // 极坐标初始角度
        splitLine: {
          show: false,
        },
      },
      barMaxWidth: 6, // 圆环宽度
      radiusAxis: {
        show: false,
        type: 'category',
      },
      // 圆环位置和大小
      polar: {
        center: ['50%', '50%'],
        radius: (options?.width || 300) * 0.8,
      },
      series: getSeriesConfig(options, dataStas, dataFormat),
    }
  }
}

// 导出 guageOptions 函数，用于生成仪表盘配置项
export function guageOptions(props) {
  const { data } = props

  const getDefaultOpt = new defaultOptTemp({
    options: props.params,
    dataStas: data,
    dataFormat: props.dataFormat,
  }).option

  const opt = recursionObject({}, getDefaultOpt, props.options)
  return opt
}
