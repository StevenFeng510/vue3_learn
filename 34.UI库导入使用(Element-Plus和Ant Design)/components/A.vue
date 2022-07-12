<template>
    <div class="A">
        <h1>A组件</h1>
    </div>
</template>
<script setup lang="ts">
import { ref, getCurrentInstance, useAttrs } from 'vue';

// useAttrs 接收参数 官方订封装好的hook
let attrs = useAttrs();
console.log(attrs);
</script>

<style lang="less">
.A {
    width: 150px;
    height: 150px;
    background: greenyellow;
    color: #fff;
}
</style>
