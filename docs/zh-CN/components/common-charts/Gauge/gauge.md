# 仪表盘

### 常规使用

#### 使用默认配置
<vEcharts-demo
    demo-height="300px"
    source-code="common-charts:::Gauge/Gauge-demo"
/>

#### 使用自定义配置
<vEcharts-demo
    demo-height="300px"
    source-code="common-charts:::Gauge/Gauge-custom-demo"
/>

## 参数

| 参数名     | 介绍                             | 类型     |
| ---------- | -------------------------------- | -------- |
| id         | 图表ID                           | String   |
| height     | 图表高度                         | String   |
| width      | 图表宽度                         | String   |
| dataFormat | 转换数据格式用于series 中的 data | Function |
| className  | 图表样式名                       | String   |
| options    | echarts 配置选项                 | Object   |
| data       | echarts 绑定数据                 | Array    |
| params     | echarts 配置参数                 | Object   |
| loading    | 加载图表时是否显示loading        | Boolean  |

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
## 数据结构

### 占比基础仪表盘

```json
[20, 100]
```

### 带标签数字动画的基础仪表盘

```json
[
    { name: '项目类', value: 20 },
    { name: '平台类', value: 80 },
]
```

