// Polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import { ColorThemePlugin } from '../services/vuestic-ui'
import store from '../store/index'
import router from '../router/index'
import { VuesticPlugin } from '../services/vuestic-ui/components'
import '../i18n/index'
import YmapPlugin from 'vue-yandex-maps'
import VueClipboard from 'vue-clipboard2'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

import '../metrics'
import '../registerServiceWorker'

import { consoleBuildInfo } from 'vue-cli-plugin-build-info/plugin'

consoleBuildInfo()

Vue.use(VuesticPlugin)
Vue.use(YmapPlugin)
Vue.use(VueClipboard)
Vue.use(VueSweetalert2)

Vue.use(ColorThemePlugin, {
  // override colors here.
  primary: '#230158',
  secondary: '#6e7ff1',
  success: '#8ddc88',
  info: '#71baff',
  danger: '#f8706d',
  warning: '#ffd652',
  gray: '#8396a5',
  dark: '#34495e',
})

router.beforeEach((to, from, next) => {
  store.commit('setLoading', true)
  next()
})

router.afterEach((to, from) => {
  store.commit('setLoading', false)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
