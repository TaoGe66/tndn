<template>
    <div class="address-detail-component border-1px_top">
      <div class="border-1px_bottom">
        <div class="address-detail-content">
          <span>郭飞琪</span><span>女士</span>
          <span>010-12345678</span>
          <p>昊海楼地下一楼</p>
        </div>
      </div>

      <div class="address-detail-address border-1px_bottom">
        <div class="address-detail-delete" @click="toggle()">
          <img width="12" height="12" src="./shanchu@2x.png" alt=""><span>删除</span>
        </div>

        <modal v-show="hidden"></modal>

        <router-link to="/me/address/modifyNewaddress">
          <div class="address-detail-modify">
            <img width="12" height="12" src="./xiugai@2x.png" alt=""><span>修改</span>
          </div>
        </router-link>
      </div>
      <div class="height8"></div>
    </div>
</template>

<style>
  @import "../../../common/border-1px/border.css";
  @import "../../../common/border-1px/media-border.css";

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
  .address-detail-content>span:nth-child(2){
    padding-left: 9px;
  }
  .address-detail-content>span:nth-child(3){
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
</style>

<script type="text/ecmascript-6">
  import modal from '../../../components/commodityList/modal/modal.vue'

    export default{
      components:{
        'modal':modal
      },
      data(){
        return {
            hidden:false
        }
      },
      methods:{
        toggle:function () {
          this.hidden=true;
        }
      }
    };
</script>
