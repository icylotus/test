<template>
    <div class="overall">
      <div class="content">
        <ul class="tip">
          <li>
            个人简介
          </li>
        </ul>
        <div class="BasicInfo">
          <ul class="theImg"><img :src="imgSrc" height="400px"></ul>
          <ul class="info">
            <li>
              <span class="infoSpan">周进辉</span>
              ，男 ， 汉族 ， 江西临川人
            </li>
            <li style="color:#ED5C5C">求职意向:<span style="font-weight: bold;font-size: 18px;">web前端开发</span></li>
            <li>
              现在是应届毕业生，就读于 <span class="infoSpan">南昌大学高等职业技术学院</span>
            </li>
            <li>
              熟悉HTML、CSS，熟悉基本的JS、Jquery，能基础的使用vue框架。
            </li>
            <li>
               UI框架主要会使用element-ui和mint-ui
            </li>
            <li>
              email : <span class="infoSpan">2812707666@qq.com</span>
            </li>
            <li>
              QQ : <span class="infoSpan">2812707666</span>
            </li>
          </ul>
        </div>
        <edu-info>

        </edu-info>
        <skills-cred></skills-cred>
        <school-practice></school-practice>
        <award></award>
        <div class="bottom"></div>
      </div>
    </div>
</template>

<script>
  import eduInfo from './eduInfo'
  import skillsCred from './skillsCred'
  import schoolPractice from './schoolPractice'
  import award from './award'
  export default {
        name: "isMe",
      data(){
          return{
            imgSrc:require('../../assets/vita/me.png'),
          }
      },
      components:{
        eduInfo:eduInfo,
        skillsCred:skillsCred,
        schoolPractice:schoolPractice,
        award:award,
      }
    }
</script>

<style scoped>
*{
  margin: 0;
  padding:0;
}
  .overall{
    width:1200px;
    height:100%;
    background-color: #FFF;
    position:absolute;
    left:50%;
    margin-left: -600px;
  }
  .overall .tip{
    list-style: none;
    margin: 10px auto;
  }
  .overall .tip li{
    text-align: left;
    width:1000px;
    margin-left: 100px;
    font-size:20px;
    color:#69B9D6;
  }
  .overall .BasicInfo{
    width:100%;
    height:400px;
  }
  .overall .BasicInfo .theImg{
    height:400px;
    width:300px;
    margin-left: 100px;
    float: left;
  }
  .overall .BasicInfo .info{
    height:400px;
    width:400px;
    margin-left: 50px;
    list-style: none;
    float: left;
    text-align: left;
  }
  .overall .BasicInfo .info li{
    margin: 5px auto;
  }
  .overall .BasicInfo .info li .infoSpan{
    font-weight: bold;
  }
  .bottom{
    width:100%;
    height:100px;
  }
</style>
