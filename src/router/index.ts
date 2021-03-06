import { createRouter, createWebHistory, RouteRecordRaw, createWebHashHistory } from 'vue-router'

//vue2 mode history vue3 createWebHistory 没有#匹配  通过 popstate事件 监听地址 pushstate
//vue2 mode  hash  vue3  createWebHashHistory #/ 通过location.hash匹配 hashchange事件监听
//vue2 mode abstact vue3  createMemoryHistory

// 路由数组的类型 RouteRecordRaw
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../components/root.vue'),
        children: [
            {
                path: '/user1',
                components: {
                    // 命名试图
                    default: () => import('../components/login/index.vue'),
                },
            },
            {
                path: '/user2',
                components: {
                    bbb: () => import('../components/register/index.vue'),
                },
            },
        ],
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
