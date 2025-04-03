import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';  
import Validdata from '../views/Validdata.vue';  // Stelle sicher, dass der Pfad stimmt

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/validdata',  // Hier muss der Pfad genau stimmen
    name: 'Validdata',
    component: Validdata,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;