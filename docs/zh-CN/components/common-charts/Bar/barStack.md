# 堆叠条形图

## 常规使用

<vEcharts-demo
    demo-height="300px"
    source-code="common-charts:::Bar/Bar-stack-demo"
/>

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

