<template>
    <div>
        <h1>123332121312</h1>
        <br />
        <!-- <router-view></router-view> -->

        <div>
            <!--使用 router-link 组件进行导航 -->
            <!-- <router-link replace :to="{ name: 'Login' }">Login</router-link>
            <router-link replace style="margin-left: 10px" :to="{ name: 'Reg' }">reg</router-link> -->

            <!-- 编程式导航 -->
            <!-- <button @click="toPage('Login')">Login</button>
            <button @click="toPage('Reg')">reg</button>

            <button @click="next()">next</button>
            <button @click="prev()">prev</button> -->
        </div>

        <!-- 路由出口 -->
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
</script>

<style lang="less" scoped></style>
