// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/routes.js'
import axios from 'axios'
// import store from './store/'
// import Loading from './components/commodityList/loading'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false;
Vue.use(MintUI);
// Vue.use(Loading);

axios.defaults.baseURL = 'http://www.tndnchina.cn/';
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$http = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // store,
  template: '<App/>',
  components: { App }
});
//注册全局钩子用来拦截导航
/*router.beforeEach((to, from, next) => {
  //获取store里面的token
  let token = store.state.token;
  console.log(token)
  //判断要去的路由有没有requiresAuth
  if(to.meta.requiresAuth){
    if(token){
      next();
      console.log('1111111111111111')
    }else{
      next({
        path: '/index',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      });
      console.log('22222222222')
    }
    console.log('3333333333333')
  }else{
    next();//如果无需token,那么随它去吧

  }
});*/

