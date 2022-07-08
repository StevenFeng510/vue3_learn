<template>
    <div class="content">
        <div class="tab">
            <div @click="switchCom(item)" v-for="(item, index) in data" :key="item.name">
                {{ item.name }}
            </div>
        </div>
        <component :is="current.comName"></component>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref, markRaw, toRaw } from 'vue';
import A from './A.vue';
import B from './B.vue';
import C from './C.vue';

// 动态组件 切换 类似组件库中的tabs选项卡切换

type Tabs = {
    name: string;
    comName: any;
};

// Pick 取出Tabs中comName属性
type Com = Pick<Tabs, 'comName'>;

// proxy
const data = reactive<Tabs[]>([
    // markRaw 让属性不会被修改 脱离响应式 变为普通的对象
    {
        name: '我是A组件',
        comName: markRaw(A),
    },
    {
        name: '我是B组件',
        comName: markRaw(B),
    },
    {
        name: '我是C组件',
        comName: markRaw(C),
    },
]);

const switchCom = (item: Tabs) => {
    current.comName = item.comName;
};

let current = reactive<Com>({
    comName: data[0].comName,
});
</script>

<style lang="less" scoped>
.tab {
    display: flex;
    div {
        border: 1px solid #ccc;
        margin-right: 10px;
        padding: 10px;
    }
}
</style>
