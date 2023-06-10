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
            title: '拖拽布局',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/components/drag.vue')
    },
    {
        path: '/drag',
        name: 'drag',
        meta: {
            title: '拖拽布局',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/components/drag.vue')
    },
    {
        path: '/form',
        name: 'form',
        meta: {
            title: 'form',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/components/form.vue')
    },
    {
        path: '/table',
        name: 'table',
        meta: {
            title: 'table',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/components/table.vue')
    },
    {
        path: '/pinia',
        name: 'pinia',
        meta: {
            title: 'pinia',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/components/pinia.vue')
    },
    {
        path: '/count',
        name: 'count',
        meta: {
            title: 'count',
            keepAlive: true,
            requireAuth: true
        },
        component: () => import('@/components/count.vue')
    },
    {
        path: '/:catchAll(.*)',
        redirect:'/404'
    },
    {
        path: '/404',
        name: 'ErrorPage',
        component: () => import('@/components/errorPage.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});
export default router;
