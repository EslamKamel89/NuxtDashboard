<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
          <TabsTrigger class="px-7" value="day"> Day </TabsTrigger>
          <TabsTrigger class="px-7" value="week"> Week </TabsTrigger>
          <TabsTrigger class="px-7" value="month"> Month </TabsTrigger>
          <TabsTrigger class="px-7" value="year"> Year </TabsTrigger>
        </TabsList>
        <TabsContent value="day">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          facilis velit optio temporibus officia reiciendis nam laboriosam harum
          autem sed cumque quo alias vitae, corrupti non modi inventore delectus
          molestiae!
        </TabsContent>
        <TabsContent value="week">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          facilis velit optio temporibus officia reiciendis nam laboriosam harum
          autem sed cumque quo alias vitae, corrupti non modi inventore delectus
          molestiae!</TabsContent
        >
        <TabsContent value="month">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          facilis velit optio temporibus officia reiciendis nam laboriosam harum
          autem sed cumque quo alias vitae, corrupti non modi inventore delectus
          molestiae!
        </TabsContent>
        <TabsContent value="year">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          facilis velit optio temporibus officia reiciendis nam laboriosam harum
          autem sed cumque quo alias vitae, corrupti non modi inventore delectus
          molestiae!</TabsContent
        >
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
