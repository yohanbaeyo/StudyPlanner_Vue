import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import MonthlyCalendar from './components/MonthlyCalendar'

Vue.config.productionTip = false
Vue.use(VueRouter)

const Goo = {template: '<div>dfsfddklfkskdgkjbdklgnndsgnlsn</div>'}
const Foo = {template: "<div style='position: sticky;'>sdffffffffffffffffffffffffffffffffffffffffffffffffffffff</div>"}

const routes = [
  { name:'Index', path: '/', component: Foo},
  { name:'Monthly', path: '/monthly', component: MonthlyCalendar},
  { name:'Weekly', path: '/weekly', component: Goo}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  render: h=> h(App),
  router
}).$mount('#app')

/*new Vue({
  render: h => h(App),
}).$mount('#app')*/
