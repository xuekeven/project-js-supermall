import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'
import toast from 'components/common/toast/index'

import FastClick from 'fastclick'
// import LazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

//  添加事件总线
Vue.prototype.$bus = new Vue()
// 安装 toast 插件
Vue.use(toast)
// 减少移动端300ms延迟
FastClick.attach(document.body)
// 图片懒加载
// Vue.use(LazyLoad)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
