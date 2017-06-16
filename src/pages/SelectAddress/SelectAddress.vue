<template>
    <div>
      <div class="pay-nav">
        <div class="pay-title">
          <span>选择地址</span>
        </div>
        <div class="router-pay-shoppingCart">
          <p onclick="window.history.go(-1)">
          <!--<router-link to="/pay">-->
            <img width="21" height="17" src="./返回@2x.png" alt="">
          <!--</router-link>-->
          </p>
        </div>
      </div>

      <router-link to="/pay/selectAddress">
        <div class="address-detail-component border-1px_top" v-for="(info,index) in infoAddress" @click="setDefault">
          <div class="height8"></div>
          <div class="border-1px_bottom">
            <div class="select-address-content">
              <span>{{info.name}}</span><span>{{info.contacts}}</span>
              <p>{{info.address_detail}}</p>
            </div>
            <div class="select-address-img">
              <img width="16" height="10" src="./gou@2x.png" alt="">
            </div>
          </div>
        </div>
      </router-link>
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
      data(){
        return{
          infoAddress:[],
          isDefault:false,
//          thisIndex:0
        }
      },
      mounted(){
        this.$nextTick(function () {
          this.getData();
        })
      },
      methods: {
        getData(){
          let _this = this;
          _this.$http.get('/api/getUserAddressList',
            {params: {idx_user: "1"}}
          ).then((res)=> {
            _this.infoAddress = res.data;
            console.log(_this.infoAddress)
          }, (err)=> {
            console.log(err);
          })
        },
        //设置默认地址
        setDefault(){
//          let thisIndex=0;
          this.infoAddress.forEach((info,index)=>{
//            if(index == info.id){
              console.log(info.id)
//              info.isDefault = true;
//            }else{
//              info.isDefault = false;
//            }
          })
        },
      }
    }
</script>

<style scoped>
  .select-address-content{
    margin: 0 51px 0 15px;
    padding: 12px 0;
    color: #505050;
    font-size: 13px;
  }
  .select-address-content>span:nth-child(2){
    float: right;
    padding-top: 2px;
    font-size: 12px;
    color: #969696;
  }
  .select-address-content>p{
    width: 100%;
    padding-top: 10px;
    font-size: 12px;
    color: #969696;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .select-address-img{
    position: absolute;
    right: 15px;
    top: 21px;
  }
</style>
