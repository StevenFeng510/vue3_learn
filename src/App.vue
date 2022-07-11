<template>
    <div class="box">
        <img src="./assets/2.jpg" width="300" height="300" id="img" />
        <A title="123" a="456"></A>
    </div>
</template>

<script setup lang="ts">
import { Directive, DirectiveBinding } from 'vue'
import A from './components/A.vue'
import useBase64 from './hooks'

useBase64({
    el: '#img',
}).then((res) => {
    console.log(res.baseURL)
})
</script>

<style lang="less"></style>
