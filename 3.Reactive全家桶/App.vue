<template>
    <div>
        <div>arr {{ mes }}</div>
        <div>object{{ obj }}</div>
    </div>
</template>

<script setup lang="ts">
import { reactive, readonly, shallowReactive } from 'vue';

// reactive 需要传入复杂类型 [] 或 {} 且一般用于绑定复杂类型
let message = reactive<number[]>([]); // [] {}

let obj = reactive({
    name: 'xss',
});

obj.name = 'daman';

// 直接赋值会破坏响应式 异步(调接口)赋值需要使用解构 或者定义type
setTimeout(() => {
    let arr = [1, 2, 3, 4];

    message.push(...arr);

    console.log(message);
}, 1000);

let person = reactive({
    count: 1,
});

// readonly 只读属性
let copy = readonly(person);

// copy.count++;

// shallowReactive
let mes = shallowReactive({
    test: 'steven',
    nav: {
        bar: {
            name: '12345',
        },
    },
});

// 修改浅层次的属性
const change1 = () => {
    mes.test = 'wobeisjkjl';
};

// shallowReactive 修改深层次的属性  挂载前修改有效
const change2 = () => {
    mes.nav.bar.name = 'nav-bar-name';
};

change1();
change2();
</script>

<style></style>
