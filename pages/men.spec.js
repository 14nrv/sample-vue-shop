import { mount, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import { fakeStore } from '@/store/__mocks__/fakeStore'
import Men from './men'

const localVue = createLocalVue()
localVue.use(Vuex)

const ITEM_CLASS_NAME = '.item'
let wrapper
let store

describe('Men', () => {
  beforeEach(() => {
    store = new Vuex.Store(fakeStore)
    wrapper = mount(Men, { localVue, store })
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('show products for men only', () => {
    const $products = wrapper.findAll(ITEM_CLASS_NAME)
    const menProducts = wrapper.vm.$store.getters.menProducts

    expect($products.length).toBe(menProducts.length)
  })
})
