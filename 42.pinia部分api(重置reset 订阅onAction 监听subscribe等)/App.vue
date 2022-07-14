<template>
    <div>actions-user:{{ Test.user }}</div>
    <p>--------------------</p>
    <div>actions-name:{{ Test.name }}</div>
    <p>--------------------</p>
    <div>getters:{{ Test.newName }}</div>

    <button @click="change">change</button>
    <p>--------------------</p>
    <p>
        <button @click="reset">reset</button>
    </p>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { useTestStore } from './stores'

const Test = useTestStore()

//  通过action 中定义的方法 修改state
const change = () => {
    Test.setUser()
}

// $reset 恢复初始状态
const reset = () => {
    Test.$reset()
}

// $subscribe state的值发生变化的时候都会调用这个函数 接受两个参数(args,state)
Test.$subscribe(
    (args, state) => {
        // console.log('=====>', args)
        // console.log('=====>', state)
    },
    {
        detached: true,
        deep: true,
        flush: 'post',
    }
)

// $onAction 监听(订阅)Action的调用
Test.$onAction((args) => {
    console.log('=====>', args)
    args.after(() => {
        console.log('after')
    })
})
</script>

<style scoped></style>
