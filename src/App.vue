<script setup lang="ts">
import {useHead} from "@vueuse/head";

useHead({
  title: 'Constellation Global -  A global talent pool, right at your fingertips.',
  meta: [
    {
      name: 'description',
      content: 'Find and hire the perfect employees and contractors now! Our platform connects you with top talent across various industries, ensuring a seamless and efficient hiring process. Start building your dream team today!'
    },
    {
      name: 'keywords',
      content: 'employment, jobs, hr, employee, employer, hire, remote work, hire globally, hire online, work online',
    },
    {
      name: 'og:title',
      content: 'Constellation Global -  A global talent pool, right at your fingertips.',
    }
  ]
})
</script>

<template>
  <RouterView/>
</template>