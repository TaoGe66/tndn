<template>
    <div class="order-status-page">
      <div class="address-nav">
        <div class="address-nav-textNumber">
          <span>订单详情</span>
          <div class="shopping-page-router-order-me">
            <router-link to="/all">
              <img width="21" height="18" src="./fanhui@2x.png" alt="">
            </router-link>
          </div>
        </div>
      </div>
      <div class="height-40"></div>

      <div class="order-status-title border-1px_bottom">
        <p>已完成</p>
        <span>您的订单已完成，欢迎下次光临</span>
      </div>
      <div class="height-8 border-1px_bottom"></div>


      <p class="padding30 padding-font border-1px_bottom">商品明细</p>
      <p class="padding30 border-1px_bottom"><span>味全每日C一百300ml</span><span class="bb">x1</span><span class="float-right aa">￥40</span></p>
      <p class="freight border-1px_bottom"><span>运费</span><span>￥10.00</span></p>
      <div class="height-8 border-1px_bottom"></div>

      <p class="padding30 padding-font border-1px_bottom"><span>支付方式 :</span><span class="float-right">微信支付</span></p>
      <p class="pay-order-price border-1px_top"><span>合计</span><span>(含运费)</span><span>￥40.00</span></p>
      <div class="height-8 border-1px_bottom"></div>

      <p class="padding30 padding-font border-1px_bottom">订单信息</p>
      <p class="padding30"><span>购买手机号 :</span><span class="padding20">12345678912</span></p>
      <p class="padding30 border-1px_bottom"><span>下单时间 :</span><span class="padding20-20">2017-06-24 14:26:44</span></p>
      <div class="height-8"></div>

      <div class="order-status-footer border-1px_top">
        <span>取消订单</span>
        <router-link to="/pay">立即支付</router-link>
      </div>
    </div>
</template>

<style>
  @import "../../common/border-1px/border.css";
  @import "../../common/border-1px/media-border.css";

  .order-status-page{
    width: 100%;
    min-height: 100vh;
    background: #eeeeee;
  }
  .order-status-title{
    padding: 17px 0 17px 15px;
    background: white;
    font-size: 13px;
    color: #969696;
  }
  .order-status-title>p{
    font-size: 17px;
    color: #f98100;
    margin-bottom: 11px;
  }
  .padding30{
    padding: 12px 0 12px 15px;
    background: white;
    font-size: 12px;
    color: #969696;
  }
  .order-status-footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 54px;
    background: white;
  }
  .order-status-footer>span{
    display: block;
    position: absolute;
    width: 82px;
    height: 26px;
    line-height: 26px;
    border: 1px solid #b4b4b4;
    border-radius: 3px;
    font-size: 13px;
    color: #787878;
    text-align: center;
    right: 107px;
    top: 14px;
  }
  .order-status-footer>a{
    position: absolute;
    width: 82px;
    height: 26px;
    line-height: 26px;
    border: 1px solid #f9bb00;
    border-radius: 3px;
    font-size: 13px;
    color: #f9bb00;
    text-align: center;
    right: 15px;
    top: 14px;
  }
  .float-right{
    float: right;
    margin-right: 15px;
  }
  .bb{
    margin-left: 40px;
  }
  .aa{
    font-size: 14px;
  }
  .padding20{
    padding-left: 10px;
  }
  .padding20-20{
    padding: 0 6px 0 10px;
  }

</style>

<script>
    export default{}
</script>
