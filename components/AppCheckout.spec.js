import { shallow } from 'vue-test-utils'
import AppCheckout from './AppCheckout'

let wrapper

describe('AppCheckout', () => {
  beforeEach(() => {
    wrapper = shallow(AppCheckout)

    jest.resetModules()
    jest.clearAllMocks()
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('show a btn pay disabled by default', () => {
    expect(wrapper.contains('.pay-with-stripe[disabled=disabled]')).toBeTruthy()
  })
})
