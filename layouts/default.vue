<script setup lang="ts"></script>
<template>
  <div class="flex h-screen w-screen flex-col items-start lg:flex-row">
    <Sidebar />
    <main class="h-full w-full flex-1 grow-1 p-8">
      <slot />
    </main>
  </div>
</template>
