<template>
  <x-container>
    <div class="container-super-title text-linegreen">Our Team</div>
    <div class="container-title">Meet our Brilliant Team</div>
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
  </x-container>
</template>
<script setup lang="ts">
import XContainer from "@/components/XContainer.vue";
import NahidPhoto from "@/assets/team/nahid photo.png";

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