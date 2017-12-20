import { mount, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import {fakeStore} from '@/store/__mocks__/fakeStore'
import Index from './index'

const localVue = createLocalVue()
localVue.use(Vuex)

const ITEM_CLASS_NAME = '.item'
let wrapper
let store

describe('Index', () => {
  beforeEach(() => {
    store = new Vuex.Store(fakeStore)
    wrapper = mount(Index, { localVue, store })
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('show all products', () => {
    const $products = wrapper.findAll(ITEM_CLASS_NAME)
    const products = wrapper.vm.$store.getters.products
    const allProducts = wrapper.vm.$store.getters.allProducts

    expect(wrapper.contains(ITEM_CLASS_NAME)).toBeTruthy()
    expect($products.length).toBe(products.length)
    expect($products.length).toBe(allProducts.length)
  })

  it('don t show .cartcount by default', () => {
    const cartTotalInStore = wrapper.vm.$store.getters.cartTotal
    expect(cartTotalInStore).toBeFalsy()
    expect(wrapper.contains('.cartcount')).toBeFalsy()
  })

  it('update cart when click on btn add to cart', () => {
    expect(wrapper.vm.$store.getters.cartTotal).toBeFalsy()
    const firstProduct = wrapper.findAll(ITEM_CLASS_NAME).at(0)
    const $btn = firstProduct.find('.add')
    $btn.trigger('click')
    expect(wrapper.vm.$store.state.cartTotal).toBe(1)
  })
})
