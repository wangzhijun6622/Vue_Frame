<template>
  <header class="head">
    <div class="back-header" @click="goBack"></div>
    <div class="title">考勤打卡</div>
  </header>
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
      goBack(){
        this.$router.go(-1)
      }
    }
  }
</script>
<style lang="scss" scope>
  @import '../../style/common';
  @import '../../style/mixin';

  .location{
    .back-header{
      width: 3rem;
      height:3rem;
      background-image: url("../../images/list-return.png");
      background-size: 100% 100%;
      position: absolute;
      left: 4px;
      top: 0;
    }
    header .title{
      display: block;
      line-height: 47px;
      text-align: center;
      font-size: 16px;
      color: #333333;
    }
    header.head{
      width: 100%;
      height: 47px;
      position: relative;
      border-bottom: 1px solid #f4f4f4;
    }
  }
</style>
