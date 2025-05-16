<script setup lang="ts">
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Badge from "../ui/badge/Badge.vue";
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
  <Card class="w-full">
    <CardHeader>
      <CardTitle>
        <div class="flex w-full items-center justify-between">
          <p>{{ card.title }}</p>
          <Badge class="bg-green-700">+{{ card.progression }}%</Badge>
        </div>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div class="flex items-center justify-end border-b px-4 pt-0 pb-2">
        <div class="text-[48px] font-[800]">
          <span class="text-neutral-300">$</span>
          <span>{{ card.amount }}</span>
        </div>
      </div>
    </CardContent>
    <CardFooter class="flex w-full justify-between px-6 pb-6">
      <div class="flex w-full items-center justify-between gap-2 px-2 py-2">
        <div class="flex grow items-center space-x-2 text-xs">
          <div
            class="flex h-8 w-8 items-center justify-center rounded bg-neutral-100"
          >
            <Icon :name="card.icon" size="25" />
          </div>
          <p class="text-xs">{{ card.description }}</p>
        </div>
        <Button variant="outline">{{ card.label }}</Button>
      </div>
    </CardFooter>
  </Card>
</template>
