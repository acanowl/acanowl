import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'

// 给Vue函数添加一个原型属性 axios 指向 Axios
// vue 组件不用再重复引用Axios 直接调用this.axios就可执行
import Axios from 'axios'
Vue.prototype.axios = Axios ;

Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg);
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
