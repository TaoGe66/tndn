<template>
  <div class="pay-result-pages">
    <div class="pay-nav">
      <div class="pay-title">
        <span>支付结果</span>
      </div>
        <p class="result-router-pay" onclick="window.history.go(-1)">完成</p>
    </div>

    <div class="result-yes border-1px_bottom">
      <img width="60" height="60" src="./duigou@2x.png" alt="">
      <p>支付成功</p>
    </div>
    <div class="height-8"></div>

    <p class="border-1px_bottom pay-price"><span>实付款 :</span><span>￥8888.00</span></p>

    <div class="border-1px_bottom">
      <div class="pay-result-user-info">
        <p>收货人 :<span>郭飞其</span></p>
        <p>手机号 :<span>12345678912</span></p>
        <p>收货地址 :<span>首尔市明洞街XX号</span></p>
        <router-link to="/all" class="payColor1"><span>查看订单</span></router-link><router-link to="/index" class="payColor2"><span>回到首页</span></router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
    export default{}
</script>

<style>
  @import "../../common/border-1px/border.css";
  @import "../../common/border-1px/media-border.css";

  .pay-nav{
    line-height: 40px;
  }
  .result-router-pay{
    position: absolute;
    right: 15px;
    top: 0;
    font-size: 15px;
    color: white;
  }
  .result-yes{
    background: white;
    padding: 14px;
    text-align: center;
    font-size: 16px;
    color: #505050;
  }
  .result-yes>p{
    margin-top: 11px;
  }
  .pay-price{
    text-align: center;
    padding: 21px;
    background: white;
    color: #505050;
  }
  .pay-price>span:last-child{
    color: #f96400;
    padding-left: 13px;
  }
  .pay-result-user-info{
    background: white;
    padding: 17px 0 23px 15px;
    font-size: 14px;
    color: #787878;
    margin: 0 auto;
  }
  .pay-result-user-info>p{
    padding-bottom: 10px;
  }
  .pay-result-user-info>p>span{
    padding-left: 10px;
  }
  .pay-result-user-info>a{
    display: inline-block;
    width: 135px;
    height: 35px;
    line-height: 35px;
    border-radius: 3px;
    font-size: 16px;
    text-align: center;
    margin: 13px 5px 0 5px;
  }
  .payColor1{
    color: #f9bb00;
    border: 1px solid #f9bb00;
  }
  .payColor2{
    color: #b4b4b4;
    border: 1px solid #c8c8c8;
  }


</style>
