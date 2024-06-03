<template>
  <div class="h-[60vh] flex flex-col relative shadow-lg shadow-stone-100 overflow-hidden">
    <x-white-patch-background class="z-1"/>
    <x-header-navigation/>
    <div class="text-primary text-6xl font-semibold text-center flex items-center justify-center flex-1 pb-[58px] relative z-10">
      {{ title }}
    </div>
  </div>
</template>
<script setup lang="ts">
import XHeaderNavigation from "@/components/XHeaderNavigation.vue";
import XWhitePatchBackground from "@/components/XWhitePatchBackground.vue";

defineProps<{
  title: string;
}>()
</script>