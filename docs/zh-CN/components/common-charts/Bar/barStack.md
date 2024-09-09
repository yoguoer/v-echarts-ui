# 堆叠条形图

## 常规使用

<vEcharts-demo
    demo-height="300px"
    source-code="common-charts:::Bar/Bar-stack-demo"
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

