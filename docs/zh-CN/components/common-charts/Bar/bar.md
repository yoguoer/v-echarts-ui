# 条形图

## 常规使用

<vEcharts-demo
    demo-height="300px"
    source-code="common-charts:::Bar/Bar-demo"
/>

## 参数

| 参数名       | 介绍                      | 类型    |
| ------------ | ------------------------- | ------- |
| id           | 图表ID                    | String  |
| height       | 图表高度                  | String  |
| width        | 图表宽度                  | String  |
| showCheckbox | 是否显示CheckBox          | Boolean |
| showTips     | 是否显示消息提示          | Boolean |
| className    | 图表样式名                | String  |
| options      | echarts 配置选项          | Object  |
| data         | echarts 绑定数据          | Object  |
| params       | echarts 配置参数          | Object  |
| loading      | 加载图表时是否显示loading | Boolean |

### params

| 属性名      | 介绍                                      | 类型    |
| ----------- | ----------------------------------------- | ------- |
| showToolBox | 是否显示工具栏                            | Boolean |
| isCross     | 柱状图是否为横向                          | Boolean |
| dataset     | 源数据是否为 dataset 格式                 | Boolean |
| showAverage | 是否显示平均线                            | Boolean |
| stackLabel  | 指定堆叠标识，相同 label 的图形堆叠在一起 | Array   |
| stackIndex  | 堆叠图形下标值                            | Array   |

## 事件

| 事件名                    | 介绍                                                 | 参数   |
| ------------------------- | ---------------------------------------------------- | ------ |
| chart-click               | 点击图表（非图例、提示框等辅助元素）时触发           | params |
| chart-dblclick            | 双击图表时触发                                       | params |
| chart-mousedown           | 鼠标按钮在图表上被按下时触发                         | params |
| chart-mousemove           | 鼠标在图表区域内移动时触发                           | params |
| chart-mouseup             | 鼠标按钮在图表上释放时触发                           | params |
| chart-mouseover           | 鼠标移动到图表上某个元素上时触发                     | params |
| chart-mouseout            | 鼠标离开图表上某个元素时触发                         | params |
| chart-globalout           | 鼠标完全离开图表区域时触发                           | params |
| chart-contextmenu         | 在图表上触发右键点击时（通常用于打开上下文菜单）触发 | params |
| chart-legendselectchanged | 图例中的某个系列（series）的选中状态发生变化时触发   | params |

## 接口数据结构

```json
{
    xAxis: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
    ],
    series: [
        {
            name: 2023,
            data: [0.97, 0.97, 1.03, 1.05, 1.05, 1.07, 1.08, 1.09, 1.1, 1.12, 1.14, 1.16],
        },
        {
            name: 2024,
            data: [1.08, 1.11, 1.14, null, null, null, null, null, null, null, null, null],
        },
    ],
    row: [
        {
            month: '2024-01',
        },
        {
            month: '2024-02',
        },
        {
            month: '2024-03',
        },
        {
            month: '2023-04',
        },
        {
            month: '2023-05',
        },
        {
            month: '2023-06',
        },
        {
            month: '2023-07',
        },
        {
            month: '2023-08',
        },
        {
            month: '2023-09',
        },
        {
            month: '2023-10',
        },
        {
            month: '2023-11',
        },
        {
            month: '2023-12',
        },
    ],
    msg: '研发人效指数=单位时间内关闭NPI项目的总标准工时/上述项目的全期间申报工时',
};
```

