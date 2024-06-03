<template>
  <div class="bg-white shadow collapse collapse-plus peer-checked:shadow-none">
    <input type="radio" name="my-accordion-3" class="peer"/>
    <div class="text-base font-medium leading-7 bg-white collapse-title rounded-b-2xl md:text-lg lg:leading-8">
      {{ faq.title }}
    </div>
    <div class="text-sm leading-6 collapse-content text-dark peer-checked:pb-5 md:text-base lg:leading-7">
      <div v-html="faq.content"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
interface IFaq {
  title: string;
  content: string;
}

defineProps<{ faq: IFaq }>()
</script>