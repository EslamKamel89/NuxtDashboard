<script setup lang="ts"></script>
<template>
  <div class="flex h-screen w-screen items-start">
    <Sidebar />
    <main>
      <slot />
    </main>
  </div>
</template>
