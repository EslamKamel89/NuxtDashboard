<script setup lang="ts"></script>
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
