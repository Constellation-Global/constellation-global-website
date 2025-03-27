<template>
  <div :class="[!classname && 'grid gap-10 text-center place-items-center lg:grid-cols-2 place-content-center items-center lg:gap-16 md:text-left', classname]">
    <slot />
  </div>
</template>
<script setup lang="ts">
  interface IProps {classname?: string}
  defineProps<IProps>()
</script>