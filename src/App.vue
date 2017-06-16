<template>
  <div id="app">
    <!--<loading v-show="loading"></loading>-->
    <!--<keep-alive>-->
      <router-view></router-view>
    <!--</keep-alive>-->
  </div>

</template>

<script>
//  import {mapGetters,mapActions} from 'vuex';

  export default {
    name: 'app',
//    computed:mapGetters(['loading'])
  }
</script>

<style>
  html{
    font-size:16px;
  }
  #app {
    font-family: 'Avenir',Helvetica,Arial,sans-serif,malgun,pingfangBold,pingfang;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  @font-face {
    font-family: "pingfang";
    src: url('./assets/PINGFANG MEDIUM_0.ttf');
  }
  @font-face {
    font-family: "pingfangBold";
    src: url('./assets/PINGFANG BOLD_0.ttf');
  }
  @font-face {
    font-family: "malgun";
    src: url('./assets/malgun_0.ttf');
  }

</style>
