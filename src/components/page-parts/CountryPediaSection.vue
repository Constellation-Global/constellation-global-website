<template>
  <div class="py-10 lg:py-16 bg-[url(assets/cpedia-bg.png)] bg-no-repeat bg-cover bg-center bg-secondary relative overflow-hidden">
    <x-white-patch-background class="opacity-5"/>
    <x-container class="flex flex-col items-center gap-16 text-center md:text-left md:flex-row">
      <img :src="CountryPediaSVG" alt="Country Pedia" class="h-64 mx-auto md:h-60"/>
      <div class="flex flex-col justify-between flex-1">
        <div class="flex flex-col gap-5 mb-10">
          <div class="text-base text-accent md:text-xl">Our Country-pedia</div>
          <div class="max-w-[460px] font-semibold text-white text-xl md:text-2xl">Hiring Globally? Check out our CountryPedia.</div>
        </div>
        <div>
          <x-button class="rounded-full px-14" href="/country-pedia">Visit Country-Pedia</x-button>
        </div>
      </div>
    </x-container>
  </div>
</template>
<script setup lang="ts">
import CountryPediaSVG from "@/assets/homepage/country-pedia.svg";
import XButton from "@/components/XButton.vue";
import XContainer from "@/components/XContainer.vue";
import XWhitePatchBackground from "@/components/XWhitePatchBackground.vue";
</script>