<template>
    <div class="App">
        <!-- <A @on-click="getFlag"></A>
        <B :flag="Flag"></B> -->
        <A></A>
        <B></B>
    </div>
</template>
<script setup lang="ts">
import { ref, provide } from 'vue';
import A from './components/A.vue';
import B from './components/B.vue';

// ①通过父组件做一个桥梁 将A组件的参数传给B组件
// let Flag = ref(false);

// const getFlag = (params: boolean) => {
//     Flag.value = params;
// };
</script>

<style lang="less">
html,
body,
#app {
    height: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
}

.App {
    width: 300px;
    height: 300px;
    background: orangered;
    color: #fff;
}
</style>
