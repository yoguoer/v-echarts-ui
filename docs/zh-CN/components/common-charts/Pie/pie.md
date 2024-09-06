# 饼图

### 常规使用

<vEcharts-demo
    demo-height="300px"
    source-code="common-charts:::Pie/Pie-demo"
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
| data         | echarts 绑定数据          | Array   |
| params       | echarts 配置参数          | Object  |
| loading      | 加载图表时是否显示loading | Boolean |

## 数据结构

```json
[
    { name: '项目类', value: 20 },
    { name: '平台类', value: 80 },
]
```