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
  import { defineProps, defineEmits } from 'vue';
  import LoadingOverlay from 'vue-loading-overlay';
  import 'vue-loading-overlay/dist/css/index.css';
  
  const props = defineProps<{
    active: boolean;
    // canCancel: boolean;
    // onCancel: () => void;
    // isFullPage: boolean;
    // color: string;
  }>();
  
//   const emit = defineEmits(['update:active']);
  
//   const onActiveUpdate = (value: boolean) => {
//     emit('update:active', value);
//   };
  </script>
  