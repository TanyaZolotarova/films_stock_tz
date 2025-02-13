import { createRouter, createWebHistory } from 'vue-router';
import Register from '@/pages/Register.vue';

const routes = [
    { path: '/register', component: Register }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
