<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Month from "~/components/Home/Tabs/Month.vue";
import Today from "~/components/Home/Tabs/Today.vue";
import Week from "~/components/Home/Tabs/Week.vue";
import Year from "~/components/Home/Tabs/Year.vue";
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

      <Tabs :default-value="tabs[0].value" class="w-full">
        <TabsList class="flex items-center gap-3">
          <TabsTrigger
            v-for="tab in tabs"
            :key="tab.value"
            :value="tab.value"
            class="px-7"
            >{{ tab.title }}</TabsTrigger
          >
        </TabsList>
        <TabsContent v-for="tab in tabs" :key="tab.value" :value="tab.value">
          <component :is="tab.component" />
        </TabsContent>
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
