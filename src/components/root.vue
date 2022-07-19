<template>
    <div>
        <router-link to="/user1">/user1</router-link>
        <router-link to="/user2">/user2</router-link>
        <router-view></router-view>
        <router-view name="default"></router-view>
        <router-view name="bbb"></router-view>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped></style>
