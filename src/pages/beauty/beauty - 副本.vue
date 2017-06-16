<template>
  <div class="commodityPage-page">
    <div class="index-nav">
      <div class="index-nav-title">
        <span>甜点优选</span>
      </div>
      <div class="shopping-page-router-order-me">
        <router-link to="/index">
          <img width="21" height="18" src="./fanhui@2x.png" alt="">
        </router-link>
      </div>
      <div class="shoppingCart-img">
        <img width="22" height="22" src="./gouwuche@2x.png" alt="">
        <div class="shoppingCart-prompt" v-show="isShow"><span>{{totalQuantity}}</span></div>
      </div>
    </div>
    <div class="height-40"></div>
    <v-couponCommodity v-on:calTotalQuantity="allTotalQuantity"></v-couponCommodity>
  </div>
</template>

<style>

  .commodityPage-page{
    width: 100%;
    min-height: 100vh;
    background: #eeeeee;
  }

  .shoppingCart-img{
    position: absolute;
    height: 22px;
    top: 9px;
    right: 15px;
  }
  .shoppingCart-img>img{
    vertical-align: top;
  }

  .shoppingCart-prompt{
    position: absolute;
    top: -6px;
    right: -6px;
    width: 14px;
    height: 14px;
    line-height: 10px;
    border-radius: 50%;
    background: #f96400;
    text-align: center;
  }
  .shoppingCart-prompt>span{
    font-size: 10px;
    color: white;
  }
</style>

<script type="text/ecmascript-6">
  import couponCommodity from '../../components/commodityList/coupon_commodity/coupon_commodity.vue'

  export default{
    data(){
      return{
        totalQuantity:0,
        isShow:false
      }
    },
    components:{
      'v-couponCommodity':couponCommodity
    },
    methods:{
      //子组件传值给父组件
      allTotalQuantity: (function () {
        this.totalQuantity += 1;
        this.showQuantity();
      }),

      //显示隐藏购物车数量红标
      showQuantity:(function(){
        if(this.totalQuantity==0){
          this.isShow = false
        }else {
          this.isShow = true
        }
      })
    }
  };
</script>
