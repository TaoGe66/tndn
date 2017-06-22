<template>
    <div>
      I`m Login page
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
      created() {
        this.url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa98e6fa0a6d50100&redirect_uri=http://www.tndnchina.cn/api/wechatRedirect/#/shoppingCart&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect';
//        this.url = 'https://www.baidu.com';

        this.login();
//        console.log(this.idx_user);
      },
      methods:{
        login(){
          window.location = this.url;
          alert(this.id);
          /*if(window.location = this.url){
            var storage=window.localStorage;
            var data={
              idx_user:this.id
            };
            var d=JSON.stringify(data);
            storage.setItem("data",d);
            //将JSON字符串转换成为JSON对象输出
            var json=storage.getItem("data");
            var jsonObj=JSON.parse(json);
            alert("进去了"+jsonObj.idx_user);
          }else {
            alert('没进去')
          }
          alert(jsonObj.idx_user);*/

        }
      }





        /*************************************************************/
        /*if(localStorage.getItem("userId")){
          this.login();
          //如果sessionStorage中有userid,执行login
        } else if(this.$store.state.code){
          //如果只是有code
          let _self = this;
          //发请求，用code换token
          this.$axios({
              method: 'post',
              url: this.baseURL + "/login",
              data: {
                code: this.$store.state.code
              }
            })
            .then(function(response){
              //token和登录状态先保存在sessionStorage里
//              sessionStorage.setItem("token",response.data.token);
              sessionStorage.setItem("userId",response.data.idx_user);
            })
            .catch(function(error){
              console.log(error);
            })
        }
        else{
          let self=this;
          if (self && !self._isDestroyed) {
            //如果失败了还是弹二维码
            window.location = self.url;
          }
        }
      }*/
    }
</script>

<style>

</style>
