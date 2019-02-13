<template>
    <div class="thePersonalInformation">
      <ul class="title">
        <span>个人资料</span>
        <hr/>
      </ul>
      <ul class="center">
        <li>
        <span>头像</span>
          <img src="../../../assets/food/14meiweishiwu_01.png" height="128" width="128"/>
        </li>
      <li>
        <span>用户名</span>
        <span class="name">{{userName}}</span>
      </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "thePersonalInformation",
      data(){
          return{
            userName:'vue用着挺好的呀',
          }
      }
    }
</script>

<style scoped>
.thePersonalInformation{
  display: inline-block;
  float:left;
  text-align: left;
  width:100%;
}
  .title{
    list-style: none;
    display: inline-block;
    text-align: left;
    width:980px;
  }
  .title span{
    font-size:20px;
    font-weight: bold;
    color:#303133;
    margin:30px auto 20px 30px;
    display: inline-block;
  }
  .title hr{
    margin:0px 20px;
    background-color:#E4E7ED;
  }
  .center{
    display: inline-block;
    list-style: none;
    margin:20px auto auto 30px;
  }
  .center li{
    margin-bottom:30px ;
  }
  .center li span{
    display: inline-block;
    top:0px;
    float: left;
    margin: auto 10px;
  }
  .name{
    color:#606266;
  }
</style>
