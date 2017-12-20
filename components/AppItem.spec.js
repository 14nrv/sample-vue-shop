import { shallow, createLocalVue } from 'vue-test-utils'
import Vuex from 'vuex'
import { fakeStore } from '@/store/__mocks__/fakeStore'
import products from '@/store/products'
import AppItem from './AppItem'

const localVue = createLocalVue()
localVue.use(Vuex)

let wrapper
let store

describe('AppItem', () => {
  beforeEach(() => {
    store = new Vuex.Store(fakeStore)
    wrapper = shallow(AppItem, {
      localVue,
      store,
      propsData: {
        item: products[0],
        index: 0
      }
    })
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('have a btn .add', () => {
    expect(wrapper.contains('.add')).toBe(true)
  })

  it('show name of item', () => {
    const $itemName = wrapper.find('.item-name')
    expect($itemName.text()).toBe(products[0].name)
  })

  it('show sale', () => {
    expect(wrapper.contains('.salepill')).toBe(true)
  })

  it('call addItem action when click on btn item', () => {
    const $btn = wrapper.find('.add')
    $btn.trigger('click')
    expect(fakeStore.actions.addItem).toHaveBeenCalledTimes(1)
  })
})
