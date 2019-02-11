<template>
    <div class="circleInfo">
      <div class="right">
        <img :src="userInfo.img" width="60px">
      </div>
      <div  class="left" :style="'width:'+leftWidth+'px;'">
        <ul>
          <li>
            <a href="javascript:void(0)" v-if="userInfo.nickName!=''">{{userInfo.nickName}}</a>
            <a href="javascript:void(0)" v-else>{{userInfo.name}}</a>
          </li>
          <li>
            <span>{{circleInfo.contentText}}</span>
          </li>
          <li>
            <circle-img :imgList="circleInfo.contentImg" :imgWidth="(leftWidth-15)/3">

            </circle-img>
          </li>
          <li>{{timeTip}}</li>
        </ul>
      </div>
    </div>
</template>

<script>
  import circleImg from "./circleImg"
    export default {
        name: "circleInfo",
      data(){
          return{
            userInfo:'',
            timeTip:'',
            leftWidth:0,
          }
      },
      props:[
        'circleInfo'
      ],
      computer:{

      },
      components:{
        circleImg:circleImg,
      },
      methods:{
         getUserInfo(){
           this.$store.dispatch('toGetTheCircleUserInfo',this.circleInfo.userId);
           this.userInfo=this.$store.getters.getCircleUserInfo;
           this.leftWidth=document.documentElement.clientWidth-80;
         },
        calculationTime(){
          let nowMillisecond=Date.now();
          let userMilliS=this.circleInfo.date_millisecond;
          let afterTime=(Date.now()-this.circleInfo.date_millisecond)/1000;
          if((afterTime/60)<60){
            this.timeTip=(parseInt(afterTime/60))+'分钟前';
          }
          else if(((afterTime/60)/60)<24){
            this.timeTip=(parseInt((afterTime/60)/60))+'小时前';
          }
          else{
            this.timeTip=(parseInt((((afterTime/60)/60))/24))+'天前';
          }
        }
      },
      mounted(){
        this.getUserInfo();
        this.calculationTime();
      },
    }
</script>

<style scoped>
.circleInfo{
  width:100%;
  height:auto;
}
  .right{
    float:left;
    height:100%;
    margin-left: 10px;
  }
  .left{
    float:left;
    height:100%;
    margin-left:10px;
  }
  .left ul{
    list-style:none;
  }
  .left ul li{
    width:100%;
    text-align: left;
    margin-top: 10px;
  }
  .left ul li a{
    text-decoration: none;
    color:#2056C9;
  }
  .left ul li span{
    color:#000;
    font-size:18px;
  }

</style>
