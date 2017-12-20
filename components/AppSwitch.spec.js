import { shallow, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import { fakeStore } from '@/store/__mocks__/fakeStore'
import AppSwitch from './AppSwitch'

const localVue = createLocalVue()
localVue.use(Vuex)

let wrapper
let store

describe('AppSwitch', () => {
  beforeEach(() => {
    store = new Vuex.Store(fakeStore)
    wrapper = shallow(AppSwitch, { localVue, store })
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('don t enable show sale items by default', () => {
    const showSale = wrapper.vm.$store.getters.showSale
    expect(showSale).toBeFalsy()
  })

  it('show a input with a class of .can-toggle', () => {
    expect(wrapper.contains('.can-toggle input')).toBe(true)
  })

  it('call switchSale actions when trigger .can-toggle input', () => {
    expect(fakeStore.state.sale).toBeFalsy()

    wrapper.find('.can-toggle input').trigger('click')
    expect(fakeStore.actions.switchSale).toHaveBeenCalledTimes(1)
    expect(fakeStore.state.sale).toBeTruthy()
    expect(fakeStore.getters.showSale).toBeTruthy()
  })
})
