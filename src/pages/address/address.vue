<template>
    <div class="address-page">
      <div class="address-nav">
        <div class="address-nav-textNumber">
          <span>我的地址</span>
          <div class="shopping-page-router-order-me">
            <router-link to="/me">
              <img width="21" height="18" src="./fanhui@2x.png" alt="">
            </router-link>
            <!--<p onclick="window.history.go(-1)">-->
              <!--<img width="21" height="18" src="./fanhui@2x.png" alt="">-->
            <!--</p>-->
          </div>
        </div>
      </div>
      <div class="height-40"></div>

      <!--addressDetail-->
      <div class="address-detail-component border-1px_top" v-for="(info,index) in infoDatas">
        <div class="border-1px_bottom">
          <div class="address-detail-content">
            <span>{{info.name}}</span>
            <span>{{info.contacts}}</span>
            <p>{{info.address_detail}}</p>
          </div>
        </div>
        <div class="address-detail-address border-1px_bottom">
          <div class="address-detail-delete" @click="toggle()">
            <img width="12" height="12" src="./shanchu@2x.png" alt=""><span>删除</span>
          </div>
          <router-link :to="'/me/address/modifyNewaddress'+info.id">
            <div class="address-detail-modify">
              <img width="12" height="12" src="./xiugai@2x.png" alt=""><span>修改</span>
            </div>
          </router-link>
        </div>
        <div class="height8"></div>

        <!--modal-->
        <div  class="modal-backup" v-show="hidden">
          <div class="modal">
            <div class="modal-dialog">
              <div class="modal-content">
                <!--model头部-->
                <div class="modal-header">
                  <p>确认删除吗？</p>
                </div>
                <div class="modal-footer">
                  <a @click="close()">取消</a>
                  <a @click="submit(info.id,index)">确认</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="address-newAddress">
        <router-link to="/me/address/newAddress">添加新地址</router-link>
      </div>
    </div>
</template>

<style>
  @import "../../common/border-1px/border.css";
  @import "../../common/border-1px/media-border.css";

  /*addressDetail*/
  .address-detail-component{
    background: white;
  }
  .height8{
    height: 8px;
    background: #eeeeee;
  }
  .address-detail-content{
    margin: 0 15px;
    padding: 12px 0;
    color: #505050;
    font-size: 13px;
  }
  /*.address-detail-content>span:nth-child(2){*/
    /*padding-left: 9px;*/
  /*}*/
  .address-detail-content>span:nth-child(2){
    float: right;
    padding-top: 2px;
    font-size: 12px;
    color: #969696;
  }
  .address-detail-content>p{
    padding-top: 10px;
    font-size: 12px;
    color: #969696;
  }
  .address-detail-address{
    background: white;
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    color: #969696;
  }
  .address-detail-modify,.address-detail-delete{
    float: right;
  }
  .address-detail-modify>span{
    padding: 0 10px 0 6px;
  }
  .address-detail-modify>img,.address-detail-delete>img{
    vertical-align: top;
    margin-top: 9px;
    padding-left: 11px;
  }
  .address-detail-delete>span{
    padding: 0 15px 0 6px;
  }

  /*header*/
  .address-page{
    width: 100%;
    min-height: 100vh;
    background: #eeeeee;
  }
  .address-nav{
    position: fixed;
    top: 0;
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
  .address-nav-textNumber{
    font-size: 17px;
    font-family: pingfang;
    color: white;
  }

  .height-48{
    height: 48px;
  }

  .address-newAddress{
    position: fixed;
    bottom: 0;
    z-index: 99;
    width: 100%;
    height: 44px;
    line-height: 44px;
    background: #f9bb00;
    text-align: center;
  }
  .address-newAddress>a{
    color: white;
    font-size: 17px;
  }

  /*modal*/
  .modal {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1001;
    -webkit-overflow-scrolling: touch;
    outline: 0;
  }
  .modal-dialog {
    position: absolute;
    left: 50%;
    top: 30%;
    transform: translate(-50%,0);
    width: 81%;
    height: 106px;
    background: #fff;
  }
  .modal-header{
    padding: 26px 0 15px 10px;
    color: #505050;
  }
  .modal-footer{
    padding: 0 0 5px 0;
  }
  .modal-footer>a{
    float: left;
    display: block;
    width: 44%;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border-radius: 3px;
    background: #c8c8c8;
    color: white;
    margin-left: 4%;
  }
  .modal-footer>a:last-child{
    background: #f96400;
  }
  .modal-backup {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.5);
    font-size: 15px;
  }

</style>

<script type="text/ecmascript-6">
  import Bus from '../../assets/bus.js';

    export default{
      data(){
        return {
          infoDatas:[],
          hidden:false,
        }
      },
      mounted(){
        this.$nextTick(function () {
          this.getData();
        })
      },
      methods:{
        //获取所有数据
        getData(){
          let _this = this;
          _this.$http.get('/api/getUserAddressList',
            {params: {idx_user:"1"}}
          ).then((res)=>{
            _this.infoDatas = res.data;
            console.log(_this.infoDatas)
          },(err)=>{
            console.log(err);
          })
        },

        /*//修改_兄弟组件传递数据
        modifyAddress(info){
//          console.log(info);
          Bus.$emit('getTarget',info);
        },*/

        //删除
        submit(id,index){
          let _this = this;
          _this.$http.delete('/api/deleteUserAddress',
            {params:{idx_address:id}}
          );
          _this.infoDatas.splice(id, 1);
          _this.infoDatas.splice(index, 1);
          console.log(id);
          console.log(index);
          _this.hidden=false;
        },

        //modal show
        toggle:function () {
          this.hidden=true;
        },
        //取消delete
        close:function () {
          this.hidden=false;
        }
      }
    }
</script>
