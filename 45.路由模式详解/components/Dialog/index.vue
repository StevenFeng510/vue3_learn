<template>
    <div v-if="modelValue" class="dialog">
        <div class="dialog-header">
            <div>标题---{{ title }}</div>
            <div @click="close">x</div>
        </div>
        <div class="dialog-content">内容</div>
    </div>
</template>

<script setup lang="ts">
type Props = {
    modelValue: boolean;
    title: string;
    // 自定义修饰符
    modelModifiers?: {
        steven: boolean;
    };
};

const PropsData = defineProps<Props>();

// update:属性名 派发需要修改的属性
const emit = defineEmits(['update:modelValue', 'update:title']);

const close = () => {
    console.log(PropsData.modelModifiers);

    if (PropsData.modelModifiers?.steven) {
        emit('update:title', 'woshigou111');
    } else {
        emit('update:title', 'woshigou222');
    }

    emit('update:modelValue', false);
    // emit('update:title', 'woshigou');
};
</script>

<style lang="less">
.dialog {
    width: 300px;
    height: 300px;
    border: 1px solid #ccc;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    &-header {
        border-bottom: 1px solid #ccc;
        display: flex;
        justify-content: space-between;
        padding: 10px;
    }
    &-content {
        padding: 10px;
    }
}
</style>
