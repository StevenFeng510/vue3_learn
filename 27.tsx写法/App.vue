<template>
    <div class="App">
        <renderDom @on-click="getNum" title="我是标题"></renderDom>
    </div>
</template>
<script setup lang="ts">
import renderDom from './App';

const getNum = (num: number) => {
    console.log(num, '我接受到');
};
</script>

<style lang="less">
html,
body,
#app {
    height: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
}

.App {
    width: 300px;
    height: 300px;
    background: orangered;
    color: #fff;
}
</style>
