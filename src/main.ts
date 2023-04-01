import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import Antd from './configAntD'
import SvgIcon from './components/SvgIcon.vue'
import 'virtual:svg-icons-register'; // 引入svg icon注册脚本
import 'ant-design-vue/dist/antd.css';
import './assets/main.css'

let baseBackendURL = ''
let baseH5URL = ''
if (process.env.NODE_ENV === 'development' || process.env.VUE_APP_STAGINE) {
  // use test backend api when
  // in development env
  // in staging env
  baseBackendURL = 'http://182.92.168.192:8081'
  baseH5URL = 'http://182.92.168.192:8082'
} else {
  baseBackendURL = 'https://api.imooc-lego.com'
  baseH5URL = 'https://h5.imooc-lego.com'
}
export {baseBackendURL,baseH5URL}


const app = createApp(App)
app.component('svg-icon', SvgIcon)
app.use(Antd).use(router).use(store)

app.mount('#app')
