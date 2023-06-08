import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router';
import { modules } from './link';
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

console.log('process.env.T_EVN', process.env.T_EVN)
if (process.env.T_EVN === 'development') {
  modules['mock']
}
// 创建vue实例
const app = createApp(App);
// 挂载pinia
app.use(store)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.use(router);
// 挂载实例
app.mount('#app');
