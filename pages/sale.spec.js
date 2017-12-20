import { mount, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import { fakeStore } from '@/store/__mocks__/fakeStore'
import Sale from './sale'

const localVue = createLocalVue()
localVue.use(Vuex)

const ITEM_CLASS_NAME = '.item'
let wrapper
let store

describe('Sale', () => {
  beforeEach(() => {
    store = new Vuex.Store(fakeStore)
    wrapper = mount(Sale, { localVue, store })
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('show products for sale only', () => {
    const $products = wrapper.findAll(ITEM_CLASS_NAME)
    const saleProducts = wrapper.vm.$store.getters.saleProducts

    expect($products.length).toBe(saleProducts.length)
  })
})
