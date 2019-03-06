import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false


const Home = () => import(/* webpackChunkName: "home" */ './components/Home.vue');
const Patricia = () => import(/* webpackChunkName: "patricia" */ './components/Patricia.vue');

const routes = [
  { path: '/patricia', component: Patricia },
  { path: '/', component: Home },
]
const router = new VueRouter({
  routes
})

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
