<template>
  <div class="pay-pages">
    <div class="pay-nav">
      <div class="pay-title">
        <span>确认支付</span>
      </div>
      <div class="router-pay-shoppingCart">
        <p onclick="window.history.go(-1)">
          <img width="21" height="17" src="./返回@2x.png" alt="">
        </p>
      </div>
    </div>

    <div class="pay-order border-1px_bottom">
      <div class="pay-order-logo">
        <img width="50" height="50" :src="'http://www.tndnchina.cn/api/getImage?idx='+infoOrder.idx_image" alt="">
      </div>
      <div class="pay-order-content">
        <h1>￥{{infoOrder.price}}</h1>
        <p>
          <span>{{infoOrder.chn_title}}</span><span>X{{infoOrder.quantity}}</span>
        </p>
      </div>
    </div>

    <p class="freight border-1px_top"><span>运费</span><span>￥10.00</span></p>
    <p class="pay-order-price border-1px_top"><span>合计</span><span>(含运费)</span><span v-model="total_price">￥40.00</span></p>

    <div class="height-8"></div>

    <router-link to="/pay/selectAddress">
      <div class="address-detail-component border-1px_top" v-for="info in filterAddress">
        <div class="border-1px_bottom">
          <div class="pay-address-detail-content">
            <span>{{info.name}}</span><span>{{info.contacts}}</span>
            <p>{{info.address_detail}}</p>
          </div>
          <div class="address-detail-component-img">
            <img width="6" height="10" src="./gengduo@2x.png" alt="">
          </div>
        </div>
        <div class="height8"></div>
      </div>
    </router-link>

    <div class="pay-weChat border-1px_bottom border-1px_top">
      <div class="weChat-logo">
        <img width="20" height="18" src="./weixin@2x.png" alt="">
      </div>
      <div class="weChat-text">
        <h1>微信支付</h1>
        <p>推荐安装微信5.0及以上版本的用户使用</p>
      </div>
      <div class="pay-select">
        <img width="11" height="8" src="./duigou@2x.png" alt="">
      </div>
    </div>
    <!--<router-link to="/pay/payResult">-->
    <!--<router-link to="/pay">-->
      <button class="pay-btn" @click="submitOrder()">
        <span>确认支付</span><span>￥40.0</span>
      </button>
    <!--</router-link>-->

  </div>
</template>

<script type="text/ecmascript-6">
  import Bus from '../../assets/bus'

    export default{
      data(){
        return{
//          info:[],
          infoAddress:[],
          infoOrder:[],
          weChatData:[],
          total_price:'40.00',
          idx_goods:'26',
          quantity:'1',
          chn_title:'test'
        }
      },
      computed:{
        filterAddress:(function () {
          return this.infoAddress.slice(0,1);
        })
      },
      created(){
        this.okUrl = 'http://www.tndnchina.cn/#/pay/payResult';
        this.failUrl = 'http://www.tndnchina.cn/#/pay/payFail';
       //接受_兄弟组件数据
       var _this = this;
       Bus.$on('getTarget',function(item){
         _this.infoOrder = item;
         console.log(_this.infoOrder)
       });
      },
      mounted(){
        this.$nextTick(function () {
          this.getAddressData();
//          this.getOrderData()
        })
      },
      methods:{
        //获取用户地址数据
        getAddressData(){
          let _this = this;
          _this.$http.get('/api/getUserAddressList',
            {params: {idx_user:"1"}}
          ).then((res)=>{
            _this.infoAddress = res.data;
          },(err)=>{
            console.log(err);
          })
        },
        //获取订单数据
        /*getOrderData(){
          let _this = this;
          _this.$http.get('/api/getUserAddressList',
            {params: {idx_user:"1"}}
          ).then((res)=>{
            _this.infoOrder = res.data;
          },(err)=>{
            console.log(err);
          })
        },*/

        //提交订单
        submitOrder(){
          let _this = this;
          var formData = new FormData();
          formData.append('idx_user', 2);
          formData.append('idx_goods', this.idx_goods);
          formData.append('quantity', this.quantity);
          formData.append('total_price', this.total_price);
          formData.append('chn_title', this.chn_title);
          formData.append('openid', "opX9IwdgHVHJ_WAF7VKVTx5V-f30");
          _this.$http.post('/pay/wechatSign', formData)
            .then((res)=>{
              _this.weChatData = res.data;
              console.log(_this.weChatData);
              this.callpay(_this.weChatData);
            },(err)=>{
              console.log(err);
            });
        },
        callpay(data){
        alert(typeof WeixinJSBridge == "undefined");
          if (typeof WeixinJSBridge == "undefined") {
            if (document.addEventListener) { document.addEventListener('WeixinJSBridgeReady', jsApiCall, false); } else if (document.attachEvent) {
              document.attachEvent('WeixinJSBridgeReady', jsApiCall);
              document.attachEvent('onWeixinJSBridgeReady', jsApiCall);
            }
          } else { this.jsApiCall(data); }
        },

        jsApiCall(data){
          WeixinJSBridge.invoke('getBrandWCPayRequest', {
            "appId": data.wechatpaySign.appId,
            "timeStamp": data.wechatpaySign.timeStamp,
            "nonceStr": data.wechatpaySign.nonceStr,
            "package": data.wechatpaySign.package,
            "signType": data.wechatpaySign.signType,
            "paySign": data.wechatpaySign.prepaySign
          }, function(res) {
            WeixinJSBridge.log(res.err_msg);
            alert(res.err_msg);
            if (res.err_msg == "get_brand_wcpay_request:ok") {
              window.location = this.okUrl;
            }else {
              window.location = this.failUrl;
            }
            console.log(res.err_code);
            console.log(res.err_desc);
            console.log(res.err_msg);
          });
        }


//          console.log(this.total_price);
//          console.log(this.idx_goods);
//          console.log(this.quantity)
//          _this.$http.post('/api/setOrder', {
//            idx_user:1,
//            total_price:'this.total_price',
//            idx_goods:'this.idx_goods',
//            quantity:'this.quantity'
//          });
      }
    }
</script>

<style>
  @import "../../common/border-1px/border.css";
  @import "../../common/border-1px/media-border.css";

.pay-pages{
 position: relative;
  min-height: 100vh;
  background: #eeeeee;
}

  .pay-title{
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #3c3c3c;
    text-align: center;
    font-size: 17px;
    color: white;
  }
  .router-pay-shoppingCart{
    position: absolute;
    top: 3px;
    left: 15px;
    outline: none;
  }

  .pay-order{
    position: relative;
    height: 50px;
    background: white;
    padding: 10px 30px 10px 15px;
  }
  .pay-order-logo,.pay-order-content{
    float: left;
  }
  .pay-order-logo>img{
    display: inline-block;
    border-radius: 50%;
    border: 1px solid #e6e6e6;
  }
  .pay-order-content{
    color: #505050;
    margin-left: 15px;
  }
  .pay-order-content>h1{
    font-size: 22px;
    font-family: pingfang;
    font-weight: 900;
    padding-bottom: 3px;
    margin: 6px 0 5px 0;
  }
  .pay-order-content>p{
    font-size: 11px;
    margin-left: 2px;
  }
  .pay-order-content>p>span:last-child{
    position: absolute;
    bottom: 14px;
    right: 15px;
  }

  .pay-weChat{
    width: 100%;
    height: 60px;
    font-size: 10px;
    background: white;
  }
  .weChat-logo,.weChat-text{
    float: left;
  }
  .weChat-logo{
    margin: 21px 20px 0 15px;
  }
  .weChat-text>h1{
    margin: 15px 0 7px 15px;
    font-size: 14px;
  }
  .weChat-text>p{
    margin-left: 15px;
    font-size: 10px;
    color: #969696;
  }
  .pay-select{
    float: right;
    width: 22px;
    height: 22px;
    line-height: 24px;
    margin: 19px 15px 0 0;
    border-radius: 50%;
    background: #f9bb00;
    text-align: center;
  }
  @media screen and (max-width: 320px){
    .weChat-text{
      margin-left: -20px;
    }
  }
  .pay-btn{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 50px;
    width: 290px;
    height: 50px;
    line-height: 50px;
    border: none;
    outline: none;
    border-radius: 5px;
    background: #f9bb00;
    color: white;
    text-align: center;
    margin: 0 auto;
  }
  .pay-btn>span{
    font-size: 19px;
  }
  .pay-btn>span:last-child{
    font-size: 28px;
    margin-left: 9px;
  }
  .pay-order-price{
    width: 100%;
    height: 38px;
    line-height: 38px;
    font-size: 14px;
    background: white;
    color: #505050;
  }
  .pay-order-price>span:first-child{
    margin-left: 15px;
  }
  .pay-order-price>span:nth-child(2){
    margin-left: 5px;
    font-size: 13px;
  }
  .pay-order-price>span:last-child{
    float: right;
    margin-left: 6px;
    color: #f98b00;
    padding-right: 15px;
    font-size: 16px;
  }
  .freight{
    background: white;
    color: #505050;
    font-size: 13px;
    padding: 13px 0;
  }
  .freight>span:first-child{
    margin-left: 15px;
  }
  .freight>span:last-child{
    float: right;
    padding-right: 15px;
    padding-left: 10px;
  }

  .pay-address-detail-content{
    margin: 0 15px;
    padding: 12px 0;
    color: #505050;
    font-size: 13px;
  }
  .pay-address-detail-content>span:nth-child(2){
    padding-top: 2px;
    padding-left: 15px;
    font-size: 12px;
    color: #969696;
  }
  .pay-address-detail-content>p{
    padding-top: 10px;
    font-size: 12px;
    color: #969696;
  }
  .address-detail-component-img{
    position: absolute;
    right: 15px;
    top: 21px;
  }
</style>
