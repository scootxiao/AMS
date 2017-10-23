// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App'

import store from './store/index.js'
import router from './router'
import axios from 'axios'

import $ from 'jquery'

Vue.use(ElementUI)
Vue.config.productionTip = false

require('./assets/bootstrap/css/bootstrap.min.css');
require('./assets/css/base.css'); //全局引入


//关于axios配置
/*axios.interceptors.request.use(function(config) { //发送请求
	store.dispatch('showLoading')
	return config;
}, function(error) {
	return Promise.reject(error);
});

axios.interceptors.response.use(function(response) { //请求回来
	store.dispatch('hideLoading')
	return response;
}, function(error) {
	return Promise.reject(error);
});*/
//axios.defaults.baseURL='http://localhost:8082/'; //配置请求根路径
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
/*Vue.prototype.$http = axios;*/ //把axios对象挂到Vue原型上



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
