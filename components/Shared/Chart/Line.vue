<template>
  <Line :data="data" :options="options" />
</template>

<script lang="ts" setup>
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "vue-chartjs";
export type ChartLineType = {
  label: string;
  value: number;
};
const props = defineProps<{
  dataset: ChartLineType[];
}>();
const data = {
  labels: props.dataset.map((set) => set.label),
  datasets: [
    {
      label: "Data One",
      backgroundColor: "#f87979",
      data: props.dataset.map((set) => set.value),
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);
</script>
