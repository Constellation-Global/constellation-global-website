<template>
  <div class="relative py-12 overflow-hidden md:py-16 bg-secondary">
    <x-white-patch-background class="opacity-5"/>
    <x-container class="text-white text-center max-w-[500px] flex flex-col gap-14 relative z-10">
      <div class="text-2xl font-semibold md:text-4xl md:leading-[50px]">Start Building Your <span class="text-primary">Team</span>
        Overseas Now
      </div>
      <div class="flex items-center justify-center gap-x-5">
        <x-button color="secondary" outlined href="/support/#contact-form">Contact sales</x-button>
        <x-button color="secondary" external :href="appConfig.registerLink" target="_blank">Sign up</x-button>
      </div>
    </x-container>
  </div>
</template>
<script setup lang="ts">
import XButton from "@/components/XButton.vue";
import XWhitePatchBackground from "@/components/XWhitePatchBackground.vue";
import XContainer from "@/components/XContainer.vue";
import {appConfig} from "@/configs/app.config";
</script>