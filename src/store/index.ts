import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  mutations: {
    setCount(state) {
      state.count
    }
  },
  actions: {
  },
  modules: {
    aa: {
      state: {
        count: 0
      },
      mutations: {
        setCount(state) {
          // 这里无效了
        }
      }
    }
  }
})
