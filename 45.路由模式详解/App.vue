<template>
    <div>
        <h1>123332121312</h1>
        <br />
        <!-- <router-view></router-view> -->

        <div>
            <!--使用 router-link 组件进行导航 -->
            <router-link to="/">Login</router-link>
            <router-link style="margin-left: 10px" to="reg">reg</router-link>
        </div>

        <!-- 路由出口 -->
        <router-view></router-view>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped></style>
