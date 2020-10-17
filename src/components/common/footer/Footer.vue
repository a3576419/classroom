<template>
<div class="footer">
  <table class="foot tonglan">
    <tr>
      <td>
        <a href="" style="margin-right: 30px">关于我们</a>|
        <a href="">联系我们</a>|
        <a href="">服务条款</a>
      </td>
    </tr>
    <tr>
      <td>
        <a>快乐课堂有限公司</a>|
        <a>0000000000000000 ©2019-2020 csdcloud.cn</a>

      </td>
    </tr>
  </table>

</div>
</template>

<script>
  export default {
    name: ""
  }
</script>

<style scoped>
  .footer{
    position: relative;

  }
  .foot{
    height: 200px;
    text-align: center;
    position: absolute;
    bottom: 0;
    background-color: #515151;
    color: white;
    font-size: 18px;
  }
  .foot a{
    color: white;
    margin: 30px;
  }
  .foot ul{
    display: inline;
  }

</style>
