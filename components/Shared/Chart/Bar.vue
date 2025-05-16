<script setup lang="ts">
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { Bar } from "vue-chartjs";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);
export type ChartBarType = {
  label: string;
  value: number;
};
const props = defineProps<{
  dataset: ChartBarType[];
}>();
const data = {
  labels: props.dataset.map((data) => data.label),
  datasets: [
    {
      label: "Data One",
      backgroundColor: "#f87979",
      data: props.dataset.map((data) => data.value),
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
};
</script>
<template>
  <div class="mx-auto w-sm md:w-full">
    <Bar :data="data" :options="options" />
  </div>
</template>
