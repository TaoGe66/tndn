<template>
<div class="me-page-bg">
  <router-link to="/all">
    <div class="about-us me-page-left border-1px_bottom">
      <img width="16" height="18" src="./dingdan)@2x.png" alt=""><span>我的订单</span>
      <img width="6" height="10" src="./fanhui2@2x.png" alt="">
    </div>
  </router-link>

  <router-link to="/me/address">
    <div class="tndn-secretary me-page-left border-1px_bottom margin-8">
      <img width="16" height="16" src="./dizhi@2x.png" alt=""><span>我的地址</span>
      <img width="6" height="10" src="./fanhui2@2x.png" alt="">
    </div>
  </router-link>

  <div class="tndn-secretary me-page-left border-1px_bottom">
    <img width="18" height="16" src="./kufu@2x.png" alt=""><span>甜点秘书</span>
    <img width="6" height="10" src="./fanhui2@2x.png" alt="">
  </div>
  <div class="about-us me-page-left border-1px_bottom">
    <img width="18" height="18" src="./guanyu@2x.png" alt=""><span>关于我们</span>
    <img width="6" height="10" src="./fanhui2@2x.png" alt="">
  </div>
  <div class="height-49"></div>
  <v-tab></v-tab>
</div>
</template>

<script type="text/ecmascript-6">
  import mainNav from '../../components/commodityList/main-nav/main-nav.vue'

  export default{
    components:{
      'v-tab':mainNav
    }
  };
</script>

<style>
  @import "../../common/border-1px/border.css";
  @import "../../common/border-1px/media-border.css";

  .me-page-bg{
    width: 100%;
    min-height: 100vh;
    background: #eeeeee;
  }

  .me-page-left{
    padding-left: 15px;
  }

  .tndn-secretary,.about-us{
    height: 44px;
    line-height: 44px;
    background: white;

  }
  .tndn-secretary>img{
    vertical-align: top;
    margin-top: 15px;
  }
  .tndn-secretary>span,.about-us>span{
    padding-left: 8px;
    font-size: 13px;
    color: #787878;
  }
  .about-us>img{
    vertical-align: top;
    margin-top: 13px;
  }
  .tndn-secretary>img:last-child,.about-us>img:last-child{
    float: right;
    margin: 15px 15px 0 0;
  }
  .height-49{
    height: 49px;
  }
  .margin-8{
    margin-bottom: 8px;
  }
</style>
