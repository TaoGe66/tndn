<template>
  <div class="commodityPage-page">

    <!--title-->
    <div class="index-nav">
      <div class="index-nav-title">
        <span>甜点优选</span>
      </div>
      <div class="shopping-page-router-order-me">
        <router-link to="/index">
          <img width="21" height="18" src="./fanhui@2x.png" alt="">
        </router-link>
      </div>
      <div class="shoppingCart-img">
        <img width="22" height="22" src="./gouwuche@2x.png" alt="">
        <div class="shoppingCart-prompt" v-show="isShow"><span>{{totalQuantity}}</span></div>
      </div>
    </div>
    <div class="height-40"></div>

    <!--list列表-->
    <div class="goods-float">
      <div v-for="item in commodityDatas">
        <div class="coupons coupons-components border-1px_bottom clear">
          <div class="coupons_width">
            <router-link :to="'/index/commodityDetail'+item.id">
              <div class="coupons-logo">
                <img width="60" height="60" :src="'http://www.tndnchina.cn/api/getImage?idx='+item.idx_image" alt="" v-show="item.idx_image!==null">
                <img width="60" height="60" src="./no404.png" alt="" v-show="item.idx_image==null">
              </div>
              <div class="coupons-commodity-Introduction">
                <p>{{item.chn_title}}</p>
                <p>{{item.kor_title}}</p>
                <p>￥{{item.price}}</p>
              </div>
            </router-link>
            <div class="coupon-addition-and-subtraction">
              <button @click="calTotalQuantity(item)">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .commodityPage-page{
    width: 100%;
    min-height: 100vh;
    background: #eeeeee;
  }

  .shoppingCart-img{
    position: absolute;
    height: 22px;
    top: 9px;
    right: 15px;
  }
  .shoppingCart-img>img{
    vertical-align: top;
  }

  .shoppingCart-prompt{
    position: absolute;
    top: -6px;
    right: -6px;
    width: 14px;
    height: 14px;
    line-height: 10px;
    border-radius: 50%;
    background: #f96400;
    text-align: center;
  }
  .shoppingCart-prompt>span{
    font-size: 10px;
    color: white;
  }

  .goods-float{
    width: 100%;
    float: left;
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
  .coupons_width{
    width: 83%;
    height: 80px;
  }
  .coupons_width>a{
    display: block;
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
    font-family: "Malgun";
  }
  .coupon-addition-and-subtraction{
    position: absolute;
    bottom: 15px;
    right: 15px;
    width: 20px;
    height: 20px;
  }
  .coupon-addition-and-subtraction>button{
    background: #f9bb00;
    color: white;
    border: none;
    border-radius: 3px;
    outline: none;
    width: 20px;
    height: 20px;
  }
  .goods-discount{
    position: absolute;
    right: 15px;
    top: 13px;
    width: 12px;
    height: 12px;
  }
</style>

<script type="text/ecmascript-6">

  export default{
    data(){
      return{
        totalQuantity:0,
        isShow:true,
        commodityDatas:[],
        cartDatas:[],
        goodsImage:[]
//        imgDatas:[]
      }
    },
    mounted(){
      this.$nextTick(function () {
        this.getData();
        this.getCartDatas();
        this.getImageDatas();
      })
    },
    methods:{
      //获取商品数据
      getData(){
        let _this = this;
        _this.$http.get('/api/getGoodsList',
          {params:{idx_goods_major_classification:"2"}}
        ).then((res)=>{
          _this.commodityDatas = res.data;
        },(err)=>{
          console.log(err);
        });
      },
      getImageDatas(id){
        let _this = this;
        _this.$http.get('/api/getImage',
          {params:{idx_goods:id}}
        ).then((res)=>{
          _this.goodsImage = res.data;
          console.log(_this.goodsImage)
        },(err)=>{
          console.log(err);
        })
      },
      //获取购物车数据
      getCartDatas(){
        let _this = this;
        _this.$http.get('/api/getCartItem',
          {params:{idx_user:1}}
        ).then((res)=>{
          _this.cartDatas = res.data;
          _this.totalQuantity = this.cartDatas.length;
        },(err)=>{
          console.log(err);
        });
      },

      //添加购物车
      calTotalQuantity:(function(item){
        let _this = this;
        var formData = new FormData();
        _this.totalQuantity += 1;
        formData.append('idx_user', '1');
        formData.append('idx_goods',item.id);
        _this.$http.post('/api/setCartItem',formData);
        this.showQuantity();
      }),

//      //子组件传值给父组件
//      allTotalQuantity: (function () {
//        this.totalQuantity += 1;
//        this.showQuantity();
//      }),

//      显示隐藏购物车数量红标
      showQuantity:(function(){
        if(this.totalQuantity===0){
          this.isShow = false
        }else {
          this.isShow = true
        }
      })
    }
  };
</script>
