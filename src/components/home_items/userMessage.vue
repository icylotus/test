<template>
    <div class="messageBox">
      <ul class="userImg">
        <img :src="userInfo[id].img" height="60px"/>
        <mt-badge v-if="userInfo[id].newMessCount<99&&userInfo[id].newMessCount>0" color="red">
          {{userInfo[id].newMessCount}}
        </mt-badge>
        <span v-else-if="userInfo[id].newMessCount==0">

        </span>
        <mt-badge v-else color="red">
          ...
        </mt-badge>
      </ul>
      <ul class="userMessgae">
        <li style="font-size:20px;font-weight: bold;">{{userInfo[id].name}}<span>{{userInfo[id].recentTime}}</span></li>
        <li>{{userInfo[id].theNewMess}}</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "userMessage",
      data(){
          return{

          }
      },
      computed:{
        userInfo:{
          get:function() {
            return this.$store.getters.getUserList;
          },
          set:function() {

          }
        },
      },
      props:[
        'id',
      ],
      mounted(){

      }
    }
</script>

<style scoped>
.mint-badge{
  border-radius: 30px;
  position:absolute;
  margin-left: 5px;
  margin-top: -70px;
}
.messageBox{
  height:70px;
  border-bottom: 1px solid #8B8B8C;
}
  .userImg{
    float: left;
    width:70px;
    height:70px;
    display: inline-block;
  }
  .userImg img{
    margin:5px;
  }
  .userMessgae{
    list-style: none;
    float: left;
    display: inline-block;
    width:80%;
    text-align: left;
  }
  .userMessgae li{
    margin-top:5px;
    padding-left:5px;
  }
  .userMessgae li span{
    color:#8B8B8C;
    font-size:15px;
    font-weight: normal;
    float: right;
    margin-right: 15px;
  }
</style>
