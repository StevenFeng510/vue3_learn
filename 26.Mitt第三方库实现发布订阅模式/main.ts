import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/reset.less';
// 导入mitt库 使用封装好的事件总线
import mitt from 'mitt';

const Mit = mitt();

const app = createApp(App);

declare module 'vue' {
    export interface ComponentCustomProperties {
        $Bus: typeof Mit;
    }
}

app.config.globalProperties.$Bus = Mit;

app.mount('#app');
