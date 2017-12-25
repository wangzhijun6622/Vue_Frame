<template>
  <div class="location">
    <div class="fix">
      <header class="head">
        <div class="back-header" @click="goBack"></div>
        <div class="title">考勤打卡</div>
      </header>
    </div>
    <div class="content">
      <div class="date" :class='{ blue:styleCount }'>
        <div>{{formatDay}}</div>
        <div>{{formatDate}}</div>
      </div>
      <div class="text ellipsis">
        <span @click="refresh" class="refresh">刷新</span>
        <div class="location-name">当前位置</div>
        <div>{{pointName}}</div>

        <div class="location-l">经纬度</div>
        <div>{{lat}},{{lng}}</div>
      </div>
      <div class="sign" v-if="style!==''">
        <div class="circle" v-if='style === 0' @click="signIn" >
          <div class="circle-m">
            <div class="sign-in">签到</div>
            <div class="sign-time">{{showSecond}}</div>
          </div>
        </div>
        <div class="circle" v-else-if='style === 1' @click="signOut" :class='{ circleBlue:styleCount }'>
          <div class="circle-m" :class='{ blue:styleCount }'>
            <div class="sign-in">签退</div>
            <div class="sign-time">{{showSecond}}</div>
          </div>
        </div>
        <div class="already-sign" v-else-if='style === 3'>当前时间不可{{status}}，{{status}}时间：{{start_time}}--{{end_time}}</div>
        <div class="already-sign" v-else>今日已完成打卡明天再来吧~</div>
      </div>

    </div>
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

  .location{

  }
</style>
