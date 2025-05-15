<script setup lang="ts">
import type { ChartLineType } from "~/components/Shared/Chart/Line.vue";

const data = computed<ChartLineType[]>(() => {
  return Array.from({ length: generateTimeOptions().length }, (_, index) => ({
    label: generateTimeOptions()[index],
    value: randomNum(100),
  }));
});

const generateTimeOptions = (): string[] => {
  const times: string[] = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      let hour12 = hour % 12;
      if (hour12 === 0) hour12 = 12;
      const period = hour >= 12 ? "PM" : "AM";
      const minutes = minute.toString().padStart(2, "0");
      const timeString = `${hour12}:${minutes} ${period}`;
      times.push(timeString);
    }
  }
  return times;
};
</script>
<template>
  <SharedChartLine :dataset="data" />
</template>
