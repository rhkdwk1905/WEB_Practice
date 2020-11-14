import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store =  new Vuex.Store({
  state: {
	  dataToken:{
      name:"",
      userId:"",
      admin:false
    },
	  checkLogin: false
  },
  mutations: {
	  userLogin(state, editData){
		  state.dataToken.name = editData.name
		  state.dataToken.userId = editData.userId
		  state.checkLogin = true
      console.log(editData.userId+"  "+editData.name)
	  },
	  userLogout(state){
		  state.dataToken.name = ""
		  state.dataToken.userId = ""
		  state.checkLogin = false
	  }
  },
  actions: {
  },
  modules: {
  }
})
