<template>
    <div class="content">
        <button @click="flag = !flag">switch</button>
        <transition name="fade">
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

// 从出现到完全显示的过渡效果

.fade-enter-from {
    width: 0;
    height: 0;
    transform: rotate(360deg);
}

.fade-enter-active {
    transition: all 1.5s ease;
}

.fade-enter-to {
    width: 200px;
    height: 200px;
}

// 从离开到完全消失的过渡效果
.fade-leave-from {
    width: 200px;
    height: 200px;
    transform: rotate(360deg);
}

.fade-leave-active {
    transition: all 2s ease;
}

.fade-leave-to {
    width: 0;
    height: 0;
}
</style>
