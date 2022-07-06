<template>
    <!-- <form action="/">
        <button @click.prevent="clickTap" type="submit">提交</button>
    </form> -->

    <!-- <div :key="index" v-for="(item, index) in Arr">{{ item }}</div> -->

    <button @click="changeMsg">change</button>
    <div>{{ mess }}</div>
</template>

<script setup lang="ts">
import { ref, Ref, isRef, shallowRef, triggerRef, customRef } from 'vue';
// 把test属性变成响应式
const mes = ref('test');

let mess: Ref<string> = ref('小满');

// 浅响应
let hd = shallowRef({
    name: 'xs',
});

// 自定义ref
function MyRef<T>(value: T) {
    return customRef((trank, trigger) => {
        return {
            get() {
                trank();
                return value;
            },
            set(newVal: T) {
                value = newVal;
                trigger();
            },
        };
    });
}

// isRef 判断属性是否是响应式
const changeMsg = () => {
    mess.value = `change msg`;
    hd.value.name = 'da';
    triggerRef(hd);
    // hd.value = { name: 'css' };
    console.log(isRef(mess));

    console.log(hd);
};

// const clickTap = () => {
//     console.log('111');
// };

// const Arr: Array<number> = [1, 2, 3, 4, 5];
</script>

<style></style>
