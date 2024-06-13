<template>
  <x-page-header />

  <x-container class="grid grid-cols-1 gap-10 md:flex">
    <div class="bg-[#F8FBFF] flex-[2_2_0px] bg-opacity-50 rounded-2xl text-lg px-10 pb-10 md:py-16 flex flex-col items-center md:items-start md:text-left text-center justify-center">
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
    <form id="contact-form" class="flex-[3_3_0]" @submit="handleSubmit">
      <div class="grid gap-4 py-10 md:grid-cols-2 gap-x-5 gap-y-6 md:gap-y-8">
        <div>
          <label class="font-medium input-label text-ash" for="firstName">First name</label>
          <input v-model="support.firstName" id="firstName" class="w-full form-input" placeholder="Enter first name" name="firstName" required/>
        </div>
        <div>
          <label class="font-medium input-label text-ash" for="lastName">Last name</label>
          <input v-model="support.lastName" id="lastName" class="w-full form-input" placeholder="Enter last name" name="lastName" required/>
        </div>
        <div>
          <label class="font-medium input-label text-ash" for="businessEmail">Business email</label>
          <input v-model="support.email" id="businessEmail" class="w-full form-input" placeholder="Enter email address" name="businessEmail"
                 required type="email"/>
        </div>
        <div>
          <label class="font-medium input-label text-ash" for="businessPhone">Business phone</label>
          <input v-model="support.phone" id="businessPhone" class="w-full form-input" placeholder="Enter business phone" name="businessPhone"
                 required/>
        </div>
        <div>
          <label class="font-medium input-label text-ash" for="country">Country</label>
          <input v-model="support.country" id="country" class="w-full form-input" placeholder="Select country" name="country"/>
        </div>
        <div>
          <label class="font-medium input-label text-ash" for="countrySize">Company size</label>
          <input v-model="support.companySize" id="countrySize" class="w-full form-input" placeholder="Select company size" name="companySize"/>
        </div>
        <div class="md:col-span-2">
          <label class="font-medium input-label text-ash">Message</label>
          <textarea v-model="support.message" class="w-full form-textarea" rows="5" name="message" placeholder="Enter your message"></textarea>
        </div>
        <div class="flex justify-center my-3 md:col-span-2">
          <x-button type="submit" color="primary" :class="['w-1/2 rounded-3xl', loading && 'animate-pulse']">{{ loading ? "Submitting ..." : 'Get started'}}</x-button>
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
import { ref } from 'vue'
import type  { SupportInterface } from "@/interfaces"
import {appConfig} from "@/configs/app.config";
import {useToast} from 'vue-toast-notification';



useHead({
  title: 'Contact Us - Constellation Global',
  meta: [
    {
      name: 'og:title',
      content: 'Contact Us - Constellation Global',
    }
  ]
})

const $toast = useToast({
  position: "top-right"
});

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

const loading = ref(false)

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    companySize: '',
    message: ''
  }

  const support = ref<SupportInterface>({ ...initialState })

  const handleSubmit = async (event: Event) => {
    try {
      event.preventDefault();

      loading.value = true

      const result = await fetch(`${appConfig.baseUrl}prospects`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(support.value)
      })
      const data = await result.json()

      support.value = { ...initialState }
      $toast.success("Your form was submitted succefully");
      loading.value = false
      
    } catch (error: any) {
      loading.value = false
      $toast.error(error?.message || "An error occured")
    }
  }


</script>