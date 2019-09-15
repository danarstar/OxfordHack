import Vue from 'vue'
import App from './App.vue'
import routes from './routes.js'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
import Vuex from 'vuex'
import stores from 'stores'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.component('vue-bootstrap-typeahead', VueBootstrapTypeahead)



Vue.use(VueRouter)
const router = new VueRouter({
    routes: routes
})
let store = stores(Vue)

Vue.config.productionTip = false

new Vue({
    router,
    store,
  render: h => h(App),
}).$mount('#app')
