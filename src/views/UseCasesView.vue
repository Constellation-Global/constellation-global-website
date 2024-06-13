<template>
      <coming-soon title="Use Cases" heading="Introducing Case studies" text="Stay tuned for something amazing"></coming-soon>
</template>
<script setup lang="ts">
  import {useHead} from "@vueuse/head";
  import ComingSoon from "@/components/ComingSoon.vue";

  useHead({
    title: 'Use cases - Constellation Global',
    meta: [
      {
        name: 'og:title',
        content: 'Use cases - Constellation Global',
      }
    ]
  })



</script>