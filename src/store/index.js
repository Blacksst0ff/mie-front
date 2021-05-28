import Vue from 'vue'
import Vuex from 'vuex'
import VuexI18n from 'vuex-i18n' // load vuex i18n module
import app from './modules/app'
import customer from './modules/customer'
import user from './modules/user'
import deal from './modules/deal'
import sla from './modules/sla'
import indicator from './modules/indicator'

import * as getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true, // process.env.NODE_ENV !== 'production',
  getters,
  modules: {
    app,
    customer,
    user,
    deal,
    sla,
    indicator,
  },
  state: {},
  mutations: {},
})

Vue.use(VuexI18n.plugin, store)

export default store
