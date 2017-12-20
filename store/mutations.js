/* eslint-disable no-return-assign */

const calculateAmount = obj =>
  Object.values(obj)
    .reduce((acc, { count, price }) => acc + (count * price), 0)
    .toFixed(2)

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
    state.cartAmount = calculateAmount(state.cart)
  },
  REMOVE_ITEM: (state, item) => {
    state.cartTotal = state.cartTotal - item.count
    delete state.cart[item.name]
    state.cartAmount = calculateAmount(state.cart)
  },
  UPDATE_HIGH_PRICE: (state, value) => state.highprice = value
}
