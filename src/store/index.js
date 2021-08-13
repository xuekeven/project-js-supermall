import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import getters from './getters'
import actions from './actions'

//1.安装插件
Vue.use(Vuex)

const state = {
  cartList: []
}
//2.创建store对象
const store = new Vuex.Store({
	state,
	mutations,
  getters,
  actions
})

//3.挂载
export default store