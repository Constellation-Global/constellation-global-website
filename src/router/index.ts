import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainLayout from "@/layouts/MainLayout.vue";
import AboutView from "@/views/AboutView.vue";
import UseCasesView from "@/views/UseCasesView.vue";
import InnovationView from "@/views/InnovationView.vue";
import CostCalculatorView from "@/views/CostCalculatorView.vue";
import NotFound from "@/views/NotFound.vue";
import SupportView from "@/views/SupportView.vue";
import CountryPediaView from "@/views/CountryPediaView.vue";
import CountryView from "@/views/Countries.vue";
import TermsView from "@/views/TermsView.vue";
import PrivacyView from "@/views/PrivacyView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, __, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else if (to.hash) {
            return {
                el: to.hash,
                behavior: "smooth",
            }
        } else {
            return {
                top: 0,
                behavior: "smooth",
            }
        }
    },
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
                },
                {
                    path: 'support',
                    component: SupportView,
                },
                {
                    path: 'country-pedia',
                    component: CountryPediaView,
                },
                {
                    path: 'privacy',
                    component: PrivacyView,
                },
                {
                    path: 'terms',
                    component: TermsView,
                },
                {
                    path: 'countries',
                    component: CountryView,
                },
                { 
                    path: '/:pathMatch(.*)*', 
                    name: 'NotFound', component: NotFound 
                },
            ]
        }
    ]
})

export default router
