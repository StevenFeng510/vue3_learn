<template>
    <div>
        <HelloWorld v-if="flag"></HelloWorld>
    </div>
    <div>
        <button @click="flag = false">改变组件状态</button>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

// vue3中组件引用直接就能使用 自动注册
import HelloWorld from './components/HelloWorld.vue';

let flag = ref(true);
</script>

<style></style>
