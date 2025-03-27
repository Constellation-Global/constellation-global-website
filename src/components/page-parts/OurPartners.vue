<template>
  <div>
      <div class="grid flex-wrap items-center justify-center grid-cols-3 px-6 my-10 sm:flex gap-y-2 gap-x-10 md:flex-row xl:gap-x-20 lg:gap-x-14 lg:my-20">
      <component
          :is="partner.logo"
          v-for="(partner, i) in partners"
          :key="i" :title="partner.name"
          class="text-[#C1C1C1] scale-90 hover:scale-100 hover:text-secondary transition-all ease-in-out duration-200 h-[60px] cursor-pointer w-[70%] sm:w-auto max-w-16 lg:max-w-24 place-self-center"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import HooliIcon from "@/components/icons/brands/HooliIcon.vue";
import LyftIcon from "@/components/icons/brands/LyftIcon.vue";
import RedHatIcon from "@/components/icons/brands/RedHatIcon.vue";
import StripeIcon from "@/components/icons/brands/StripeIcon.vue";
import AwsIcon from "@/components/icons/brands/AwsIcon.vue";
import PinterestIcon from "@/components/icons/brands/PinterestIcon.vue";

const partners = [
  {
    name: 'Hooli',
    logo: HooliIcon,
  },
  {
    name: 'Lyft',
    logo: LyftIcon,
  },
  {
    name: 'RedHat',
    logo: RedHatIcon
  },
  {
    name: 'Stripe',
    logo: StripeIcon,
  },
  {
    name: 'AWS',
    logo: AwsIcon
  },
  {
    name: 'Pinterest',
    logo: PinterestIcon,
  },
]
</script>
