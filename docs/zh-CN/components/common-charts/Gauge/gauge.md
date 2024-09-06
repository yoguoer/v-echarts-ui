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

