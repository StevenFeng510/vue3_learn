<template>
    <div class="App">
        <button @click="flag = !flag">change flag</button>
        <div>{{ flag }}--{{ title }}</div>
        <!-- 支持多个v-model -->
        <Dialog v-model:title="title" v-model.steven="flag"></Dialog>
    </div>
</template>
<script setup lang="ts">
import Dialog from './components/Dialog/index.vue';
let flag = ref<boolean>(false);
let title = ref<string>('我是一只猫');
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
</style>
