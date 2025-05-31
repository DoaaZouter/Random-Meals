import { createApp } from 'vue'
import router from '../src/router'
import store from '../src/store'
import './style.css'
import App from './App.vue'
import * as filters from './filters'


const app = createApp(App);

app.use(router)
app.use(store)

app.mount("#app");

app.config.globalProperties.$filters = filters