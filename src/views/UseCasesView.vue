<template>
  <x-page-header title="Use cases"/>

  <div class="">
  <x-container class="flex flex-col gap-10 items-center md:py-32 py-10">
    <div class="container-title">Introducing Case studies</div>
    <div>Stay tuned for something amazing</div>
    <img :src="CaseStudiesComingSoon" alt="Coming Soon" class="mx-auto"/>

    <div class="max-w-[760px] w-full">
      <p>Subscribe to our mailing list to get latest updates</p>
      <form>
        <div class="join w-full">
          <input class="focus:outline-none border-accent focus:border-accent input rounded-l-2xl w-full input-bordered join-item" placeholder="Email"/>
          <x-button color="accent" outlined class="hover:border-accent border-accent join-item rounded-r-2xl">Subscribe</x-button>
        </div>
      </form>
    </div>
  </x-container>
  </div>

</template>
<script setup lang="ts">
import XPageHeader from "@/components/XPageHeader.vue";
import XContainer from "@/components/XContainer.vue";
import CaseStudiesComingSoon from "@/assets/case-studies-coming-soon.png";
import XButton from "@/components/XButton.vue";

</script>