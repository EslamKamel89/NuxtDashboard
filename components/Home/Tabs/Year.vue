<script setup lang="ts">
import type { ChartLineType } from "~/components/Shared/Chart/Line.vue";

const data = computed<ChartLineType[]>(() => {
  return Array.from({ length: 12 }, (_, index) => ({
    label: months[index],
    value: randomNum(100),
  }));
});
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
</script>
<template>
  <SharedChartLine :dataset="data" />
</template>
