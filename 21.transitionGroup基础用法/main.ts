import { createApp } from 'vue';
import App from './App.vue';
import './assets/css/reset.less';
// 全局注册组件
import Card from './components/Card/index.vue';

createApp(App).component('Card', Card).mount('#app');
