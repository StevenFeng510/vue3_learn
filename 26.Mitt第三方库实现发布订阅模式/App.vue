<template>
    <div class="App">
        <A></A>
        <B></B>
    </div>
</template>
<script setup lang="ts">
import A from './components/A.vue';
import B from './components/B.vue';
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
