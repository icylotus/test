<template>
    <div class="eduInfo">
      <ul class="tip">
        <li>
          教育经历
        </li>
      </ul>
      <ul class="info">
        <li>
          2016.09-至今 南昌大学高等职业技术学院 软件技术
        </li>
        <li>
          课内主要学习课程:
        </li>
        <li class="infoClass">
          web前端设计、C语言程序设计、Java程序设计、JavaEE框架技术、操作系统、Linux操作系统、
        </li>
        <li class="infoClass">
          数据库原理、MySQL、计算机网络、软件测试、软件工程
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "eduInfo"
    }
</script>

<style scoped>
  .eduInfo{
    width:100%;
    height:auto;
  }
  .eduInfo .tip{
    list-style: none;
    margin: 10px auto;
  }
  .eduInfo  .tip li{
    text-align: left;
    width:1000px;
    margin-left: 100px;
    font-size:18px;
    font-weight: bold;
  }
  .eduInfo .info{
    list-style: none;
  }
  .eduInfo .info li{
    margin-left: 120px;
    text-align: left;
    margin-top: 10px;
  }
  .eduInfo .info .infoClass{
    margin-left: 150px;
  }
</style>
