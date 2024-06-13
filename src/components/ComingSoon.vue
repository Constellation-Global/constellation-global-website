<template>
  <x-page-header :title="title"/>

  <div class="">
  <x-container class="flex flex-col items-center gap-12 py-10 md:py-32 bg-[url('src/assets/usecase.svg')]  md:bg-right-bottom bg-contain">
    <div class="flex flex-col items-center gap-2 text-center">
      <div class="container-title">{{ heading }}</div>
      <div class="text-content">{{ text }}</div>
    </div>
    <img :src="img || CaseStudiesComingSoon" alt="Coming Soon" class="mx-auto"/>
    <div class="max-w-[760px] w-full flex flex-col gap-4">
      <p class="text-content">Subscribe to our mailing list to get latest updates</p>
      <form @submit="handleSubmit">
        <div class="w-full join">
          <input v-model="email" class="w-full text-sm rounded-l-lg focus:outline-none border-accent focus:border-accent input input-bordered join-item" placeholder="Email"/>
          <x-button color="accent" outlined class="text-sm rounded-r-lg hover:border-accent border-accent join-item">Subscribe</x-button>
        </div>
      </form>
    </div> 
  </x-container>
  </div>

</template>
<script setup lang="ts">

  import XPageHeader from "./XPageHeader.vue";
  import XContainer from "./XContainer.vue";
  import CaseStudiesComingSoon from "@/assets/case-studies-coming-soon.png";
  import XButton from "./XButton.vue";
  import { ref } from 'vue'
  import {useToast} from 'vue-toast-notification';
    
  const $toast = useToast({
    position: "top-right"
  });

  const email = ref('')

  defineProps<{
    img?: string;
    title: string;
    heading: string;
    text?: string;
  }>()


  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    email.value = ''
    $toast.success("Coming Soon");
  }

</script>