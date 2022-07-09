<template>
    <div class="content">
        <button @click="flag = !flag">switch</button>
        <transition
            @before-enter="EnterForm"
            @enter="EnterActive"
            @after-enter="EnterTo"
            @enter-cancelled="EnterCancel"
            @before-leave="LeaveForm"
            @leave="Leave"
            @after-leave="LeaveTo"
            @leave-cancelled="LeaveCancel"
        >
            <div v-if="flag" class="box"></div>
        </transition>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import gsap from 'gsap';

const flag = ref<boolean>(true);

// transition 组件的生命周期  生命周期钩子可配合gsap第三方动画库使用
// 进入的时候
const EnterForm = (el: Element) => {
    gsap.set(el, {
        width: 0,
        height: 0,
    });
    console.log('进入之前');
};

const EnterActive = (el: Element, done: gsap.Callback) => {
    gsap.to(el, {
        width: 200,
        height: 200,
        onComplete: done,
    });

    console.log('过渡曲线');
    // 3s之后执行过渡完成的生命周期钩子
    // setTimeout(() => {
    //     done();
    // }, 3000);
};

const EnterTo = (el: Element) => {
    console.log('过渡完成');
};

const EnterCancel = (el: Element) => {
    console.log('过渡效果被打断');
};

// 离开的时候
const LeaveForm = (el: Element) => {
    console.log('离开之前');
};

const Leave = (el: Element, done: gsap.Callback) => {
    gsap.to(el, {
        width: 0,
        height: 0,
        onComplete: done,
    });

    console.log('离开过渡');
    // setTimeout(() => {
    //     done();
    // }, 3000);
};

const LeaveTo = (el: Element) => {
    console.log('离开之后');
};

const LeaveCancel = (el: Element) => {
    console.log('离开过渡被打断-----------');
};
</script>

<style lang="less" scoped>
.box {
    width: 200px;
    height: 200px;
    background: orangered;
}
</style>
