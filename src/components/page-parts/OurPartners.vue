<template>
  <div>
    <div class="flex flex-wrap items-center justify-center gap-10 px-6 my-10 md:flex-row md:gap-20 lg:my-20">
      <component
          :is="partner.logo"
          v-for="(partner, i) in partners"
          :key="i" :title="partner.name"
          class="text-[#C1C1C1] scale-90 hover:scale-100 hover:text-secondary transition-all ease-in-out duration-200 h-[60px] cursor-pointer"
      />
      <!--      <img-->
      <!--          class="text-[#C1C1C1] hover:text-secondary transition-all ease-in-out duration-200 h-[60px]"-->
      <!--          :src="partner.logo" :alt="partner.name" v-for="(partner, i) in partners" :key="i" :title="partner.name"/>-->
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
