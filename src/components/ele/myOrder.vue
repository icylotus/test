<template>
  <div class="myOrder">
    <div class="top">
      <place><a href="/#"><span>{{currentPlace}}</span></a></place>
      <ul class="currentLocation"><li><span class="el-icon-arrow-right"></span>{{currentLocation}}</li></ul>
    </div>
    <div class="main">
      <order-menu v-on:childByValue="childByValue" ></order-menu>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import place from '@/components/ele/place'
  import orderMenu from '@/components/ele/orderMenu'
    export default {
        name: "myOrder",
      data(){
        return {
          currentPlace:'共青城',
          currentLocation:'近三个月订单'
        }
      },
      components:{
        place:place,
        orderMenu:orderMenu
      },
      methods:{
        childByValue: function (childValue) {
          this.currentLocation=childValue;
        }
      }
    }
</script>

<style scoped>
  *{
    margin:0;
    padding:0;
  }
  body{
    background-color: #F2F6FC;
  }
  .myOrder{
    width:100%;
    height:100%;
    display: inline-block;
    background-color: #F2F6FC;
  }
  .currentLocation{
    list-style: none;
    display:inline-block;
    float: left;
    margin-top:20px;

  }
  .currentLocation li span{
    margin:auto 10px;
    display: inline-block;
    font-size:15px;
    color:#606266;
    font-weight: bold;
  }
  .currentLocation li{
    font-size: 13px;
    color:#303133;
  }
  .top{
    width:100%;
    display: inline-block;
  }
  .main{
    margin-top: 20px;
  }
  .right{
    float:right;
    border:1px solid #DCDFE6;
    margin-top: 20px;
    width:980px;
    min-height:800px;
    background-color: #FFF;
  }
</style>
