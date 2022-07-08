<template>
    <div class="content">
        <Dialog>
            <!-- 具名插槽 && 作用域插槽 -->
            <template #header="{ data }">
                <div>1{{ data.name }}----{{ data.age }}</div>
            </template>
            <!-- 匿名插槽  -->
            <template v-slot>
                <div>2</div>
            </template>
            <!-- 动态插槽 -->
            <template #[name]>
                <div>3</div>
            </template>
        </Dialog>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref, markRaw, toRaw, defineAsyncComponent } from 'vue';
import Dialog from '../../components/Dialog/index.vue';

let name = ref('footer');
</script>

<style lang="less" scoped></style>
