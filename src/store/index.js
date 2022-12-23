
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data:{}
  },
  mutations: {
    getApi(){
      fetch("https://api.coincap.io/v2/assets")
          .then(res => {
            return res.json()
          }).then(response => this.state.data =  response.data)
    }
  },
  actions: {
  },
  modules: {
  }
})