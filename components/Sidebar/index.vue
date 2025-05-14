<script setup lang="ts">
const open = ref(false);
</script>
<template>
  <div class="relative w-full lg:w-fit">
    <div class="flex h-full w-full items-center justify-between p-4 lg:hidden">
      <SharedLogo />
      <Icon
        v-if="!open"
        @click="open = true"
        name="iconamoon:menu-burger-horizontal"
        class="top-2 left-2 z-50 cursor-pointer"
        size="30"
      />
      <Icon
        v-if="open"
        @click="open = false"
        name="famicons:close-outline"
        class="top-2 left-2 z-50 cursor-pointer"
        size="30"
      />
      <div v-if="open" class="absolute top-0 left-0 z-40 h-full w-full">
        <SidebarMenu />
      </div>
    </div>
    <div
      class="hidden h-screen w-[250px] justify-between border-r lg:flex lg:flex-col"
    >
      <SidebarMenu />
      <div>User Item</div>
    </div>
  </div>
</template>
