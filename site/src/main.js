import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCookie from 'vue-cookies'
import VueSession from 'vue-session'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Blog from "@/components/Blog";
import Detail from "@/components/Detail";
import Content from "@/components/Content";

library.add(fas)
library.add(fab)
Vue.use(VueRouter)
Vue.use(VueCookie)
Vue.use(VueSession)
Vue.config.productionTip = true
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.prototype.$hostname = 'http://localhost:8000/api/'

const routes = [
  { path: '/', component: App},
  { path: '/home', component: Content},
  { path: '/blog', component: Blog},
  { path: '/detail/:id', component: Detail}
]
const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
