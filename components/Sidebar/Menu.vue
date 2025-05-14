<script setup lang="ts">
type NavItem = {
  title: string;
  path: string;
  icon: string;
};
const items = ref<NavItem[]>([
  {
    title: "Overview",
    path: "/overview",
    icon: "material-symbols-light:dashboard-outline",
  },
  {
    title: "Transactions",
    path: "/transactions",
    icon: "fluent:arrow-swap-20-regular",
  },
  {
    title: "Account",
    path: "/account",
    icon: "mdi:account-tie",
  },
  {
    title: "Contacts",
    path: "/contacts",
    icon: "weui:contacts-filled",
  },
  {
    title: "Settings",
    path: "/settings",
    icon: "material-symbols-light:settings-outline",
  },
]);
</script>
<template>
  <div class="bg-white">
    <NuxtLink
      class="flex cursor-pointer items-center gap-2 p-4 transition hover:scale-[102%]"
      href="/"
    >
      <SharedLogo />
      <p class="font-bold">Nuxt Dashboard</p>
    </NuxtLink>
    <div class="grow px-4">
      <div class="grid gap-4">
        <NuxtLink
          v-for="item in items"
          :key="item.title"
          class="flex cursor-pointer items-center gap-2 rounded px-2 py-1 transition hover:scale-[102%] hover:bg-neutral-100"
          :href="item.path"
        >
          <div>
            <Icon :name="item.icon" size="20" />
          </div>
          <div>
            {{ item.title }}
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
