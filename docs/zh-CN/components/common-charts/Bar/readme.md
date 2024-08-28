# 入门介绍

## 参数介绍

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

## 基础条形图接口数据结构

```json
{
    xAxis: ['管理室', '数字化室'],
    series: [
        {
            name: '打卡工时',
            data: [220, 430],
        },
        {
            name: '项目工时',
            data: [80, 247],
        },
        {
            name: '平台工时',
            data: [144, 20],
        },
        {
            name: '标准工时',
            data: [18, 17.64],
        },
    ],
};
```

## 堆叠条形图接口数据结构

```json
{
    xAxis: ['管理室', '数字化室'],
    series: [
        {
            name: '打卡工时',
            data: [220, 430],
        },
        {
            name: '项目工时',
            data: [80, 247],
        },
        {
            name: '平台工时',
            data: [144, 20],
        },
        {
            name: '标准工时',
            data: [18, 17.64],
        },
    ],
};
```

