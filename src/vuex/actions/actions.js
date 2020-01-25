
export default {
  SET_MOBILE({commit}) {
    commit('SWITCH_MOBILE')
  },
  SET_DESKTOP({commit}) {
    commit('SWITCH_DESKTOP')
  },
  ADD_TO_CART({commit}, product) {
    commit('SET_CART', product);
  },
  INCREMENT_CART_ITEM({commit}, index) {
    commit('INCREMENT', index)
  },
  DECREMENT_CART_ITEM({commit}, index) {
    commit('DECREMENT', index)
  },
  DELETE_FROM_CART({commit}, index) {
    commit('REMOVE_FROM_CART', index)
  }
}