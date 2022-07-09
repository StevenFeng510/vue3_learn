<template>
    <div class="content">
        <button @click="flag = !flag">switch</button>
        <transition
            name="fade"
            :duration="500"
            leave-active-class="animate_animated animate_bounce"
            enter-active-class="animate_animated animate_fadeIn"
        >
            <div v-if="flag" class="box"></div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import 'animate.css';

const flag = ref<boolean>(true);
</script>

<style lang="less" scoped>
.box {
    width: 200px;
    height: 200px;
    background: orangered;
}
</style>
