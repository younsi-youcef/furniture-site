import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import SearchView from '../views/SearchView.vue'
import ProductsView from '../views/pro/ProductsView.vue'
import SpecialOrderView from '../views/SpecialOrderView.vue'
import ProductFilter from '../components/ProductFilter.vue'
import HomeProductFilter from '../components/HomeProductFilter.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/special',
    name: 'special',
    component: SpecialOrderView
  },
  {
    path: '/products/:id',
    name:'ProductFilter',
    component: ProductFilter,
    props:true
  },
  {
    path: '/:id',
    name:'HomeProductFilter',
    component: HomeProductFilter,
    props:true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
