<template>
  <div class="max-w-[1200px] mx-auto px-6" :class="flat ? '': 'py-5'">
    <div v-if="superTitle">{{ superTitle }}</div>
    <div v-if="title">{{ title }}</div>
    <slot/>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  superTitle?: string;
  title?: string;
  flat?: boolean;
}>()
</script>