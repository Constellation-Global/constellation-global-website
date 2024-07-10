<template>
  <div class="flex flex-col relative shadow-lg shadow-stone-100 overflow-hidden h-[60vh] bg-secondary">
    <x-dark-background />
    <x-header-navigation light />
    <div class="text-center text-white flex flex-col items-center justify-center flex-1 pb-[58px] relative z-10">
      <h1 class="mb-2 text-4xl font-bold md:text-5xl">
        Albania
      </h1>
      <p class="text-sm">No recent country update</p>
      <img :src="FlagImg" alt="" class='w-full max-w-[10rem] mt-10'/>
    </div>
  </div>
  <x-container>
    <section className="pt-10">
      <h2 class="font-semibold container-super-title">About Albania</h2>
      <p class="text-base leading-snug md:text-lg">
        A small country in southeastern Europe, Albania occupies a diverse terrain extending from coastlines on the Adriatic and Ionian seas to the mountains of the Albanian Alps. Classified as a developing country, Albania is a candidate for membership of the European Union.
      </p>
    </section>
  </x-container>
  <x-container>
    <section className="mb-5">
      <h2 class="font-semibold container-sub-title">Overview</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-8 overflow-x-auto text-sm no-scrollbar max-w-2xl">
        <div v-for="item in overview" class="flex-1 flex flex-col px-4 py-3 border border-[#606B7D1A] rounded-md cursor-pointer whitespace-nowrap">
          <span class="text-[#344563] font-semibold">
            {{ item.content }}
          </span>
          <span class="text-[9px]">
            {{ item.name }}
          </span>
        </div>
      </div>
    </section>
  </x-container>
  <x-container>
    <section className="mb-5">
      <h2 class="font-semibold container-super-title">Payroll</h2>
      <p class="mb-3 text-base leading-snug md:text-lg md:mb-5">
        The payroll cycle is monthly, and wages must be paid by the last working day of the month when the employee is a salaried employee. For employees who work on an hourly, daily, or weekly basis, payments must be made every 2 weeks.
      </p>
      <div class="flex flex-col text-sm font-semibold md:text-base">
        <span>Avg employer tax</span>
        <span>16.70%</span>
      </div>
    </section>
  </x-container>
  <x-container>
    <section className="mb-5">
      <h2 class="font-semibold container-super-title">Taxing</h2>
      <p class="mb-3 text-sm leading-snug md:text-lg md:mb-5">
        Tax breakdown - Employer
      </p>
      <ul class="grid items-center justify-between max-w-5xl gap-4 text-xs md:grid-cols-2 md:text-base">
        <li class="text-sm list-check">Social security: 15%</li>
        <li class="text-sm list-check">Health insurance: 1.8%</li>
        <li class="text-sm list-check">Social security: 15%</li>
        <li class="text-sm list-check">Health insurance: 1.8% </li>
      </ul>
      <p class="flex flex-col mt-6 text-sm font-semibold md:text-base">
        VAT - 20%
      </p>
    </section>
  </x-container>
  <x-container>
    <section className="mb-5">
      <h2 class="font-semibold container-super-title">Holidays</h2>
      <p class="mb-3 text-sm leading-snug md:text-lg md:mb-5">
        Public Holidays in 2024
      </p>
      <ul class="grid justify-between max-w-5xl gap-4 text-xs md:grid-cols-2 md:text-base">
        <li class="text-sm list-check">Social security: 15%</li>
        <li class="text-sm list-check">Health insurance: 1.8%</li>
        <li class="text-sm list-check">Social security: 15%</li>
        <li class="text-sm list-check">Health insurance: 1.8% </li>
      </ul>
      <p class="flex flex-col mt-6 text-sm font-semibold md:text-base">
        VAT - 20%
      </p>
    </section>
  </x-container>
  <x-container>
    <section className="mb-5">
      <h2 class="font-semibold container-super-title">Sick Leave</h2>
      <p class="mb-3 text-base leading-snug md:text-lg md:mb-5">
        An employee can claim sick leave for the entire time of their illness until their doctor confirms that the employee is able to return. For the first 14 days of sick leave, the employer is obligated to pay 80% of the employee's salary. From the 15th day onward, social insurance compensates the employee for 70% of their average salary for the past 6 months.
      </p>
      <div class="flex flex-col gap-6">
        <div>
          <h4 class="mb-2 text-sm font-semibold leading-snug md:text-lg md:mb-3">
            Maternity leave
          </h4>
          <ul class="grid gap-2 text-xs md:text-base">
            <li class="text-sm list-check">Women are entitled to 12 consecutive months of maternity leave. This includes a minimum of 35 days of leave before the child is born and 63 days after the birth of the child. Women who carry more than one child are entitled to 390 days of maternity leave.</li>
            <li class="text-sm list-check">During maternity leave, social insurance compensates the employee for 80% of the average monthly salary from the last 12 months for the first 6 months and 50% for the following 6 months.</li>
          </ul>
        </div>
        <div>
          <h4 class="mb-2 text-sm font-semibold leading-snug md:text-lg md:mb-3">
            Paternity leave
          </h4>
          <ul class="grid gap-2 text-xs md:text-base">
            <li class="text-sm list-check">
            There are no statutory laws regarding paternity leave.
            </li>
          </ul>
        </div>
      </div>
      <p class="flex flex-col mt-6 text-sm font-semibold md:text-base">
        VAT - 20%
      </p>
    </section>
  </x-container>
  <x-container>
    <section className="mb-5">
      <h2 class="font-semibold container-super-title">Termination</h2>
      <p class="mb-3 text-base leading-snug md:text-lg md:mb-5">
        For fixed-term contracts that are expiring, there are no obligations from the employee or employer to undergo any sort of termination process. <br>
        If an employer wishes to dismiss an employee, the employer is obligated to deliver prior notice to the employee and within 72 hours must have a meeting with the employee to discuss the reason for termination and allow the employee to present their counterarguments. Should the employer fail to meet within 72 hours, the employee may be entitled to compensation.
      </p>
      <div class="flex flex-col gap-6">
        <div>
          <h4 class="mb-2 text-sm font-semibold leading-snug md:text-lg md:mb-3">
            Notice Period
          </h4>
          <ul class="grid gap-2 text-xs md:text-base">
            <li class="text-sm list-check">1 months’ notice during the first two years of employment</li>
            <li class="text-sm list-check">2 months’ notice during the second to the fifth years of employment</li>
            <li class="text-sm list-check">3 months’ notice after five years of employment</li>
          </ul>
        </div>
        <div>
          <h4 class="mb-2 text-sm font-semibold leading-snug md:text-lg md:mb-3">
            Severance Pay
          </h4>
          <p class="text-sm">If the employee has worked more than 3 years, they are entitled to 15 days of severance pay.</p>
        </div>
        <div>
          <h4 class="mb-2 text-sm font-semibold leading-snug md:text-lg md:mb-3">
            Probation Period
          </h4>
          <p class="text-sm">3 months</p>
        </div>
      </div>
      <p class="flex flex-col mt-6 text-sm font-semibold md:text-base">
        VAT - 20%
      </p>
    </section>
  </x-container>

  <build-team-overseas/>

</template>
<script setup lang="ts">
import XHeaderNavigation from "@/components/XHeaderNavigation.vue";
import XDarkBackground from "@/components/XDarkBackground.vue";
import XContainer from "@/components/XContainer.vue";
import BuildTeamOverseas from "@/components/page-parts/BuildTeamOverseas.vue";
import {useHead} from "@vueuse/head";
import FlagImg from "@/assets/flags.svg"

useHead({
  title: 'CountryPedia - Constellation Global',
  meta: [
    {
      name: 'og:title',
      content: 'CountryPedia - Constellation Global',
    }
  ]
})

const overview = [
  {
    name: 'Capital',
    content: 'Sucre'
  },
  {
    name: 'Country code',
    content: '+234'
  },
  {
    name: 'Population',
    content: '2.700M'
  },
  {
    name: 'Weekly working hours',
    content: '40 hours'
  },
  {
    name: 'Minimum Wage',
    content: '30,000'
  },
  {
    name: 'Daily working hours',
    content: '8 hours'
  },
  {
    name: 'Avg Times',
    content: '8 hours'
  },
  {
    name: 'Minimum Wage',
    content: '30,000'
  },
];

</script>