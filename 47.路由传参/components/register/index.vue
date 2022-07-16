<template>
    <div>
        <button @click="router.back()">返回</button>
        <div>详情</div>
        <div>品牌:{{ item?.name }}</div>
        <div>价格: {{ item?.price }}</div>
        <div>ID: {{ item?.id }}</div>
    </div>
</template>

<script setup lang="ts">
import { data } from '../list.json'
import { useRoute, useRouter } from 'vue-router'

// 取值用useRoute
const route = useRoute()

const router = useRouter()

const item = data.find((v) => v.id === Number(route.params.id))
</script>

<style lang="less" scoped></style>
