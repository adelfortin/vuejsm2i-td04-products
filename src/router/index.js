import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/pages/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    meta: { breadcrumb: 'Accueil' }
  },
  {
  path: '/add-product',
  name: 'AddProduct',
  component: () => import('@/components/AddProduct.vue')
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: () => import('@/components/pages/ProductPage.vue')
  },
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

