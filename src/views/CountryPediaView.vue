<template>
  <div class="flex flex-col relative shadow-lg shadow-stone-100 overflow-hidden h-[60vh] bg-secondary ">
    <x-dark-background/>
    <x-header-navigation light/>
    <div
        class="text-center text-white flex flex-col items-center justify-center flex-1 pb-[58px] relative z-10 font-inter">
      <h1 class="mb-2 text-4xl font-semibold md:text-5xl">
        CountryPedia
      </h1>
      <p class="text-sm">Everything employment!</p>
      <div class="w-full max-w-xl px-8 mt-12 md:mt-16">
        <input v-model="name" id="collection"
               class="w-full p-3 px-4 text-xs text-black border border-gray-200 rounded-full md:p-4 md:text-sm md:px-8 focus:outline-none"
               placeholder="Search any country" name="collection"/>
      </div>
    </div>
  </div>

  <x-container>
    <section class="rounded-md md:bg-white py-10">
      <div class="flex gap-3 overflow-x-auto text-sm no-scrollbar text-center">
        <div v-for="filter in filters"
             :class="['px-4 py-3 rounded-md flex-1 cursor-pointer whitespace-nowrap', filter.name === zone && 'bg-[#8399E9] text-white']"
             @click="() => zone = filter.name">
          {{ filter.name }}
        </div>
      </div>
    </section>
  </x-container>
  <x-container v-if="name && !!countrySearchResult?.length">
    <section class="md:bg-white md:p-10 p-6 border border-[#606B7D1A] rounded-md mb-3">
      <h2 class="font-semibold container-super-title">Search Term: {{ name }}</h2>
      <div
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-5 lg:gap-8 overflow-x-auto text-sm no-scrollbar text-center">
        <router-link :to="`/country-pedia/${country?._id}`" v-for="country in countrySearchResult"
                     class="flex-1 px-4 py-3 border border-[#606B7D1A] rounded-md cursor-pointer whitespace-nowrap">
          {{ country?.name }}
        </router-link>
      </div>
    </section>
  </x-container>

  <x-container v-if="zone && !!countriesByZone?.length">
    <section class="md:bg-white md:p-10 p-6 border border-[#606B7D1A] rounded-md mb-3">
      <h2 class="font-semibold container-super-title">{{ zone }}</h2>
      <div
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-5 lg:gap-8 overflow-x-auto text-sm no-scrollbar text-center">
        <router-link :to="`/country-pedia/${country?._id}`" v-for="country in countriesByZone"
                     class="flex-1 px-4 py-3 border border-[#606B7D1A] rounded-md cursor-pointer whitespace-nowrap">
          {{ country?.name }}
        </router-link>
      </div>
    </section>
  </x-container>
  <x-container>
    <section class="md:bg-white md:p-10 p-6 border border-[#606B7D1A] rounded-md mb-12">
      <h2 class="font-semibold container-super-title font-inter">Country List</h2>
      <div
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-5 lg:gap-6 overflow-x-auto text-sm no-scrollbar text-center">

        <router-link :to="`/country-pedia/${country?._id}`" v-for="country in countryList"
                     class="flex justify-center items-center flex-1 hover:bg-gray-100 px-1 py-3 border border-[#606B7D1A] rounded-md cursor-pointer">
          <div>
            {{ country?.name }}
          </div>
        </router-link>
      </div>
    </section>
  </x-container>

  <build-team-overseas/>
  <loading
      v-model:active="countriesByZoneLoading"
      :can-cancel="false"
      :on-cancel="() => ''"
      :is-full-page="true"
      color="#506FF4"
  />

</template>
<script setup lang="ts">
import {useGetGlobals, useGetGlobalsByZone, useSearchGlobals} from "@/hooks/useGlobal";

import XHeaderNavigation from "@/components/XHeaderNavigation.vue";
import XDarkBackground from "@/components/XDarkBackground.vue";
import XContainer from "@/components/XContainer.vue";
import BuildTeamOverseas from "@/components/page-parts/BuildTeamOverseas.vue";
import {useHead} from "@vueuse/head";
import {ref, onBeforeMount} from "vue";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

useHead({
  title: 'CountryPedia - Constellation Global',
  meta: [
    {
      name: 'og:title',
      content: 'CountryPedia - Constellation Global',
    }
  ]
})

const zone = ref<string>('Top Countries')

const name = ref<string>('')

const {data: countryList, refetch: fetchGlobals} = useGetGlobals({});
const {data: countriesByZone, isLoading: countriesByZoneLoading} = useGetGlobalsByZone(zone.value);
const {data: countrySearchResult} = useSearchGlobals({filters: {name: name.value}});
console.log({countrySearchResult, countryList, countriesByZone})

onBeforeMount(async () => {
  await fetchGlobals();
});

const filters = [
  {
    name: 'Top Countries',
  },
  {
    name: 'All',
  },
  {
    name: 'Africa',
  },
  {
    name: 'Asia',
  },
  {
    name: 'Middle East',
  },
  {
    name: 'South America',
  },
  {
    name: 'Aruba',
  },
  {
    name: 'North America',
  },
]

</script>
