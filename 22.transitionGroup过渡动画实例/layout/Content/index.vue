<template>
    <div>
        <button @click="random">random</button>
        <!-- 平面过渡动画 -->
        <transition-group move-class="mmm" tag="div" class="wraps">
            <div class="items" v-for="item in list" :key="item.id">{{ item.number }}</div>
        </transition-group>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import _ from 'lodash';

let list = ref(
    Array.apply(null, { length: 81 } as number[]).map((_, index) => {
        return {
            id: index,
            number: (index % 9) + 1,
        };
    })
);

const random = () => {
    // lodash 中 打乱数组值的一个方法
    list.value = _.shuffle(list.value);
};
</script>

<style lang="less" scoped>
.wraps {
    display: flex;
    flex-wrap: wrap;
    width: calc(25px * 10 + 9px);
    .items {
        width: 25px;
        height: 25px;
        border: 1px solid #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

.mmm {
    transition: all 1.5s ease-in-out;
}
</style>
