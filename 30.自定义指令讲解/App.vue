<template>
    <div class="App">
        <!-- <button @click="flag = !flag">切换</button> -->
        <input type="text" v-model="value" />
        <A v-move="{ background: value }"></A>
    </div>
</template>
<script setup lang="ts">
import { Directive, DirectiveBinding } from 'vue';
import A from './components/A.vue';
let flag = ref<boolean>(false);
let value = ref<string>('');

// 自定义指令
// const vMove: Directive = {
//     // 定义各生命周期
//     created() {
//         console.log('--------------->created');
//     },
//     beforeMount() {
//         console.log('--------------->beforeMount');
//     },
//     // 自定义指令可以接收 el, directiveBinding 等值
//     mounted(...args: Array<any>) {
//         console.log('--------------->mounted');
//         console.log(args);
//     },
//     beforeUpdate() {
//         console.log('--------------->beforeUpdate');
//     },
//     updated() {
//         console.log('--------------->updated');
//     },
//     beforeUnmount() {
//         console.log('--------------->beforeUnmount');
//     },
//     unmounted() {
//         console.log('--------------->Unmounted');
//     },
// };

type Dir = {
    background: string;
};

// 自定义指令 函数简写  ( mounted 和 updated 时触发相同行为，而不关心其他的钩子函数)
const vMove: Directive = (el: HTMLElement, dir: DirectiveBinding<Dir>) => {
    el.style.background = dir.value.background;
};
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
</style>
