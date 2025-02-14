import {createRouter, createWebHistory} from 'vue-router';
import Register from '@/pages/Register.vue';
import Home from '@/pages/Home.vue';

const routes = [
    {path: '/', component: Register},
    {
        path: '/home',
        component: Home,
        beforeEnter: (to, from, next) => {
            const isRegistered = localStorage.getItem('isRegistered');
            if (!isRegistered) {
                next('/');
            } else {
                next();
            }
        }
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
