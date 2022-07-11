import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// 配置tsx写法
import vueJsX from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vueJsX()],
});
