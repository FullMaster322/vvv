import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'
import Person from '../views/Person.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about/:id',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/person/:idPerson',
      name: 'person',
      component: () => import('../views/Person.vue'),
    },

  ],
})

export default router
