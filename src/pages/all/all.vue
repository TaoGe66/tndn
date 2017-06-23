<template>
  <div class="all-page">
    <!--订单title-->
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

    <!--订单list-->
    <div class="order-status" v-for="item in orderData">
      <div class="orderStatus-title border-1px_bottom">
        <span>{{item.insert_date}}</span>
        <p v-show="item.pay_status==1">已完成</p>
        <p v-show="item.pay_status==0">待支付</p>
        <p v-show="item.pay_status==2">已取消</p>
        <!--<p>已完成</p>-->
      </div>
      <div class="orderStatus-content border-1px_bottom" v-for="item in orderData.data">
        <div class="content-logo">
          <img width="60" height="60" :src="'http://www.tndnchina.cn/api/getImage?idx='+item.idx_image" alt="">
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
        <p class="orderStatus-footer-price"><span>w</span><span>{{item.total_price}}</span></p>
        <p>合计(含运费):</p>
        <p>共<span>2</span>件商品</p>
      </div>
      <div class="height8 border-1px_bottom"></div>
    </div>

    <!--没有订单show-->
    <div class="noOrder" v-show="noOrderShow">
      <div class="noOrderImg">
        <img width="90" height="93" src="./wudingdan@2x.png" alt="">
      </div>
      <p>您还没有相关订单</p>
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

  .noOrder{
    position: absolute;
    left: 0;
    right: 0;
    top: 36%;
    width: 100%;
  }
  .noOrderImg>img{
    display: block;
    padding-bottom: 35px;
    margin: auto;
  }
  .noOrder>p{
    text-align: center;
    color: #b4b4b4;
    font-size: 16px;
  }

</style>

<script type="text/ecmascript-6">

  export default{
    data(){
      return{
        list:[{state:1}],
        orderData:[],
        noOrderShow:true
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
          console.log(_this.orderData);
          if(_this.orderData.length===0){
            this.noOrderShow = true;
          }else {
            this.noOrderShow = !this.noOrderShow;
          }
        },(err)=>{
          console.log(err);
        });
      }
    }
  };
</script>
