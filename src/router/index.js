import {createRouter, createWebHistory} from 'vue-router';
import MovieModal from '@/features/MovieModal.vue';
import Home from '@/pages/Home.vue';
import Register from '@/pages/Register.vue';


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
    },
    {
        path: '/movie/:id',
        component: MovieModal,
        props: route => ({ id: route.params.id }),
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
