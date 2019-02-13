<template>
  <ul class="floatAddress">
    <li style="color:#303133;">
      {{name}}&nbsp
      <span v-if="sex=='男'">先生</span>
      <span v-else-if="sex=='女'">女士</span>
      <span v-else></span>
      <button style="margin-left:110px;" @click="updateAddress">修改</button>
      <button @click="deleteAddress">删除</button>
    </li>
    <li>{{tempAddress}}</li>
    <li>{{tel}}</li>
  </ul>
</template>

<script>
    export default {
        name: "floatAddress",
      props:[
        'name','sex','position','address','tel','indexNum'
      ],
      data(){
          return{
            tempAddress:'',
          }
      },
      methods:{
        linkAddress(){
          this.tempAddress=this.position+this.address;
          if(this.tempAddress.length>20){
            this.tempAddress=this.tempAddress.substring(0,18)+"...";
          }
        },
        updateAddress(){
          this.$emit('modify',this.indexNum);
        },
        deleteAddress(){
          this.$emit('delete',this.indexNum);
        }
      },
      created() {
        this.linkAddress();
      }
    }
</script>

<style scoped>
.floatAddress{
  list-style: none;
  display: inline-block;
  float: left;
  width: 294px;
  margin:10px 15px;
  border: 1px #C0C4CC solid;
  border-radius: 1px;
  height:100px;
}
.floatAddress:hover{
  border-color:#2597BA ;
}
  .floatAddress li{
    font-size: 15px;
    color:#606266;
    margin:10px 10px;
  }
  button{
    border:0;
    display: inline-block;
    background-color: #fff;
    color:#C0C4CC;
    font-size: 13px;
    cursor:pointer;
  }
.floatAddress:hover button{
  color:#2597BA;
}
</style>
