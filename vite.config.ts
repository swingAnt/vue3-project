import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
// https://vitejs.dev/config/
export default defineConfig({

    resolve: {
        //设置别名
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    plugins: [
        Components({
            resolvers: [AntDesignVueResolver()],
        }), vue(),],
    server: {
        port: 8080, //启动端口
        hmr: {
            host: '127.0.0.1',
            port: 8080
        },
        // 设置 https 代理
        proxy: {
            '/api': {
                target: 'xxxxx',// 真实接口地址, 后端给的基地址
                // changeOrigin: true, // 允许跨域
                rewrite: (path: string) => path.replace(/^\/api/, '') // 将api替换为空
            }
        }
    },
    define: {
        'process.env': {
            "T_EVN":process.env.T_EVN
        }
    }
});

