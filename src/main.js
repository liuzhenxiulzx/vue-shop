import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Swipe, SwipeItem ,Loadmore ,InfiniteScroll ,NumberSpinner ,} from 'we-vue'
import 'we-vue/lib/style.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Loadmore)
Vue.use(InfiniteScroll)
Vue.use(NumberSpinner)

// 注册导航守卫
router.beforeEach((to, from, next) => {
  if(to.meta.needlogin)
  {
    let token = localStorage.getItem('token');
    if(token)
    {
      next();
    }
    else
    {
      next('/login')
    }
  }
  else
  {
      next();
  }
})

// 先统一设置接口的基础地址
Vue.axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
