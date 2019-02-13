<template>
    <div class="orderMenu" :class="active">
      <ul>
        <span class="el-icon-view" style="color: #606266; margin-left:0;"></span>
        <router-link class="center" to="theMyCenter" @click.native ="childClick('个人中心','center')">个人中心</router-link>
      </ul>
      <ul>
        <span class="el-icon-document" style="color:#606266;margin-left:0;"></span><span>我的订单</span>
        <li><router-link class="order" to="theOrder"  @click.native ="childClick('近三个月订单','order')">近三个月订单</router-link></li>
      </ul>
      <ul>
        <span class="el-icon-circle-close-outline" style="color:#606266;margin-left:0;"></span><span>我的资产</span>
        <li><router-link class="envelope" to="theRedEnvelope" @click.native ="childClick('我的红包','envelope')">我的红包</router-link></li>
        <li><router-link class="balance" to="theAccountBalance"  @click.native ="childClick('账户余额','balance')">账户余额</router-link></li>
        <li><router-link class="gold" to="theGold"  @click.native ="childClick('我的金币','gold')">我的金币</router-link></li>
      </ul>
      <ul>
        <span class="el-icon-info" style="color:#606266;margin-left:0;"></span><span>我的资料</span>
        <li><router-link class="information" to="thePersonalInformation" @click.native ="childClick('个人资料','information')">个人资料</router-link></li>
        <li><router-link class="management" to="theAddressManagement"  @click.native ="childClick('地址管理','management')">地址管理</router-link></li>
      </ul>
      <ul>
        <span class="el-icon-star-off" style="color:#606266;margin-left:0;"></span>
        <router-link class="collection" @click.native ="childClick('我的收藏','collection')" to="theMyCollection">我的收藏</router-link>
      </ul>
    </div>
</template>

<script>
  export default {
        name: "orderMenu",
      data(){
          return {
            active:''
          }
      },
    methods: {
      childClick(pagePosition,item) {
        this.$emit('childByValue', pagePosition);
        this.active=item;
      },
    },
  }
</script>

<style scoped>
  *{
    margin:0;
    padding: 0;
  }
 .orderMenu{
   float:left;
   display: inline-block;
   text-align: left;
 }
 .orderMenu ul{
   list-style: none;
   margin-top: 20px;
 }
 .orderMenu ul a{
   text-decoration: none;
   font-size:18px;
   color:#000000;
   font-weight: bold;
   margin:10px 10px;
 }
 .orderMenu ul span{
   font-size:18px;
   font-weight: bold;
   color:#000000;
   margin:10px 10px ;
 }
  .orderMenu ul li{
    margin-top: 10px;
  }
 .orderMenu ul li a{
   font-size:15px;
   margin:10px 40px ;
   color: #303133;
   font-weight: normal;
 }
 .span{
   color:#606266;
 }
.el-menu{
  padding:0;
}
  .center .center,
  .order .order,
  .envelope .envelope,
  .balance .balance,
  .gold .gold,
  .information .information,
  .management .management,
  .collection .collection{
    color:#6480BD;
  }
</style>

