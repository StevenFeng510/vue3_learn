<template>
    <div>{{ msg }} >{{ R }}</div>
    <button @click="changeMsg">change shallowRef</button>
</template>

<script setup lang="ts">
import { ref, Ref, shallowRef, triggerRef } from 'vue';
const R = ref('hello');

const msg = shallowRef({
    foo: 'xiaoman',
    bar: 'zui',
});

// isRef 判断属性是否是响应式
const changeMsg = () => {
    // ref属性的更改会触发shallowRef属性的视图更改
    // R.value = 'hello111';
    msg.value.foo = 'xiao';

    console.log(msg);
};
</script>

<style></style>
