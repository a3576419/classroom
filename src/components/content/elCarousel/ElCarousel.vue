<!--轮播图的使用-->
<!--1安装：npm i element-ui -S-->
<!--2导入：在main.js-->
<!--import ElementUI from 'element-ui'-->
<!--//import locale from 'element-ui/lib/locale/lang/en'-->
<!--Vue.use(ElementUI, { locale })-->
<!--//3引用css-->
<!--import 'element-ui/lib/theme-chalk/index.css';-->
<template>
    <el-carousel class="home_banner"  :interval="3000">
      <el-carousel-item v-for="item in imgList" :key="item.name">
        <img :src="item.src"  :title="item.title" />
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
            src: require("@/assets/img/banner/home_lunbo1.png"),
            title: "1"
          },
          {
            src: require("@/assets/img/banner/home_lunbo2.jpg"),
            title: "2"
          },
          {
            src: require("@/assets/img/banner/home_lunbo3.jpg"),
            title: "3"
          },
          {
            src: require("@/assets/img/banner/home_lunbo4.jpg"),
            title: "4"
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
  height:300px;
  width:100%;
  border-radius: 15px;
  margin: 0 auto;
}
</style>
