<template>
  <div class="flex flex-col relative shadow-lg shadow-stone-100 overflow-hidden h-[60vh] bg-secondary">
    <x-dark-background />
    <x-header-navigation light />
    <div class="text-center text-white flex flex-col items-center justify-center flex-1 pb-[58px] relative z-10">
      <h1 class="mb-2 text-4xl font-bold md:text-5xl">
        CountryPedia
      </h1>
      <p class="text-sm">Everything employment!</p>
      <div class="w-full max-w-xl px-8 mt-12 md:mt-16">
          <input id="colection" class="w-full p-3 px-4 text-xs border border-gray-200 rounded-full md:p-4 md:text-sm md:px-8 focus:outline-none" placeholder="Search any collection" name="collection" />
        </div>
    </div>
  </div>

  <x-container>
    <section className="rounded-md md:bg-white py-10">
      <div className="flex gap-3 overflow-x-auto text-sm no-scrollbar text-center">
        <div class="px-4 py-3 rounded-md flex-1 cursor-pointer whitespace-nowrap bg-[#8399E9] text-white">
          Top Countries
        </div>
        <div class="flex-1 px-4 py-3 bg-gray-100 rounded-md cursor-pointer whitespace-nowrap">
          All
        </div>
        <div class="flex-1 px-4 py-3 bg-gray-100 rounded-md cursor-pointer whitespace-nowrap">
          Africa
        </div>
        <div class="flex-1 px-4 py-3 bg-gray-100 rounded-md cursor-pointer whitespace-nowrap">
          Asia
        </div>
        <div class="flex-1 px-4 py-3 bg-gray-100 rounded-md cursor-pointer whitespace-nowrap">
          Middle East 
        </div>
        <div class="flex-1 px-4 py-3 bg-gray-100 rounded-md cursor-pointer whitespace-nowrap">
          South America
        </div>
        <div class="flex-1 px-4 py-3 bg-gray-100 rounded-md cursor-pointer whitespace-nowrap">
          North America
        </div>
      </div>
    </section>
  </x-container>
 
  <x-container>
    <section className="rounded-md md:bg-white md:p-10 p-6 border border-[#606B7D1A] rounded-md mb-3">
      <h2 class="font-semibold container-super-title">Top Countries</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-5 lg:gap-8 overflow-x-auto text-sm no-scrollbar text-center">
        <div v-for="value in [0,1,2,3,4,5,6,7,8,9,10,11]" class="flex-1 px-4 py-3 border border-[#606B7D1A] rounded-md cursor-pointer whitespace-nowrap">
          {{ countryList[value]?.name }}
        </div>
      </div>
    </section>
  </x-container>
  <x-container>
    <section className="rounded-md md:bg-white md:p-10 p-6 border border-[#606B7D1A] rounded-md mb-12">
      <h2 class="font-semibold container-super-title">Country List</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-5 lg:gap-8 overflow-x-auto text-sm no-scrollbar text-center">
        <div v-for="country in countryList" class="flex-1 px-4 py-3 border border-[#606B7D1A] rounded-md cursor-pointer whitespace-nowrap">
          {{ country.name }}
        </div>
      </div>
    </section>
  </x-container>

  <build-team-overseas/>

</template>
<script setup lang="ts">
import XHeaderNavigation from "@/components/XHeaderNavigation.vue";
import XDarkBackground from "@/components/XDarkBackground.vue";
import XContainer from "@/components/XContainer.vue";
import BuildTeamOverseas from "@/components/page-parts/BuildTeamOverseas.vue";
import {useHead} from "@vueuse/head";

useHead({
  title: 'CountryPedia - Constellation Global',
  meta: [
    {
      name: 'og:title',
      content: 'CountryPedia - Constellation Global',
    }
  ]
})

const countryList = [
  {
    name: 'Afghanistan',
    content: ''
  },
  {
    name: 'Albania',
    content: ''
  },
  {
    name: 'Algeria',
    content: ''
  },
  {
    name: 'Angola',
    content: ''
  },
  {
    name: 'Argentina',
    content: ''
  },
  {
    name: 'Armenia',
    content: ''
  },
  {
    name: 'Aruba',
    content: ''
  },
  {
    name: 'Australia',
    content: ''
  },
  {
    name: 'Austria',
    content: ''
  },
  {
    name: 'Azerbaijan',
    content: ''
  },
  {
    name: 'Bahamas',
    content: ''
  },
  {
    name: 'Bahrain',
    content: ''
  },
  {
    name: 'Bangladesh',
    content: ''
  },
  {
    name: 'Barbados',
    content: ''
  },
  {
    name: 'Belarus',
    content: ''
  },
  {
    name: 'Belgium',
    content: ''
  },
  {
    name: 'Belize',
    content: ''
  },
  {
    name: 'Benin',
    content: ''
  },
];

</script>