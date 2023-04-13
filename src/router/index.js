import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AdminView from '../views/AdminView.vue'
import MenuView from '../views/MenuView.vue'
import Delivery from '../components/Delivery.vue'
import History from '../components/History.vue'
import Locations from '../components/Locations.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: HomeView,
        delivery: Delivery,
        history: History
      }
    },
    {
      path: '/admin',
      name: 'adminLink',
      component: AdminView
    },
    {
      path: '/menu',
      name: 'menuLink',
      component: MenuView
    },
    {
      path: '/about',
      name: 'aboutLink',
      component: AboutView,
      children: [
        {
          path: 'history',
          name: 'historyLink',
          component: History
        },
        {
          path: 'delivery',
          name: 'deliveryLink',
          component: Delivery
        },
        {
          path: 'locations',
          name: 'locationsLink',
          component: Locations
        }
      ]
    }
  ]
})

export default router
