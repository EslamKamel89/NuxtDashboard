<script setup lang="ts">
import type { ChartLineType } from "~/components/Shared/Chart/Line.vue";

const data = computed<ChartLineType[]>(() => {
  return Array.from({ length: 30 }, (_, index) => ({
    label: (index + 1).toString(),
    value: randomNum(100),
  }));
});
</script>
<template>
  <SharedChartLine :dataset="data" />
</template>
