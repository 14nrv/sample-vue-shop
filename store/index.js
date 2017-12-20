import Vuex from 'vuex'
import state from '@/store/state'
import getters from '@/store/getters'
import mutations from '@/store/mutations'
import actions from '@/store/actions'

const createStore = () => {
  return new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    strict: true
  })
}

export default createStore
