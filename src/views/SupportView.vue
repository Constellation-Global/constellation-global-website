<template>
  <x-page-header title="Support"/>

  <x-container class="grid md:grid-cols-2 my-20 gap-10 grid-cols-1">
    <div class="bg-[#F8FBFF] bg-opacity-50 rounded-2xl px-10 py-20 flex flex-col justify-center">
      <component :is="TwistedArrowIcon" class="text-[#BCB9DE]"/>
      <div class="container-title py-3">Let's talk</div>
      <div>Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project and
        provide help
      </div>
      <div class="flex flex-col mt-16">
        <a target="_blank" :href="contact.href" class="flex gap-3 items-center p-3 rounded-lg hover:bg-gray-200"
           v-for="(contact, x) in contacts" :key="x">
          <component :is="contact.icon" class="w-10"/>
          <div>{{ contact.label }}</div>
        </a>
      </div>
    </div>
    <form>
      <div class="grid md:grid-cols-2 gap-x-5 gap-y-8 py-10">
        <div>
          <label class="input-label" for="firstName">First name</label>
          <input id="firstName" class="form-input w-full" placeholder="enter first-name" name="firstName" required/>
        </div>
        <div>
          <label class="input-label" for="lastName">Last name</label>
          <input id="lastName" class="form-input w-full" placeholder="Enter last name" name="lastName" required/>
        </div>
        <div>
          <label class="input-label" for="businessEmail">Business email</label>
          <input id="businessEmail" class="form-input w-full" placeholder="Enter email address" name="businessEmail"
                 required type="email"/>
        </div>
        <div>
          <label class="input-label" for="businessPhone">Business phone</label>
          <input id="businessPhone" class="form-input w-full" placeholder="Enter phone no" name="businessPhone"
                 required/>
        </div>
        <div>
          <label class="input-label" for="country">Country</label>
          <input id="country" class="form-input w-full" placeholder="Select country" name="country"/>
        </div>
        <div>
          <label class="input-label" for="countrySize">Country size</label>
          <input id="countrySize" class="form-input w-full" placeholder="Select company size" name="companySize"/>
        </div>
        <div class="col-span-2">
          <label class="input-label">Message</label>
          <textarea class="w-full form-textarea" rows="5" name="message" placeholder="Enter your message"></textarea>
        </div>
        <div class="col-span-2 my-5 flex justify-center">
          <x-button color="primary" class="rounded-3xl w-1/2">Get started</x-button>
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
    label: 'Constellation Global',
    href: 'https://www.linkedin.com/company/constellation-global/'
  }
];
</script>