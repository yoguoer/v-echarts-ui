import { recursionObject } from '../utils'
import echart from '../theme/theme.json'
import {
    getMarkLine,
    getTooltip,
    getToolBox,
    yAxis,
    axisLabel
} from './common.ts'

// 获取系列配置
function getSeriesConfig({ seriesItem, options, params }) {
    return {
        type: 'line',
        areaStyle: {
            opacity: seriesItem?.areaStyle?.opacity || (params.areaStyleOpacity === 0 ? '0' : params.areaStyleOpacity) || 0.2
        },
        emphasis: {
            focus: 'series'
        },
        label: {
            show: true, // 开启显示
        },
        markLine: getMarkLine()
    }
}

// 默认配置
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
                    color: echart.$fontColor || echart.fontColor // 注意: mac 中无法获取 $变量, mac中直接通过变量名获取
                }
            },
            legend: {
                textStyle: {
                    color: echart.$fontColor || echart.fontColor, // 注意: mac 中无法获取 $变量, mac中直接通过变量名获取
                    fontSize: 16
                },
                show: true
            },

            grid: {
                top: 50,
                left: 50,
                right: 50,
                bottom: 50
            },
            xAxis: {
                type: 'category',
                splitLine: {
                    show: lineParams?.xAxis?.splitLine // 去掉网格线
                },
                data: [],
                axisLabel
            },
            yAxis: {
                type: 'value',
                ...yAxis
            },
            series: []
        }
    }
}

// 获取线图配置
export function lineOptions(props) {
    const { data } = props
    /* eslint-disable */
    const getDefaultOpt = new defaultOpt(props.params).option
    const opt = recursionObject({}, getDefaultOpt, props.options);
    //使用数据集处理
    if (props.params.dataset && data.length > 1) {
        const dataset = {
            source: data,
            dimensions: Object.keys(data[0])
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
                            params: props.params
                        })
                    )
                ) || [];
        }
    }
    return opt;
}