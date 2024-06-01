import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainLayout from "@/layouts/MainLayout.vue";
import AboutView from "@/views/AboutView.vue";
import UseCasesView from "@/views/UseCasesView.vue";
import InnovationView from "@/views/InnovationView.vue";
import CostCalculatorView from "@/views/CostCalculatorView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: MainLayout,
            children: [
                {
                    path: '',
                    name: 'home',
                    component: HomeView
                },
                {
                    path: 'about',
                    name: 'about',
                    component: AboutView
                },
                {
                    path: 'use-cases',
                    component: UseCasesView,
                },
                {
                    path: 'innovation',
                    component: InnovationView,
                },
                {
                    path: 'pricing',
                    component: CostCalculatorView,
                }
            ]
        }
    ]
})

export default router
