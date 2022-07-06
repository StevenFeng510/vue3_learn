<template>
    <div>
        <div>
            <input v-model="message.nav.bar.name" type="text" />
            <input v-model="message2" type="text" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { watch, ref, reactive } from 'vue';

let message = ref({
    nav: {
        bar: {
            name: 'xxx',
        },
    },
});
let message2 = ref<string>('');

// watch 可以监听多个属性的变化

// watch([message, message2], (newVal, oldVal) => {
//     console.log(newVal, oldVal);
// });

// ref属性 多层次时 要加上deep 深层监听
// Reactive属性 写不写deep 都能监听多层属性变化
watch(
    message,
    (newVal, oldVal) => {
        console.log(newVal, oldVal);
    },
    {
        deep: true,
        immediate: true,
    }
);
</script>

<style></style>
