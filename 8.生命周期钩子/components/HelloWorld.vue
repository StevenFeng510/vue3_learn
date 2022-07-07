<template>
    <div id="hello">我是hello组件</div>
    <div>{{ count }}</div>
    <div @click="count++">增加</div>
</template>

<script setup lang="ts">
import {
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
    ref,
} from 'vue';

const count = ref(0);

// 挂载之前
onBeforeMount(() => {
    let div = document.querySelector('#hello');
    console.log('挂载之前', div);
});

// 挂载之后
onMounted(() => {
    let div = document.querySelector('#hello');
    console.log('挂载之后', div);
});

// 更新之前
onBeforeUpdate(() => {
    console.log('更新之前');
});

// 更新之后
onUpdated(() => {
    console.log('更新完毕');
});

// 卸载之前
onBeforeUnmount(() => {
    console.log('卸载之前');
});

// 卸载之后
onUnmounted(() => {
    console.log('卸载之后');
});
</script>

<style scoped></style>
