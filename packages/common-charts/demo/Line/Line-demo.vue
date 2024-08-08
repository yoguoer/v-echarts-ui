<template>
  <vLine :data="data"/>
</template>

<script setup lang="ts">
import vLine from '../../components/Line'

const data = {
        "xAxis": [
            "A",
            "B",
            "C",
            "D",
            "E",
        ],
        "series": [
            {
                "name": "平均申报",
                "data": [
                    3385,
                    631.96,
                    910.8,
                    729.3,
                    480.35,
                ]
            },
            {
                "name": "平均标准",
                "data": [
                    3007.13,
                    825.79,
                    782.65,
                    594.35,
                    567.49,
                ]
            }
        ],
        "row": [],
        "msg": ""
    }
</script>