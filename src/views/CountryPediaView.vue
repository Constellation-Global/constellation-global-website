<template>
    <coming-soon title="Country-Pedia" heading="Introducing Country-Pedia" text="Will Be here Soon"></coming-soon>
</template>
<script setup lang="ts">
  import {useHead} from "@vueuse/head";
  import ComingSoon from "@/components/ComingSoon.vue";

  useHead({
    title: 'Country-Pedia - Constellation Global',
    meta: [
      {
        name: 'og:title',
        content: 'Country-Pedia - Constellation Global',
      }
    ]
  })
</script>