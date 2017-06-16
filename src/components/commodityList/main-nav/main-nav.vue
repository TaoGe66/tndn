<template>
  <div>
    <div class="footer">
      <router-link class="tab-item home" to="/index">
        <div class="images1">
        </div>
      </router-link>
      <router-link class="tab-item cart" to="/shoppingCart">
        <div class="images2">
        </div>
      </router-link>
      <router-link class="tab-item mine" to="/me">
        <div class="images3">
          <a href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa98e6fa0a6d50100&redirect_uri=http://www.tndnchina.cn/api/wechatRedirect&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect)"></a>
        </div>
      </router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
  export default {};
</script>

<style>

  .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    width: 100%;
    background: #303030;
    text-align: center;
    z-index: 99;
    overflow: hidden;
  }
  .tab-item{
    flex: 1;
    height: 49px;
  }
  .home .images1{
    width: 25px;
    height: 37px;
    background: url("./zhuye1@2x.png") no-repeat;
    background-size: contain;
    margin: 6px auto 0;
  }
  .tab-item.home.router-link-active .images1{
    background: url("./zhuye2@2x.png") no-repeat;
    background-size: contain;
    width: 25px;
    height: 37px;
  }
  .cart .images2{
    width: 32px;
    height: 37px;
    background: url("./gouwu@2x.png") no-repeat;
    background-size: contain;
    margin: 6px auto 0;
  }
  .tab-item.cart.router-link-active .images2{
    background: url("./gouwu1@2x.png") no-repeat;
    background-size: contain;
    width: 32px;
    height: 37px;
  }
  .mine .images3{
    width: 22px;
    height: 37px;
    background: url("./wode@2x.png") no-repeat;
    background-size: contain;
    margin: 6px auto 0;
  }
  .tab-item.mine.router-link-active .images3{
    background: url("./wode1@2x.png") no-repeat;
    background-size: contain;
    width: 22px;
    height: 37px;
  }
  .tab-item>img{
    margin-top: 6px;
  }
</style>
