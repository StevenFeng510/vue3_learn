<template>
    <div>
        <input id="ipt" type="text" v-model="message" />
        <input type="text" v-model="message2" />

        <button @click="stopWatch">停止</button>
    </div>
</template>
<script setup lang="ts">
import { watchEffect, ref, reactive } from 'vue';

let message = ref<string>('feiji');
let message2 = ref<string>('feiji111');

// 高级监听器 watchEffect 自动调用一次监听
const stop = watchEffect(
    (oninvalidate) => {
        let ipt: HTMLInputElement = document.querySelector('#ipt') as HTMLInputElement;

        console.log(ipt, 'elllllllll');

        console.log(message.value);
        // 该回调函数会先执行
        oninvalidate(() => {
            console.log('before');
        });
    },
    {
        flush: 'post',

        // onTrigger(e) {
        //     debugger;
        // },
    }
);

const stopWatch = () => stop();
</script>

<style></style>
