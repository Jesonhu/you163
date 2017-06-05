import Vue from 'vue'
import Vuex from 'vuex'
import axios from '~plugins/axios'

// Vue.use(Vuex)
//
// const store = () => {
//   return new Vuex.Store({
//     state: {
//       counter: 1
//     },
//     mutations: {
//       increment (state) {
//         state.counter++
//       }
//     }
//   })
// }
//
// export default store

export const actions = {
  // nuxt初始化后执行的第一个方法:可以用来配置全局服务初始化
  nuxtServerInit(store, {params}) {
    const initAppData = [
      store.dispatch('loadCommonData') // <--
    ]
    return Promise.all(initAppData)
  },

  loadCommonData({ commit }) {
    return axios.get('/api/common.json')
      .then((res) => {
        commit('header_footer/GET_DATA_sHotKey', { // <--
          searchHotKeyList: res.data.result.SearchWordsList
        })
        commit('header_footer/GET_DATA_tabNav', { // <--
          tabNav: res.data.result.navList
        })
        commit('header_footer/GET_DATA_footerList', { // <--
          footerList: res.data.result.footerList
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
