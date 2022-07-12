<template>
    <div class="A">
        我是插槽
        <slot></slot>
    </div>
</template>
<script setup lang="ts"></script>

<style lang="less" scoped>
.A {
    width: 150px;
    height: 150px;
}

.a {
    color: red;
}

:global(.a) {
    color: rgb(102, 33, 45);
}
</style>
