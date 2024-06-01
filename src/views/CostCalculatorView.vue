<template>
  <div class="bg-secondary pb-5">
    <x-header-navigation light/>
    <x-container>
      <x-two-cols-grid class="text-white items-center">
        <div class="flex flex-col gap-10">
          <div class="">Cost calculator</div>
          <div class="text-5xl md:text-6xl font-bold">
            Hire and pay in <span class="text-accent">102+</span> countries
          </div>
          <div>Let us take the wheel and help manage everything related to paying your global workforce.</div>
          <div class="flex gap-5 flex-wrap">
            <x-button color="secondary" outlined>Select country</x-button>
            <x-button color="secondary">Start Now</x-button>
          </div>
        </div>
        <div>
          <img :src="CountriesImage" alt="Cost Calculator Countries"/>
        </div>
      </x-two-cols-grid>
    </x-container>
  </div>

  <x-container>
    <div class="container-super-title text-linegreen">Pricing</div>
    <div class="container-title">Our Price</div>
    <p>Discover our wide range of pricing options suitable for you. Whether you want to hire a contractor in the UK,
      twenty employees in Brazil or run payroll in thirteen different countries where you own entities. You can do it
      all with Constellation global.</p>

    <div class="flex flex-col gap-10 py-20">
      <div v-for="(p,x) in pricing" :key="x"
           class="shadow-md rounded-3xl grid md:grid-cols-2 grid-cols-1 overflow-hidden max-w-[720px] border mx-auto">
        <div class="p-10 flex flex-col gap-3 bg-white">
          <div class="flex gap-3 items-center">
            <div class="h-14 w-14 rounded-xl bg-[#ECEBFF] flex items-center justify-center">
              <div class="h-10 w-10 rounded-full bg-gradient-to-r from-50% from-primary to-white to-0%"></div>
            </div>
            <div>
              <div class="text-sm">Pro</div>
              <div class="font-semibold">For {{ p.type }}</div>
            </div>
          </div>
          <div class="text-sm">{{ p.summary }}</div>
          <div>
            <span class="text-3xl font-semibold">${{ p.price }}</span>
            <span class="text-sm">/{{ p.frequency }}</span>
          </div>
          <div>
            <x-button color="primary" :href="p.href" external target="_blank">Get started</x-button>
          </div>
        </div>
        <div class="bg-[#F7F7FC] p-10 flex items-center">
          <div class="text-sm">
            <div class="py-2 font-semibold">What's included</div>
            <div v-for="(f,y) in p.features" :key="`${y}-${x}`" class="text-sm py-1 flex items-center gap-3">
              <div class="h-6 w-6 rounded-full bg-primary flex items-center justify-center">
                <check-mark-icon class="h-4 w-4 text-white"/>
              </div>
              {{f}}
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

const pricing = [
  {
    level: 'Pro',
    type: 'Contractors',
    summary: 'Show social proof notifications to increase leads and sales.',
    price: '99',
    frequency: 'monthly',
    features: ['All analytics features', 'Up to 250,000 tracked visits', 'Normal support', 'Up to 3 team members'],
    href: 'https://app.constellation-global.com/'
  },
  {
    level: 'Pro',
    type: 'PEOs',
    summary: 'Show social proof notifications to increase leads and sales.',
    price: '99',
    frequency: 'monthly',
    features: ['All analytics features', 'Up to 250,000 tracked visits', 'Normal support', 'Up to 3 team members'],
    href: 'https://app.constellation-global.com/'
  }
];
</script>