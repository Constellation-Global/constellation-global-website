<script setup lang="ts">
import MoneyBagIcon from "@/components/icons/MoneyBagIcon.vue";
</script>

<template>
  <div class="text-8xl text-center py-20">
    <div class="flex items-center justify-center gap-5">
      Home Page
      <money-bag-icon class="text-red-600 h-20 w-20"/>
    </div>
    <hr class="my-10"/>
    <router-link to="/about" class="btn btn-lg">About page</router-link>
  </div>
</template>
