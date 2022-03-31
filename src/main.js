import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueProgressBar from 'vue-progressbar'
import Toasted from 'vue-toasted';
Vue.use(Toasted, {
  duration: '3000',
  position: 'top-right',
})

const options = {
  color: 'black',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(VueProgressBar, options)

Vue.config.productionTip = false

Vue.prototype.$http  =  axios;
const  accessToken  =  localStorage.getItem('access_token')

if (accessToken) {
    Vue.prototype.$http.defaults.headers.common['Authorization'] =  accessToken
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
