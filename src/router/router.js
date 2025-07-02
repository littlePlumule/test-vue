import { createWebHistory, createRouter } from 'vue-router';

import TestPage from '../pages/TestPage.vue';
import TestHome from '../components/TestHome.vue';

const routes = [
    { path: '/', component: TestPage },
    { path: '/test', component: TestHome },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return {
            top: 0,
        };
    },
});

export default router;
