<template>
  <div class="pb-20 bg-secondary">
    <x-header-navigation light/>
    <x-container>
      <x-two-cols-grid class="text-white lg:min-h-[70vh]">
        <img :src="HeroSVG" alt="Fully connected workforce" class="lg:order-1 lg:min-w-[85%]"/>
        <div class="flex flex-col items-center max-w-lg text-center lg:items-start gap-7 md:gap-10 lg:text-left">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug lg:leading-[80px]">
            The future is a fully connected <span class="text-accent">workforce</span>
          </h1>
          <p class="text-base md:text-xl lg:leading-9">Let us take the lead and assist you in building best teams
            worldwide - quickly and compliantly.</p>
          <div class="flex flex-wrap justify-center gap-5 mt-6 md:mt-3 lg:mt-0 md:justify-start">
            <x-button color="secondary" outlined href="/support/#contact-form">Speak with sales</x-button>
            <x-button color="secondary" :href="appConfig.registerLink" target="_blank" external>Start hiring</x-button>
          </div>
        </div>
      </x-two-cols-grid>
    </x-container>
  </div>

  <!--  <our-partners />-->

  <x-container>
    <div class="grid gap-10 py-10 text-center lg:py-16 place-items-center lg:grid-cols-2 lg:gap-16 md:text-left">
      <img :src="WhatWeDoImage" alt="What we do" class="order-1 md:order-0"/>
      <div class="flex flex-col items-center order-1 text-center lg:items-start lg:text-left lg:order-2 text-content">
        <h3 class="container-title linegreen">What we do</h3>
        <div class="flex flex-col gap-4">
          <p>
            At Constellation Global, finding quality staff and employing them anywhere has never been easier, and you
            can rest safe in the knowledge that you’re engaging the best talent for your business – and that you’re
            protected from risk.
          </p>
          <p>
            We help companies of any size and location access a global talent pool for their permanent and temporary
            workforce by engaging them on your behalf – and we do it all while eliminating risk.
          </p>
        </div>
      </div>
    </div>
  </x-container>

  <country-pedia-section/>

  <x-container>
    <div class="grid gap-10 py-10 text-center lg:py-16 place-items-center lg:grid-cols-2 lg:gap-16 md:text-left">
      <div class="flex flex-col items-center lg:items-start">
        <h3 class="container-super-title linegreen">Hiring</h3>
        <div class="container-title">Integrate Team<br/> Members Quickly</div>
        <p>
          We provide access to the very best candidates in required fields, while ensuring local compliance, without having to worry about administrative responsibilities.
        </p>
        <p>
          Calculate the costs, add benefits and onboard employees using few clicks, - it’s never been easier to manage everything!
        </p>
      </div>
      <img :src="HiringImage" alt="Hiring"/>
    </div>
  </x-container>

  <x-container>
    <div class="grid gap-10 pb-10 text-center lg:pb-16 place-items-center lg:grid-cols-2 lg:gap-16 md:text-left">
      <div class="flex flex-col items-center text-center md:order-1 lg:items-start lg:text-left">
        <h3 class="container-super-title linegreen">Payroll</h3>
        <div class="container-title">International payroll made easy</div>
        <p>
          Ensure full compliance across your multi-country payrolls, with accuracy and safety being primary benefits of our streamlined, encrypted solution.
        </p>
        <p>
          We provide detailed overview of your entire payroll process, using our automated and accessible data flows.
        </p>
        <x-button color="accent" outlined class="mt-6" external target="_blank" :href="appConfig.registerLink">
          Start now
        </x-button>
      </div>
      <img :src="PayrollImage" alt="Payroll">
    </div>
  </x-container>

  <x-container class="my-10">
    <div class="grid gap-10 pb-10 text-center lg:pb-16 place-items-center lg:grid-cols-2 lg:gap-16 md:text-left">
      <div class="flex flex-col items-center text-center lg:items-start lg:text-left">
        <h3 class="container-super-title linegreen">Benefits</h3>
        <div class="container-title">Keep your talents — and keep them happy</div>
        <p>
          Enhance your employee package with local benefits - whether it is Private Medical Insurance, gym card or private pension plan, Constellation Global offers a variety of options regardless of worker’s location.
        </p>
        <x-button color="accent" outlined class="mt-6" external target="_blank" :href="appConfig.registerLink">
          Start now
        </x-button>
      </div>
      <img :src="BenefitImage" alt="Benefit"/>
    </div>
  </x-container>

  <div class="pt-10 bg-stone-50">
    <x-container>
      <div class="flex flex-col items-center pb-10 text-center lg:items-start md:pb-16 lg:pb-20 lg:text-left">
        <h3 class="container-super-title linegreen">Ready to get started?</h3>
        <p class="container-title max-w-[580px]">Say hello to a world without borders in three easy steps</p>
      </div>
      <div class="grid grid-cols-1 gap-10 lg:grid-cols-3 place-items-center">
        <div
            class="flex flex-col items-center max-w-md p-10 text-center bg-white rounded-2xl hover:shadow"
            v-for="(os,x) in getStarted" :key="x">
          <img class="h-16" :src="os.icon" :alt="os.title">
          <div class="py-3 text-lg font-semibold md:text-xl">{{ os.title }}</div>
          <div class="text-sm leading-7 md:text-base lg:leading-7">{{ os.content }}</div>
        </div>
      </div>
    </x-container>
  </div>

  <!--  <x-container>-->
  <!--    <div class="container-super-title linegreen">Our team</div>-->
  <!--    <div class="container-title">Meet our Brilliant Team</div>-->

  <!--    <x-two-cols-grid>-->
  <!--      <img :src="BrilliantTeam" alt=""/>-->
  <!--      <div class="text-content">-->
  <!--        <div class="mb-5 text-2xl font-semibold md:text-3xl">Tim Disbrey</div>-->
  <!--        <div class="my-5 text-lg font-medium md:text-xl">Founder & CEO</div>-->
  <!--        <p class="text-base leading-7 md:text-base lg:leading-8">Second time founder. 10+ years Special Forces officer. Operational and business experience-->
  <!--          in over 40 countries. Three Master’s Degrees and a PhD. Speaks German and English.</p>-->
  <!--        <x-button color="primary" outlined class="px-8 py-2 mt-5 md:px-16">See all</x-button>-->
  <!--      </div>-->
  <!--    </x-two-cols-grid>-->
  <!--  </x-container>-->

  <faqs-section/>

  <build-team-overseas/>

</template>

<script setup lang="ts">
import XHeaderNavigation from "@/components/XHeaderNavigation.vue";
import XButton from "@/components/XButton.vue";
import XContainer from "@/components/XContainer.vue";
import HeroSVG from "@/assets/homepage/hero1.svg";
// import OurPartners from "@/components/page-parts/OurPartners.vue";
import XTwoColsGrid from "@/components/XTwoColsGrid.vue";
import WhatWeDoImage from "@/assets/homepage/what-we-do.png";
import PayrollImage from "@/assets/homepage/payroll.png";
import HiringImage from "@/assets/homepage/hiring.png";
import BenefitImage from "@/assets/homepage/benefit.png";
import CalculateCost from "@/assets/get-started/calculate-cost.png";
import FindATalent from "@/assets/get-started/find-a-talent.png";
import Onboard from "@/assets/get-started/onboard.png";
import FaqsSection from "@/components/page-parts/FaqsSection.vue";
import BuildTeamOverseas from "@/components/page-parts/BuildTeamOverseas.vue";
import {appConfig} from "@/configs/app.config";
import CountryPediaSection from "@/components/page-parts/CountryPediaSection.vue";

const getStarted = [
  {
    icon: FindATalent,
    title: 'Find a talent',
    content: 'Source the best talents across the world - based on your requirements and budget, not location'
  },
  {
    icon: CalculateCost,
    title: 'Calculate cost',
    content: 'Understand the total costs of employment - no hidden fees with our transparent cost plus price model.'
  },
  {
    icon: Onboard,
    title: 'Onboard in 48hrs',
    content: 'We handle registrations, contracts, HR responsibilities, payroll, local employment benefits & other admin issues.'
  }
];

</script>
