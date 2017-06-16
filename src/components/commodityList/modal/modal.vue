<template>
  <div  class="modal-backup" v-show="show">
    <div class="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <!--头部-->
          <div class="modal-header">
            <p>确认删除吗？</p>
          </div>
          <div class="modal-footer">
            <a @click="close()">取消</a>
            <a @click="submit()">确认</a>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  export default{
    data(){
      return {
        show:true
      }
    },
    methods:{
      close:function () {
        this.show=!this.show;
      },
      submit:function () {
        this.show=!this.show;
      }
    }
  }
</script>

<style>
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
