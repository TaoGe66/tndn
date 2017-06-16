<template>
  <div class="index-page">

    <!--nav-->
    <div class="index-nav">
      <div class="index-nav-title">
        <span>甜点乐购</span>
      </div>
    </div>
    <div class="height-40"></div>

    <!--背景图-->
    <div class="bg-img">
      <img src="./banner@2x.png" alt="">
    </div>

    <!--分类-->
    <div class="index-sort border-1px_bottom">
      <router-link class="item-sort" to="/index">
        <img width="44" height="60" src="./hantao@2x.png" alt="">
      </router-link>
      <router-link class="item-sort" to="/index/goods">
        <img width="44" height="60" src="./baojian@2x.png" alt="">
      </router-link>
      <router-link class="item-sort" to="/index/beauty">
        <img width="44" height="60" src="./liren@2x.png" alt="">
      </router-link>
      <router-link class="item-sort" to="/index/other">
        <img width="44" height="60" src="./qita@2x.png" alt="">
      </router-link>
    </div>

    <!--特惠周-->
    <div class="index-favorable border-1px_bottom border-1px_top">
      <!--<router-link to="/index/storePage">
        <div class="index-favorable-left-content">
          <span>约惠首尔</span><span>快去逛逛</span><img width="10" height="8" src="./gengduo@2x.png" alt="">
          <p>进店优惠享不停</p>
        </div>
        <div class="index-favorable-right-content">
          <img width="91" height="58" src="./购物袋@2x.png" alt="">
        </div>
      </router-link>-->
      <img src="./tu@2x.png" alt="">
    </div>

    <!--猜你喜欢-->
    <div class="index-coupon-love border-1px_bottom border-1px_top">
      <p>———<span>猜你喜欢</span>———</p>
    </div>
    <div class="commodity-float">
      <div v-for="item in filterCoupon">
        <router-link :to="'/index/commodityDetail'+item.id">
          <div class="coupons coupons-components border-1px_bottom clear">
            <div class="coupons-logo">
              <img width="60" height="60" src="./timg-@2x.png" alt="">
            </div>
            <div class="coupons-commodity-Introduction">
              <p>{{item.chn_title}}</p>
              <p>规格:<span>화장품1</span></p>
              <p>￥{{item.price}}</p>
            </div>
          </div>
      </router-link>
      </div>
    </div>
    <v-tab></v-tab>
  </div>
</template>

<script type="text/ecmascript-6">
  import mainNav from '../../components/commodityList/main-nav/main-nav.vue'

  export default{
    components:{
      'v-tab':mainNav
    },
    data(){
      return {
        commodityDatas:[]
      }
    },
    mounted(){
      this.$nextTick(function () {
        this.getData();
      })
    },
    computed:{
      filterCoupon:(function () {
        return this.commodityDatas.slice(0,4);
      })
    },
    methods:{
      getData(){
        let _this = this;
        _this.$http.get('/api/getGoodsList').then((res)=>{
          _this.commodityDatas = res.data;
//          console.log(_this.commodityDatas)
        },(err)=>{
          console.log(err);
        })
      }
    }
  };
</script>

<style>
  @import "../../common/border-1px/border.css";
  @import "../../common/border-1px/media-border.css";

  .index-page{
    width: 100%;
    min-height: 100vh;
    background: #eeeeee;
  }
  .index-nav{
    position: fixed;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #3c3c3c;
    z-index: 99;
    text-align: center;
  }
  .index-nav-title{
    font-size: 17px;
    font-family: pingfang;
    color: white;
  }
  .index-nav-scanning>img{
    position: absolute;
    top: 11px;
    right: 15px;
  }
  .bg-img{
    width: 100%;
    height: 120px;
  }
  .bg-img>img{
    display: block;
    width: 100%;
    height: 100%;
  }
  .index-sort{
    display: flex;
    width: 100%;
    background: white;
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
  }
  .item-sort{
    flex: 1;
    padding: 15px 0;
  }
  .index-favorable{
    width: 100%;
    margin-bottom: 6px;
  }
  .index-favorable>img{
    width: 100%;
  }
  /*.index-favorable{
    position: relative;
    background: white;
    height: 70px;
    margin-bottom: 8px;
  }
  .index-favorable-left-content{
    float: left;
    padding: 16px 0 16px 34px;
    font-size: 11px;
    color: #969696;
  }
  .index-favorable-left-content>span:first-child{
    color: #f98b00;
    font-size: 17px;
    font-weight: 800;
  }
  .index-favorable-left-content>span:nth-child(2){
    padding: 0 4px 0 15px;
    font-size: 12px;
  }
  .index-favorable-left-content>p{
    padding-top: 10px;
    font-size: 14px;
    color: #505050;
  }
  .index-favorable-right-content{
    float: right;
  }
  .index-favorable-right-content>img{
    margin: 12px 34px 0 0;
  }*/

  .index-coupon-love{
    background: white;
    text-align: center;
    font-size: 12px;
  }
  .index-coupon-love>p{
    color: #dcdcdc;
    padding: 12px 0;
  }
  .index-coupon-love>p>span{
    color: #969696;
    padding: 0 8px;
  }

  .commodity-float{
    width: 100%;
    float: left;
    margin-bottom: 49px;
  }
  .coupons-components{
    background: white;
    float: left;
  }
  .coupons{
    position: relative;
    width: 100%;
    height: 80px;
  }
  .coupons-logo,.coupons-commodity-Introduction{
    float: left;
  }
  .coupons-logo{
    padding: 10px 15px;
  }
  .coupons-commodity-Introduction{
    padding: 14px 0;
    font-size:12px;
    color: #787878;
  }
  .coupons-commodity-Introduction>p:first-child{
    font-size: 13px;
    color: #505050;
  }
  .coupons-commodity-Introduction>p:nth-child(3){
    color: #f9bb00;
  }
  .coupons-commodity-Introduction>p:nth-child(2){
    font-size: 11px;
    color: #b4b4b4;
    padding: 6px 0 12px;
  }
</style>
