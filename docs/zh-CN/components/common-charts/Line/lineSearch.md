# 带搜索的条形图

## 常规使用

<vEcharts-demo
    demo-height="300px"
    source-code="common-charts:::LineSearch/LineSearch-demo"
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

| 事件名      | 参数                           | 作用                                                         |
| ----------- | ------------------------------ | ------------------------------------------------------------ |
| changeAfter | `val: { props:'', value: '' }` | 更换搜索条件时触发，返回发生变动的对象，包含字段名称和变动值 |

## 接口数据结构

接口数据结构与基础图表一致
```json
{
    xAxis: ['1周', '2周', '3周', '4周', '5周', '6周', '7周'],
    series: [
        {
            name: 2023,
            data: [1.76, 1.03, 1.1, 1.09, 0.08, 1.09, 1.1],
        },
        {
            name: 2024,
            data: [1.6, 1.28, 1.37, 1.01, 1.13, 1.14, 1.13],
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
    msgTitle: '计算方法',
    msg: '研发人效指数=单位时间内项目标准工时/单位时间内项目申报工时',
}
```

