<template>
<div class="details-page">
  <div>
    <div class="commodity-detail-bg-img" v-for="item in commodityDatas.goodsTopImage">
      <img width="100%" height="240" :src="'http://www.tndnchina.cn/api/getImage?idx='+item.idx_image_file" alt="">
      <div class="detail-icon-img">
        <p onclick="window.history.go(-1)">
          <img width="16" height="14" src="./fanhui3@2x.png" alt="">
        </p>
      </div>
    </div>

    <div v-for="item in commodityDatas.goodsInfo">
      <div class="commodity-detail-name border-1px_bottom">
        <div class="commodity-detail-price">
          <span>￥</span><span>{{item.price}}</span>
        </div>
        <p>{{item.chn_name}}</p>
      </div>
      <div class="height-8 border-1px_top border-1px_bottom"></div>

      <div class="commodity-detail-bg-img" v-for="item in commodityDatas.goodsDetailImage">
        <img width="100%" height="240" :src="'http://www.tndnchina.cn/api/getImage?idx='+item.idx_image_file" alt="">
      </div>

      <div class="detail-nav">
        <router-link to="/shoppingCart">
          <div class="detail-nav-img">
            <img width="22" height="22" src="./gouwuche@2x.png" alt="">
          </div>
        </router-link>
        <div class="detail-nav-router">
          <p @click="calTotalQuantity(item)">加入购物车</p>
          <div class="detail-router-pay" @click="shopSubmit(item)">
            <router-link to="/pay">
              立即购买
            </router-link>
          </div>
        </div>
        <div class="detail-prompt" v-show="isShow"><span>{{totalQuantity}}</span></div>
      </div>
      <div class="height80"></div>
    </div>

  </div>

</div>
</template>

<script type="text/ecmascript-6">
  import Bus from '../../assets/bus'

    export default{
      data(){
        return{
          cartDatas:[],
          isShow:true,
          totalQuantity:0,
          commodityDatas:[]
        }
      },
      mounted(){
        this.$nextTick(function(){
          this.getDatas(this.$route.params.id);
          this.getCartDatas();
        })
      },
      methods:{
        //获取数据
        getDatas(id){
          let _this = this;
          _this.$http.get('/api/getGoodsDetailInfo',
            {params:{idx_goods:id}}
          ).then((res)=>{
            _this.commodityDatas = res.data;
//            console.log(_this.commodityDatas)
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

//      显示隐藏购物车数量红标
        showQuantity:(function(){
          if(this.totalQuantity===0){
            this.isShow = false
          }else {
            this.isShow = true
          }
        }),

        //提交结算
        shopSubmit(item){
          let _this = this;
          var formData = new FormData();
          var quantity = 1;
          formData.append('idx_cart', item.id);
          formData.append('quantity', quantity);
          _this.$http.put('/api/updateCartItem', formData);
          _this.send(item);
        },
        //兄弟传递数据
        send(item){
          Bus.$emit('getGoods', item);
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
  .commodity-detail-bg-img{
    height: 240px;
  }
  .detail-icon-img{
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    left: 9px;
    top: 6px;
    background: rgba(0,0,0,0.4);
  }
  .commodity-detail-name{
    background: white;
    padding: 15px 0 15px 15px;
    color: #f9bb00;
    font-size: 32px;
  }
  .commodity-detail-price>span{
    font-size: 32px;
    font-weight: 600;
    letter-spacing: 2px;
  }
  .commodity-detail-price>span:first-child{
    font-size: 24px;
    font-weight: 800;
  }
  .commodity-detail-name>p{
    font-size: 13px;
    color: #505050;
    margin: 10px 0 0 3px;
  }
  .commodity-detail-form{
    background: white;
    font-size: 13px;
    color: #969696;
  }
  .commodity-detail-form>p{
    line-height: 30px;
    padding-left: 15px;
  }
  .commodity-detail-form>p>span{
    display: inline-block;
    width: 100px;
    height: 30px;
  }
  .commodity-detail-form>p>span:last-child{
    padding-left: 15px;
  }


  .commodity-description{
    padding: 12px 15px 12px 15px;
    background: white;
    font-size: 13px;
    color: #505050;
  }
  .commodity-description>p{
    padding-bottom: 11px;
  }
  .commodity-description>ul>li{
    list-style: inside;
  }
  .commodity-description>ul>li>span{
    color: #969696;
    font-size: 12px;
    line-height: 18px;
  }
  .commodity-description>ul>li>span:nth-child(1){
    padding: 0 9px 0 0;
  }




  .height-8{
    height: 8px;
  }

  .detail-nav{
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    height: 40px;
    line-height: 40px;
    background: #303030;
    color: white;
    text-align: center;
  }
  .detail-nav-img{
    float: left;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #f8bc00;
    margin-top: -6px;
    margin-left: 10px;
  }
  .detail-nav-img>img{
    margin-top: 9px;
  }
  .detail-nav-router{
    width: 84.2%;
    float: right;
    font-size: 16px;
  }
  .detail-nav-router>p{
    float: left;
    width: 50%;
    height: 40px;
  }
  .detail-router-pay{
    float: right;
    width: 50%;
    height: 40px;
    background: #f96400;
  }
  .detail-router-pay>a{
    color: white;
  }
  .detail-prompt{
    position: absolute;
    left: 37px;
    bottom: 35px;
    width: 15px;
    height: 15px;
    line-height: 12px;
    border-radius: 50%;
    background: #f96400;
    text-align: center;
  }
  .detail-prompt>span{
    font-size: 10px;
  }
  .height80{
    height: 54px;
  }
</style>
