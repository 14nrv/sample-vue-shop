export default {
  switchSale({ commit }) {
    commit('SWITCH_SALE')
  },
  clearCartCount({ commit }) {
    commit('CLEAR_CART_COUNT')
  },
  clearCartContents({ commit }) {
    commit('CLEAR_CART_CONTENTS')
  },
  addItem({ commit }, item) {
    commit('ADD_ITEM', item)
  },
  removeItem({ commit }, item) {
    commit('REMOVE_ITEM', item)
  },
  updateHighprice({ commit }, value) {
    commit('UPDATE_HIGH_PRICE', value)
  }
}
