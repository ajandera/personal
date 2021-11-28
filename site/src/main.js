import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCookie from 'vue-cookies'
import VueSession from 'vue-session'
import i18n from "./i18n";
import VueCarousel from 'vue-carousel';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './App.vue'
import Blog from "@/components/blog/Blog";
import Detail from "@/components/blog/Detail";
import NotFound from "@/components/NotFound";
import Home from "@/components/Home";
import Customers from "@/components/Customers";
import Contact from "@/components/Contact";
import ShopyCRM from "@/components/ShopyCRM";
import ArualCMS from "@/components/ArualCMS";
import StorePredictor from "@/components/StorePredictor";

library.add(fas)
library.add(fab)
Vue.use(VueRouter)
Vue.use(VueCookie)
Vue.use(VueSession)
Vue.use(i18n)
Vue.use(VueCarousel);
Vue.config.productionTip = true
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.prototype.$hostname = process.env.VUE_APP_API

const routes = [
  { path: '/', component: Home },
  { path: '/customers', component: Customers },
  { path: '/contact', component: Contact },
  { path: '/posts', component: Blog },
  { path: '/detail/:id', component: Detail },
  { path: '/shopycrm', component: ShopyCRM },
  { path: '/arualcms', component: ArualCMS },
  { path: '/storepredictor', component: StorePredictor },
  { path: '**', component: NotFound }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
