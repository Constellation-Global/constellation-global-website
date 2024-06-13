<template>
    <coming-soon title="Privacy and Policy" heading="Governing Policies" text="In progress"></coming-soon>
</template>
<script setup lang="ts">
import {useHead} from "@vueuse/head";
import ComingSoon from "@/components/ComingSoon.vue";

useHead({
  title: 'Privacy and Policy - Constellation Global',
  meta: [
    {
      name: 'og:title',
      content: 'Privacy and Policy - Constellation Global',
    }
  ]
})



</script>