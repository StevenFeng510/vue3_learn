<template>
    <div class="content">
        <button @click="add">ADD</button>
        <button @click="pop">POP</button>
        <div class="wraps">
            <!-- transiton group 渲染列表 (多个节点) -->
            <transition-group
                leave-active-class="animate_hinge"
                enter-active-class="animate_animated animate_bounceIn"
            >
                <div class="items" v-for="(item, index) in list" :key="index">
                    {{ item }}
                </div>
            </transition-group>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import 'animate.css';

const list = reactive<number[]>([1, 2, 3, 4, 5, 6, 7]);

const add = () => {
    list.push(list.length + 1);
};

const pop = () => {
    list.pop();
};
</script>

<style lang="less" scoped>
.box {
    width: 200px;
    height: 200px;
    background: orangered;
}

.wraps {
    display: flex;
    flex-wrap: wrap;
    word-break: break-all;
    border: 1px solid #ccc;
    .items {
        margin: 10px;
    }
}

.from {
    width: 0;
    height: 0;
}

.active {
    transition: all 2s ease;
}

.to {
    width: 200px;
    height: 200px;
}
</style>
