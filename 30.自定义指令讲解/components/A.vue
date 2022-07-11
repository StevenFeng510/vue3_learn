<template>
    <div class="A">
        <h1>A组件</h1>
        <button @click="emit">派发一个事件</button>
    </div>
</template>
<script setup lang="ts">
import { ref ,getCurrentInstance} from 'vue';
const instance = getCurrentInstance()

const emit = ()=>{
    instance?.proxy?.$Bus.emit('on-click','mitt')
}

</script>

<style lang="less">
.A {
    width: 150px;
    height: 150px;
    background: greenyellow;
    color: #fff;
}
</style>
