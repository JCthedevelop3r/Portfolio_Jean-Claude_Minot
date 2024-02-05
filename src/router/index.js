import { createRouter, createWebHistory } from 'vue-router'

import  NotFound404  from '../views/NotFound404.vue'

import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'Home',
      component: Home,
    },

    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound404',
      component: NotFound404,
    }, 

    {
      path:'../assets/projects/Cahier_des_Charges_La_Socketterie.pdf',
      
    },
    
  ],
});

export default router
