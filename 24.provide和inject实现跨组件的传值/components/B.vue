<template>
    <div class="B">
        <h1>B组件</h1>
        <button @click="changeFlag">change Flag</button>
        <div>{{ data }}</div>
    </div>
</template>
<script setup lang="ts">
import { ref, Ref, inject } from 'vue';

// inject 响应式的值时 需要指定一个默认值
let data = inject<Ref<boolean>>('flag', ref(false));

const changeFlag = () => {
    data.value = true;
};
</script>

<style lang="less">
.B {
    width: 100px;
    height: 100px;
    background: orange;
    color: #fff;
}
</style>
