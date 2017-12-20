import { mount, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import { fakeStore } from '@/store/__mocks__/fakeStore'
import Women from './women'

const localVue = createLocalVue()
localVue.use(Vuex)

const ITEM_CLASS_NAME = '.item'
let wrapper
let store

describe('Women', () => {
  beforeEach(() => {
    store = new Vuex.Store(fakeStore)
    wrapper = mount(Women, { localVue, store })
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('show products for women only', () => {
    const $products = wrapper.findAll(ITEM_CLASS_NAME)
    const womenProducts = wrapper.vm.$store.getters.womenProducts

    expect($products.length).toBe(womenProducts.length)
  })
})
