<template>
    <input type="text" v-model="message" />
    <div ref="div">{{ message }}</div>
    <button @click="change">change</button>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'

const message = ref('Steven')
const div = ref<HTMLElement>()

const change = async () => {
    message.value = 'Steven123'
    await nextTick()
    console.log(div.value?.innerText)
}
</script>

<style scoped></style>
