<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
type ListType = {
  title: string;
  value: string;
  component: string;
};
const tabs: ListType[] = [
  { title: "Today", value: "today", component: "<div>Today</div>" },
  { title: "This Week", value: "week", component: "<div>Week</div>" },
  { title: "This Month", value: "month", component: "<div>Month</div>" },
  { title: "This Year", value: "year", component: "<div>Year</div>" },
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
    <main class="grid gap-2">
      <div class="flex items-center gap-3">
        <div
          v-for="item in 3"
          :key="item"
          class="h-[36px] w-[120px] bg-neutral-200"
        ></div>
      </div>
      <section>
        <div class="h-[360px] w-full bg-neutral-200"></div>
      </section>

      <Tabs default-value="day" class="w-full">
        <TabsList class="flex items-center gap-3">
          <TabsTrigger
            v-for="tab in tabs"
            :key="tab.value"
            :value="tab.value"
            class="px-7"
            >{{ tab.title }}</TabsTrigger
          >
        </TabsList>
        <TabsContent v-for="tab in tabs" :key="tab.value" :value="tab.value">{{
          tab.component
        }}</TabsContent>
      </Tabs>
    </main>
    <footer>
      <div class="flex flex-col items-center gap-4 lg:flex-row">
        <div
          v-for="item in 3"
          :key="item"
          class="h-[260px] w-full bg-neutral-200"
        ></div>
      </div>
    </footer>
  </div>
</template>
