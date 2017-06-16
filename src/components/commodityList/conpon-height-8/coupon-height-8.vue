<template>
  <div>
    <div class="coupons coupons-components border-1px_bottom clear" v-for="item in list">
      <div class="coupons-logo">
        <img width="60" height="60" src="./timg-@2x.png" alt="">
      </div>
      <div class="coupons-Introduction">
        <p>黄金牧场</p>
        <p>골드 목장<span>￥40</span>/人</p>
        <p><span>烤肉</span></p>
      </div>
      <div class="coupon-right-status">
        <!--<p>已完成</p>-->
        <!--<p v-if="noAStock()">{{item.state}}</p>-->
        <p v-show="item.state==1">已完成</p>
        <p v-show="item.state==2">待支付</p>
        <router-link to="/Order/orderStatus" v-show="item.state==1">
          <button>再次购买</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default{
  data(){
    return{
      list:[{
        state:1
      }]
    }
  },
  methods:{

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../../common/border-1px/border.css";
  @import "../../../common/border-1px/media-border.css";

  .coupons-components{
    background: white;
    float: left;
    margin-bottom: 8px;
   }
  .coupons{
    position: relative;
    width: 100%;
    height: 80px;
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
  }
</style>
