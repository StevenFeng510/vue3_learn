<template>
    <div class="content">
        <!-- 异步组件要配合suspense使用 -->
        <Suspense>
            <!-- 获取成果 默认插槽 -->
            <template #default>
                <A></A>
            </template>

            <!-- 数据未展示时显示的内容 -->
            <template #fallback>
                <div>loading...</div>
            </template>
        </Suspense>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref, markRaw, toRaw, defineAsyncComponent } from 'vue';
// import A from '../../components/A/index.vue';

// 异步组件的引入方式 函数式引入defineAsyncComponent 可以节省内存和加载时间
const A = defineAsyncComponent(() => import('../../components/A/index.vue'));
</script>

<style lang="less" scoped></style>
