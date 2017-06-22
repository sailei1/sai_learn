import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from '../plugins/logger'
import  modal from  './modules/modal'

Vue.use(Vuex);


const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  modules: {
    'modal':modal
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});

if (module.hot) {
  module.hot.accept(['./modules/modal'], () => {
    // 加载新模块
    store.hotUpdate({
      modules: {
        'modal':modal
      }
    })
  })
}

export default store
