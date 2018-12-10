// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from '@/router'
import ElementUI from 'element-ui'
// import 'babel-polyfill'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import '@/assets/css/index.css'
Vue.config.productionTip = false

import App from './App'


import $ from 'jquery'
import Echarts from 'echarts'
import EcStat from 'echarts-stat/dist/ecStat.js'
require('echarts/extension/bmap/bmap');

// import * as d3 from 'd3'
import axios from "axios"
import config from '../static/js/config'
import url from "../static/js/url"

import 'echarts/map/js/china.js'
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
// axios.defaults.withCredentials = true;  //登陆 session 不同问题

Vue.prototype.$echarts = Echarts 
Vue.prototype.$ecStat = EcStat


// Vue.prototype.$d3 = d3 
Vue.prototype.$axios = axios
Vue.prototype.$config = config
Vue.prototype.$url = url

Vue.use(ElementUI)

// 登陆
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  
    
      if (sessionStorage.getItem('userinfo')) {  
          next();
         
      }else {
          next();
          
          next({
              path: '/login',
          })
      }
  }else {
      next();
  }
  
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
