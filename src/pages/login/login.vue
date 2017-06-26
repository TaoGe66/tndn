<template>
  <div>
    I`m Login page
  </div>
</template>
<script type="text/javascript">
function getUrlParams() {
  var params = {};
  window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) {
    params[key] = value;
  });
  return params;
}

export default {
  created() {
//      alert(JSON.stringify(getUrlParams()));
      if (getUrlParams().idx_user == undefined) {
//        alert('true');
        this.login();
        let storage = window.localStorage;
        let data = {
          idx_user: getUrlParams().idx_user,
          openid: getUrlParams().openid
        };
        let d = JSON.stringify(data);
        storage.setItem("data", d);
        //将JSON字符串转换成为JSON对象输出
        let json = storage.getItem("data");
        let jsonObj = JSON.parse(json);
        alert(jsonObj);
      } else {
        this.historyBack();
      }
    },
    methods: {
      login() {
        window.location = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxa98e6fa0a6d50100&redirect_uri=http://www.tndnchina.cn/api/wechatRedirect&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect';
      },
      historyBack() {
        history.go(-3);
      }
    }
}
</script>
<style>
</style>
