import { createRouter, createWebHistory } from 'vue-router'

import  NotFound404  from '../views/NotFound404.vue'

import Home from '../views/Home.vue'

import PDFComponent from '../views/PDFComponent.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'Home',
      component: Home,
    },

    {
      path: '/CahierDesChargesPDF',
      name: 'PDFComponent',
      component: PDFComponent,
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound404',
      component: NotFound404,
    },
    
  ],
});

export default router
