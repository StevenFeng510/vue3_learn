<template>
    <div class="A">
        <h1>A组件</h1>
        <button @click="emitB">派发一个事件</button>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Bus from '../Bus';

const emit = defineEmits(['on-click']);
let flag = false;

// const emitB = () => {
//     flag = !flag;
//     emit('on-click', flag);
// };

// ② 通过eventBus 事件总线 发布订阅  on是订阅  emit是发布
const emitB = () => {
    flag = !flag;
    Bus.emit('on-click', flag);
};
</script>

<style lang="less">
.A {
    width: 150px;
    height: 150px;
    background: greenyellow;
    color: #fff;
}
</style>
