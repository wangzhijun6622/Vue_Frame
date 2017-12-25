<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <!--<mt-tabbar v-model="selected">-->
      <!--<mt-tab-item id="外卖">-->
        <!--<img slot="icon" src="./images/mine/mine_04_no.png">-->
        <!--首页-->
      <!--</mt-tab-item>-->

      <!--<mt-tab-item id="我的">-->
        <!--<img slot="icon" src="./images/mine/mine_04_no.png">-->
        <!--我的-->
      <!--</mt-tab-item>-->
    <!--</mt-tabbar>-->

  </div>
</template>

<script>
  import { Tabbar, TabItem } from 'mint-ui';
  import { mapGetters } from 'vuex'
  export default {
    name: 'app',
    data(){
      return{
      }
    },
    computed: {
      // 使用对象展开运算符将 getter 混入 computed 对象中
      ...mapGetters([
        'footBarStatus'
      ])
    }
  }
</script>

<style lang="scss" scope>
  @import "./style/common";
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;

}

.router-fade-enter-active, .router-fade-leave-active{
  transition: opacity .3s;
}

.router-fade-enter, .router-fade-leave-active{
  opacity: 0;
}

</style>
