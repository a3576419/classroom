import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//1引入element-ui组件
import ElementUI from 'element-ui'
// import locale from 'element-ui/lib/locale/lang/en'
// 2.引用css文件样式
import 'element-ui/lib/theme-chalk/index.css';

//3.使用组件
Vue.use(ElementUI)
// Vue.use(ElementUI, { locale })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
