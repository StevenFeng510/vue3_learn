<template>
    <div>actions-user:{{ Test.user }}</div>
    <p>--------------------</p>
    <div>actions-name:{{ Test.name }}</div>
    <p>--------------------</p>
    <div>getters:{{ Test.newName }}</div>

    <button @click="change">change</button>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { useTestStore } from './stores'

const Test = useTestStore()

// 修改state的方法
// 1 直接修改
/* const change = () => {
    Test.current++
} */

// 2 patch 方法批量修改
/* const change = () => {
    Test.$patch({
        current: 888,
        name: 'huhu',
    })
} */

// 3 $patch state参数 函数的写法
/* const change = () => {
    Test.$patch((state) => {
        state.current = 99999
        state.name = 'fanbijjj'
    })
} */

// 4 $state 必须修改整个对象(不常用)
/* const change = () => {
    Test.$state = {
        current: 1111,
        name: 'fanbijjj',
    }
} */

// 5 通过action 中定义的方法
const change = () => {
    Test.setUser()
}
</script>

<style scoped></style>
