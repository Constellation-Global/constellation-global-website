<template>
  <div :class="[!classname && 'grid gap-10 text-center place-items-center lg:grid-cols-2 place-content-center items-center lg:gap-16 md:text-left', classname]">
  <!-- <div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 lg:py-10"> -->
    <slot />
  </div>
</template>
<script setup lang="ts">
  interface IProps {
    classname?: string
  }
  const props = defineProps<IProps>()
  
</script>