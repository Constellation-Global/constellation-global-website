<template>
  <div class="pb-5 bg-secondary">
    <x-header-navigation light/>
    <x-container>
      <x-two-cols-grid class="text-white lg:min-h-[80vh] pb-10 lg:pb-0">
        <img :src="CountriesImage" alt="Cost Calculator Countries" class="lg:order-1 max-w-[75%] mb-6"/>
        <div class="flex flex-col items-center text-center gap-7 lg:items-start lg:text-start lg:gap-10">
          <div class="flex flex-col gap-2">
            <div class="text-content">Cost calculator</div>
            <div class="text-4xl md:text-5xl lg:text-6xl font-bold leading-snug lg:leading-[70px]">
              Hire and pay in <span class="text-accent">150+</span> countries
            </div>
          </div>
          <div class="text-base md:text-xl lg:leading-9">Let us take the wheel and help manage everything related to paying your global workforce.</div>
          <div class="flex flex-wrap gap-5">
            <x-button color="secondary" external :href="appConfig.registerLink" target="_blank">
              Start Now
            </x-button>
          </div>
        </div>

      </x-two-cols-grid>
    </x-container>
  </div>

  <x-container>
    <div class="flex flex-col items-center text-center md:text-left md:items-start">
      <h4 class="pt-5 md:pt-8 container-super-title text-linegreen">Pricing</h4>
      <h3 class="container-title">Our Price</h3>
      <p class="text-content">Whether you want to hire a permanent employee or a contractor, ensure compliant, timely
        and accurate payroll, supported by team of experts - we can have your back. Check our pricing options below and
        contact us for more details.</p>
    </div>

    <div class="flex flex-col py-20 gap-14">
      <div v-for="(p,x) in pricing" :key="x"
           class="shadow-md rounded-xl grid md:grid-cols-2 grid-cols-1 overflow-hidden max-w-[900px] border mx-auto">
        <div class="flex flex-col gap-3 p-10 bg-white w-[400px] text-center md:text-left">
          <div class="flex flex-col items-center gap-3 md:items-start md:flex-row">
            <div>
              <div class="h-14 w-14 rounded-xl bg-[#ECEBFF] flex items-center justify-center">
                <div class="h-10 w-10 rounded-full bg-gradient-to-r from-50% from-primary to-white to-0%"></div>
              </div>
            </div>
            <div>
              <div class="font-bold leading-snug">{{ p.type }}</div>
            </div>
          </div>
          <div class="mb-1 text-sm">{{ p.summary }}</div>
          <div v-if="p.pricingModel==='priced'">
            <span class="text-sm">Starting from</span><br/>
            <span class="text-3xl font-bold">${{ p.price }}</span>
            <span class="text-sm">{{ " " }}/{{ p.frequency }}</span>
          </div>
          <div v-else-if="p.pricingModel==='free'">
            <span class="text-3xl font-bold">Free</span>
          </div>
          <div v-else-if="p.pricingModel==='quote'"></div>
          <div class="mt-1.5">
            <x-button color="primary" class="w-full" :href="p.href" external target="_blank">
              {{ p.btnText || 'Get started' }}
            </x-button>
          </div>
        </div>
        <div class="bg-[#F7F7FC] p-10 flex items-center w-[400px]">
          <div class="text-sm">
            <div class="pb-3 font-bold text-center md:text-left">What's included</div>
            <div v-for="(f,y) in p.features" :key="`${y}-${x}`"
                 class="flex items-center gap-4 py-1 text-sm font-medium">
              <div>
                <div class="flex items-center justify-center w-6 h-6 rounded-full bg-primary">
                  <check-mark-icon class="w-4 h-4 text-white"/>
                </div>
              </div>
              <div>{{ f }}</div>
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

const pricing: {
  type: string;
  summary: string;
  price: string;
  pricingModel: 'priced' | 'quote' | 'free';
  frequency: string;
  features: string[];
  href: string;
  btnText?: string;
}[] = [
  {
    type: 'Contractor Management Service',
    summary: 'Onboard and manage contractors compliantly across the world.',
    price: '200',
    pricingModel: 'priced',
    frequency: 'monthly',
    features: [
      'Contractor misclassification assessment',
      'Compliance check',
      'B2B contract',
      'Automated invoices',
      'Self-billing',
      'Support'
    ],
    href: appConfig.registerLink
  },
  {
    type: 'Employer of Record',
    summary: 'Grow your team globally.',
    price: '350',
    pricingModel: 'priced',
    frequency: 'monthly',
    features: [
      'Onboarding in 48 hours',
      'Employee compliance',
      'Timely payroll',
      'HR support',
      'Dedicated Account Manager'
    ],
    href: appConfig.registerLink
  },
  {
    type: 'HR Management Platform',
    summary: 'A single point to manage your workforce',
    price: '0',
    pricingModel: 'free',
    frequency: 'monthly',
    features: [
      'Automated employee onboarding and offboarding',
      'Attendance and expense management',
      'Secure documents storage'
    ],
    href: appConfig.registerLink
  },
  {
    type: 'Immigration Services',
    summary: 'Our immigration experts will gladly assist if you are looking for the options to relocate your talents. Visa application, support and onboarding - we will handle it for you. Contact our sales team for the quote.',
    price: '0',
    pricingModel: 'quote',
    frequency: 'monthly',
    features: [
      'Eligibility check',
      'Documents checklist and timeline',
      'Application assistance',
      'Dedicated manager',
    ],
    btnText: 'Contact sales',
    href: '/support'
  },
];
</script>