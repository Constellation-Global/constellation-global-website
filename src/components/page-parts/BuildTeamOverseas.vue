<template>
  <div class="py-20 bg-secondary overflow-hidden relative">
    <x-white-patch-background class="opacity-5"/>
    <x-container class="text-white text-center max-w-[720px] flex flex-col gap-20">
      <div class="text-5xl">Start Building Your <span class="text-primary">Team</span> Overseas Now</div>
      <div class="flex items-center gap-x-5 justify-center">
        <x-button color="secondary" outlined>Contact sales</x-button>
        <x-button color="secondary">Sign up</x-button>
      </div>
    </x-container>
  </div>
</template>
<script setup lang="ts">
import XButton from "@/components/XButton.vue";
import XWhitePatchBackground from "@/components/XWhitePatchBackground.vue";
import XContainer from "@/components/XContainer.vue";
</script>