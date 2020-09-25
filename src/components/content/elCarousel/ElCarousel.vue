
<template>
    <el-carousel class="home_banner"  :interval="1000">
      <el-carousel-item v-for="item in imgList" :key="item.name">
        <img :src="item.src"  alt="图片丢失了" :title="item.title" />
      </el-carousel-item>
    </el-carousel>
</template>

<script>
  import ElementUI from 'element-ui'
  export default {
    components: {},
    data() {
      return {
        imgList: [
          {
            name: "lj",
            src: require("@/assets/img/home/lunbo1.png"),
            title: "这是lj.png"
          },
          {
            name: "logo",
            src: require("@/assets/img/home/lunbo1.png"),
            title: "这是logo.png"
          },

        ]
      };
    },
    created() {},
    mounted() {},
    computed: {},
    methods: {}
  };
</script>

<style scoped>
.home_banner{
  width:100%;
  text-align: center;
}
.home_banner img{
  height:360px;
  width:100%;
  border-radius: 15px;
  margin: 0 auto;
}
</style>
