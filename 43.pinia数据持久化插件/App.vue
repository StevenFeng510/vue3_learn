<template>
    <div>test-user:{{ Test.user }}</div>
    <p>--------------------</p>
    <div>u-name:{{ Base.baseCurrent }}</div>
    <p>--------------------</p>

    <button @click="change">change</button>
    <p>--------------------</p>
    <p>
        <button @click="changeU">changeU</button>
    </p>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { useTestStore, useStore } from './stores'

const Test = useTestStore()
const Base = useStore()

//  通过action 中定义的方法 修改state
const change = () => {
    Test.setUser()
}

const changeU = () => {
    Base.setBaseCurrent()
}
</script>

<style scoped></style>
