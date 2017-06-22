<template>
  <div class="all-page">
    <div class="index-nav">
      <div class="shopping-page-router-order-me">
        <router-link to="/me">
          <img width="21" height="18" src="./fanhui@2x.png" alt="">
        </router-link>
      </div>
      <div class="index-nav-title">
        <span>我的订单</span>
      </div>
    </div>
    <div class="height-40"></div>
    <div class="margin-49">

    <div class="order-status" v-for="item in orderData">
      <div class="orderStatus-title border-1px_bottom">
        <span>2017-5-13 10:15</span>
        <!--<p v-show="item.state==1">已完成</p>-->
        <!--<p v-show="item.state==2">待支付</p>-->
        <!--<p v-show="item.state==3">已取消</p>-->
        <p>已完成</p>
      </div>
      <div class="orderStatus-content border-1px_bottom">
        <div class="content-logo">
          <img width="60" height="60" src="./timg-@2x.png" alt="">
        </div>
        <div class="content-info">
          <p>黄金牧场<span>W8000</span></p>
          <p>골드 목장<span>X1</span></p>
        </div>
        <!--<div class="coupon-right-status">-->
        <!--&lt;!&ndash;<router-link to="/Order/orderStatus" v-show="item.state==1">&ndash;&gt;-->
        <!--&lt;!&ndash;<button>再次购买</button>&ndash;&gt;-->
        <!--&lt;!&ndash;</router-link>&ndash;&gt;-->
        <!--</div>-->
      </div>
      <div class="orderStatus-footer border-1px_bottom">
        <p class="orderStatus-footer-price"><span>w</span><span>8000</span></p>
        <p>合计(含运费):</p>
        <p>共<span>2</span>件商品</p>
      </div>
    </div>

    </div>
  </div>
</template>

<style scoped>
  @import "../../common/border-1px/border.css";
  @import "../../common/border-1px/media-border.css";

  .all-page{
    float: left;
    width: 100%;
    min-height: 100vh;
    background: #eeeeee;
  }
  .order-status{
    background: white;
    width: 100%;
  }
  .orderStatus-title{
    position: relative;
    height: 30px;
  }
  .orderStatus-title>span{
    display: inline-block;
    font-size: 10px;
    color: #969696;
    margin: 11px 0 11px 15px;
  }
  .orderStatus-title>p{
    position: absolute;
    top: 11px;
    right: 15px;
    color: #f96400;
    font-size: 11px;
  }
  .orderStatus-content{
    display: flex;
  }
  .content-logo{
    padding: 10px 15px;
    flex-grow:0;
  }
  .content-info{
    flex-grow:1;
  }
  .content-info>p:first-child{
    padding: 13px 0 7px 0;
    font-size: 12px;
    color: #505050;
  }
  .content-info>p>span{
    float: right;
    margin-right: 15px;
  }
  .content-info>p:nth-child(2){
    font-size: 11px;
    color: #969696;
  }
  .orderStatus-footer{
    height: 30px;
    font-size: 11px;
  }
  .orderStatus-footer>p{
    float: right;
  }
  .orderStatus-footer>p{
    font-size: 11px;
    color: #505050;
  }
  .orderStatus-footer>p:nth-child(3){
    margin-top: 10px;
  }
  .orderStatus-footer>p:nth-child(2){
    margin: 10px 6px 0 10px;
  }
  .orderStatus-footer-price{
    margin-top: 8px;
  }
  .orderStatus-footer-price>span:first-child{
    font-size: 10px;
    color: #f9bb00;
  }
  .orderStatus-footer-price>span:nth-child(2){
    font-size: 14px;
    color: #f9bb00;
    margin: 0 15px 0 2px;
  }


  /*.coupons-components{
    background: white;
    float: left;
    margin-bottom: 8px;
  }
  .coupons{
    position: relative;
    width: 100%;
    !*height: 80px;*!
  }
  .coupons-logo,.coupons-Introduction{
    float: left;
  }
  .coupon-right-status{
    position: relative;
  }
  .coupon-right-status>p{
    position: absolute;
    top: 15px;
    right: 15px;
    color: #f96400;
    font-size: 11px;
  }
  .coupon-right-status>a>button{
    position: absolute;
    right: 15px;
    top: 50px;
    width: 68px;
    height: 19px;
    color: #787878;
    background: white;
    border: 1px solid #c8c8c8;
    border-radius: 3px;
    font-size: 11px;
  }
  .coupons-logo{
    padding: 10px 15px;
  }
  .coupons-Introduction{
    padding: 14px 0;
    font-size:12px;
    color: #787878;
  }
  .coupons-Introduction>p:first-child{
    font-size: 13px;
    color: #505050;
  }
  .coupons-Introduction>p:nth-child(2){
    padding: 6px 0 12px;
  }
  .coupons-Introduction>p:nth-child(2)>span{
    color: #f9bb00;
    padding-left: 15px;
  }
  .coupons-Introduction>p:nth-child(3){
    font-size: 11px;
    color: #b4b4b4;
  }*/

</style>

<script type="text/ecmascript-6">

  export default{
    data(){
      return{
        list:[{state:1}],
        orderData:[]
      }
    },
    mounted(){
      this.$nextTick(function () {
        this.getOrderDatas();
      })
    },
    methods:{
      getOrderDatas(){
        let _this = this;
        _this.$http.get('/api/getUserOrderHistory',
          {params:{idx_user:1}}
        ).then((res)=>{
          _this.orderData = res.data;
          console.log(_this.orderData)
        },(err)=>{
          console.log(err);
        });
      }
    }
  };
</script>
