<template>
  <div class="py-10 bg-[url(assets/cpedia-bg.png)] bg-no-repeat bg-cover bg-center bg-secondary relative overflow-hidden">
    <x-white-patch-background class="opacity-5"/>
    <x-container class="flex flex-wrap gap-16 items-center">
      <img :src="CountryPediaImage" alt="Country Pedia" class="md:h-60"/>
      <div class="flex-1 flex flex-col justify-between">
        <div>
          <div class="text-primary">Our Country-pedia</div>
          <div class="max-w-[720px] text-white mb-10 mt-5 text-4xl">Hiring Globally? Check out our CountryPedia.</div>
        </div>
        <div>
          <x-button class="px-14 rounded-full">Visit Country-Pedia</x-button>
        </div>
      </div>
    </x-container>
  </div>
</template>
<script setup lang="ts">
import CountryPediaImage from "@/assets/country-pedia.png";
import XButton from "@/components/XButton.vue";
import XContainer from "@/components/XContainer.vue";
import XWhitePatchBackground from "@/components/XWhitePatchBackground.vue";
</script>