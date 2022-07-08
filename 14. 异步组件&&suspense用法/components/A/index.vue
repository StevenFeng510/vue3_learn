<template>
    <div>test</div>

    <div v-for="(item, index) in list" :key="index">
        {{ item.name }}
    </div>
</template>

<script setup lang="ts">
import { axios } from './server';

// setup 语法糖下 可以直接使用 await语法糖 异步调用接口
const list = await axios('./data.json');
console.log(list);
</script>

<style lang="less" scoped></style>
