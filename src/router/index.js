import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import home from '../views/home.vue'
import login from '../views/login.vue'
import signup from '../views/sign_up.vue'
import add from '../views/add.vue'
import list from '../views/product_list.vue'
import show_product from '../views/show_product'
import update from '../views/update.vue'
import team from '../views/team.vue'


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
    component: login,
    
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
  {
    path: '/add',
    name: 'add',
    component: add,
    meta: {
      requiresAuth: true
  }
  },
  {
    path: '/list',
    name: 'list',
    component: list,
    meta: {
      requiresAuth: true
  }
  },
  {
    path: '/product/:id',
    name: 'product',
    component: show_product,
    meta: {
      requiresAuth: true
  }
  },
  {
    path: '/update/:id',
    name: 'update',
    component: update,
    meta: {
      requiresAuth: true
  }
  },
  {
    path: '/team',
    name: 'team',
    component: team
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  // Check for protected route
  if (requiresAuth && ! token) next('login')
  else next();
});




export default router
