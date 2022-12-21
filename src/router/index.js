import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import coin from '../views/coin.vue'
import mart from '../views/mart'
import about from "../views/about";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/coin/:id',
    name: 'coin',
    component: coin
  },
  {
    path: '/mart',
    name: 'mart',
    component: mart
  },
  {
    path: '/about',
    name: 'about',
    component: about
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
 