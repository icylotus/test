<template>
  <div class="award">
    <ul class="tip">
      <li>
        奖项荣誉
      </li>
    </ul>
    <ul class="info">
      <li >
        <pre>2017.02    南昌大学高等职业技术学院    获一等优秀奖学金</pre>
      </li>
      <li >
        <pre>2017.09    南昌大学高等职业技术学院    获一等优秀奖学金</pre>
      </li>
      <li >
        <pre>2018.02    南昌大学高等职业技术学院    获一等优秀奖学金</pre>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "award"
    }
</script>

<style scoped>
  .award{
    width:100%;
    height:auto;
  }
  .award .tip{
    list-style: none;
    margin: 10px auto;
  }
  .award  .tip li{
    text-align: left;
    width:1000px;
    margin-left: 100px;
    font-size:18px;
    font-weight: bold;
  }
  .award .info{
    list-style: none;
  }
  .award .info li{
    margin-left: 120px;
    text-align: left;
    margin-top: 10px;
  }
  .award .info li pre{
    font-size:15px;
    font-weight: bold;
  }
</style>
