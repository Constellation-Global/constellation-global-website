<template>
  <div class="flex flex-col relative shadow-lg shadow-stone-100 overflow-hidden h-[60vh] bg-secondary">
    <x-dark-background />
    <x-header-navigation light />
    <div class="text-center text-white flex flex-col items-center justify-center flex-1 pb-[58px] relative z-10">
      <h1 class="mb-2 text-4xl font-bold md:text-5xl">
        {{ countryData?.name }}
      </h1>
      <p class="text-sm">No recent country update</p>
      <img :src="countryData?.overview?.flag || FlagImg" alt="" class='w-full max-w-[10rem] max-h-20 mt-10'/>
    </div>
  </div>
  <x-container>
    <section className="pt-10">
      <h2 class="font-semibold container-super-title">About {{ countryData?.name }}</h2>
      <p class="text-base leading-snug md:text-lg">
        {{ countryData?.overview?.about }}
      </p>
    </section>
  </x-container>
  <x-container>
    <section className="mb-5">
      <h2 class="font-semibold container-sub-title">Overview</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-8 overflow-x-auto text-sm no-scrollbar max-w-2xl">
        <div v-for="item in overview" class="flex-1 flex flex-col px-4 py-3 border border-[#606B7D1A] rounded-md cursor-pointer whitespace-nowrap">
          <span class="text-[#344563] font-semibold">
            {{ countryData?.overview?.[item.name] || 'null' }}
          </span>
          <span class="text-[9px]">
            {{ item.label }}
          </span>
        </div>
        <!-- <div v-for="item in Object.keys(countryData?.overview || {})" class="flex-1 flex flex-col px-4 py-3 border border-[#606B7D1A] rounded-md cursor-pointer whitespace-nowrap">
          <span class="text-[#344563] font-semibold" v-if="countryData?.overview?.[item as keyof GlobalOverviewInterface] ? true : false" >
            {{ countryData?.overview?.[item as keyof GlobalOverviewInterface] }}
          </span>
          <span class="text-[9px]">
            {{ item }}
          </span>
        </div> -->
      </div>
    </section>
  </x-container>
  <x-container v-if="!!countryData?.payroll">
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
  <x-container v-if="!!countryData?.tax">
    <section className="mb-5">
      <h2 class="font-semibold container-super-title">Taxing</h2>
      <div v-if="countryData?.tax?.employer">
        <p class="mb-2 text-sm leading-snug md:text-lg md:mb-2">
          Tax breakdown - Employer
        </p>
        <div class="flex flex-col gap-1 text-sm mb-2.5">
          <p>contribution: ${{  countryData?.tax?.employer?.contribution }}</p>
          <p>contribution1: ${{  countryData?.tax?.employer?.contribution1 }}</p>
        </div>
        <ul class="grid items-center justify-between max-w-5xl gap-4 text-xs md:grid-cols-2 md:text-base">
          <div class="flex flex-col gap-2 text-sm" v-for="value in countryData?.tax?.employer?.array">
            <span class="text-xs">Upper Band: <span class="font-semibold">${{ value.upperBand }}</span></span>
            <span class="text-xs">Lower Band: <span class="font-semibold">${{ value.lowerBand }}</span></span>
            <span class="text-xs">Description: <span>{{ value.info }}</span></span>
          </div>
        </ul>
      </div>
      <div v-if="countryData?.tax?.employee" class='mt-4'>
        <p class="mb-2 text-sm leading-snug md:text-lg md:mb-2">
          Tax breakdown - Employee
        </p>
        <div class="grid items-center justify-between gap-4 md:grid-cols-2">
          <div>
            <p class="mb-2 text-sm leading-snug md:text-base md:mb-3">
             Employee Income Tax
            </p>
            <div class="flex flex-col gap-1 text-sm mb-2.5">
              <p>contribution: ${{  countryData?.tax?.employee?.employeeIncomeTax?.contribution }}</p>
              <p>contribution1: ${{  countryData?.tax?.employee?.employeeIncomeTax?.contribution1 }}</p>
            </div>
            <ul class="grid items-center justify-between max-w-5xl gap-4 text-xs md:grid-cols-2 md:text-base">
              <div class="flex flex-col gap-2 text-sm" v-for="value in countryData?.tax?.employee?.employeeIncomeTax.array">
                <span class="text-xs">Upper Band: <span class="font-semibold">${{ value.upperBand }}</span></span>
                <span class="text-xs">Lower Band: <span class="font-semibold">${{ value.lowerBand }}</span></span>
                <span class="text-xs">Description: <span>{{ value.info }}</span></span>
              </div>
              <!-- <li class="text-sm list-check" v-for="value in countryData?.tax?.employer?.array">
                <span>Upper Band: {{ value.upperBand }}</span>
                <span>Lower Band: {{ value.lowerBand }}</span>
                <span>Info: {{ value.info }}</span>
                {{ value.info }} - {{ value.info }} - {{ value.info }}
              </li> -->
              <!-- <li class="text-sm list-check">Health insurance: 1.8%</li>
              <li class="text-sm list-check">Social security: 15%</li>
              <li class="text-sm list-check">Health insurance: 1.8% </li> -->
            </ul>
        <!-- <p class="flex flex-col mt-6 text-sm font-semibold md:text-base">
          VAT - {{ countryData?.tax?.VAT }}%
        </p>
        <p class="flex flex-col text-sm font-semibold md:text-base">
          Average Payroll Tax - {{ countryData?.tax?.avgPayrollTax }}%
        </p> -->
          </div>
          <div>
            <p class="mb-2 text-sm leading-snug md:text-base md:mb-3">
              Employee Payroll Tax
            </p>
            <div class="flex flex-col gap-1 text-sm mb-2.5">
              <p>contribution: ${{  countryData?.tax?.employee?.employeePayrollTax?.contribution }}</p>
              <p>contribution1: ${{  countryData?.tax?.employee?.employeePayrollTax?.contribution1 }}</p>
            </div>
            <ul class="grid items-center justify-between max-w-5xl gap-4 text-xs md:grid-cols-2 md:text-base">
              <div class="flex flex-col gap-2 text-sm" v-for="value in countryData?.tax?.employee?.employeePayrollTax.array">
                <span class="text-xs">Upper Band: <span class="font-semibold">${{ value.upperBand }}</span></span>
                <span class="text-xs">Lower Band: <span class="font-semibold">${{ value.lowerBand }}</span></span>
                <span class="text-xs">Description: <span>{{ value.info }}</span></span>
              </div>
              <!-- <li class="text-sm list-check" v-for="value in countryData?.tax?.employer?.array">
                <span>Upper Band: {{ value.upperBand }}</span>
                <span>Lower Band: {{ value.lowerBand }}</span>
                <span>Info: {{ value.info }}</span>
                {{ value.info }} - {{ value.info }} - {{ value.info }}
              </li> -->
              <!-- <li class="text-sm list-check">Health insurance: 1.8%</li>
              <li class="text-sm list-check">Social security: 15%</li>
              <li class="text-sm list-check">Health insurance: 1.8% </li> -->
            </ul>
        <!-- <p class="flex flex-col mt-6 text-sm font-semibold md:text-base">
          VAT - {{ countryData?.tax?.VAT }}%
        </p>
        <p class="flex flex-col text-sm font-semibold md:text-base">
          Average Payroll Tax - {{ countryData?.tax?.avgPayrollTax }}%
        </p> -->
          </div>

        </div>
        
      </div>
      <div class="mt-6">
        <p class="flex flex-col text-sm font-semibold md:text-base">
          VAT - {{ countryData?.tax?.VAT }}%
        </p>
        <p class="flex flex-col text-sm font-semibold md:text-base">
          Average Payroll Tax - {{ countryData?.tax?.avgPayrollTax }}%
        </p>
      </div>
    </section>
  </x-container>
  <x-container v-if="!!countryData?.holidays?.length">
    <section className="mb-5">
      <h2 class="font-semibold container-super-title">Holidays</h2>
      <p class="mb-3 text-sm leading-snug md:text-lg md:mb-5">
        Public Holidays in 2024
      </p>
      <ul class="grid justify-between max-w-5xl gap-4 text-xs md:grid-cols-2 md:text-base">
        <li v-for="holiday in countryData?.holidays" class="text-sm list-check">{{ holiday.name }}</li>
        <!-- <li class="text-sm list-check">Health insurance: 1.8%</li>
        <li class="text-sm list-check">Social security: 15%</li>
        <li class="text-sm list-check">Health insurance: 1.8% </li> -->
      </ul>
      <p class="flex flex-col mt-6 text-sm font-semibold md:text-base">
        VAT - 20%
      </p>
    </section>
  </x-container>
  <x-container v-if="!!countryData?.sickLeave">
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
  <x-container v-if="!!countryData?.termination">
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
  <x-container>
    <section className="mb-10">
      <h2 class="font-semibold container-super-title">Employment Cost Calculator</h2>
      <div class="flex flex-wrap gap-5">
        <select v-model="country" name="" id="" class='p-2 py-1 text-sm bg-white border rounded-md outline-none text-primary border-primary max-w-40'>
          <option class="bg-white" value="">Select Country</option>
          <option class="bg-white"v-for="country in countries" :value="country?.name">{{ country?.name }}</option>
        </select>
        <x-button color="primary" target="_blank" @click="handleStart">
          Start Now
        </x-button>
      </div>
    </section>
  </x-container>

  <build-team-overseas/>
  <Loader v-model:active="loading" />
  <!-- <Loader :loading="loading" /> -->

</template>
<script setup lang="ts">
import { ref, onBeforeMount, onMounted } from "vue";
import { useToast } from "vue-toast-notification";
import XHeaderNavigation from "@/components/XHeaderNavigation.vue";
import XDarkBackground from "@/components/XDarkBackground.vue";
import XContainer from "@/components/XContainer.vue";
import BuildTeamOverseas from "@/components/page-parts/BuildTeamOverseas.vue";
import Loader from "@/components/Loader.vue";
import {useHead} from "@vueuse/head";
import CFlagImg from "@/assets/flags.svg"
import FlagImg from "@/assets/flag.png"
import XButton from "@/components/XButton.vue";
import { useFetch } from "@/composables/useFetch";
import type {CountryInterface} from "@/interfaces"
import { apiGetCountries, apiGetGlobal } from "@/services";
import type { GlobalInterface, GlobalOverviewInterface, GlobalOverview } from "@/interfaces"
import { useRoute } from 'vue-router'

useHead({
  title: 'CountryPedia - Constellation Global',
  meta: [
    {
      name: 'og:title',
      content: 'CountryPedia - Constellation Global',
    }
  ]
})

const route = useRoute()

const $toast = useToast({
  position: "top-right"
});

const { data: countryData, fetchData: fetchGlobal, loading } = useFetch<GlobalInterface>({
    api: apiGetGlobal,
    // run: true,
    param: {
      id: route.params.id
    }
});

onBeforeMount(async () => {
  await fetchGlobal();
});

onMounted(() => {
  console.log({ countryData: countryData.value })
})

const {data: countries} = useFetch<CountryInterface[]>({
    api: apiGetCountries,
    run: true,
});




const showCostModal = ref(false)
const country = ref('')

const handleStart = () => {
  if (!country.value) {
    return $toast.info('Select a country')
  }
  if (country.value) {
    return $toast.info('Cost Calculator Coming soon')
  }
  showCostModal.value = true
}

const overview: {
    name: keyof GlobalOverview;
    label: string;
  }[] = [
    {
      name: 'capital',
      label: 'Capital',
    },
    {
      name: 'code',
      label: 'code'
    },
    {
      name: 'population',
      label: 'Population'
    },
    {
      name: 'workHours',
      label: 'Weekly working hours',
    },
    {
      label: 'Minimum Wage',
      name: 'minimumWage'
    },
    {
      label: 'Works Days',
      name: 'workDays'
    },
    // {
    //   name: 'Daily working hours',
    //   content: '8 hours'
    // },
    {
      name: 'mobileCode',
      label: 'Mobile Code'
    },
    {
      name: 'currency',
      label: 'Currency'
    },
  ];

</script>

"overview": {
    "code": "NG",
    "tickerSymbol": "ALL",
    "about": "Nigeria, the largest economy in Africa, is considered the 124th freest economy in the 2022 Index. The country has great potential for further growth as it is rich in resources, including oil, gas, and minerals. Furthermore, Nigeria has an emerging market, expanding in manufacturing, financial, service, communications, technology, and entertainment.",
    "mobileCode": "+234",
    "currencyCode": "NGN",
    "currency": "Nigerian Naira",
    "flag": "",
    "zone": "Africa",
    "capital": "Abuja",
    "countrycode": "",
    "population": 200000,
    "minimumWage": 30000,
    "workHours": 40,
    "workDays": 5,
    "languages": [
        "English",
        "French"
    ],
    "paymentFrequency": [
        "Monthly",
        "Weekly"
    ],
    "GDP": "2,690",
    "employerTax": "",
    "_id": "669444c9eaad4844bd18c774"
},
"holidays": [
    {
        "name": "Christmas Day",
        "type": "National Holiday",
        "date": "2024-12-25T00:00:00.000Z",
        "description": "Birth of Christ",
        "_id": "669444c9eaad4844bd18c775"
    },
    {
        "name": "Last Holiday",
        "type": "National Holiday",
        "date": "2024-07-23T00:00:00.000Z",
        "description": "Final plays",
        "_id": "669444c9eaad4844bd18c776"
    }
],
"createdAt": "2024-07-11T23:56:02.645Z",
"updatedAt": "2024-07-14T21:36:09.371Z",
"__v": 0,
"tax": {
    "VAT": 102,
    "avgPayrollTax": 101,
    "employer": {
        "info": "test",
        "contribution": 103,
        "contribution1": 104,
        "array": [
            {
                "upperBand": 3,
                "lowerBand": 32,
                "info": "gffdsdc",
                "_id": "669444c9eaad4844bd18c779"
            },
            {
                "upperBand": 233,
                "lowerBand": 3456,
                "info": "new law",
                "_id": "669444c9eaad4844bd18c77a"
            }
        ],
        "_id": "669444c9eaad4844bd18c778"
    },
    "employee": {
        "employeeIncomeTax": {
            "info": "test",
            "contribution": 109,
            "contribution1": 110,
            "array": [
                {
                    "upperBand": 112,
                    "lowerBand": 111,
                    "info": "diff 1",
                    "_id": "669444c9eaad4844bd18c77d"
                },
                {
                    "upperBand": 193,
                    "lowerBand": 3,
                    "info": "fd",
                    "_id": "669444c9eaad4844bd18c77e"
                }
            ],
            "_id": "669444c9eaad4844bd18c77c"
        },
        "employeePayrollTax": {
            "info": "test3",
            "contribution": 113,
            "contribution1": 114,
            "array": [
                {
                    "upperBand": 10,
                    "lowerBand": 12,
                    "info": "hfdj",
                    "_id": "669444c9eaad4844bd18c780"
                }
            ],
            "_id": "669444c9eaad4844bd18c77f"
        },
        "_id": "669444c9eaad4844bd18c77b"
    },
    "_id": "669444c9eaad4844bd18c777"
}