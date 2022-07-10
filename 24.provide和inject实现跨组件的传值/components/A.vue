<template>
    <div class="A">
        <h1>A组件{{ data }}</h1>
        <B></B>
    </div>
</template>
<script setup lang="ts">
import { ref, inject } from 'vue';
import B from './B.vue';

let data = inject('flag');
</script>

<style lang="less">
.A {
    width: 150px;
    height: 150px;
    background: greenyellow;
    color: #fff;
}
</style>
