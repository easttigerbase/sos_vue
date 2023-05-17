import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from "vue-router";
import index from './routes/index'
require('./assets/styles/css/basic.css');

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  vuetify,
  router:index,
  render: h => h(App),
}).$mount('#app')
