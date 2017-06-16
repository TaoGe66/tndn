<template>
<div class="commodity-float">
  <div v-for="item in commodityDatas">

      <div class="coupons coupons-components border-1px_bottom clear">
        <router-link :to="'/index/commodityDetail'+item.commodity_id">
        <!--<router-link to="/index/commodityDetail">-->
          <div class="coupons-logo">
            <img width="60" height="60" src="./timg-@2x.png" alt="">
          </div>
          <div class="coupons-commodity-Introduction">
            <p>{{item.commodity_name}}</p>
            <p>规格:<span>{{item.commodity_norm}}</span></p>
            <p>￥{{item.commodity_price}}</p>
          </div>
        </router-link>
        <div class="coupon-addition-and-subtraction">
          <button  @click="calTotalQuantity()">+</button>
        </div>
      </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return {
        commodityDatas:[],
        totalQuantity:0
      }
    },
    mounted(){
//      this.$nextTick(function () {
//        this.getData();
//      })
    },
    methods:{
      //获取所有数据
//      getData(){
//        let _this = this;
//        _this.$http.get('/index/commodityPage').then((res)=>{
//          _this.commodityDatas = res.data;
//        },(err)=>{
//          console.log(err);
//        })
//      },

      //计算总数量
//      calTotalQuantity:(function(){
//        let _this = this;
////        this.totalQuantity = 1;
//        this.commodityDatas.forEach((item,index)=>{
//          if(item.checked){
//            _this.totalQuantity += 1;
//          }
//        });
//        this.$emit("calTotalQuantity")
//      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../../common/border-1px/border.css";
  @import "../../../common/border-1px/media-border.css";

  .commodity-float{
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
  }
/*******************************************/
</style>
