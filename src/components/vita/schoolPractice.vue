<template>
  <div class="skillsCred">
    <ul class="tip">
      <li>
        校内实践
      </li>
    </ul>
    <ul class="info">
      <li >
        <pre>2017.11-2018.01    课程设计    图书管理系统</pre>
      </li>
      <li class="infoIntro">
        使用.net技术制作该系统，在项目中担任组长，与组员一同完成该系统。<br/>
        在开发过程中主要完成了软件功能及数据库的设计以及所用前后端的实现。
      </li>
      <li>
        <pre>2018.03-2018.06    课程设计    网上订餐系统</pre>
      </li>
      <li class="infoIntro">
        使用JavaEE技术制作该系统，在项目中担任组长，与组员一同完成该系统。<br/>
        该系统主要使用了struts2和Hibernate框架,在开发过程中主要完成了软件功能及数据库的设计以及所用前后端的实现。
      </li>
      <li>
        <pre> 2018.11-2018.12    课程设计    历史事件发布论坛</pre>
      </li>
      <li class="infoIntro">
        使用JavaEE技术制作该系统，在项目中担任组长，与组员一同完成该系统。<br/>
        该系统主要使用了struts2和Hibernate框架,在开发过程中主要完成了软件功能及数据库的设计以及所用前后端的实现。
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "schoolPractice"
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
  .skillsCred .info li pre{
    font-size:15px;
    font-weight: bold;
  }
  .skillsCred .info .infoIntro{
    margin-left: 150px;
  }
</style>
