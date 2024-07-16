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
        <div v-for="filter in filters" :class="['px-4 py-3 rounded-md flex-1 cursor-pointer whitespace-nowrap', filter.name === zone && 'bg-[#8399E9] text-white']"  @click="() => zone = filter.name">
          {{ filter.name }}
        </div>
        <!-- <div class="flex-1 px-4 py-3 bg-gray-100 rounded-md cursor-pointer whitespace-nowrap">
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
        </div> -->
      </div>
    </section>
  </x-container>
  
  <x-container v-if="zone && !!countriesByZone?.length">
    <section className="rounded-md md:bg-white md:p-10 p-6 border border-[#606B7D1A] rounded-md mb-3">
      <h2 class="font-semibold container-super-title">{{ zone }}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-5 lg:gap-8 overflow-x-auto text-sm no-scrollbar text-center">
        <div v-for="country in countriesByZone" class="flex-1 px-4 py-3 border border-[#606B7D1A] rounded-md cursor-pointer whitespace-nowrap">
          <router-link :to="`/country-pedia/${country?._id}`">
              {{ country?.name }}
          </router-link>
        </div>
      </div>
    </section>
  </x-container>
  <x-container>
    <section className="rounded-md md:bg-white md:p-10 p-6 border border-[#606B7D1A] rounded-md mb-12">
      <h2 class="font-semibold container-super-title">Country List</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-5 lg:gap-8 overflow-x-auto text-sm no-scrollbar text-center">
        <div v-for="country in countryList" class="flex-1 px-4 py-3 border border-[#606B7D1A] rounded-md cursor-pointer whitespace-nowrap">
          <router-link :to="`/country-pedia/${country?._id}`">
              {{ country?.name }}
          </router-link>
        </div>
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
<script setup lang="ts">``
import XHeaderNavigation from "@/components/XHeaderNavigation.vue";
import XDarkBackground from "@/components/XDarkBackground.vue";
import XContainer from "@/components/XContainer.vue";
import BuildTeamOverseas from "@/components/page-parts/BuildTeamOverseas.vue";
import {useHead} from "@vueuse/head";
import { useFetch } from "@/composables/useFetch";
import type { GlobalInterface } from "@/interfaces"
import { apiGetGlobals, apiGetGlobalsByZone } from "@/services";
import { ref, onBeforeMount, watch } from "vue";
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



const { data: countryList, fetchData: fetchGlobals } = useFetch<GlobalInterface[]>({
    api: apiGetGlobals,
    // run: true,
    param: {}
});

const { data: countriesByZone, fetchData: fetchCGlobalsByZone, loading: countriesByZoneLoading } = useFetch<GlobalInterface[]>({
    api: apiGetGlobalsByZone,
    run: true,
    param: {
      zone: zone.value,
    },
});

// console.log({ countriesByZone: countriesByZone })
// console.log({ countryList: countryList })

watch(zone, async () => {
  fetchCGlobalsByZone({ zone: zone.value });
})



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