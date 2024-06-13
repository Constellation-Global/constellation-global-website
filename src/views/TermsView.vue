<template>
    <coming-soon title="Terms of Service" heading="Binding Conditions" text="In progress"></coming-soon>
</template>
<script setup lang="ts">
import {useHead} from "@vueuse/head";
import ComingSoon from "@/components/ComingSoon.vue";

useHead({
  title: 'Terms of Service - Constellation Global',
  meta: [
    {
      name: 'og:title',
      content: 'Terms of Service - Constellation Global',
    }
  ]
})



</script>