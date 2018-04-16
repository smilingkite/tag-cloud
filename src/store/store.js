import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
 state: {
  text: '',
  tags: [],
  count: 1, 
 },
 mutations: {
  INCREMENT (state) {
    state.count++;
  },
  DECREMENT (state) {
    if(state.count > 0){
      state.count-- ;
    }
  }
 },
 actions: {
  increment({commit},count){
    commit('INCREMENT', count)
  },
  decrement({commit},count){
    commit('DECREMENT', count)
  }
 },
 getters: {
  //  tags: state => state.tags
  count: state => state.count
 }

})