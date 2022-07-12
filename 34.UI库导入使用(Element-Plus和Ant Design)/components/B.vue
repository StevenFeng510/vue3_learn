<template>
    <div class="B">
        <h1>B组件</h1>
    </div>
</template>
<script setup lang="ts">
import { ref, Ref, inject, getCurrentInstance } from 'vue';

const instance = getCurrentInstance();

const Bus = (str: any) => {
    console.log(str, '--------');
};

instance?.proxy?.$Bus.on('on-click', Bus);

// 取消事件订阅
instance?.proxy?.$Bus.off('on-click', Bus);

// 取消全部事件订阅
instance?.proxy?.$Bus.all.clear();

// *可以触发所有事件
// instance?.proxy?.$Bus.on('*', (type, str) => {
//     console.log(str, '--------');
// });
</script>

<style lang="less">
.B {
    width: 100px;
    height: 100px;
    background: orange;
    color: #fff;
}
</style>
