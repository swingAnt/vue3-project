import { createRouter, createWebHistory,createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/useMouse',
        name: 'useMouse',
        meta: {
            title: 'vueuse simple demo',
            keepAlive: true,
            requireAuth: false
        },
        component: () => import('@/components/useMouse.vue')
    },
    {
        path: '/',
        name: 'Index',
        meta: {
            title: '首页',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/components/usePinia.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;
