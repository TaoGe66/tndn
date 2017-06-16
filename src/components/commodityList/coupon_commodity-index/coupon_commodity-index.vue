<template>
<div class="commodity-float">
  <div v-for="item in filterCoupon">
      <div class="coupons coupons-components border-1px_bottom clear">
        <router-link :to="'/index/commodityDetail'+item.commodity_id">
          <div class="coupons-logo">
            <img width="60" height="60" src="./timg-@2x.png" alt="">
          </div>
          <div class="coupons-commodity-Introduction">
            <p>{{item.commodity_name}}</p>
            <p>规格:<span>{{item.commodity_norm}}</span></p>
            <p>￥{{item.commodity_price}}</p>
          </div>
        </router-link>
      </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
  export default{
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
        },(err)=>{
          console.log(err);
        })
      },
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
/*******************************************/
  .commodity-addition-and-subtraction{
    position: absolute;
    right: 15px;
    bottom: 10px;
    width: 115px;
    height: 30px;
    line-height: 30px;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    background: white;
    color: #787878;
    font-size: 15px;
    text-align: center;
  }
  .commodity-addition-and-subtraction>button:first-child{
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    outline: none;
    font-size: 25px;
    background: white;
    border: none;
    border-right: 1px solid #e6e6e6;
  }
  .commodity-addition-and-subtraction>input{
    display: inline-block;
    width: 38px;
    color: #505050;
    text-align: center;
  }
  .commodity-addition-and-subtraction>button:nth-child(3){
    position: absolute;
    top: 0;
    right: 0;
    width: 30px;
    height: 30px;
    outline: none;
    font-size: 20px;
    background: white;
    border: none;
    border-left: 1px solid #e6e6e6;
  }
</style>
