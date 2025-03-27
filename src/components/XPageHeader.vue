<template>
  <div :class="['flex flex-col relative shadow-lg shadow-stone-100 overflow-hidden', title && 'h-[60vh]']">
    <x-white-patch-background class="z-1"/>
    <x-header-navigation/>
    <h1 v-if="title" class="text-primary text-4xl md:text-5xl font-bold text-center flex items-center justify-center flex-1 pb-[58px] relative z-10">
      {{ title }}
    </h1>
  </div>
</template>
<script setup lang="ts">
import XHeaderNavigation from "@/components/XHeaderNavigation.vue";
import XWhitePatchBackground from "@/components/XWhitePatchBackground.vue";

defineProps<{ title?: string; }>()
</script>