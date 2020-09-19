<template>
<div class="jingpin">
<!--  图片-->
  <div class="jingpin-img">
    <img src="~assets/img/temporary/course_top_banner.png" alt="">
  </div>
  <table class="jingpin-tab banxin">
    <tr>
      <td>
        <table>
          <tr>
            <td><span>分类:</span></td>
            <td>
              <router-link to="/jingPin/all"      style="margin-left: 60px">全部</router-link>
              <router-link to="/jingPin/yingXiao" style="margin-left: 40px">电商营销</router-link>
              <router-link to="/jingPin/yaMaXun"  style="margin-left: 40px">亚马逊课程</router-link>
              <router-link to="/jingPin/kuaJing"  style="margin-left: 40px">跨境电商</router-link>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
<!--  <router-link to="/jingPin/all"      style="margin-left: 60px">全部</router-link>-->
<!--  <router-link to="/jingPin/yingXiao" style="margin-left: 40px">电商营销</router-link>-->
<!--  <router-link to="/jingPin/yaMaXun"  style="margin-left: 40px">亚马逊课程</router-link>-->
<!--  <router-link to="/jingPin/kuaJing"  style="margin-left: 40px">跨境电商</router-link>-->
  <router-view></router-view>
</div>
</template>

<script>
  export default {
    name: "JingPin"
  }
</script>

<style scoped>
  .jingpin-img{
    background-color: #e8ecf0;
  }
  img{
    width: 970px;
    height: 260px;
    display: block;
    margin: 0 auto;
  }
  .jingpin-tab{
    font-size: 23px;
  }
  .jingpin-tab .router-link-active {
    padding: 8px;
    font-weight: bold;
    color: mediumaquamarine;
  }

</style>
