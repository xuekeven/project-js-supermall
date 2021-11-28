import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'

import FastClick from 'fastclick'
import LazyLoad from 'vue-lazyload'
import toast from './components/common/toast/index'

// 阻止 Vue 在启动时生成生产提示
Vue.config.productionTip = false

// 添加 bus 事件总线
Vue.prototype.$bus = new Vue() 

// 使用 减少移动端300ms延迟 插件
FastClick.attach(document.body) 

// 使用 图片懒加载 插件
Vue.use(LazyLoad) 

// 使用 消息提示框 插件
Vue.use(toast) 

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
