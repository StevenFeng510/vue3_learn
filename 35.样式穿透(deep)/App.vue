<template>
    <div class="bg">
        <el-input class="ipt"></el-input>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.bg {
    background: black;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    .ipt {
        width: 200px;
        // 样式穿透
        // /deep/.el-input__inner {
        //     background: red;
        // }
        :deep(.el-input__inner) {
            background: red;
        }
    }
}
</style>
