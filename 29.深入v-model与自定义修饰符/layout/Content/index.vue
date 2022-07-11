<template>
    <div>
        <!-- 数字过渡 -->
        <input v-model="num.current" type="number" step="20" />
        <div>
            {{ num.tweenedNumber.toFixed(0) }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue';
import gsap from 'gsap';

const num = reactive({
    current: 0,
    tweenedNumber: 0,
});

watch(
    () => num.current,
    (newVal, oldVal) => {
        gsap.to(num, {
            duration: 1,
            tweenedNumber: newVal,
        });
    }
);
</script>

<style lang="less" scoped></style>
