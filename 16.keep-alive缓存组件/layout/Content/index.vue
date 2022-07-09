<template>
    <div class="content">
        <button @click="switchCom">切换</button>
        <!-- 只能存在一个组件 切换时可以缓存状态 -->
        <!-- include 可以指定keep 组件状态 需要暴露组件名称 -->
        <!-- exclude 不保存某个组件状态 -->
        <keep-alive :include="['Login']">
            <Login v-if="flag"></Login>
            <Reg v-else></Reg>
        </keep-alive>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import Login from '../../components/login/index.vue';
import Reg from '../../components/register/index.vue';

const flag = ref(true);

const switchCom = () => {
    flag.value = !flag.value;
};
</script>

<style lang="less" scoped></style>
