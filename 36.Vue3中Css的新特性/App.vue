<template>
    <!-- <div class="div">动态CSS</div> -->
    <div :class="[steven.div, steven.border]">动态CSS</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const style = ref({
    color: 'red',
})

setTimeout(() => {
    style.value.color = 'grey'
}, 3000)
</script>
<!-- 
<style lang="less" scoped>
.div {
    // 动态CSS
    color: v-bind('style.color');
}
</style> -->

<style module="steven">
.div {
    color: red;
}

.border {
    border: 1px solid #ccc;
}
</style>
