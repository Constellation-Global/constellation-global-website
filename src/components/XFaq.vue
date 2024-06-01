<template>
  <div class="collapse collapse-plus peer-checked:shadow-none shadow bg-white">
    <input type="radio" name="my-accordion-3" class="peer"/>
    <div class="collapse-title font-medium rounded-b-2xl bg-white">
      {{ faq.title }}
    </div>
    <div class="collapse-content text-dark peer-checked:pb-5 text-lg">
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