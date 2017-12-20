import { shallow } from 'vue-test-utils'
import AppSuccess from './AppSuccess'

let wrapper

jest.useFakeTimers()

describe('AppSuccess', () => {
  beforeEach(() => {
    wrapper = shallow(AppSuccess)
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('emit restartCart after 3seconds', () => {
    expect(setTimeout.mock.calls.length).toBe(3)
  })
})
