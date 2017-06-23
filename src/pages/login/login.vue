<template>
    <div>
      I`m Login page
    </div>
</template>

<script type="text/ecmascript-6">
    export default{
      created() {
        this.url = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa98e6fa0a6d50100&redirect_uri=http://www.tndnchina.cn/api/wechatRedirect&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect';

        this.login();
//        console.log(this.idx_user);
      },
      methods:{
        login(){
          window.location = this.url;
          alert(this.id);
          if(window.location = this.url){
            let storage=window.localStorage;
            let data={
              idx_user:15
            };
            let d=JSON.stringify(data);
            storage.setItem("data",d);
            //将JSON字符串转换成为JSON对象输出
            let json=storage.getItem("data");
            let jsonObj=JSON.parse(json);
            alert("进去了"+jsonObj.idx_user);
          }else {
            alert('没进去')
          }
          alert(jsonObj.idx_user);

        }
      }
    }
</script>

<style>

</style>
