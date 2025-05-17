<script setup lang="ts">
export type User = {
  name: string;
  email: string;
  avatar: string;
  info: string;
};
const props = defineProps<{
  user: User;
}>();
</script>
<template>
  <div class="fixed bottom-3 left-3">
    <div class="mx-auto flex space-x-2 rounded-lg border px-5 py-1">
      <div class="h-10 w-10 rounded-full">
        <img :src="user.avatar" :alt="user.name" class="object-cover" />
      </div>
      <div>
        <p class="font-bold text-black">{{ user.name }}</p>
        <p class="text-sm">{{ user.email }}</p>
        <p class="text-sm">{{ user.info }}</p>
      </div>
    </div>
  </div>
</template>
