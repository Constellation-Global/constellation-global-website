<template>

  <a v-if="href && external" :href="href" role="button" :class="colorCss" class="px-5 shadow-none md:px-10 btn">
    <slot name="prepend" class="mr-2"></slot>
    <slot/>
    <slot name="append" class="ml-2"></slot>
  </a>

  <router-link v-else-if="href" :to="href" role="button" :class="colorCss" class="px-5 shadow-none md:px-10 btn">
    <slot name="prepend" class="mr-2"></slot>
    <slot/>
    <slot name="append" class="ml-2"></slot>
  </router-link>

  <button v-else role="button" :class="colorCss" class="px-5 shadow-none md:px-10 btn">
    <slot name="prepend" class="mr-2"></slot>
    <slot/>
    <slot name="append" class="ml-2"></slot>
  </button>
</template>
<script setup lang="ts">
import {computed} from "vue";

const props = defineProps<{
  outlined?: boolean;
  external?: boolean;
  href?: string,
  color?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'default';
}>();

const colorCss = computed(() => {
  switch (props.color) {
    case 'primary':
      return props.outlined
          ? 'border-primary hover:border-primary text-primary hover:text-white bg-white hover:bg-primary'
          : 'bg-primary hover:bg-primary/70 border-primary hover:border-primary/70 text-white';

    case 'secondary':
      return props.outlined
          ? 'border-white hover:border-white text-white hover:text-secondary bg-secondary hover:bg-white'
          : 'bg-white hover:bg-secondary hover:border-white text-secondary hover:text-white';

    case 'accent':
      return props.outlined
          ? 'border-white hover:border-accent text-white hover:text-accent bg-accent hover:bg-white'
          : 'bg-white hover:bg-accent hover:border-white text-accent hover:text-white';

    case 'neutral':
      return props.outlined
          ? 'border-stone-800 hover:border-stone-800 text-stone-800 hover:text-white bg-white hover:bg-stone-800'
          : 'bg-stone-800 hover:bg-stone-600 text-white border-stone-800 hover:border-stone-800';

    case 'default':
      return props.outlined
          ? 'btn-default-outline'
          : 'btn-default';
  }
})
</script>
