<template>
  <x-page-header />

  <x-container class="grid grid-cols-1 gap-10 md:grid-cols-2">
    <div class="bg-[#F8FBFF] bg-opacity-50 rounded-2xl text-lg px-10 pb-10 md:py-16 flex flex-col items-center md:items-start md:text-left text-center justify-center">
      <div class="flex flex-col gap-6">
        <component :is="TwistedArrowIcon" class="text-[#BCB9DE]"/>
        <h2 class="py-3 text-3xl font-bold">Let's talk</h2>
        <p class="">
          Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project and
          provide help
        </p>
      </div>
      <div class="flex flex-col gap-5 mt-16">
        <a target="_blank" :href="contact.href" class="flex items-center gap-3 text-left rounded-lg hover:bg-gray-200"
           v-for="(contact, x) in contacts" :key="x">
           <div>
             <component :is="contact.icon" class="w-10"/>
           </div>
          <div>{{ contact.label }}</div>
        </a>
      </div>
      <div class="flex items-center gap-3 mt-32 md:gap-6">
        <img :src="Social1Svg" alt="Social" class="" />
        <img :src="Social2Svg" alt="Social" class="" />
        <img :src="Social3Svg" alt="Social" class="" />
        <!-- <component :is="Social1Svg" class="text-[#BCB9DE]"/> -->
      </div>
    </div>
    <form id="contact-form">
      <div class="grid gap-4 py-10 md:grid-cols-2 gap-x-5 gap-y-6 md:gap-y-8">
        <div>
          <label class="font-medium input-label text-ash" for="firstName">First name</label>
          <input id="firstName" class="w-full form-input" placeholder="Enter first name" name="firstName" required/>
        </div>
        <div>
          <label class="font-medium input-label text-ash" for="lastName">Last name</label>
          <input id="lastName" class="w-full form-input" placeholder="Enter last name" name="lastName" required/>
        </div>
        <div>
          <label class="font-medium input-label text-ash" for="businessEmail">Business email</label>
          <input id="businessEmail" class="w-full form-input" placeholder="Enter email address" name="businessEmail"
                 required type="email"/>
        </div>
        <div>
          <label class="font-medium input-label text-ash" for="businessPhone">Business phone</label>
          <input id="businessPhone" class="w-full form-input" placeholder="Enter business phone" name="businessPhone"
                 required/>
        </div>
        <div>
          <label class="font-medium input-label text-ash" for="country">Country</label>
          <input id="country" class="w-full form-input" placeholder="Select country" name="country"/>
        </div>
        <div>
          <label class="font-medium input-label text-ash" for="countrySize">Country size</label>
          <input id="countrySize" class="w-full form-input" placeholder="Select company size" name="companySize"/>
        </div>
        <div class="md:col-span-2">
          <label class="font-medium input-label text-ash">Message</label>
          <textarea class="w-full form-textarea" rows="5" name="message" placeholder="Enter your message"></textarea>
        </div>
        <div class="flex justify-center my-3 md:col-span-2">
          <x-button color="primary" class="w-1/2 rounded-3xl">Get started</x-button>
        </div>
      </div>
    </form>
  </x-container>
</template>
<script setup lang="ts">
import XPageHeader from "@/components/XPageHeader.vue";
import XContainer from "@/components/XContainer.vue";
import TwistedArrowIcon from "@/components/icons/TwistedArrowIcon.vue"
import {useHead} from "@vueuse/head";
import EnvelopIcon from "@/components/icons/EnvelopIcon.vue";
import LinkedInIcon from "@/components/icons/LinkedInIcon.vue";
import XButton from "@/components/XButton.vue";
import Social1Svg from "@/assets/social1.svg";
import Social2Svg from "@/assets/social2.svg";
import Social3Svg from "@/assets/social3.svg";

useHead({
  title: 'Contact Us - Constellation Global',
  meta: [
    {
      name: 'og:title',
      content: 'Contact Us - Constellation Global',
    }
  ]
})

const contacts = [
  {
    icon: EnvelopIcon,
    label: 'sales@constellation-global.com',
    href: 'mailto:sales@constellation-global.com'
  },
  {
    icon: LinkedInIcon,
    label: 'constellation-global',
    href: 'https://www.linkedin.com/company/constellation-global/'
  }
];
</script>