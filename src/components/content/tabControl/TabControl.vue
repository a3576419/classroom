<template>
  <div class="tab-control banxin">
<!--    logo部分-->
<!--    <div class="logo">-->
      <img src="~assets/img/home/logo.jpg" alt="">
      <h1>咚咚课堂</h1>

<!--    </div>-->
    <div v-for="(item,index) in titles"
         class="tab-control-item" :class="{active:index==currentIndex}" @click="itemclick(index,item)">
      <span>{{item}}</span>
    </div>
    <div class="head-right" >
      <router-link to="/login">登录</router-link>|
      <router-link to="/logup">注册</router-link>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      titles:{
          type:Array,
          default(){
            return[]
          }
      }
    },
    data(){
      return{
      currentIndex:0
      }
    },
    methods:{
      itemclick(index,item){
        switch (index){
            case 0:
              var url='home1'
            break;
            case 1:
              var url='jingpin1'
            break;
            case 2:
              var url='xianmian1'
            break;
            case 3:
              var url='kuajing'
            break;
        }
        this.$router.push('/'+url)
        this.currentIndex=index
        this.$emit('tabclick',index)
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    font-size: 18px;
    height: 40px;
    /*line-height:40px;*/
   background-color: white;
    /*justify-content: center;*/
    align-items: center;
    color: black;
  }
  .tab-control-item{
    padding-left: 30px;

  }
  .tab-control-item span{
    padding: 5px;
  }
  .active{
    color: #ff8198;
  }
  .active span{
    border-bottom: 3px solid pink;
    margin: 0 auto;
  }
  .tab-control img{
    width: 60px;
    height: 60px;
  }
  .tab-control h1{
    /*text-align: center;*/
    font-size: 25px;
  }
  .head-right{
    position: absolute;
    right: 20px;
  }
</style>
