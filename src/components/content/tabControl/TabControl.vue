<template>
  <div class="tab-control banxin">
    <span class="fenLei">分类:</span>
    <div v-for="(item,index) in titles"
         class="tab-control-item" :class="{active:index==currentIndex}" @click="itemclick(index)">
      <span>{{item}}</span>
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
      itemclick(index){
        this.currentIndex=index;
        // 把index传出去用来判断点击了哪个
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    font-size: 25px;
  }
  .fenLei{
    margin-right: 60px;
  }
  .tab-control-item{
    margin-right: 60px;
  }
  .active{
    font-weight: bold;
    color: mediumaquamarine;
  }

</style>
