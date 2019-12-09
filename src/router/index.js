import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home.vue';
import Music from '../pages/Music.vue';
import Dates from '../pages/Dates.vue';
import DemoDrop from '../pages/DemoDrop.vue';
import Contacts from '../pages/Contacts.vue';
import NotFound from '../pages/NotFound.vue';
import Login from '../pages/admin/Login.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/music',
    name: 'music',
    component: Music,
  },
  {
    path: '/dates',
    name: 'dates',
    component: Dates,
  },
  {
    path: '/demo-drop',
    name: 'demo-drop',
    component: DemoDrop,
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts,
  },
  {
    path: '/swanky/trio/rule',
    name: 'login',
    component: Login,
  },
  {
    path: '/swanky/trio/rule/dashboard',
    name: 'dashboard',
    component: () => import('../pages/admin/Dashboard.vue'),
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = new VueRouter({
  hashbang: true,
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
