<template>
    <div class="App">
        <button @click="flag = !flag">change flag</button>
        <div>{{ flag }}</div>
    </div>
</template>
<script setup lang="ts">
let flag = ref<boolean>(false);
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
