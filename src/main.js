import { createApp } from 'vue'
import App from './App.vue'
import router from '../router/router'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import * as echarts from 'echarts'

const app = createApp(App)
app.config.globalProperties.charts = echarts
app.use(router)
app.use(VXETable).mount('#app')
