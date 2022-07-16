<template>
    <div>
        <h1>123332121312</h1>
        <br />
        <!-- <router-view></router-view> -->

        <div>
            <!--使用 router-link 组件进行导航 -->
            <!-- <router-link :to="{ name: 'Login' }">Login</router-link>
            <router-link style="margin-left: 10px" :to="{ name: 'Reg' }">reg</router-link> -->

            <!-- 编程式导航 -->
            <button @click="toPage('Login')">Login</button>
            <button @click="toPage('Reg')">reg</button>
        </div>

        <!-- 路由出口 -->
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const toPage = (url: string) => {
    // 1 url跳转方式
    // router.push(url)

    // 2 对象的方式
    // router.push({
    //     path: url,
    // })

    // 3 命名式
    router.push({
        name: url,
    })
}
</script>

<style lang="less" scoped></style>
