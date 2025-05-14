<script setup lang="ts">
type NavItem = {
  title: string;
  path: string;
};
const items = ref<NavItem[]>([
  {
    title: "Overview",
    path: "/overview",
  },
  {
    title: "Transactions",
    path: "/transactions",
  },
  {
    title: "Account",
    path: "/account",
  },
  {
    title: "Contacts",
    path: "/contacts",
  },
  {
    title: "Settings",
    path: "/settings",
  },
]);
</script>
<template>
  <div>
    <header
      class="flex cursor-pointer items-center gap-2 p-4 transition hover:scale-[102%]"
    >
      <SharedLogo />
      <p class="font-bold">Nuxt Dashboard</p>
    </header>
    <div class="grow px-4">
      <div class="grid gap-4">
        <div
          v-for="item in items"
          :key="item.title"
          class="flex cursor-pointer items-center gap-2 rounded px-2 py-1 transition hover:bg-neutral-100"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>
