import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/reset.less'
import Loading from './components/loading'

import mitt from 'mitt'

const Mit = mitt()

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

const app = createApp(App)

app.config.globalProperties.$filters = {
    format<T>(str: T): string {
        return `真${str}`
    },
}

// 注入插件
app.use(Loading)

app.config.globalProperties.$env = 'dev'

app.mount('#app')
