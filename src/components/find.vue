<template>
  <div>
    <mt-index-list :height="wrapperHeight">
      <li></li>
      <div @click="showCircleOfFriends">
        <mt-cell title="朋友圈">
        <img slot="icon" :src="pengyouqan" height="50px">
      </mt-cell>
      </div>
      <li></li>
      <div @click="showToast('扫一扫')">
      <mt-cell title="扫一扫">
        <img slot="icon" :src="saoyisao" height="50px" width="50px;">
      </mt-cell>
        </div>
      <div @click="showToast('摇一摇')">
      <mt-cell title="摇一摇">
        <img slot="icon" :src="yaoyiyao" height="50px" width="50px;">
      </mt-cell>
      </div>
      <li></li>
      <div @click="showToast('看一看')">
      <mt-cell title="看一看">
        <img slot="icon" :src="kanyikan" height="50px" width="50px;">
      </mt-cell>
      </div>
      <div @click="showToast('搜一搜')">
      <mt-cell title="搜一搜">
        <img slot="icon" :src="souyisou" height="50px" width="50px;">
      </mt-cell>
      </div>
      <li></li>
      <div @click="showToast('附近的人')">
      <mt-cell title="附近的人">
        <img slot="icon" :src="fujin" height="50px" width="50px;">
      </mt-cell>
      </div>
      <div @click="showToast('漂流瓶')">
      <mt-cell title="漂流瓶">
        <img slot="icon" :src="piaoliuping" height="50px" width="50px;">
      </mt-cell>
      </div>
      <li></li>
      <div @click="showToast('购物')">
      <mt-cell title="购物">
        <img slot="icon" :src="gouwu" height="50px" width="50px;">
      </mt-cell>
      </div>
      <div @click="showToast('游戏')">
      <mt-cell title="游戏">
        <img slot="icon" :src="youxi" height="50px" width="50px;">
      </mt-cell>
      </div>
      <li></li>
      <div @click="showToast('小程序')">
      <mt-cell title="小程序">
        <img slot="icon" :src="xiaochengxu" height="50px" width="50px;">
      </mt-cell>
      </div>
      <li></li>
    </mt-index-list>
    <circle-of-friends>

    </circle-of-friends>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui'
  import CircleOfFriends from './find/CircleOfFriends'
    export default {
        name: "find",
      data(){
          return{
            pengyouqan:require('../assets/find/pengyouquan.png'),
            saoyisao:require('../assets/find/saoyisao.png'),
            gouwu:require('../assets/find/gouwu.jpg'),
            kanyikan:require('../assets/find/kanyikan.png'),
            piaoliuping:require('../assets/find/piaoliuping.jpg'),
            saoyisao:require('../assets/find/saoyisao.png'),
            souyisou:require('../assets/find/souyisou.jpg'),
            xiaochengxu:require('../assets/find/xiaochengxu.jpg'),
            yaoyiyao:require('../assets/find/yaoyiyao.png'),
            youxi:require('../assets/find/youxi.jpg'),
            fujin:require('../assets/find/fujin.jpg'),
            wrapperHeight:0,
          }
      },
      methods:{
        showCircleOfFriends(){
          this.$store.dispatch('toChangePopupCircleOfFriends');
        },
        showToast(item) {
          Toast({
            message: item+'功能未完成',
            duration: 2000
          });
        }
  ,
      },
      components:{
        CircleOfFriends:CircleOfFriends,
      },
      created(){
        this.wrapperHeight = document.documentElement.clientHeight-100;
      }
    }
</script>

<style scoped>
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
</style>
