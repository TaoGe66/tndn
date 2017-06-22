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
    }
</script>

<style>

</style>
