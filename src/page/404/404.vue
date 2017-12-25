<template>
  <div>
    404没有找到页面
  </div>
</template>

<script>


  export default {
    data(){
      return{

      }
    },
    mounted(){

    },
    components: {
      MessageBox
    },
    computed: {

    },
    methods: {

    }
  }
</script>

<style lang="scss" scope>
  @import '../../style/common';
  @import '../../style/mixin';
  .login{
    /*背景*/
    @include fixall();
    .login-wrap{
      width:100%;
      height: 100%;
      background: url("../../images/bg_login.png");
      background-size: 100% 100%;
      overflow: hidden;
    }
    .login-logo{
      width: 100px;
      height: 100px;
      background-image: url("../../images/logo.png");
      background-size: 100% 100%;
      margin: 79px auto 0 auto;
    }
    ul{
      width: 86.9%;
      height:96px;
      background: #f0eeef;
      margin: 60px auto 0 auto;
      border-radius: 4px;
    }
    ul li{
      width: 80%;
      height:50%;
      margin:0 auto;
      position: relative;
    }
    .login-li1{
      border-bottom: 1px solid #ddd;
    }
    ul .span1{
      width:15px;
      height: 18px;
      display: block;
      background: url("../../images/user-pic.png");
      background-size: 100% 100%;
      float: left;
      margin-top: 14px;
    }
    ul .span2{
      width:15px;
      height: 18px;
      display: block;
      background: url("../../images/pass-pic.png");
      background-size: 100% 100%;
      float: left;
      margin-top: 14px;
    }
    ul input{
      border: none;
      background:#f0eeef ;
      margin-left:16px;
      width: 80%;
      height:97%;
      font-size: 16px;
    }
    .list-btn{
      width: 86%;
      height: 45px;
      border: 1px solid #f5760b;
      background: #f5760b;
      border-radius: 20px;
      margin-top: 40px;
      text-align: center;
      line-height: 45px;
      color: #fff;
      margin-left: 7%;
    }

    .error{
      text-align: center;
      color: red;
      font-weight: bold;
    }
  }
</style>
