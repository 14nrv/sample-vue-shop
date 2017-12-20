import { shallow, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import { fakeStore } from '@/store/__mocks__/fakeStore'
import Cart from './cart'

const localVue = createLocalVue()
localVue.use(Vuex)

let wrapper
let store

fakeStore.state.cart = {
  'Khaki Suede Polish Work Boots': {
    article: 'shoe',
    category: 'women',
    count: 2,
    img: 'shoe1.png',
    name: 'Khaki Suede Polish Work Boots',
    price: 149.99,
    sale: true
  },
  'Camo Fang Backpack Jungle': {
    article: 'jacket',
    category: 'women',
    count: 1,
    img: 'jacket1.png',
    name: 'Camo Fang Backpack Jungle',
    price: 39.99,
    sale: false
  }
}
fakeStore.state.cartTotal =
  Object.values(fakeStore.state.cart)
    .reduce((acc, { count }) => acc + count, 0)

describe('Cart', () => {
  beforeEach(() => {
    store = new Vuex.Store(fakeStore)
    wrapper = shallow(Cart, { localVue, store })

    jest.resetModules()
    jest.clearAllMocks()
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('show products', () => {
    const $products = wrapper.findAll('.cartitems')
    const productsInCartState = Object.values(fakeStore.state.cart)
    expect($products.length).toBe(productsInCartState.length)
  })

  it('show total', () => {
    const $total = wrapper.find('.total')
    const productsInCartState = Object.values(fakeStore.state.cart)
    const total =
      productsInCartState
        .reduce((acc, { count, price }) => acc + (count * price), 0)
        .toFixed(2)

    expect($total.text()).toBe(`Total: $${total}`)
  })
})
