# 带搜索的条形图

## 常规使用

<vEcharts-demo
    demo-height="300px"
    source-code="common-charts:::BarSearch/BarSearch-demo"
/>

## 参数

| 参数名        | 介绍                      | 类型    |
| ------------- | ------------------------- | ------- |
| id            | 图表ID                    | String  |
| height        | 图表高度                  | String  |
| width         | 图表宽度                  | String  |
| showCheckbox  | 是否显示CheckBox          | Boolean |
| showTips      | 是否显示消息提示          | Boolean |
| className     | 图表样式名                | String  |
| options       | echarts 配置选项          | Object  |
| data          | echarts 绑定数据          | Object  |
| params        | echarts 配置参数          | Object  |
| loading       | 加载图表时是否显示loading | Boolean |
| searchOptions | 搜索项配置                | Object  |

## 事件

| 事件名                    | 介绍                                                         | 参数                           |
| ------------------------- | ------------------------------------------------------------ | ------------------------------ |
| chart-click               | 点击图表（非图例、提示框等辅助元素）时触发                   | params                         |
| chart-dblclick            | 双击图表时触发                                               | params                         |
| chart-mousedown           | 鼠标按钮在图表上被按下时触发                                 | params                         |
| chart-mousemove           | 鼠标在图表区域内移动时触发                                   | params                         |
| chart-mouseup             | 鼠标按钮在图表上释放时触发                                   | params                         |
| chart-mouseover           | 鼠标移动到图表上某个元素上时触发                             | params                         |
| chart-mouseout            | 鼠标离开图表上某个元素时触发                                 | params                         |
| chart-globalout           | 鼠标完全离开图表区域时触发                                   | params                         |
| chart-contextmenu         | 在图表上触发右键点击时（通常用于打开上下文菜单）触发         | params                         |
| chart-legendselectchanged | 图例中的某个系列（series）的选中状态发生变化时触发           | params                         |
| changeAfter               | 当搜索条件发生变化时触发，返回包含变动字段名称和变动值的对象 | `val: { props:'', value: '' }` |

## 接口数据结构

接口数据结构与基础图表一致
```json
{
    xAxis: ['week1', 'week2', 'week3', 'week4', 'week5', 'week6', 'week7'],
    series: [
        {
            name: 2023,
            data: [0.97, 0.85, 0.67, 0.98, 1.02, 1.01, 0.66],
        },
        {
            name: 2024,
            data: [0.88, 0.71, 0.54, null, 1.0, 1.03, 0.49],
        },
    ],
    row: [
        {
            week: '1',
        },
        {
            week: '2',
        },
        {
            week: '3',
        },
        {
            week: '4',
        },
        {
            week: '5',
        },
        {
            week: '6',
        },
        {
            week: '7',
        },
    ],
    msg: '研发人效指数=单位时间内关闭NPI项目的总标准工时/上述项目的全期间申报工时',
}
```

