<template>
<div class="details-page">
  <div v-for="item in storeDatas">
    <div class="detail-commodity-img">
      <img width="100%" height="200" src="./meishitupian@2x.png" alt="">
    </div>
    <div class="detail-icon">
      <div class="detail-icon-img">
        <p onclick="window.history.go(-1)">
          <img width="16" height="14" src="./back@2x.png" alt="">
        </p>
      </div>
      <div class="detail-icon-number">
        <img width="14" height="16" src="./4-1@2x.png" alt="">
        <p>2</p>
        <span>4</span>
      </div>
    </div>
    <div class="detail-name border-1px_bottom">
      <p>{{item.store_china_name}}</p>
      <div class="detail-korea-name">
        <span>{{item.store_korea_name}}</span><span>人均价:</span><span>￥{{item.store_price}}</span><span>{{item.store_sort}}</span>
      </div>
    </div>
    <div class="detail-Merchant border-1px_bottom">
      <div class="detail-Merchant-GPS">
        <img width="11" height="15" src="./weizhi@2x.png" alt="">
        <div class="detail-Merchant-content">
          <p>{{item.store_address}}</p>
        </div>
      </div>
      <div class="detail-Merchant-phone">
        <img width="6" height="9" src="./fanhui@2x.png" alt="">
        <p class="border-1px_right_60"></p>
        <img width="13" height="16" src="./dianhua@2x.png" alt="">
      </div>
    </div>
    <div class="height-8 border-1px_top border-1px_bottom"></div>
    <div class="detail-store-info border-1px_bottom">
      <p>商家信息</p>
      <ul>
        <li><span>营业时间:</span><span>{{item.store_hours}}</span></li>
      </ul>
    </div>
    <div class="height-8 border-1px_top border-1px_bottom"></div>

    <div class="detail-store-info border-1px_bottom">
      <p>商家介绍</p>
      <span>{{item.store_introduce}}</span>
    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return {
//        cateGoodsAllData:[],
        storeDatas:[]
      }
    },
    mounted(){
      this.$nextTick(function(){
        this.fetchData(this.$route.params.id);
      })
    },
    watch:{
      $route(to){
        console.log(to);
        var reg=/storeDetail\/\d+/;
        if(reg.test(to.path)){
          var categotyId=this.$route.params.id || 0;
          this.fetchData(categotyId);
        }
      }
    },
    methods:{
      fetchData(id){
        var _this=this;
        _this.$http.get('/storeDetail',{
          params: {
            mId: id
          }
        }).then((res)=>{
          _this.storeDatas = res.data;
        },(err)=>{
          console.log(err);
        })
      }
    }
  }
</script>

<style>
  @import "../../common/border-1px/border.css";
  @import "../../common/border-1px/media-border.css";

.details-page{
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #eeeeee;
}
  .detail-commodity-img{
    height: 200px;
  }
  .detail-icon-img{
    left: 9px;
  }
  .detail-icon-number{
    right: 9px;
    color: white;
    font-size: 11px;
  }
  .detail-icon-img,.detail-icon-number{
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    top: 6px;
    background: rgba(0,0,0,0.4);
  }
  .detail-icon-img>p{
    margin: 7px 0 0 6px;
  }
  .detail-icon-number>img{
    position: absolute;
    margin: 6px 0 0 7px;
  }
  .detail-icon-number>p{
    position: absolute;
    left: 5px;
    top: 5px;
  }
  .detail-icon-number>span{
    position: absolute;
    right: 6px;
    bottom: 4px;
    color: #b4b4b4;
  }
  .detail-name{
    width: 100%;
    background: white;
    color: #505050;
    padding: 15px 0 15px 0;
  }
  .detail-name>p{
    font-size: 17px;
    padding-bottom: 12px;
    margin-left: 15px;
  }
  .detail-korea-name{
    position: relative;
    margin-left: 15px;
  }
  .detail-korea-name>span{
    font-size: 16px;
    color: #f98100;
  }
  .detail-korea-name>span:nth-child(2){
    padding: 0 5px 0 15px;
    color: #969696;
    font-size: 13px;
  }
  .detail-korea-name>span:nth-child(3){
    font-size: 15px;
    color: #f9bb00;
  }
  .detail-korea-name>span:nth-child(4){
    position: absolute;
    right: 15px;
    bottom: 0;
    color: #969696;
    font-size: 12px;
    margin-right: 15px;
  }
  .detail-store-info{
    padding: 12px 15px 12px 15px;
    background: white;
    font-size: 13px;
    color: #505050;
  }
  .detail-store-info>p{
    padding-bottom: 11px;
  }
  .detail-store-info>ul>li{
    list-style: inside;
  }
  .detail-store-info>ul>li>span,.detail-store-info>span{
    color: #969696;
    font-size: 12px;
    line-height: 18px;
  }
  .detail-store-info>ul>li>span:nth-child(1){
    padding: 0 9px 0 0;
  }
  .detail-price>p{
    float: left;
  }
  .detail-price>p>span:first-child{
    font-size: 18px;
    font-weight: 800;
    color: #f9bb00;
    margin: 0 2px 0 15px;
  }
  .detail-price>p>span:nth-child(2){
    font-size: 33px;
    font-weight: 600;
    letter-spacing: 2px;
    color: #f9bb00;
    margin: 0 16px 0 0;
  }
  .detail-price>p>span:nth-child(3){
    font-size: 12px;
    color: #b4b4b4;
    text-decoration: line-through;
  }
  .detail-addition-and-subtraction>span:first-child{
    display: inline-block;
    width: 27px;
    border-right: 1px solid #e6e6e6;
  }
  .detail-addition-and-subtraction>span:nth-child(2){
    display: inline-block;
    width: 48px;
    color: #505050;
  }
  .detail-addition-and-subtraction>span:nth-child(3){
    display: inline-block;
    width: 27px;
    border-left: 1px solid #e6e6e6;
  }
  .detail-Merchant-name>p{
    height: 30px;
    line-height: 30px;
    font-size: 13px;
    color: #b4b4b4;
    background: white;
    padding-left: 15px;
  }
  .detail-Merchant{
    height: 40px;
    background: white;
  }
  .detail-Merchant-GPS{
    float: left;
  }
  .detail-Merchant-phone{
    position: relative;
    float: right;
  }
  .detail-Merchant-GPS>img{
    margin: 13px 10px 0 15px;
    float: left;
  }
  .detail-Merchant-content{
    float: left;
  }
  .detail-Merchant-content>p{
    font-size: 13px;
    color: #969696;
    line-height: 40px;
  }
  .detail-Merchant-phone>img:first-child{
    display: block;
    float: left;
    margin: 15px 0 0 0;
  }
  .detail-Merchant-phone>p{
    float: left;
    margin: 0 15px;
  }
  .detail-Merchant-phone>img:last-child{
    display: block;
    float: right;
    margin: 13px 15px 0 0;
  }
</style>
