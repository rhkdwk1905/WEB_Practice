import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store =  new Vuex.Store({
  state: {
	  userIdToken:"",
	  userNameToken:"",
	  checkLogin: false
  },
  mutations: {
	  userLogin(state, editData){
		  state.userIdToken = editData.userId
		  state.userNameToken = editData.userName
		  state.checkLogin = true
	  },
	  userLogout(state){
		  state.userIdToken = ""
		  state.userNameToken = ""
		  state.checkLogin = false
	  }
  },
  actions: {
  },
  modules: {
  }
})
