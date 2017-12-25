<template>
  <div class="login">
    <div class="login-wrap">
      <div class="login-logo"></div>
      <ul>
        <li class="login-li1">
          <span class="span1"></span>
          <input type="text" placeholder="请输入账号" v-model="username"/>
        </li>
        <li class="login-li2">
          <span class="span2"></span>
          <input type="password" placeholder="请输入密码" v-model="password"/>
        </li>
      </ul>
      <p class="list-btn ajax_btn" @click="login">登录</p>
      <p class="error"></p>
    </div>
  </div>
</template>

<script>
  import {login} from './../../service/getData'
  import { MessageBox } from 'mint-ui';

    export default {
      data(){
          return{
            username: "",
            password: ""
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
        login: function () {
          var _t = this;
          login({
            username: _t.username,
            password: _t.password
          }).then(res => {
            if(res.data.data.status == '0'){
              _t.$store.commit('getUserInfo',res.data.data);
              _t.$router.push({ name: 'home'})
            }else {
              MessageBox.alert(res.data.data.desc , '提示')
            }

          })
        }
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
