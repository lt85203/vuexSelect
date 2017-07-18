/**
 * Created by wyunfei on 2017/7/10.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(axios)

const store = new Vuex.Store({
  state: {
    title: 'hello',
    list: []
  },
  mutations: {
    changeTitle (state, title) {
      state.title = title
    },
    changeList (state, list) {
      state.list = list
    }
  },
  actions: {
    getListAction ({commit}) {
      axios.get('http://easy-mock.com/mock/596216cc9adc231f357c34d9/select/list/select').then((data) => {
        console.log(data)
        commit('changeList', data.data.data)
      })
    }
  }
})

export default store
