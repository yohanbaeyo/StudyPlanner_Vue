import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import MonthlyCalendar from './components/MonthlyCalendar'
import WeeklyCalendar from './components/WeeklyCalendar'
import Tasks from './components/Tasks'
import Home from './components/Home'
import DailyCalendar from './components/DailyCalendar'
import {store} from './store'
import 'es6-promise/auto'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { name:'Index', path: '/', component: Home},
  { name:'Monthly', path: '/monthly', component: MonthlyCalendar},
  { name:'Weekly', path: '/weekly', component: WeeklyCalendar},
  { name:'Daily', path: '/daily', component: DailyCalendar},
  { name:'Tasks', path: '/tasks', component: Tasks}
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
