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
    let token = localStorage.getItem('ACCESS_TOKEN');
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

//  设置拦截器
Vue.axios.interceptors.request.use(function(config){
    // 在发送请求之前执行
    let token = localStorage.getItem('ACCESS_TOKEN');
    // console.log(token)
    if(token){
      config.headers['Authorization'] = "Bearer "+token
    }
    return config;
},function(error){
    // 失败返回的数据
    return  Promise.reject(error);
});

// 先统一设置接口的基础地址
Vue.axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
