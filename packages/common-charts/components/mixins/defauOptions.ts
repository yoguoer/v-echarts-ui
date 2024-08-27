export default {
    title: {
        show: true,
        x: 'center', //水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
        y: 'top', //垂直安放位置，默认为top，可选为：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
    },
    toolbox: {
        top: 0,
        right: 30, // toolbox的定位位置
    },
    legend: {
        top: 10,
        right: 65,
        padding: [0, 0, 0, 0],
        itemGap: 30,
        itemHeight: 3,
        textStyle: {
            color: '#000000',
            fontSize: 12,
        },
    },
    grid: {
        bottom: 30,
        top: 40,
        left: 25,
        right: 50,
        // grid.left grid.right grid.top grid.bottom grid.width grid.height 决定的是包括了坐标轴标签在内的所有内容所形成的矩形的位置
        // 常用于『防止标签溢出』的场景，标签溢出指的是，标签长度动态变化时，可能会溢出容器或者覆盖其他组件。
        containLabel: true,
    },
    textStyle: {
        fontSize: 14,
    },
    tooltip: {},
    dataset: {},
    xAxis: {
        type: 'category',
        axisLabel: {
            width: 120,
            hideOverlap: false,
            interval: 0,
            overflow: 'break',
            rotate: '10',
            align: 'center',
            verticalAlign: 'top',
        },
    },
}