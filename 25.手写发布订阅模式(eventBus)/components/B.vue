<template>
    <div class="B">
        <h1>B组件</h1>
        {{ Flag }}
    </div>
</template>
<script setup lang="ts">
import { ref, Ref, inject } from 'vue';
import Bus from '../Bus';
// type Props = {
//     flag: boolean;
// };

// defineProps<Props>();

let Flag = ref(false);

Bus.on('on-click', (flag: boolean) => {
    Flag.value = flag;
});
</script>

<style lang="less">
.B {
    width: 100px;
    height: 100px;
    background: orange;
    color: #fff;
}
</style>
