<template>
  <x-container>
    <div class="container-super-title text-linegreen">Our Team</div>
    <div class="container-title">Meet our Brilliant Team</div>
    <div class="md:grid-cols-2 grid gap-10 grid-cols-1 lg:grid-cols-3 text-center">
      <div v-for="(team, x) in ourTeam" :key="x" class="cursor-pointer rounded-xl shadow hover:shadow-md p-5 my-10">
        <div class="w-24 h-24 rounded-full overflow-hidden bg-red-300 mx-auto mb-5">
          <img :src="team.photo" :alt="team.name" class="object-cover w-full h-full"/>
        </div>
        <div class="font-semibold">{{ team.name }}</div>
        <div class="font-semibold text-xl">{{ team.role }}</div>
        <p class="py-5">{{ team.summary }}</p>
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