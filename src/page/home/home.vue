<template>
  <div class="home">
    <div class="wrap">
      <ul id="uList">
        <li class="index-shopCheck">
          <img src="../../images/100house.png" alt="" class="pic1" />
          <p class="des1">店铺审核</p>
        </li>
        <li class="index-relationShop">
          <img src="../../images/100code.png" alt="" class="pic2" />
          <p class="des2">关联店铺</p>
        </li>

        <li id="hrefKao">
          <img src="../../images/mine/mine_05.png" alt="" class="pic1" />
          <p class="des1">考勤打卡</p>
        </li>
        <li id="checkGoods">
          <img src="../../images/inventory_templates/stock_taking.png" alt="" class="pic1" />
          <p class="des1">盘货</p>
        </li>
        <li id="visit">
          <img src="../../images/visit/100visit.png" alt="" class="pic1" />
          <p class="des1">拜访</p>
        </li>
      </ul>
    </div>
    <footer>
      <router-link to="/home">
        <div>
          <p class="indexicon"></p>
          <p class="minetext">首页</p>
        </div>
      </router-link>
      <router-link to="/mine">
        <div id="hrefMine">
          <p class="mineicon"></p>
          <p>我的</p>
        </div>
      </router-link>

    </footer>
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
  .home{
    height: 100%;
    *{
      margin: 0px;
      padding: 0px;
    }
    input:focus{
      outline: none;
      -webkit-tap-highlight-color:rgba(0,0,0,0);
      -webkit-user-modify:read-write-plaintext-only;
    }
    ul,li{
      list-style: none;
    }
    body,html{
      width:100%;
      height: 100%;
      font-size: 16px;
    }
    .wrap{
      width:100%;
      height: 100%;
      font-size: 16px;
      background: url("../../images/bg.png") no-repeat;
      background-size: 100% 100%;
      position: relative;
    }
    .pic-return{
      float: right;
      text-align: right;
      width: 20%;
    }
    .list-return{
      width: 26px;
      margin-right: 13px;
      margin-top: 30px;
    }
    .wrap ul{
      width: 87.06%;
      height: 37.25%;
      position: absolute;
      top: 21%;
      left: 6.47%;
      display: flex;
      flex-flow: row wrap;
    }
    .wrap li{
      width: 50%;
      height: 50%;
      position: relative;
      border-bottom: 1px solid #ededed;
    }

    .border-none{
      border: none!important;
    }
    li img{
      position: absolute;
      left: 50%;
      top: 21.68%;
      margin-left: -25px;
      width: 50px;
      vertical-align: middle;
    }
    li p{
      text-align: center;
      margin-top: 50%;
    }
    footer {
      position: fixed;
      bottom: 0;
      border-top:1px solid #ededed;
      width: 100%;
      background: #fff;
      font-size: 12px;
    }
    /*footer:before{
        height: 1px;
        content: '';
        width: 100%;
        border-top: 1px solid #ddd;
        position: absolute;
        bottom: 49px;
        right: 0;
        transform: scaleY(0.5);
        -webkit-transform: scaleY(0.5);
        -o-transform: scaleY(0.5);
        -ms-transform: scaleY(0.5);
        -moz-transform: scaleY(0.5);
    }*/
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
      background:url(../../images/mine/mine_04_no.png) no-repeat center top;
      background-size:contain;
    }
    footer div p.mineicon{
      margin:8px auto 0;
      width: 10%;
      height: 20px;
      background:url(../../images/mine/mine_03_no.png) no-repeat center;
      background-size:contain;
    }
    footer div p.minetext{
      color: #fb7c1d;
    }

  }

</style>
