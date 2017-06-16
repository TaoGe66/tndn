<template>
<div class="shopping-page">
  <div class="nav">
    <div class="nav-textNumber">
      <span>购物车</span>
      <span>({{totalQuantity}})</span>
      <!--<span>({{cartDatas.length}})</span>-->
      <div class="shopping-page-router-order-me">
      </div>
    </div>
    <router-view></router-view>
  </div>
  <div class="shopping-page-height-40"></div>

  <div class="shopCart-Coupon" v-for="(item,index) in cartDatas">
    <div class="shopCartCoupon-box">
      <mt-cell-swipe :right="[{
        content: '删除',
        style: { background: 'red', color: '#fff', lineHeight:'5'},
      }]">
        <div class="shopCart-Coupon-box">
          <div class="shopCartCoupon-line">
            <div class="check_box" :class="{'checked':item.checked}" @click="selectProduct(item)">
            </div>
          </div>
          <div class="shopCartCoupon-logo">
            <img width="60" height="60" src="./timg1@2x.png" alt="">
          </div>
          <div class="shopCartCoupon-Introduction">
            <p>{{item.commodity_name}}</p>
            <p>规格：{{item.commodity_norm}}</p>
            <p><span>￥{{item.commodity_price}}</span></p>
          </div>
          <div class="addition-and-subtraction">
            <button  @click="changeMoney(item,-1)">-</button><input class="text-box" :value="item.commodity_quantity"/><button  @click="changeMoney(item,1)">+</button>
          </div>
        </div>
      </mt-cell-swipe>
      <div class="height-8"></div>
    </div>
  </div>

  <div class="shopping-page-height-40"></div>
  <div class="shopping-nav">
    <div class="border-1px_top">
      <div class="input-bottom">
        <div class="cart_item_box">
          <span class="shopping_all_check" :class="{'checked':allSelectBtn}" @click="allSelect()"></span><span>全选</span>
        </div>
      </div>
      <div class="router-pay">
        <router-link to="/pay">去结算({{totalPayQuantity}})</router-link>
      </div>
      <router-view></router-view>
      <div class="shopping-btn">
        <span>合计:</span><span>￥</span><span>{{totalMoney}}</span>
      </div>
    </div>
  </div>
  <div class="height-50"></div>
  <v-tab></v-tab>
</div>
</template>

<script type="text/ecmascript-6">
  import { CellSwipe } from 'mint-ui';
  import 'mint-ui/lib/cell-swipe/style.css'
  import mainNav from '../../components/commodityList/main-nav/main-nav.vue'

  export default{
    components:{
      'v-tab':mainNav
    },
    data(){
      return{
        totalPayQuantity:0,
        totalQuantity:0,
        totalMoney:0,
        cartDatas:[],
        allSelectBtn:false,
        cartDatas_id:''
      }
    },
    mounted(){
      this.$nextTick(function(){
        this.getCartDatas();
      })
    },
    methods:{

      vfr(){
        alert(123)
      },


      //获取数据
      getCartDatas(){
        let _this = this;
        _this.$http.get('/index/commodityPage').then((res)=>{
          _this.cartDatas = res.data;
          this.totalQuantity = _this.cartDatas.length
        },(err)=>{
          console.log(err);
        });
      },
      //加减数量
      changeMoney:(function(item,type){
        if(type>0){
          item.commodity_quantity++;
          this.totalQuantity++;
        }else{
          item.commodity_quantity--;
          this.totalQuantity--;
          if(item.commodity_quantity<1){
            item.commodity_quantity = 1;
            this.totalQuantity = this.cartDatas.length
          }
          if(this.totalQuantity<this.cartDatas.length){
            this.totalQuantity = this.cartDatas.length
          }
        }
        this.calTotalMoney();
        this.calTotalQuantity();
      }),
      //点击单选
      selectProduct:(function(item){
        if(typeof item.checked == "undefined"){
          this.$set(item,'checked',true);
        }else{
          item.checked = !item.checked;
        }
        this.calTotalMoney();
        this.calTotalQuantity();

        //全部选中则全选点亮，相反
        var allSelectBtn = true;
        this.cartDatas.forEach(function(value,index){
          allSelectBtn = allSelectBtn && value.checked;
        });
        this.allSelectBtn = allSelectBtn;
      }),
      //点击全选
      allSelect:(function(){
        this.allSelectBtn = !this.allSelectBtn;
//        this.allSelectBtn = flag;
        this.cartDatas.forEach((item,index)=>{
          if(typeof item.checked == "undefined"){
            this.$set(item,'checked',this.allSelectBtn);
          }else{
            item.checked = this.allSelectBtn;
          }
          this.calTotalMoney();
          this.calTotalQuantity();
        });

        //全部选中则全选点亮，相反
        var allSelectBtn = true;
        this.cartDatas.forEach(function(value,index){
          allSelectBtn = allSelectBtn && value.checked;
        });
        this.allSelectBtn = allSelectBtn;
      }),
      //计算总金额
      calTotalMoney:(function(){
        let _this = this;
        this.totalMoney = 0;
        this.cartDatas.forEach((item,index)=>{
          if(item.checked){
            _this.totalMoney += item.commodity_price*item.commodity_quantity;
          }
        });
      }),
      //计算结算总数量
      calTotalQuantity:(function(){
        let _this = this;
        _this.totalPayQuantity = 0;
        this.cartDatas.forEach((item,index)=>{
          if(item.checked){
            _this.totalPayQuantity += 1*item.commodity_quantity;
          }
        });
      })

    }
  };
</script>

<style>
  @import '../../../static/css/cart.css';
  @import "../../common/border-1px/border.css";
  @import "../../common/border-1px/media-border.css";

  .shopping-page{
    width: 100%;
    min-height: 100vh;
    background: #eeeeee;
  }
  .nav{
    position: fixed;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #3c3c3c;
    text-align: center;
    z-index: 99;
  }
  .shopping-page-router-order-me{
    position: absolute;
    top: 4px;
    left: 15px;
  }
  .nav-textNumber{
    font-size: 17px;
    font-family: pingfang;
    color: white;
  }
  .nav-textNumber>span:last-child{
    font-size: 16px;
  }
  .shopping-page-height-40{
    height: 40px;
  }
  .height-8{
    width: 100%;
    height: 8px;
    background: #eeeeee;
  }

  .shopCart-Coupon-box{
    height: 80px;
  }
  .shopCartCoupon-line,.shopCartCoupon-logo{
    float: left;
  }
  .shopCartCoupon-line{
    position: absolute;
    left: 0;
    top: 20px;
  }
  .shopCartCoupon-logo{
    position: absolute;
    top: 10px;
    left: 45px;
   }
  .shopCartCoupon-Introduction{
    position: absolute;
    top: 10px;
    left: 115px;
    color: #b4b4b4;
  }
  .shopCartCoupon-Introduction>p:first-child{
    font-size: 13px;
    color: #505050;
  }
  .shopCartCoupon-Introduction>p:nth-child(2){
    margin: 9px 0 10px 0;
    font-size: 12px;
  }
  .shopCartCoupon-Introduction>p:nth-child(3){
    font-size: 15px;
    color: #f9bb00;
  }

  .addition-and-subtraction{
    position: absolute;
    right: 15px;
    bottom: 10px;
    width: 90px;
    height: 22px;
    line-height: 22px;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    background: white;
    color: #787878;
    font-size: 15px;
    text-align: center;
  }
  .addition-and-subtraction>button:first-child{
    position: absolute;
    top: 0;
    left: 0;
    width: 22px;
    height: 22px;
    outline: none;
    line-height: 10px;
    font-size: 20px;
    background: white;
    border: none;
    border-right: 1px solid #e6e6e6;
  }
  .addition-and-subtraction>input{
    display: inline-block;
    width: 46px;
    color: #505050;
    text-align: center;
  }
  .addition-and-subtraction>button:nth-child(3){
    position: absolute;
    top: 0;
    right: 0;
    width: 22px;
    height: 22px;
    outline: none;
    font-size: 16px;
    background: white;
    border: none;
    border-left: 1px solid #e6e6e6;
  }
  /****************************************************/
  .shopping-nav{
    position: fixed;
    bottom: 49px;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: white;
  }
  .input-bottom{
    float: left;
  }
  .shopping-btn,.router-pay{
    float: right;
  }
  .input-bottom{
    margin-left: 17px;
  }
  .shopping-nav .shopping_all_check{
    position: absolute;
    top: 12px;
    left: 5px;
    display: block;
    width: 20px;
    height: 20px;
    background: url("./shop-icon.png") no-repeat;
    background-size: 50px 100px;
    background-position: 0 0;
    margin-left: 9px;
  }
  .shopping-nav .shopping_all_check.checked{
    background-position: -25px 0;
  }
  .cart_item_box>span:nth-child(2){
    display: inline-block;
    line-height: 40px;
    font-size: 14px;
    color: #505050;
    margin-left: 22px;
  }
  .shopping-btn>span:nth-child(1){
    font-size: 14px;
    color: #505050;
  }
  .shopping-btn>span:nth-child(2){
    font-size: 12px;
    color: #f8bc00;
    margin-left: 6px;
  }
  .shopping-btn>span:nth-child(3){
    font-size: 15px;
    color: #f8bc00;
  }
  .router-pay>a{
    display: inline-block;
    width: 100px;
    height: 40px;
    text-align: center;
    background: #f8bc00;
    color: white;
    font-size: 16px;
    font-family: pingfangBold;
    margin-left: 12px;
  }
</style>
