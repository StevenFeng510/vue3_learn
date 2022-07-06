<template>
    <div>
        <div>
            <!-- <input v-model="firstName" type="text" /> -->
            <!-- <input v-model="lastName" type="text" /> -->
            <table border style="width: 800px">
                <thead>
                    <tr>
                        <th>名称</th>
                        <th>数量</th>
                        <th>单价</th>
                        <th>操作</th>
                    </tr>
                </thead>

                <tbody>
                    <tr v-for="(item, index) in data" :key="index">
                        <td>{{ item.name }}</td>
                        <td>
                            <button @click="addAndSub(item, false)">-</button>{{ item.num }}
                            <button @click="addAndSub(item, true)">+</button>
                        </td>
                        <td>{{ item.price }}</td>
                        <td><button @click="del(index)">删除</button></td>
                    </tr>
                </tbody>
                <tfoot>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>总价:{{ $total }}</td>
                </tfoot>
            </table>
        </div>
        <!-- <div>{{ name }}</div> -->
    </div>
</template>

<script setup lang="ts">
import { computed, ref, reactive } from 'vue';
let firstName = ref('');
let lastName = ref('');

// 计算属性
const name = computed(() => {
    return `${firstName.value}----${lastName.value}`;
});

let $total = ref(0);

type Shop = {
    name: string;
    num: number;
    price: number;
};

const data = reactive<Shop[]>([
    {
        name: '衣服',
        num: 1,
        price: 100,
    },
    {
        name: '裤子',
        num: 1,
        price: 200,
    },
    {
        name: '外套',
        num: 1,
        price: 300,
    },
]);

const addAndSub = (item: Shop, type: boolean): void => {
    if (item.num > 1 && !type) {
        item.num--;
    }
    if (item.num < 99 && type) {
        item.num++;
    }
};

const del = (index: number) => {
    data.splice(index, 1);
};

// 使用computed
$total = computed<number>(() => {
    return data.reduce((prev, next) => {
        return prev + next.num * next.price;
    }, 0);
});
</script>

<style></style>
