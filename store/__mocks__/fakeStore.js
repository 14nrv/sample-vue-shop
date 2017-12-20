/* eslint-disable key-spacing */

import state from '@/store/state'
import getters from '@/store/getters'
import mutations from '@/store/mutations'

export const fakeStore = {
  state,
  getters,
  mutations,
  actions: {
    switchSale        : jest.fn(({ commit }) => commit('SWITCH_SALE')),
    clearCartCount    : jest.fn(({ commit }) => commit('CLEAR_CART_COUNT')),
    clearCartContents : jest.fn(({ commit }) => commit('CLEAR_CART_CONTENTS')),
    addItem           : jest.fn(({ commit }, item) => commit('ADD_ITEM', item)),
    updateHighprice   : jest.fn(({ commit }, value) => commit('UPDATE_HIGH_PRICE', value))
  },
  strict: true
}
