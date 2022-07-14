import { defineStore } from 'pinia'
import { Names } from './store-name'

export const useTestStore = defineStore(Names.TEST, {
    state: () => {
        return {
            current: 1,
            name: 'Steven',
        }
    },
    // 类似computed 修饰一些值
    getters: {},

    // 类似methods  可以做同步 异步的操作 提交state
    actions: {
        setCurrent() {
            this.current = 9990
        },
    },
})
