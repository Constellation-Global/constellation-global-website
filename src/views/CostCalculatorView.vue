<template>
  <div class="pb-5 bg-secondary">
    <x-header-navigation light/>
    <x-container>
      <x-two-cols-grid class="items-center text-white">
        <div class="flex flex-col gap-10">
          <div class="flex flex-col gap-2">
            <div class="text-content">Cost calculator</div>
            <div class="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug lg:leading-[70px]">
              Hire and pay in <span class="text-accent">102+</span> countries
            </div>
          </div>
          <div class="text-base md:text-xl lg:leading-9">Let us take the wheel and help manage everything related to
            paying your global workforce.
          </div>
          <div class="flex flex-wrap gap-5">
            <x-button color="secondary" external :href="appConfig.registerLink" target="_blank">
              Start Now
            </x-button>
          </div>
        </div>
        <div>
          <img :src="CountriesImage" alt="Cost Calculator Countries"/>
        </div>
      </x-two-cols-grid>
    </x-container>
  </div>

  <x-container>
    <div class="pt-5 md:pt-8 container-super-title text-linegreen">Pricing</div>
    <div class="container-title">Our Price</div>
    <p class="text-content">Discover our wide range of pricing options suitable for you. Whether you want to hire a
      contractor in the UK,
      twenty employees in Brazil or run payroll in thirteen different countries where you own entities. You can do it
      all with Constellation global.</p>

    <div class="flex flex-col py-20 gap-14">
      <div v-for="(p,x) in pricing" :key="x"
           class="shadow-md rounded-xl grid md:grid-cols-2 grid-cols-1 overflow-hidden max-w-[900px] border mx-auto">
        <div class="flex flex-col gap-3 p-10 bg-white md:w-[85%]">
          <div class="flex items-center gap-3">
            <div class="h-14 w-14 rounded-xl bg-[#ECEBFF] flex items-center justify-center">
              <div class="h-10 w-10 rounded-full bg-gradient-to-r from-50% from-primary to-white to-0%"></div>
            </div>
            <div>
              <div class="text-sm font-medium">Pro</div>
              <div class="font-bold">For {{ p.type }}</div>
            </div>
          </div>
          <div class="mb-1 text-sm">{{ p.summary }}</div>
          <div>
            <span class="text-3xl font-bold">${{ p.price }}</span>
            <span class="text-sm">{{ " " }}/{{ p.frequency }}</span>
          </div>
          <div class="mt-1.5">
            <x-button color="primary" class="w-full" :href="p.href" external target="_blank">Get started</x-button>
          </div>
        </div>
        <div class="bg-[#F7F7FC] p-10 flex items-center">
          <div class="text-sm">
            <div class="pb-3 font-bold">What's included</div>
            <div v-for="(f,y) in p.features" :key="`${y}-${x}`"
                 class="flex items-center gap-4 py-1 text-sm font-medium">
              <div class="flex items-center justify-center w-6 h-6 rounded-full bg-primary">
                <check-mark-icon class="w-4 h-4 text-white"/>
              </div>
              {{ f }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </x-container>

  <build-team-overseas/>

</template>
<script setup lang="ts">
import XHeaderNavigation from "@/components/XHeaderNavigation.vue";
import XContainer from "@/components/XContainer.vue";
import XTwoColsGrid from "@/components/XTwoColsGrid.vue";
import XButton from "@/components/XButton.vue";
import CheckMarkIcon from "@/components/icons/CheckMarkIcon.vue";
import BuildTeamOverseas from "@/components/page-parts/BuildTeamOverseas.vue";
import CountriesImage from "@/assets/countries.png";
import {useHead} from "@vueuse/head";
import {appConfig} from "@/configs/app.config";

useHead({
  title: 'Pricing - Constellation Global',
  meta: [
    {
      name: 'og:title',
      content: 'Pricing - Constellation Global',
    }
  ]
})

const pricing = [
  {
    level: 'Pro',
    type: 'Contractors',
    summary: 'Show social proof notifications to increase leads and sales.',
    price: '99',
    frequency: 'monthly',
    features: ['All analytics features', 'Up to 250,000 tracked visits', 'Normal support', 'Up to 3 team members'],
    href: appConfig.registerLink
  },
  {
    level: 'Pro',
    type: 'PEOs',
    summary: 'Show social proof notifications to increase leads and sales.',
    price: '99',
    frequency: 'monthly',
    features: ['All analytics features', 'Up to 250,000 tracked visits', 'Normal support', 'Up to 3 team members'],
    href: appConfig.registerLink
  }
];
</script>