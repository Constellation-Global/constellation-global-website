<template>
  <div class="bg-secondary pb-5">
    <x-header-navigation light/>
    <x-container>
      <x-two-cols-grid class="text-white items-center">
        <div class="flex flex-col gap-8 md:gap-10">
          <div class="text-5xl md:text-6xl font-bold md:leading-[92.61px]">
            The future is a fully connected <span class="text-accent">workforce</span>
          </div>
          <div>Let us take the lead and assist you in building best teams worldwide - quickly and compliantly.</div>
          <div class="flex gap-5 flex-wrap">
            <x-button color="secondary" outlined>Speak with sales</x-button>
            <x-button color="secondary">Start hiring</x-button>
          </div>
        </div>
        <div>
          <img :src="HeroImage" alt="Fully connected workforce"/>
        </div>
      </x-two-cols-grid>
    </x-container>
  </div>

  <our-partners/>

  <x-container>
    <x-two-cols-grid>
      <img :src="WhatWeDoImage" alt="What we do" class="order-1 md:order-0"/>
      <div class="order-0 md:order-1">
        <div class="container-title linegreen">What we do</div>
        <p>
          An Employer of Record (EOR) is an organization that helps companies expand internationally by hiring and
          paying
          employees on behalf of another company.
          EORs assume the responsibility for all formal employment tasks, including payroll processes and compliance
          documentation.
        </p>
        <p>
          Simply put, using an Employer of Record (EOR) allows companies to legally and efficiently employ workers in
          other countries without having to set up a local entity or risk violating local employment laws.
        </p>
      </div>
    </x-two-cols-grid>
  </x-container>

  <country-pedia/>

  <x-container>
    <x-two-cols-grid>
      <div>
        <div class="container-super-title linegreen">Hiring</div>
        <div class="container-title">Integrate Team<br/> Members Quickly</div>
        <p>Expand your workforce with the very best talent from across the globe, and employ them almost anywhere.</p>
      </div>
      <img :src="HiringImage" alt="Hiring"/>
    </x-two-cols-grid>
  </x-container>

  <x-container>
    <x-two-cols-grid>
      <img :src="PayrollImage" alt="Payroll" class="order-1 md:order-0">
      <div class="order-0 md:order-1">
        <div class="container-super-title linegreen">Payroll</div>
        <div class="container-title">International payroll made easy</div>
        <p>
          Ensure full compliance across all your payrolls, with safety being a primary benefit of our streamlined,
          encrypted portal.
        </p>
        <x-button color="accent" outlined class="mt-6">Start now</x-button>
      </div>
    </x-two-cols-grid>
  </x-container>

  <x-container>
    <x-two-cols-grid>
      <div>
        <div class="container-super-title linegreen">Benefits</div>
        <div class="container-title">Keep your talent—and keep them happy</div>
        <p>Get new employees on your payroll fast and in full compliance with our automated platform</p>
        <x-button color="accent" outlined class="mt-6">Start now</x-button>
      </div>
      <img :src="BenefitImage" alt="Benefit"/>
    </x-two-cols-grid>
  </x-container>

  <div class="bg-stone-50 py-10">
    <x-container>
      <div class="container-super-title linegreen">Ready to get started?</div>
      <div class="container-title max-w-[580px] pb-20">Say hello to a world without borders in three easy steps</div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div
            class="flex flex-col items-center text-center rounded-2xl hover:shadow p-10 bg-white"
            v-for="(os,x) in getStarted" :key="x">
          <img class="h-16" :src="os.icon" :alt="os.title">
          <div class="font-semibold py-3">{{ os.title }}</div>
          <div class="text-xl">{{ os.content }}</div>
        </div>
      </div>
    </x-container>
  </div>


  <x-container>
    <div class="container-super-title linegreen">Our team</div>
    <div class="container-title">Meet our Brilliant Team</div>

    <x-two-cols-grid>
      <img :src="BrilliantTeam" alt=""/>
      <div>
        <div class="text-3xl font-semibold my-5">Tim Disbrey</div>
        <div class="text-2xl my-5">Founder & CEO</div>
        <p class="text-md ">Second time founder. 10+ years Special Forces officer. Operational and business experience
          in over 40 countries. Three Master’s Degrees and a PhD. Speaks German and English.</p>
        <x-button color="primary" outlined class="w-40 mt-5">See all</x-button>
      </div>
    </x-two-cols-grid>
  </x-container>

  <faqs-section/>

  <build-team-overseas/>

</template>

<script setup lang="ts">
import XHeaderNavigation from "@/components/XHeaderNavigation.vue";
import XButton from "@/components/XButton.vue";
import XContainer from "@/components/XContainer.vue";
import HeroImage from "@/assets/homepage/hero-image.png";
import OurPartners from "@/components/page-parts/OurPartners.vue";
import XTwoColsGrid from "@/components/XTwoColsGrid.vue";
import WhatWeDoImage from "@/assets/homepage/what-we-do.png";
import PayrollImage from "@/assets/homepage/payroll.png";
import HiringImage from "@/assets/homepage/hiring.png";
import BenefitImage from "@/assets/homepage/benefit.png";
import CalculateCost from "@/assets/get-started/calculate-cost.png";
import FindATalent from "@/assets/get-started/find-a-talent.png";
import Onboard from "@/assets/get-started/onboard.png";
import FaqsSection from "@/components/page-parts/FaqsSection.vue";
import BrilliantTeam from "@/assets/homepage/brilliant-team.png";
import CountryPedia from "@/components/page-parts/CountryPedia.vue";
import XWhitePatchBackground from "@/components/XWhitePatchBackground.vue";
import BuildTeamOverseas from "@/components/page-parts/BuildTeamOverseas.vue";

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
