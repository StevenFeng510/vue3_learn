import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/reset.less'
import Loading from './components/loading'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createPinia } from 'pinia'

import mitt from 'mitt'

const Mit = mitt()

const app = createApp(App)

// 注册Pinia
const store = createPinia()
app.use(store)

//TypeScript注册
// 由于必须要拓展ComponentCustomProperties类型才能获得类型提示
declare module 'vue' {
    export interface ComponentCustomProperties {
        $Bus: typeof Mit
    }
}

// 定义全局函数和变量
// 需要添加声明文件 声明扩充@vue/runtime-core
type Filter = {
    format: <T>(str: T) => string
}

// 注入完插件也要声明
declare module '@vue/runtime-core' {
    export interface ComponentCustomProperties {
        $filters: Filter
        $env: string
        $loading: {
            show: () => void
            hide: () => void
        }
    }
}

app.config.globalProperties.$filters = {
    format<T>(str: T): string {
        return `真${str}`
    },
}

// 注入插件
app.use(Loading)

// 注入UI框架
app.use(ElementPlus)

// 全局注入变量
app.config.globalProperties.$env = 'dev'

app.mount('#app')
