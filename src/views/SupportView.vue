<template>
  <x-page-header/>

  <x-container class="grid grid-cols-1 gap-10 md:flex md:items-center">
    <div
        class="bg-[#F8FBFF] flex-[2_2_0px] bg-opacity-50 rounded-2xl text-lg px-10 pb-10 md:py-16 flex flex-col items-center md:items-start md:text-left text-center justify-center">
      <div class="flex flex-col gap-6">
        <component :is="TwistedArrowIcon" class="text-[#BCB9DE]"/>
        <h2 class="py-3 text-3xl font-bold">Get in touch</h2>
        <p class="">
          Fill in the form and our team will be in touch with you shortly. A question, a quote, a partnership offer -
          we’d love to hear from you!
        </p>
      </div>
      <div class="flex flex-col gap-5 mt-16">
        <a :href="contact.href" class="px-3 py-2 text-left rounded-lg hover:bg-gray-200"
           v-for="(contact, x) in contacts" :key="x">
          <div class="flex gap-3">
            <component :is="contact.icon" class="text-primary"/>
            <div>
              <div :class="contact.subtitle?'underline':''">{{ contact.label }}</div>
              <div class="text-sm font-light" v-if="contact.subtitle">({{ contact.subtitle }})</div>
            </div>
          </div>
        </a>
      </div>
      <div class="flex items-center gap-3 mt-10 md:mt-32 md:gap-6">
        <!-- <img :src="Social1Svg" alt="Social" class="" />
        <img :src="Social2Svg" alt="Social" class="" />
        <img :src="Social3Svg" alt="Social" class="" /> -->
      </div>
    </div>
    <form id="contact-form" class="flex-[3_3_0]" @submit="handleSubmit">
      <div class="grid gap-4 py-10 gap-x-5 gap-y-6 md:gap-y-8">
        <div>
          <label class="font-medium input-label text-ash" for="name">Name</label>
          <input v-model="support.name" id="name" class="w-full form-input" placeholder="Full name" name="name" required/>
        </div>
        <!-- <div> -->
          <!-- <label class="font-medium input-label text-ash" for="firstName">First name</label>
          <input v-model="support.firstName" id="firstName" class="w-full form-input" placeholder="Enter first name" name="firstName" required/>
        </div>
        <div>
          <label class="font-medium input-label text-ash" for="lastName">Last name</label>
          <input v-model="support.lastName" id="lastName" class="w-full form-input" placeholder="Enter last name" name="lastName" required/>
        </div> -->
        <div>
          <label class="font-medium input-label text-ash" for="businessEmail">Business Email</label>
          <input v-model="support.email" id="businessEmail" class="w-full form-input" placeholder="Enter business email address" name="businessEmail"
                 required type="email"/>
        </div>
        <!-- <div>
          <label class="font-medium input-label text-ash" for="businessPhone">Business phone</label>
          <input v-model="support.phone" id="businessPhone" class="w-full form-input" placeholder="Enter business phone"
                 name="businessPhone"
                 required/>
        </div> -->
        <!-- <div>
          <label class="font-medium input-label text-ash" for="country">Country</label>
          <input v-model="support.country" id="country" class="w-full form-input" placeholder="Select country" name="country"/>
        </div> -->
        <!-- <div>
          <label class="font-medium input-label text-ash" for="countrySize">Company size</label>
          <input v-model="support.companySize" id="countrySize" class="w-full form-input" placeholder="Select company size" name="companySize"/>
        </div> -->
        <div class="">
          <label class="font-medium input-label text-ash">Message</label>
          <textarea v-model="support.message" class="w-full form-textarea" rows="5" name="message"
                    placeholder="Enter your message"></textarea>
        </div>
        <div class="flex justify-center my-3">
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
import XButton from "@/components/XButton.vue";
import {ref} from 'vue'
import type {SupportInterface} from "@/interfaces"
import {appConfig} from "@/configs/app.config";
import {useToast} from 'vue-toast-notification';
import { useFetch } from "@/composables/useFetch";
import { apiSubmitSupport } from "@/services/index";
import LocationIcon from "@/components/icons/LocationIcon.vue";
import LinkedInIcon from "@/components/icons/LinkedInIcon.vue";


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

const contacts: { icon: any; label: string; subtitle?: string; href?: string }[] = [
  {
    icon: EnvelopIcon,
    label: 'sales@constellation-global.com',
    subtitle: 'For new business inquiries',
    href: 'mailto:sales@constellation-global.com'
  },
  {
    icon: EnvelopIcon,
    label: 'partnerships@constellation-global.com',
    subtitle: 'For partnership inquiries',
    href: 'mailto:partnerships@constellation-global.com'
  },
  {
    icon: LocationIcon,
    label: 'London, UK',
    href: '#',
  },
  {
    icon: LinkedInIcon,
    label: 'constellation-global',
    href: 'https://www.linkedin.com/company/constellation-global/'
  }
];

const loading = ref(false)

const initialState = {
    // firstName: '',
    // lastName: '',
    // country: '',
    // companySize: '',
    // phone: '',
    name: '',
    email: '',
    message: ''
  }

  const emailDomains = new Set([
    "gmail.com",
    "outlook.com",
    "hotmail.com",
    "hotmail.co.uk",
    "live.com",
    "yahoo.com",
    "yahoo.co.uk",
    "yahoo.ca",
    "yahoo.co.in",
    "yahoo.com.au",
    "aol.com",
    "icloud.com",
    "zoho.com",
    "protonmail.com",
    "gmx.com",
    "gmx.net",
    "yandex.com",
    "mail.com",
    "tutanota.com",
    "tutanota.de",
    "fastmail.com",
    "fastmail.fm",
    "mailfence.com",
    "hushmail.com",
    "lycos.com",
    "rediffmail.com",
    "runbox.com",
    "posteo.net",
    "migadu.com",
    "inbox.com",
    "me.com",
    "rocketmail.com", 
    "mail.ru", 
    "q.com", 
    "comcast.net", 
    "msn.com",
    "att.net", 
    "verizon.net",
    "earthlink.net", 
    "juno.com", 
    "netzero.net",
    "excite.com",
    "bigpond.com",
    "btinternet.com", 
    "netscape.net",
    "sbcglobal.net", 
    "charter.net"
  ]);

  const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

  function isGeneralEmailDomain(email: string) {
    
    const emailArr = email.split('@')
    // if (!emailArr || emailArr.length < 2) {
    //   $toast.info("Invalid Email");
    //   return 
    // } 
    const domain = emailArr.pop()?.toLowerCase();
    if (!domain) {
      $toast.info("Invalid Email");
      return 
    }
    return emailDomains.has(domain);
  }

  const support = ref<SupportInterface>({ ...initialState })
  const { data, fetchData, error, loading: isLoading } = useFetch({
    api: apiSubmitSupport,
    param: support.value
  })

  const handleSubmit = async (event: Event) => {
    try {
      event.preventDefault();
      loading.value = true

      if (!validateEmail(support.value.email)) {
        return $toast.info("Please enter a valid email address.");
      } else if (isGeneralEmailDomain(support.value.email)) {
        return $toast.info("Please use a company email address.");
      }

      // const result = await fetch(`${appConfig.baseUrl}prospects`, {
      //   method: "POST",
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Cache-Control': 'no-cache',
      //   },
      //   body: JSON.stringify(support.value)
      // })
      // const data = await result.json()
      await fetchData()
      const result = data.value

      // console.log({ result })
      
      if (error.value) {
        // console.log({ error: error.value })
        throw new Error(error.value)
      }

      support.value = { ...initialState }
      $toast.success("Your form was submitted succefully");
      loading.value = false

      return data
      
    } catch (error: any) {
      loading.value = false
      $toast.error(error?.message || "An error occured")
    } finally {
      loading.value = false
    }
  }



</script>