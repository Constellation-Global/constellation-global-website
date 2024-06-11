<template>
  <x-page-header title="Innovation"/>

  <x-container>
    <div class="py-10">
      <div class="container-super-title text-linegreen">Faced with</div>
      <div class="container-title">The Problem</div>
      <p class="text-content">Don’t have the capacity to employ workers overseas because of your company’s location? Confused by dealing with
        local labour laws, HR responsibilities and other time-consuming employment admin? With remote working quickly
        becoming the new normal, there’s no better time to consider sourcing from a global talent pool, cutting costs and
        engaging international employees anywhere.</p>
    </div>
  </x-container>


  <x-container>
      <div class="container-super-title text-linegreen">We provide</div>
      <div class="container-title">The Solution</div>
      <p class="text-content">
        We help companies of any size and location access a global talent pool for their permanent workforce by employing
        them on your behalf – and we do it all while eliminating risk, cutting costs and saving you time so you can focus
        on your business. At Constellation Global, finding quality staff and employing them anywhere has never been
        easier, and you can rest safe in the knowledge that you’re engaging the best talent for your business – and that
        you’re protected from risk.
      </p>
  </x-container>

  <x-container>
    <div class="py-10">
      <div class="container-super-title text-linegreen">Solution breakdown</div>
      <div class="container-title">Viable steps to providing solution</div>
  
      <div class="grid gap-10 py-10 lg:grid-cols-3 md:grid-cols-2 grid-col-1">
        <div v-for="(cb, x) in solutions" :key="x">
          <div class="flex items-center mb-5 gap-x-5">
            <div class="h-10 w-10 rounded-full bg-[#F1F7FF] flex items-center justify-center text-primary">
              <check-mark-icon/>
            </div>
            <div class="text-lg font-semibold md:text-xl">{{ cb.title }}</div>
          </div>
          <div class="text-content">{{ cb.content }}</div>
        </div>
      </div>
    </div>
  </x-container>

  <build-team-overseas/>

</template>
<script setup lang="ts">
import XPageHeader from "@/components/XPageHeader.vue";
import XContainer from "@/components/XContainer.vue";
import CheckMarkIcon from "@/components/icons/CheckMarkIcon.vue";
import BuildTeamOverseas from "@/components/page-parts/BuildTeamOverseas.vue";
import {useHead} from "@vueuse/head";

useHead({
  title: 'Innovation - Constellation Global',
  meta: [
    {
      name: 'og:title',
      content: 'Innovation - Constellation Global',
    }
  ]
})

const solutions = [
  {
    title: 'Freelance Hiring',
    content: 'In most cases this means that your employees need to start a company themselves in order to send you an invoice for their work. A freelancer is not protected by local law, it\'s hard to get a mortgage and a pension is not available.'
  },
  {
    title: 'In-Country Entity',
    content: 'You might need a local director in the country you want to set up shop. You need a bank account, an office for an address, a local accountancy firm and some lawyers. The cost and time are simply not worth it.'
  },
  {
    title: 'EOR',
    content: 'You pay a monthly invoice to the company for the payroll. Your employee can now reap the benefits of employment and you don\'t have to set up your own entity. What a breeze!'
  }
];

</script>