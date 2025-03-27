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
        <input v-model="searchTerms.country" id="collection"
               class="w-full p-3 px-4 text-xs text-black border border-gray-200 rounded-full md:p-4 md:text-sm md:px-8 focus:outline-none"
               placeholder="Search any country" name="collection"/>
      </div>
    </div>
  </div>

  <x-container>
    <section class="rounded-md md:bg-white py-10">
      <div class="flex gap-3 overflow-x-auto text-sm no-scrollbar text-center">
        <div v-for="filter in filters"
             :class="['px-4 py-3 rounded-md flex-1 cursor-pointer whitespace-nowrap', filter.name === searchTerms.zone && 'bg-[#8399E9] text-white']"
             @click="() => setZone(filter.name)">
          {{ filter.name }}
        </div>
      </div>
    </section>
  </x-container>

  <x-container>
    <section class="md:bg-white md:p-10 p-6 border border-[#606B7D1A] rounded-md mb-12">
      <h2 class="font-semibold container-super-title font-inter">
        <span v-if="searchTerms.country">Search Term: {{ searchTerms.country }}</span>
        <span v-else>Country List</span>
      </h2>
      <div
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-5 lg:gap-6 overflow-x-auto text-sm no-scrollbar text-center">

        <router-link :to="`/country-pedia/${country?._id}`"
                     v-for="country in filteredCountries"
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
      v-model:active="isLoading" :can-cancel="false"
      :on-cancel="() => ''" :is-full-page="true" color="#506FF4"
  />

</template>
<script setup lang="ts">
import {useGetGlobals} from "@/hooks/useGlobal";

import XHeaderNavigation from "@/components/XHeaderNavigation.vue";
import XDarkBackground from "@/components/XDarkBackground.vue";
import XContainer from "@/components/XContainer.vue";
import BuildTeamOverseas from "@/components/page-parts/BuildTeamOverseas.vue";
import {useHead} from "@vueuse/head";
import {computed, onBeforeMount, ref} from "vue";
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

const searchTerms = ref({zone: 'All', country: ''});
const topCountries = ref<string[]>(["US", "CN", "JP", "DE", "IN", "GB", "FR", "IT", "BR", "CA", "KR", "AU", "ES", "ID", "NL", "SA", "TR", "CH"]);
const {data: countryList, refetch: fetchGlobals, isLoading} = useGetGlobals({});

const setZone = (name: string) => {
  searchTerms.value = {zone: name, country: ''};
}

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

const filteredCountries = computed(() => {
  if (!countryList.value) return [];

  const searchZone = searchTerms.value.zone ? searchTerms.value.zone.toLowerCase() : "";
  const searchCountry = searchTerms.value.country ? searchTerms.value.country.toLowerCase() : "";
  let filterList = countryList.value;

  if (searchZone === "top countries") filterList = countryList.value.filter((country) => topCountries.value.includes(country?.overview?.code || ''));

  return filterList.filter((country) => {
    const currentZone = country?.overview?.zone?.toLowerCase() || "";
    const currentCountry = country?.name?.toLowerCase() || "";

    return currentCountry.includes(searchCountry) &&
        (["all", "top countries"].includes(searchZone) || currentZone === searchZone);
  });
});

</script>
