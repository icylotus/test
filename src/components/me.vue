<template>
    <div>
      <mt-index-list :height="wrapperHeight">
      <li></li>
      <div class="first" @click="showPopupMyInfo">
        <ul>
          <img :src="myImg" height="100px" style="float: left;">
          <li style="background-color: #fff">
            <span style="font-size:30px;">iron man</span>
          </li>
          <li style="background-color: #fff;margin-top:10px;">
            <span style="font-size:15px;">微信号: wxid_jiubugaoshuni</span>
          </li>
          <button>
            <img :src="erweima" height="30px">
          </button>
        </ul>
      </div>
      <li></li>
      <div  @click="showPopupWallet()" class="thediv">
        <mt-cell title="钱包">
          <img slot="icon" :src="qianbao" height="50px;" width="50px;">
        </mt-cell>
      </div>
      <li></li>
      <div  class="thediv">
        <mt-cell title="收藏">
          <img slot="icon" :src="shoucang" height="50px;"  width="50px;">
        </mt-cell>
      </div>
      <div  class="thediv">
        <mt-cell title="相册">
          <img slot="icon" :src="xiangce" height="50px;"  width="50px;">
        </mt-cell>
      </div>
      <div class="thediv">
        <mt-cell title="卡包">
          <img slot="icon" :src="kabao" height="50px;"  width="50px;">
        </mt-cell>
      </div>
      <div class="thediv">
        <mt-cell title="表情">
          <img slot="icon" :src="bianqing" height="50px;"  width="50px;">
        </mt-cell>
      </div>
      <li></li>
      <div class="thediv">
        <mt-cell title="设置">
          <img slot="icon" :src="shezhi" height="50px;"  width="50px;">
        </mt-cell>
      </div>
      <li></li>
      </mt-index-list>
      <wallet>

      </wallet>
      <my-info>

      </my-info>
    </div>
</template>

<script>
  import wallet from './me/wallet'
  import myInfo from './me/myInfo'

  export default {
        name: "me",
      data(){
          return{
            myImg:require('../assets/userImg/me.jpg'),
            bianqing:require('../assets/me/biaoqing.png'),
            erweima:require('../assets/me/erweima.png'),
            kabao:require('../assets/me/kabao.png'),
            qianbao:require('../assets/me/qianbao.png'),
            shezhi:require('../assets/me/shezhi.png'),
            shoucang:require('../assets/me/shoucang.png'),
            xiangce:require('../assets/me/xiangce.png'),
            wrapperHeight:0,
            wrapperWidth:0
          }
      },
      mounted(){
        this.wrapperHeight = document.documentElement.clientHeight-80;
        this.wrapperWidth=document.documentElement.clientWidth;
      },
      methods:{
        showPopupWallet(){
          this.$store.dispatch('toChangePopupWallet');
        },
        showPopupMyInfo(){
          this.$store.dispatch('toChangePopupMyInfo');
        }
      },
      components:{
        wallet:wallet,
        myInfo:myInfo,
      }
    }
</script>

<style scoped>
  .overall{
    background-color: #D1D1D1;
  }
  div{
    list-style: none;
  }
  div li{
    height:30px;
    background-color: #D1D1D1;
  }
  .mint-cell{
    text-align: left;
    font-size:25px;
    font-weight: bold;
  }
  .mint-cell .mint-cell-title .mint-cell-text{
    font-size:20px;
  }
  .first{
    padding:10px;
    height:100px;
    background: #FFF;
  }
  .first ul{
    list-style: none;
    height:100%;
  }
  .first ul li{
    text-align: left;
  }
  .first ul li span{
    display: inline-block;
    padding:10px;
  }
  .first ul button{
    float:right;
    margin-top: -40px;
    border:0px;
    outline: none;
  }
  .thediv{
  }
  .mint-cell:active{
    background-color:#5E5E5E;
  }
</style>
