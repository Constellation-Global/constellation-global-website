<template>
  <x-page-header title="About us"/>

  <x-container>
    <div class="py-10">
        <div class="container-super-title text-linegreen">Our Story</div>
        <div class="container-title">The Global Constellation Story</div>
        <p class="text-content">The world of work continues to rapidly change as we become more interconnected. For companies to be successful
          they need access to the best talent possible, and as more people choose to work as professional contractors,
          access to this highly-skilled workforce is limited, but crucial for success. Our vision is that companies should
          be able to operate and access these global skill sets anywhere, without risk, administration or high costs –
          allowing them to focus on what they do best.</p>
    </div>
  </x-container>

  <div class="bg-stone-50">
    <x-container>
      <div class="py-10">
        <x-two-cols-grid>
          <div>
            <div class="container-super-title text-linegreen">Our Journey</div>
            <div class="container-title">How we started</div>
            <p class="text-content">Constellation Global was founded in 2011, and its goal was to help companies access and deploy talent in
              Europe, the Middle East and Africa, regardless of where each company was based. Since then, we have grown
              our
              global footprint immensely, and are now able to provide our cost-effective, risk mitigating service for
              companies across more than 150 countries.</p>
          </div>
          <img :src="OurJourney" alt="Our journey"/>
        </x-two-cols-grid>
      </div>

    </x-container>
  </div>

  <x-container>
    <div class="py-10">
      <div class="container-super-title text-linegreen">Our Purpose & Core Beliefs</div>
      <div class="container-title">We’re Here To Help You Grow</div>
      <div class="grid gap-10 pt-3 pb-10 lg:grid-cols-3 md:grid-cols-2 grid-col-1">
        <div v-for="(cb, x) in coreBeliefs" :key="x">
          <div class="flex items-center mb-5 gap-x-5">
            <div class="h-10 w-10 rounded-full bg-[#F1F7FF] flex items-center justify-center text-primary">
              <check-mark-icon/>
            </div>
            <div class="my-4 text-lg font-semibold md:text-xl">{{ cb.title }}</div>
          </div>
          <div class="text-content">{{ cb.content }}</div>
        </div>
      </div>
    </div>
  </x-container>

  <our-team/>

  <build-team-overseas/>
</template>
<script setup lang="ts">
import XPageHeader from "@/components/XPageHeader.vue";
import XContainer from "@/components/XContainer.vue";
import XTwoColsGrid from "@/components/XTwoColsGrid.vue";
import OurTeam from "@/components/page-parts/OurTeam.vue";
import BuildTeamOverseas from "@/components/page-parts/BuildTeamOverseas.vue";
import CheckMarkIcon from "@/components/icons/CheckMarkIcon.vue";
import OurJourney from "@/assets/our-journey.png";

const coreBeliefs = [
  {
    title: 'Global Talent',
    content: 'We help you connect with great talent globally. Whatever your niche or role requirement, we have the resources to help you find the talent that best fits your business, anywhere in the world.'
  },
  {
    title: 'Collaboration',
    content: 'When we partner with you, the growth of your company is at the forefront of our minds. We’ll work tirelessly to strategically plan your workforce and prepare you for an exciting and successful future.'
  },
  {
    title: 'Risk Management',
    content: 'We protect you from risk. Whether you’re worried about your budget, local tax regulations such as IR35 or other legal requirements, we’re here to support you and protect you from risk.'
  }
];
</script>