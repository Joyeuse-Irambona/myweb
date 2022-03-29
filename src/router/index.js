import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue'
import login from '../views/login.vue'
import signup from '../views/sign_up.vue'
import add from '../views/add.vue'
import list from '../views/product_list.vue'
import show from '../views/show_product'
import update from '../views/update.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
  {
    path: '/add',
    name: 'add',
    component: add
  },
  {
    path: '/list',
    name: 'list',
    component: list
  },
  {
    path: '/product/:id',
    name: 'product',
    component: show
  },
  {
    path: '/update/:id',
    name: 'update',
    component: update
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
