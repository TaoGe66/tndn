<template>
  <div class="pay-result-pages">
    <div class="pay-nav">
      <div class="pay-title">
        <span>支付结果</span>
      </div>
      <p class="result-router-pay" onclick="window.history.go(-1)">完成</p>
    </div>

    <div class="result-yes border-1px_bottom">
      <img width="60" height="60" src="./gantan@2x.png" alt="">
      <p>支付失败</p>
    </div>
    <div class="height-8"></div>

    <!--<p class="border-1px_bottom pay-price"><span>订单信息</span></p>-->
    <!--<p class="border-1px_bottom pay-price"><span>请重新支付</span></p>-->

    <div class="border-1px_bottom">
      <div class="pay-result-user-info">
        <p class="info_content_title">订单信息</p>
        <p class="info_content">该订单会为你保留12个小时(从下单之日算起)，12小时之后如果还未付款，系统将自动取消订单</p>
        <router-link to="/pay" class="payColor1"><span>重新支付</span></router-link><router-link to="/all" class="payColor2"><span>查看订单</span></router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{}
</script>

<style scoped>
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
  .pay-result-user-info{
    background: white;
    padding: 17px 0 23px 15px;
    font-size: 12px;
    color: #787878;
    margin: 0 auto;
  }
  .pay-result-user-info>p{
    padding-bottom: 10px;
  }
  .info_content_title{
    font-size: 13px;
    color: #505050;
  }
  .info_content{
    line-height: 18px;
    padding-right: 15px;
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
