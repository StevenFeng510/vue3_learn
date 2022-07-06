<template>
    <div>
        <div>{{ obj }}</div>
        <button @click="change">change</button>
    </div>
</template>

<script setup lang="ts">
import { toRef, toRefs, toRaw, reactive } from 'vue';

const obj = reactive({
    foo: 1,
    bar: 1,
});

// toRef 将指定对象的属性 变为响应式
const state = toRef(obj, 'bar');

const change = () => {
    foo.value++;
    bar.value++;
};

// toRefs 将解构出来的多个属性 变为响应式
let { foo, bar } = toRefs(obj);
console.log(foo, bar);

// toRaw 将响应式属性又变回静态属性
const raw = toRaw(obj);

console.log(raw);
</script>

<style></style>
