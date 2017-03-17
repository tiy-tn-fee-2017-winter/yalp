import 'whatwg-fetch';

import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './routes/application.vue';
import RestaruantNew from './routes/restaurant-new.vue';
import RestaruantDetail from './routes/restaurant-detail.vue';
import Index from './routes/index.vue';
import Login from './routes/login.vue';
import Register from './routes/register.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
  {
    path: '/restaurants/new',
    name: 'restaurant-new',
    component: RestaruantNew,
  },
  {
    path: '/restaurants/:id',
    name: 'restaurant-detail',
    component: RestaruantDetail,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

const app = new Vue({ ...App, router });

app.$mount('.app');
