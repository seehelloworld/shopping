// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store/'
import { userInfo } from './api'
import AMap from 'vue-amap'
import VueCookie from 'vue-cookie'
import $ from 'jquery'

Vue.use(ElementUI);
Vue.use(VueCookie);
Vue.use(AMap);

Vue.config.productionTip = false
const whiteList = ['/home','/Articledetail', '/goods', '/login', '/goodsDetails','/msgbox/allmsg','/msgbox/storemsg','/msgbox/managerblog','/paymenthome','/about','/store',] // 不需要登陆的页面
router.beforeEach(function (to, from, next) {
  userInfo().then(res => {

    if (res.status === '1') { // 没登录
      if (whiteList.indexOf(to.path) !== -1) { // 白名单
        next()
      } else {
        next('/login')
      }
    } else {
      store.commit('RECORD_USERINFO', {info: res.result})
      if (to.path === '/login') { //  跳转到
        next({path: '/'})
      }
      next()
    }
  })
})

AMap.initAMapApiLoader({
  // 申请的高德key
  key: 'YOUR_KEY',
  // 插件集合
  plugin: ['']
});

/* eslint-disable no-new */
new Vue({ 
  el: '#app',
  store,
  router,
  // template: '<App/>',
  // components: { App }
  render:h => h(App)
})
