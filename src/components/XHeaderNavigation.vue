<template>
  <div class="drawer drawer-end">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="flex flex-col drawer-content">
      <!-- Navbar -->
      <div class="navbar py-6 max-w-[1200px] mx-auto px-6" :class="light?'text-white':''">
        <div class="flex-1">
          <router-link to="/">
            <logo-dark v-if="light" />
            <logo-light v-else />
          </router-link>
        </div>

        <div class="flex-none lg:hidden">
          <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 class="inline-block w-6 h-6 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </label>
        </div>
        <div class="flex-none hidden lg:block">
          <ul class="menu menu-horizontal">
            <!-- Navbar menu content here -->
            <li v-for="(a,b) in navConfig" :key="b">
              <router-link
                :to="`${a.href}`"
                class="px-4"
                :active-class="light && route.path == a.href ? 'text-primary hover:text-primary font-semibold': route.path == a.href?'hover:text-[#506CDE] text-[#506CDE] font-semibold':''">
                {{ a.label }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="z-20 drawer-side">
      <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="min-h-full gap-4 p-4 text-lg rounded-tl-lg pt-28 menu w-80 bg-base-200">
        <!-- Sidebar content here -->
        <li v-for="(a,b) in navConfig" :key="b">
          <router-link
            :to="`${a.href}`"
            class="hover:bg-secondary hover:text-white text-base md:text-lg pb-1.5 px-4 font-medium"
            :active-class="route.path == a.href ? 'text-primary border-b-2 border-primary':''">
            <!-- class="px-4 hover:bg-secondary hover:text-white"
            :active-class="route.path == a.href?'bg-primary text-white':''"> -->
            {{ a.label }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import LogoLight from "@/components/logos/LogoLight.vue";
import LogoDark from "@/components/logos/LogoDark.vue";
import {navConfig} from "@/configs/nav.config";

const route = useRoute()

defineProps<{ light?: boolean }>()
</script>