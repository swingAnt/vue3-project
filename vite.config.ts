import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
// https://vitejs.dev/config/
export default defineConfig({
    base: '/vue', // 开发或生产环境服务的公共基础路径 配置引入相对路径
    build: {
        outDir: 'dist/vue', // 指定输出路径
        assetsDir: 'assets', // 指定生成静态文件目录
        // polyfillModulePreload: true, // 是否自动注入 module preload 的 polyfill
        // assetsInlineLimit: 4096, // 小于此阈值的导入或引用资源将内联为 base64 编码
        // cssCodeSplit: true, // 启用 CSS 代码拆分
        // cssTarget: '', // 允许用户为 CSS 的压缩设置一个不同的浏览器 target 与 build.target 一致
        // sourcemap: false, // 构建后是否生成 source map 文件
        // rollupOptions: {}, // 自定义底层的 Rollup 打包配置
        // manifest: false, // 当设置为 true，构建后将会生成 manifest.json 文件
        // ssrManifest: false, // 构建不生成 SSR 的 manifest 文件
        // ssr: undefined, // 生成面向 SSR 的构建
        // minify: 'esbuild', // 指定使用哪种混淆器
        // terserOptions: {}, // 传递给 Terser 的更多 minify 选项
        // write: true, // 启用将构建后的文件写入磁盘
        // emptyOutDir: true, // 构建时清空该目录
        // chunkSizeWarningLimit: 500, // chunk 大小警告的限制
        // watch: null, // 设置为 {} 则会启用 rollup 的监听器
      },
    css: {
        preprocessorOptions: {
          scss: {
            // 两种方式都可以
            // additionalData: '@import "@/assets/scss/global.scss";'
            // additionalData: '@use "@/assets/scss/global.scss" as *;'
          }
        }
      },
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

