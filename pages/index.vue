<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Month from "~/components/Home/Tabs/Month.vue";
import Today from "~/components/Home/Tabs/Today.vue";
import Week from "~/components/Home/Tabs/Week.vue";
import Year from "~/components/Home/Tabs/Year.vue";
import type { CardType } from "~/components/Shared/Card.vue";
import type { ChartBarType } from "~/components/Shared/Chart/Bar.vue";
import type { ChartLineType } from "~/components/Shared/Chart/Line.vue";
type ListType = {
  title: string;
  value: string;
  component: typeof Today | typeof Week | typeof Month | typeof Year;
};
const tabs: ListType[] = [
  { title: "Today", value: "today", component: Today },
  { title: "This Week", value: "week", component: Week },
  { title: "This Month", value: "month", component: Month },
  { title: "This Year", value: "year", component: Year },
];
const chartBarData: ChartBarType[] = [
  { label: "January", value: 40 },
  { label: "February", value: 20 },
  { label: "March", value: 12 },
  { label: "April", value: 39 },
  { label: "May", value: 10 },
  { label: "June", value: 40 },
  { label: "July", value: 39 },
  { label: "August", value: 80 },
  { label: "September", value: 40 },
  { label: "October", value: 20 },
  { label: "November", value: 12 },
  { label: "December", value: 11 },
];
const chartLineData: ChartLineType[] = [
  { label: "January", value: 40 },
  { label: "February", value: 39 },
  { label: "March", value: 10 },
  { label: "April", value: 40 },
  { label: "May", value: 39 },
  { label: "June", value: 80 },
  { label: "July", value: 40 },
];

const cardsData: CardType[] = [
  {
    title: "Sales",
    progression: 12,
    amount: 1244.44,
    label: "View Sales",
    description: "Sales of March 2024",
    icon: "solar:ticket-sale-outline",
  },
  {
    title: "Refunds",
    progression: 8,
    amount: 84.44,
    label: "View Refunds",
    description: "Refunds since the beginning of the year",
    icon: "heroicons-outline:receipt-refund",
  },
  {
    title: "Payouts",
    progression: 14,
    amount: 84.44,
    label: "View Payouts",
    description: "Payouts of this week",
    icon: "tabler:zoom-money",
  },
  {
    title: "Total Profit",
    progression: 18,
    amount: 150.44,
    label: "View Total Profit",
    description: "Total Profit since the beginning of the year",
    icon: "lucide:dollar-sign",
  },
];
</script>
<template>
  <div class="grid h-screen gap-8">
    <header class="flex items-start justify-between">
      <div class="shrink-0 grow">
        <p>Hey Welcome back Eslam</p>
        <h1>Dashboard</h1>
      </div>
      <div class="h-[36px] w-[120px] bg-neutral-200"></div>
    </header>

    <main class="grid w-full gap-2">
      <Tabs :default-value="tabs[0].value" class="w-full">
        <TabsList class="flex items-center gap-3">
          <TabsTrigger
            v-for="tab in tabs"
            :key="tab.value"
            :value="tab.value"
            class="px-2 md:px-4 lg:px-7"
            >{{ tab.title }}</TabsTrigger
          >
        </TabsList>
        <TabsContent v-for="tab in tabs" :key="tab.value" :value="tab.value">
          <component :is="tab.component" />
        </TabsContent>
      </Tabs>
    </main>
    <footer class="w-full">
      <div
        class="flex w-full flex-col items-center space-y-2 md:grid md:grid-cols-2 md:gap-2 md:space-y-0"
      >
        <SharedCard v-for="card in cardsData" :key="card.label" :card="card" />
      </div>
    </footer>
  </div>
</template>
