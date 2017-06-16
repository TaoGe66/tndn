<template>
  <div class="coupon-overflow">
    <ul>
      <li v-for="item in storeDatas">
        <router-link :to="'/index/storeDetail'+item.store_id">
          <div class="coupons coupons-components border-1px_bottom clear">
            <div class="coupons-logo">
              <img width="60" height="60" src="./timg-@2x.png" alt="">
            </div>
            <div class="coupons-Introduction">
              <p>{{item.store_china_name}}</p>
              <p>{{item.store_korea_name}}<span>￥{{item.store_price}}</span>/人</p>
              <p><span>{{item.store_sort}}</span></p>
            </div>
            <div class="coupon-right-min"><span>1.7km</span></div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return {
        storeDatas:[],
        aaa:[]
      }
    },
//    created(){
//      this.getData();
//    },
    mounted(){
      this.$nextTick(function () {
        this.getData();
//        this.fetchData(this.$route.params.id);
      })
    },
    methods:{
      getData(){
        let _this = this;
        _this.$http.get('/index/storePage').then((res)=>{
          _this.storeDatas = res.data;
//          console.log(res.data)
        },(err)=>{
          console.log(err);
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../../common/border-1px/border.css";
  @import "../../../common/border-1px/media-border.css";

  .coupon-overflow{
    /*overflow: scroll;*/
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
  .coupons-logo,.coupons-Introduction{
    float: left;
  }
  .coupon-right-min{
    float: right;
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
