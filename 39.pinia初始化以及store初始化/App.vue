<template>
    <div>pinia:{{ Test.current }}---{{ Test.name }}</div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import { useTestStore } from './stores'

const Test = useTestStore()
</script>

<style scoped></style>
