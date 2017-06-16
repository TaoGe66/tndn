<template>
  <div class="all-page">
    <div class="index-nav">
      <div class="shopping-page-router-order-me">
        <router-link to="/me">
          <img width="21" height="18" src="./fanhui@2x.png" alt="">
        </router-link>
        <!--<p onclick="window.history.go(-1)">-->
          <!--<img width="21" height="18" src="./fanhui@2x.png" alt="">-->
        <!--</p>-->
      </div>
      <div class="index-nav-title">
        <span>我的订单</span>
      </div>
    </div>
    <div class="height-40"></div>
    <div class="margin-49">
      <v-coupon-8></v-coupon-8>
      <v-coupon-8></v-coupon-8>
      <v-coupon-8></v-coupon-8>
    </div>
  </div>
</template>

<style>
  .all-page{
    float: left;
    width: 100%;
    min-height: 100vh;
    background: #eeeeee;
  }
  .height-50{
    float: left;
    height: 41px;
    width: 100%;
  }

</style>

<script>
  import couponHeight8 from '../../components/commodityList/conpon-height-8/coupon-height-8.vue'

  export default{
    components:{
      'v-coupon-8':couponHeight8
    }

  };
</script>
