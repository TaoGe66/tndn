<template>
<div class="Merchandise-order border-1px_bottom">
  <div class="order-line">
    <div class="order-logo">
      <img width="65" height="65" src="./timg@2x.png" alt="">
    </div>
    <div class="order-Introduction">
      <p><span>新罗免税店</span><span>待付款</span></p>
      <p>专享回馈，消费金额满50元享9折优惠</p>
      <p>总价:￥40</p>
    </div>
    <div class="all-order-quantity">
      <router-link to="/index/detail">
        <span>再次购买</span>
      </router-link>
    </div>
    <!--<div class="payment-order-quantity">
      <router-link to="/pay">
        <span>立即付款</span>
      </router-link>
    </div>-->
  </div>
</div>
</template>

<script type="text/ecmascript-6">
    export default{}
</script>

<style>
  @import "../../../common/border-1px/border.css";
  @import "../../../common/border-1px/media-border.css";

  .order-line{
    width: 100%;
    height: 80px;
    font-size: 12px;
    background: white;
  }
  .order-logo{
    margin: 7px 10px 0 15px;
  }
  .order-Introduction{
    padding-top: 15px;
    color: #b4b4b4;
  }
  .order-Introduction>p:first-child{
    font-size: 13px;
    color: #505050;
    padding-bottom: 6px;
  }
  .order-Introduction>p>span:last-child{
    float: right;
    margin-right: 15px;
    font-size: 11px;
    color: #f96400;
    padding-bottom: 6px;
  }
  .order-Introduction>p:nth-child(3){
    margin-top: 11px;
  }
  .coupon-price>span{
    font-size: 13px;
    color: #f9bb00;
  }
  .all-order-quantity{
    position: absolute;
    width: 60px;
    height: 17px;
    line-height: 18px;
    text-align: center;
    right: 15px;
    bottom: 11px;
    font-size: 10px;
    border: 1px solid #f9bb00;
    border-radius: 10px;
    /*visibility: hidden;*/
  }
  .all-order-quantity>a>span,.payment-order-quantity>a>span{
    color: #f9bb00;
  }
</style>
