<template>
  <x-container>
    <div class="flex flex-col items-center text-center md:text-left md:items-start">
      <h3 class="container-super-title text-linegreen">Our Team</h3>
      <h4 class="container-title">Meet our Brilliant Team</h4>
    </div>
    <div class="grid grid-cols-1 gap-10 my-10 text-center md:mt-14 md:grid-cols-2 lg:grid-cols-3">
      <div v-for="(team, x) in ourTeam" :key="x" class="p-5 shadow cursor-pointer rounded-xl hover:shadow-md">
        <div class="w-24 h-24 mx-auto mb-5 overflow-hidden bg-red-300 rounded-full">
          <img :src="team.photo" :alt="team.name" class="object-cover w-full h-full"/>
        </div>
        <div class="text-lg font-semibold md:text-xl">{{ team.name }}</div>
        <div class="text-sm font-medium leading-7 text-gray-400 md:text-base lg:leading-7">{{ team.role }}</div>
        <p class="pt-3 text-sm leading-7 md:text-base lg:leading-7">{{ team.summary }}</p>
      </div>
    </div>
    <!-- <div class="grid grid-cols-1 gap-10 my-10 text-center md:hidden md:mt-14 md:grid-cols-2 lg:grid-cols-3">
      <component
        :is="ourTeam[step]"
        :title="ourTeam[step].name"
        class="p-5 shadow cursor-pointer rounded-xl hover:shadow-md">
        <div class="w-24 h-24 mx-auto mb-5 overflow-hidden bg-red-300 rounded-full">
          <img :src="ourTeam[step].photo" :alt="ourTeam[step].name" class="object-cover w-full h-full"/>
        </div>
        <div class="text-lg font-semibold md:text-xl">{{ ourTeam[step].name }}</div>
        <div class="text-sm font-medium leading-7 text-gray-400 md:text-base lg:leading-7">{{ ourTeam[step].role }}</div>
        <p class="pt-3 text-sm leading-7 md:text-base lg:leading-7">{{ ourTeam[step].summary }}</p>
      </component>
    </div> -->
    <!-- <div class="flex items-center justify-center gap-2 pb-10 md:hidden">
      <span @click="step = 1" :class="['w-2.5 h-2.5  rounded-full', step==1 ? 'bg-primary w-5' : 'bg-gray-100']"></span>
      <span @click="step = 2" :class="['w-2.5 h-2.5  rounded-full', step==2 ? 'bg-primary w-5' : 'bg-gray-100']"></span>
      <span @click="step = 3" :class="['w-2.5 h-2.5  rounded-full', step==3 ? 'bg-primary w-5' : 'bg-gray-100']"></span>
    </div> -->
  </x-container>
</template>
<script setup lang="ts">
import XContainer from "@/components/XContainer.vue";
import NahidPhoto from "@/assets/team/nahid photo.png";
import { ref } from 'vue'

const step = ref(0)

const ourTeam = [
  {
    name: 'Maria Bilyk',
    role: 'Sales & Marketing',
    photo: NahidPhoto,
    summary: 'UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.'
  },
  {
    name: 'Krishanth Puvane',
    role: 'Sales & Marketing',
    photo: NahidPhoto,
    summary: 'UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.'
  },
  {
    name: 'Christeina Jayatunge',
    role: 'Sales & Marketing',
    photo: NahidPhoto,
    summary: 'UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.'
  },
  {
    name: 'Tim Disbery',
    role: 'CEO & Founder',
    photo: NahidPhoto,
    summary: 'UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.'
  },
  {
    name: 'Sofia Kolesnyk',
    role: 'Sales & Marketing',
    photo: NahidPhoto,
    summary: 'UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.'
  },
  {
    name: 'Amanda Deshapriya',
    role: 'Sales & Marketing',
    photo: NahidPhoto,
    summary: 'UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.'
  },
];
</script>