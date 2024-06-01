<template>
  <main class="text-xl leading-relaxed text-ash">
    <router-view/>
  </main>
  <x-footer-navigation class="py-10"/>
</template>
<script setup lang="ts">
import XFooterNavigation from "@/components/XFooterNavigation.vue";
</script>