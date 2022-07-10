<template>
    <div class="App">
        <h1>根组件</h1>
        <A></A>
    </div>
</template>
<script setup lang="ts">
import { ref, provide } from 'vue';
import A from './components/A.vue';

// provide 和 inject 完成 跨组件的传值 ref包装成响应式的值
provide('flag', ref(false));
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
