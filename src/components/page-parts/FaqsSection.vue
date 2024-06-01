<template>
  <div class="bg-stone-50 py-10">
    <x-container>
      <div class="container-super-title">FAQ</div>
      <div class="container-title">Frequently asked questions</div>

      <div class="grid md:grid-cols-2 gap-5 py-10">
        <div class="gap-5 flex flex-col">
          <x-faq :faq="faq" v-for="(faq, x) in faqsEven" :key="x"/>
        </div>
        <div class="gap-5 flex flex-col">
          <x-faq :faq="faq" v-for="(faq, x) in faqsOdd" :key="x"/>
        </div>
      </div>


    </x-container>
  </div>
</template>
<script setup lang="ts">
import XContainer from "@/components/XContainer.vue";
import {computed} from "vue";
import XFaq from "@/components/XFaq.vue";

const faqs = [
  {
    title: 'How can a company hire international talent without setting up a foreign entity?',
    content: 'Don’t have the capacity to employ workers overseas because of your company’s location? It would be Constellation Global who would employ your workers. We take care of everything for you, providing you with one contract and one simple invoice for all employees regardless of where they are based, saving you time and money.'
  },
  {
    title: 'What do i need to apply for an account?',
    content: 'What do i need to apply for an account?'
  },
  {
    title: 'What is the onboarding requirement?',
    content: 'What is the onboarding requirement?'
  },
  {
    title: 'When organizations shall use an Employer of Record?',
    content: 'When organizations shall use an Employer of Record?',
  },
  {
    title: 'Does Constellation Global pay all contributions on behalf of employer and employee?',
    content: 'Does Constellation Global pay all contributions on behalf of employer and employee?'
  },
  {
    title: 'What is your pricing model?',
    content: 'What is your pricing model?'
  }
];

const faqsEven = computed(() => faqs.filter((_, i) => i % 2 == 0))
const faqsOdd = computed(() => faqs.filter((_, i) => i % 2 != 0))

</script>