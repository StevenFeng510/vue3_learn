<template>
    <div class="content">
        <button @click="flag = !flag">switch</button>
        <!-- transition appear属性 用于首次渲染时的动画效果-->
        <transition
            appear
            appear-from-class="from"
            appear-active-class="active"
            appear-to-class="to"
        >
            <div v-if="flag" class="box"></div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

const flag = ref<boolean>(true);
</script>

<style lang="less" scoped>
.box {
    width: 200px;
    height: 200px;
    background: orangered;
}

.from {
    width: 0;
    height: 0;
}

.active {
    transition: all 2s ease;
}

.to {
    width: 200px;
    height: 200px;
}
</style>
