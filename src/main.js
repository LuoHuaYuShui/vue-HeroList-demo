// 整个Vue项目的入口文件 文件不能修改删除
//1 使用 模板导入的方式 讲Vue框架导入
import Vue from 'vue'
// Axios 是很多模块都使用 所以 我们可以在全局 注册

// import Axios from 'axios' 

// 给 Vue 构造函数 挂载全局方法 
// Vue.prototype.$request = Axios   
// 使用方式    this.$request.get

 


// 使用模板导入的方式 将 app组件导入
import App from './App.vue'
// 添加 bootstrap css 组件
import 'bootstrap/dist/css/bootstrap.css'
// 引入路由文件
import router from './router'
// 解决vue 代码格式严禁 方案
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
