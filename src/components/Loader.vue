<!-- Loader.vue -->
<template>
    <LoadingOverlay
        :active="active"
        :can-cancel="false"
        :on-cancel="() => ''"
        :is-full-page="true"
        color="#506FF4"
    />
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  import LoadingOverlay from 'vue-loading-overlay';
  import 'vue-loading-overlay/dist/css/index.css';
  
  defineProps<{ active: boolean; }>();
  </script>
  