
export default {
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