import { shallow, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import { fakeStore } from '@/store/__mocks__/fakeStore'
import AppSidebar from './AppSidebar'

const localVue = createLocalVue()
localVue.use(Vuex)

let wrapper
let store

describe('AppSidebar', () => {
  beforeEach(() => {
    store = new Vuex.Store(fakeStore)
    wrapper = shallow(AppSidebar, { localVue, store })
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('show an input #pricerange', () => {
    expect(wrapper.contains('#pricerange')).toBeTruthy()
  })

  it('call updateHighPrice when change value of price range', () => {
    const highPrice = 20

    const $pricerange = wrapper.find('#pricerange')
    $pricerange.element.value = highPrice
    $pricerange.trigger('input')

    expect(fakeStore.actions.updateHighprice).toHaveBeenCalledTimes(1)
  })
})
