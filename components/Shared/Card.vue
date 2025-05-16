<script setup lang="ts">
export type CardType = {
  title: string;
  progression: number;
  amount: number;
  label: string;
  description: string;
  icon: string;
};
const props = defineProps<{
  card: CardType;
}>();
</script>
<template>
  <div></div>
</template>
