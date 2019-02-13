<template>
    <div class="skillsCred">
      <ul class="tip">
        <li>
          技能证书
        </li>
      </ul>
      <ul class="info">
        <li>
          二级C语言
        </li>
        <li>
          三级网络技术
        </li>
        <li>
          四级网络工程师
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "skillsCred"
    }
</script>

<style scoped>
  .skillsCred{
    width:100%;
    height:auto;
  }
  .skillsCred .tip{
    list-style: none;
    margin: 10px auto;
  }
  .skillsCred  .tip li{
    text-align: left;
    width:1000px;
    margin-left: 100px;
    font-size:18px;
    font-weight: bold;
  }
  .skillsCred .info{
    list-style: none;
  }
  .skillsCred .info li{
    margin-left: 120px;
    text-align: left;
    margin-top: 10px;
  }
</style>
