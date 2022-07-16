import { createRouter, createWebHistory, RouteRecordRaw, createWebHashHistory } from 'vue-router'

//vue2 mode history vue3 createWebHistory 没有#匹配  通过 popstate事件 监听地址 pushstate
//vue2 mode  hash  vue3  createWebHashHistory #/ 通过location.hash匹配 hashchange事件监听
//vue2 mode abstact vue3  createMemoryHistory

// 路由数组的类型 RouteRecordRaw
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Login', // 命名路由
        component: () => import('../components/login/index.vue'),
    },
    {
        path: '/reg',
        name: 'Reg',
        component: () => import('../components/register/index.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
