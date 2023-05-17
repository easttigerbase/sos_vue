import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from "vue-router";
import index from './routes/index'

// VueMeta
import Meta from 'vue-meta'
Vue.use(Meta, {
  attribute: 'data-vue-meta'
  // vmid를 사용하기 위한 옵션
});
require('./assets/styles/css/basic.css');

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  vuetify,
  router:index,
  render: h => h(App),
}).$mount('#app')
