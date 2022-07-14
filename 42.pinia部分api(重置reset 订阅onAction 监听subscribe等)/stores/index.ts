import { defineStore } from 'pinia'
import { Names } from './store-name'

type User = {
    name: string
    age: number
}

// let result: User = {
//     name: '飞机111',
//     age: 999,
// }

const Login = (): Promise<User> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: '飞机111',
                age: 999,
            })
        }, 2000)
    })
}

// defineStore 初始化Pinia状态管理
export const useTestStore = defineStore(Names.TEST, {
    state: () => {
        return {
            user: <User>{},
            name: 'jjjj',
        }
    },
    // 类似computed 修饰一些值
    getters: {
        newName(): string {
            return `$-${this.name}-${this.getUserAge}`
        },
        getUserAge(): number {
            return this.user.age
        },
    },

    // 类似methods  可以做同步 异步的操作 提交state
    actions: {
        // 同步 与 异步写法
        async setUser() {
            // this.user = result
            const result = await Login()
            this.user = result
            this.setName('huijjj')
        },
        setName(name: string) {
            this.name = name
        },
    },
})
