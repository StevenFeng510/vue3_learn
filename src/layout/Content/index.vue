<script setup lang="ts"></script>

<template>
    <div class="content">
        <div class="content-items" v-for="(item, index) in 100" :key="index">
            {{ item }}
        </div>
    </div>
</template>

<style lang="less" scoped>
.content {
    flex: 1;
    overflow: auto;
    margin: 20px;
    &-items {
        padding: 20px;
        border: 1px solid #ccc;
    }
}
</style>
