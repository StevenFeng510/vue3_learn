import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// 配置tsx写法
import vueJsX from '@vitejs/plugin-vue-jsx';
// 自动导入
import AutoImport from 'unplugin-auto-import/vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsX(),
        // 配置自动导入文件
        AutoImport({
            imports: ['vue'],
            dts: 'src/auto-import.d.ts',
        }),
    ],
});
