<script setup lang="ts">
import type { ChartLineType } from "~/components/Shared/Chart/Line.vue";

const data = computed<ChartLineType[]>(() => {
  return Array.from({ length: 7 }, (_, index) => ({
    label: daysOfWeek[index],
    value: randomNum(100),
  }));
});
const daysOfWeek = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];
</script>
<template>
  <SharedChartLine :dataset="data" />
</template>
