/**
 * Created by admin on 2017/4/14.
 */
import Vue from 'vue'
import Router from 'vue-router'
import storePage from '../pages/storePage/storePage'
import beauty from '../pages/beauty/beauty'
import other from '../pages/other/other'
import clothing from '../pages/clothing/clothing'
import goods from '../pages/goods/goods'
import index from '../pages/index/index'
import shoppingCart from '../pages/shoppingCart/shoppingCart'
import me from '../pages/me/me'
import pay from '../pages/pay/pay'
import all from '../pages/all/all'
import commodityDetail from '../pages/commodity-detail/detail'
import storeDetail from '../pages/store-detail/detail'
import address from '../pages/address/address'
import newAddress from '../pages/newaddress/newaddress'
import modifyNewaddress from '../pages/modifyNnewaddress/modifyNewaddress'
import orderStatus from '../pages/order-status/order-status'
import payResult from '../pages/pay-result/pay-result'
import selectAddress from '../pages/SelectAddress/SelectAddress'
import login from '../pages/login/login'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'index'
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/index/storePage',
      name: 'index/storePage',
      component: storePage
    },
    {
      path: '/index/clothing',
      name: 'index/clothing',
      component: clothing
    },
    {
      path: '/index/beauty',
      name: 'index/beauty',
      component: beauty
    },
    {
      path: '/index/other',
      name: 'index/other',
      component: other
    },
    {
      path: '/index/goods',
      name: 'index/goods',
      component: goods
    },
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: shoppingCart,
      beforeEnter:(to,form,next)=>{
        if(!localStorage.getItem("jsonObj")){
         // 第一次进入项目
         next('/login');
          alert("没有，去登陆");
         return false
         } else {
         // 之前有获取过授权
         next();
          alert('有，不用登陆');
         return false;
        }
      }
    },
    {
      path:'/login',
      name: 'login',
      component: login
    },
    {
      path: '/pay',
      name: 'pay',
      component: pay
    },
    {
      path: '/pay/payResult',
      name: 'pay/payResult',
      component: payResult
    },
    {
      path: '/Order/orderStatus',
      name: 'Order/orderStatus',
      component: orderStatus
    },
    {
      path: '/me',
      name: 'me',
      component: me
    },
    {
      path: '/me/address',
      name: 'me/address',
      component: address
    },
    {
      path: '/me/address/newAddress',
      name: 'me/address/newAddress',
      component: newAddress
    },
    {
      path: '/me/address/modifyNewaddress:id',
      name: 'me/address/modifyNewaddress:id',
      component: modifyNewaddress
    },
    {
      path: '/all',
      name: 'all',
      component: all
    },
    {
      path: '/index/commodityDetail:id',
      name: 'index/commodityDetail:id',
      component: commodityDetail,
      meta:{requireAuth: true}
    },
    {
      path: '/index/storeDetail:id',
      name: 'index/storeDetail:id',
      component: storeDetail
    },
    {
      path: '/index/storeDetail',
      name: 'index/storeDetail',
      component: storeDetail
    },
    {
      path: '/pay/selectAddress',
      name: '/pay/selectAddress',
      component: selectAddress
    }
  ]
});



