import Vue from 'vue'
import App from './App.vue'
import Homee from './Home.vue'

Vue.component('my-cmp', Homee);

new Vue({
  el: '#app',
  render: h => h(App)
})
