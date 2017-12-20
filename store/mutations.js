/* eslint-disable no-return-assign */

export default {
  SWITCH_SALE: state => state.sale = !state.sale,
  CLEAR_CART_COUNT: state => state.cartTotal = 0,
  CLEAR_CART_CONTENTS: state => state.cart = {},
  ADD_ITEM: (state, item) => {
    state.cartTotal++
    if (item.name in state.cart) {
      state.cart[item.name].count++
    } else {
      let stateItem = { ...item }
      stateItem.count = 1
      state.cart[item.name] = stateItem
    }
  },
  REMOVE_ITEM: (state, item) => {
    state.cartTotal = state.cartTotal - item.count
    delete state.cart[item.name]
  },
  UPDATE_HIGH_PRICE: (state, value) => state.highprice = value
}
