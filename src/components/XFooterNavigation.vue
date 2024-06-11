<template>
  <div class="flex flex-wrap py-10 md:py-16 max-w-[1200px] mx-auto px-6 gap-5 items-center" :class="light?'text-white':''">
    <div class="flex items-center justify-center flex-1 py-5 md:block">
      <router-link to="/">
        <logo-dark v-if="light"/>
        <logo-light v-else/>
      </router-link>
    </div>

    <div class="">
      <ul class="justify-center gap-2 menu menu-horizontal">
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
</template>
<script setup lang="ts">
import {useRoute} from 'vue-router'
import LogoLight from "@/components/logos/LogoLight.vue";
import LogoDark from "@/components/logos/LogoDark.vue";
import {navConfig} from "@/configs/nav.config";

const route = useRoute()

defineProps<{ light?: boolean }>()
</script>