<template>
    <div class="layout">
        <div>
            <!-- <Menu ref="menus" @on-click="getList" :data="list" title="我想穿一条裤子"></Menu> -->
            <Menu ref="menus" @on-click="getList"></Menu>
        </div>
        <div class="layout-right">
            <Header></Header>
            <Content></Content>
        </div>
    </div>
</template>

<script setup lang="ts">
import Menu from './Menu/index.vue';
import Header from './Header/index.vue';
import Content from './Content/index.vue';
import { reactive, ref } from 'vue';

const list = reactive<number[]>([1, 2, 3]);

const menus = ref(null);

const getList = (list: number[]) => {
    console.log(list, '子组件传过来的list');
    console.log(menus.value);
};
</script>

<style lang="less" scoped>
.layout {
    display: flex;
    height: 100%;
    overflow: hidden;
    &-right {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
}
</style>
