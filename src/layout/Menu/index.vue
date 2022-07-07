<template>
    <div class="menu">
        菜单区域
        <div>{{ title }}</div>
        <div>{{ data }}</div>
        <div>
            <button @click="clickTap">派发</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

const list = reactive<number[]>([1, 2, 3]);
const flag = ref(false);

type Props = {
    // ?表示可传可不传
    title?: string;
    data?: number[];
};

// 接受父组件传的参数  相当于vue2 props:[] 不需要引入
// defineProps<Props>();

// 定义type 中接收参数的默认值
withDefaults(defineProps<Props>(), {
    title: '我是默认值',
    data: () => [1, 2, 3, 4],
});

// 触发父组件自定义事件 可以定义多个派发事件 相当于 $emit('事件名', 参数)
const emit = defineEmits(['on-click']);

const clickTap = () => {
    emit('on-click', list);
};

// 暴露子组件中的属性 没暴露的属性无法被父组件访问
defineExpose({
    list,
    flag,
});
</script>

<style lang="less" scoped>
.menu {
    width: 200px;
    border-right: 1px solid #ccc;
    height: 100vh;
}
</style>
