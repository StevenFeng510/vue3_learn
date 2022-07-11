<template>
    <div class="menu">
        菜单区域
        <Tree @on-click="getItem" :data="data"></Tree>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import Tree from '../../components/Tree/index.vue';

type TreeList = {
    name: string;
    icon?: string;
    children?: TreeList[] | [];
};

const getItem = (item: TreeList[]) => {
    console.log(item);
};

const data = reactive<TreeList[]>([
    {
        name: 'no.1',
        children: [
            {
                name: 'no.1-1',
                children: [
                    {
                        name: 'no.1-1-1',
                    },
                ],
            },
        ],
    },
    {
        name: 'no.2',
        children: [
            {
                name: 'no.2-1',
            },
        ],
    },
    {
        name: 'no.3',
    },
]);
</script>

<style lang="less" scoped>
.menu {
    width: 200px;
    border-right: 1px solid #ccc;
    height: 100vh;
}
</style>
