<template>
    <div>
        <div>hhhhh</div>
        <table>
            <thead cellspacing="0" border="1">
                <tr>
                    <th>品牌</th>
                    <th>价格</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="item.id" v-for="item in data">
                    <th>{{ item.name }}</th>
                    <th>{{ item.price }}</th>
                    <th><button @click="toDetail(item)">详情</button></th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { data } from '../list.json'
import { useRouter } from 'vue-router'

const router = useRouter()

type Item = {
    name: string
    price: number
    id: number
}

const toDetail = (item: Item) => {
    // 路由传参  query 的参数是拼接url传递  params是存放内存中  用什么传就用什么接
    router.push({
        // path: '/reg',
        // query: item,
        name: 'Reg',
        params: {
            id: item.id,
        },
    })
}
</script>
<script lang="ts">
export default {
    name: 'Login',
}
</script>

<style lang="less" scoped></style>
