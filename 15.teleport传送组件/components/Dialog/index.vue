<template>
    <div>
        <header class="header">
            <div v-for="(item, index) in data" :key="index">
                <slot name="header" :data="item"></slot>
            </div>
        </header>
        <main class="main">
            <div v-for="(item, index) in data" :key="index">
                <slot :data="item"></slot>
            </div>
        </main>
        <footer class="footer">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

type names = {
    name: string;
    age: number;
};

const data = reactive<names[]>([
    {
        name: 'Steven1',
        age: 20,
    },
    {
        name: 'Steven2',
        age: 21,
    },
    {
        name: 'Steven3',
        age: 22,
    },
]);
</script>

<style lang="less" scoped>
.header {
    height: 200px;
    background: orangered;
    color: #fff;
}

.main {
    height: 200px;
    background: skyblue;
    color: #fff;
}

.footer {
    height: 200px;
    background: yellowgreen;
    color: #fff;
}
</style>
