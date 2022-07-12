<template>
    <div>
        <table>
            <tr>
                <td>帐号</td>
                <td><input type="text" v-model="form.login" /></td>
            </tr>
            <tr>
                <td>密码</td>
                <td><input type="password" v-model="form.psd" /></td>
            </tr>
        </table>
        <button @click="submit">登录</button>
    </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, onUnmounted, onActivated, onDeactivated } from 'vue';
const form = reactive({
    login: '',
    psd: '',
});

const submit = () => {
    console.log(form);
};

// keep-alive 中的组件切换可以触发以下两个特殊的生命周期
onActivated(() => {
    console.log('login onActivated');
});

// keep-alive 的卸载
onDeactivated(() => {
    console.log('login onDeactivated');
});

// keep-alive 不会重复挂载
onMounted(() => {
    console.log('login mounted');
});

onUnmounted(() => {
    console.log('login onUnmounted');
});
</script>
<script lang="ts">
export default {
    name: 'Login',
};
</script>

<style lang="less" scoped></style>
