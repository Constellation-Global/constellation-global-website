<template>
  <div class="py-10 bg-stone-50">
    <x-container>
      <div class="flex flex-col items-center text-center lg:items-start lg:text-left">
        <h3 class="container-super-title linegreen">FAQ</h3>
        <p class="container-title">Frequently asked questions</p>
      </div>

      <div class="grid gap-5 py-10 md:grid-cols-2 text-content">
        <div class="flex flex-col gap-5">
          <x-faq :faq="faq" v-for="(faq, x) in faqsEven" :key="x"/>
        </div>
        <div class="flex flex-col gap-5">
          <x-faq :faq="faq" v-for="(faq, x) in faqsOdd" :key="x"/>
        </div>
      </div>


    </x-container>
  </div>
</template>
<script setup lang="ts">
import XContainer from "@/components/XContainer.vue";
import {computed} from "vue";
import XFaq from "@/components/XFaq.vue";

const faqs = [
  {
    title: 'How can a company hire international talent without setting up a foreign entity?',
    content: 'Don’t have the capacity to employ workers overseas because of your company’s location? It would be Constellation Global who would employ your workers. We take care of everything for you, providing you with one contract and one simple invoice for all employees regardless of where they are based, saving you time and money.'
  },
  {
    title: 'When organisations shall use an Employer of Record?',
    content: 'In order to hire a candidate in another country, a business needs to comply with certain legalities, and it can be difficult for companies to set up the capabilities abroad, manage compliance, pay and provide benefits for all employees – and to do this on top of other responsibilities. With Constellation Global on your side, you can easily engage with worldwide talent wherever they are based, and create the capacity to expand into different markets – all while ensuring local compliance and without any administrative responsibilities to worry about.'
  },
  {
    title: 'What is an Employer of Record?',
    content: 'An Employer of Record is a third-party organization who serves as the legal employer of an international employee or workforce. EOR will take charge of taxes, payroll, employment contracts and complying with employment laws.\n' +
        'Companies benefit from EOR service as it allows them to hire internationally without the necessity to open their own entity; employees, in turn, have their employment fully compliant, ensuring local labour rights, taxes and social security are accounted for.\n' +
        'Formally the employee works for the Employer of Record, who is responsible for the employment legally and manages the payroll as well as all relevant taxes; while practically the employee continues to work for the company - and it holds the financial responsibility for the employment as well as continue to manage the general employee - employer relationship. Although an employer of record is responsible for some HR functions, they do not carry out daily activities within the company nor take over the roles of the business employer/manager.'
  },
  {
    title: 'Does Constellation Global pay all contributions on behalf of employer and employee?',
    content: 'In countries where we offer an employed scheme, Constellation Global branch or local partners have to satisfy all obligations in accordance with the employment legislation in that country. Constellation Global will invoice the employer for all mandatory taxes and payments. The employee also does not have to worry about the tax and social security, as they will be deducted at source.',
  },
  {
    title: 'What services does the Employer of Record provide?',
    content: 'Drafting, issuing and maintaining locally compliant employment contract,\n' +
        'Payroll management and taxwithholding,\n' +
        'Timely payment,\n' +
        'Benefits management,\n' +
        'Local compliance'
  },
  {
    title: 'What is your pricing model?',
    content: 'We operate on cost plus price model, which means there are no hidden fees for the client. We invoice for the gross salary and paid benefits, employer taxes and our management fee.'
  }
];

const faqsEven = computed(() => faqs.filter((_, i) => i % 2 == 0))
const faqsOdd = computed(() => faqs.filter((_, i) => i % 2 != 0))

</script>