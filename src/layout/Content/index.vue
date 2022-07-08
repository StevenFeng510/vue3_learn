<template>
    <div class="content" style="position: relative">
        <teleport to=".modal">
            <div class="loading">loading...111</div>
        </teleport>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref, markRaw, toRaw, defineAsyncComponent } from 'vue';
</script>

<style lang="less" scoped>
.loading {
    position: relative;
    right: 10px;
    top: 10px;
    background-color: aquamarine;
}
</style>
