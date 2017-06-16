<template>
    <div class="store-page">
      <v-ProductShowcase></v-ProductShowcase>
      <div class="height-40"></div>
      <!--<keep-alive>-->
        <!--<component :is="coupon"></component>-->
        <v-coupon></v-coupon>
      <!--</keep-alive>-->

    </div>
</template>

<style>

  .store-page{
    width: 100%;
    min-height: 100vh;
    background: #eeeeee;
  }
  .height-40{
    height: 40px;
  }

</style>

<script type="text/ecmascript-6">
  import ProductShowcase from '../../components/commodityList/ProductShowcase/ProductShowcase.vue'
  import coupon from '../../components/commodityList/coupon/coupon.vue'

  export default{
    components:{
      'v-ProductShowcase':ProductShowcase,
      'v-coupon':coupon
    }
  };
</script>
