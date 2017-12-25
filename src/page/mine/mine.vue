<template>
  <div class="mine">
    <header>
      <span style="text-align: center;">我</span>
    </header>
    <div class="shadowLine"></div>
    <div class="mineInfo">
      <div class="avatar"></div>
      <div class="nickName">11</div>
    </div>
    <div class="shadowLine"></div>
    <p class="orderTotal"><i class="mine_01"></i>修改密码<span><img src="../../images/44corner.png"></span></p>
    <p class="orderTotal"><i class="mine_02"></i>我的店铺<span><img src="../../images/44corner.png"></span></p>
    <p class="orderTotal"><i class="mine_03"></i>我的订单<span><img src="../../images/44corner.png"></span></p>
    <p class="orderTotal"><i class="mine_05"></i>盘货记录<span><img src="../../images/44corner.png"></span></p>
    <p class="orderTotal"><i class="mine_06"></i>我的业绩<span><img src="../../images/44corner.png"></span></p>
    <div class="shadowLine"></div>
    <p class="orderTotal report"><i class="mine_04"></i>统计报表<span><img src="../../images/44corner.png"></span></p>
    <router-link to="/">
      <p class="return"><span class="toLogin" >退出</span></p>
    </router-link>

    <footer>
      <router-link to="/home">
        <div>
          <p class="indexicon"></p>
          <p>首页</p>
        </div>
      </router-link>
      <router-link to="/mine">
        <div>
          <p class="mineicon"></p>
          <p class="minetext">我的</p>
        </div>
      </router-link>
    </footer>
  </div>
</template>

<script>
  import {login} from './../../service/getData'
  import { MessageBox } from 'mint-ui';

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
 .mine{
   height: 100%;
   font-size: 14px;
   background-color: white;
   header{
     width:100%;
     height: 47px;
     background: #fff;
     border-bottom: 1px solid #ededed;
     display: block;
     z-index: 1;
   }
   header span{
     width: 66px;
     display: block;
     line-height: 47px;
     position: absolute;
     left: 0;
     right: 0;
     margin: auto;
     font-size: 16px;
   }
   .orderTotal{
     position: fixed;
     left:0;
     top: 107px;
     height:50px;
     line-height: 50px;
     background-color: white;
     width: 100%;
     padding-left: 3%;
     padding-right: 3%;
     border-bottom: 1px solid #ededed;
     z-index: 1;
     text-align: left;
   }
   .orderTotal span{
     display: inline-block;
     float: right;
     color: red;
   }
   .orderTotal{
     position: initial;
     border-bottom: 1px solid #ededed;
     width: 100%;
     padding-right: 0;
   }
   .orderTotal.report{
     margin-top: 10px;
   }
   .orderTotal i{
     display: inline-block;
     width: 13px;
     height: 14px;
     font-style: normal;
     position: relative;
     top:1px;
     margin-right: 8px;
   }
   .orderTotal i.mine_01{
     background:url(../../images/sales/changepsw.png) no-repeat left bottom;
     background-size: contain;
   }
   .orderTotal i.mine_02{
     background:url(../../images/sales/mystore.png) no-repeat left bottom;
     background-size: contain;
   }
   .orderTotal i.mine_03{
     background:url(../../images/sales/myorder.png) no-repeat left bottom;
     background-size: contain;
   }
   .orderTotal i.mine_04{
     background:url(../../images/sales/staticrep.png) no-repeat left bottom;
     background-size: contain;
   }
   .orderTotal i.mine_05{
     background:url(../../images/sales/panrecord.png) no-repeat left bottom;
     background-size: contain;
   }
   .orderTotal i.mine_06{
     background:url(../../images/performance/user_results.png) no-repeat left bottom;
     background-size: contain;
   }
   .orderTotal span{
     color: #666;
   }
   .orderTotal span img{
     float: right;
     width: 24px;
     height: 24px;
     margin-top: 13.5px;
   }
   .shadowLine{
     height: 10px;
     background: #f4f4f4;
   }
   .mineInfo{
     margin-bottom: 10px;
     height: 100px;
     background: #fff;

   }
   .avatar{
     width: 70px;
     height:70px;
     float: left;
     margin: 16px;
     background: url(../../images/changepsw.png) no-repeat;
     background-size:302px 70px;
   }
   .avatar img{
     width: 100%;
     height: 100%;
     border-radius:50%;
   }
   .nickName{
     float: left;
     margin-top: 40px;
   }
   footer {
     position: fixed;
     bottom: 0;
     border-top: 1px solid #ededed;
     width: 100%;
     background: #fff;
     font-size: 12px;
   }
   footer div{
     float: left;
     width: 49%;
     text-align: center;
     height: 49px;
   }
   footer div p.indexicon{
     margin:8px auto 0;
     width: 10%;
     height: 20px;
     background: url(../../images/mine/mine_04.png) no-repeat center top;
     background-size:contain;
   }
   footer div p.mineicon{
     margin:8px auto 0;
     width: 10%;
     height: 20px;
     background:url(../../images/mine/mine_03.png) no-repeat center;
     background-size:contain;
   }
   footer div p.minetext{
     color: #fb7c1d;
   }
   /*return-返回登录页*/
   .return{
     height: 38px;
     text-align: center;
     background-color: white;
     padding-top: 60px;
   }
   .return span{
     display: inline-block;
     width: 60%;
     height: 38px;
     line-height: 38px;
     background-color: #f4f4f4;
     border-radius: 30px;
   }
 }
</style>
