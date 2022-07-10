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
            <tr>
                <td>验证码</td>
                <td><input type="password" v-model="form.code" /></td>
            </tr>
        </table>
        <button @click="submit">登录</button>
    </div>
</template>

<script setup lang="ts">
import { reactive, onActivated, onDeactivated } from 'vue';
const form = reactive({
    login: '',
    psd: '',
    code: '',
});

const submit = () => {
    console.log(form);
};

onActivated(() => {
    // 切换之后 验证码清空
    form.code = '';
});
</script>

<style lang="less" scoped></style>
