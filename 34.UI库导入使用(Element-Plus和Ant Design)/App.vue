<template>
    <div>
        <button @click="showLoading">切换</button>

        <el-row>
            <el-button :icon="Search" circle />
            <el-button type="primary" :icon="Edit" circle />
            <el-button type="success" :icon="Check" circle />
            <el-button type="info" :icon="Message" circle />
            <el-button type="warning" :icon="Star" circle />
            <el-button type="danger" :icon="Delete" circle />
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { ComponentInternalInstance, getCurrentInstance } from 'vue'
import { Check, Delete, Edit, Message, Search, Star } from '@element-plus/icons-vue'

const { appContext } = getCurrentInstance() as ComponentInternalInstance

const showLoading = () => {
    console.log(appContext)
    appContext.config.globalProperties.$loading.show()

    setTimeout(() => {
        appContext.config.globalProperties.$loading.hide()
    }, 3000)
}
</script>

<style lang="less"></style>
