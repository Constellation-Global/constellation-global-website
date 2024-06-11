<template>
  <div class='flex justify-center items-center flex-col gap-12 h-screen p-12 text-center'>
    <img :src="ErrorImg" alt="" class='w-full max-w-xl'/>
    <p>The page you're requesting for is not available</p>
    <x-button href="/" color="accent" outlined class="text-sm rounded-r-lg hover:border-accent border-accent join-item">
      Go back Home
    </x-button>
  </div>

</template>
<script setup lang="ts">
import ErrorImg from "@/assets/not-found.svg"
import XButton from "@/components/XButton.vue";
import {useHead} from "@vueuse/head";

useHead({
  title: 'Not found - Constellation Global',
  meta: [
    {
      name: 'og:title',
      content: 'Not found - Constellation Global',
    }
  ]
})

</script>