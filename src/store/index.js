import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
  username: "",
  userid: "",
  jurisdiction: false,
  pointName: "",//定位位置名称
  lat: "",//定位位置名称
  lng: "",//定位位置名称
}

export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})
