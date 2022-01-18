import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import MonthlyCalendar from './components/MonthlyCalendar'
import WeeklyCalendar from './components/WeeklyCalendar'
import ToDo from './components/ToDo'
import Home from './components/Home'
import DailyCalendar from './components/DailyCalendar'
import {store} from './store'
import 'es6-promise/auto'
import axios from "axios";

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { name:'Index', path: '/', component: Home},
  { name:'Monthly', path: '/monthly', component: MonthlyCalendar},
  { name:'Weekly', path: '/weekly', component: WeeklyCalendar},
  { name:'Daily', path: '/daily', component: DailyCalendar},
  { name:'ToDo', path: '/todo', component: ToDo}
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  render: h=> h(App),
  router,
  store
}).$mount('#app')

/*new Vue({
  render: h => h(App),
}).$mount('#app')*/
