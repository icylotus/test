<template>
  <mt-popup position="right" v-model="popupVisible">
    <slot>
      <mt-header style="background-color: #E1E5ED;">
        <ul slot="left">
          <li>
            <button slot="left" @click="closePopup()">
              <img :src="backIcon" height="32" slot="icon" />
            </button>
            朋友圈
          </li>
        </ul>
        <button slot="right">
          <img :src="releaseIcon" height="25px">
        </button>
      </mt-header>

      <mt-index-list :height="parseInt(wrapperHeight)">
      <div :height="parseInt(wrapperHeight)"
           v-infinite-scroll="loadMore"
           infinite-scroll-disabled="loading"
           infinite-scroll-distance="10">
        <div class="top">
          <img :src="theIndexImg" :width="parseInt(wrapperWidth)">
          <ul class="top_content">
            <li>
              <span>iron man</span>
              <img :src="theMe">
            </li>
          </ul>
        </div>
        <circle-info v-for="(list,index) in circleList" :key="index" :circleInfo="list">

        </circle-info>
      </div>
        <div class="fill">

        </div>
      </mt-index-list>
      <popup_zoom_img>

      </popup_zoom_img>
    </slot>
  </mt-popup>
</template>

<script>
  import circleInfo from "./circleInfo"
  import popup_zoom_img from "./popup_zoom_img"
    export default {
        name: "CircleOfFriends",
      data(){
          return{
            backIcon:require('../../assets/icons/backIcon.png'),
            wrapperHeight:0,
            wrapperWidth:0,
            releaseIcon:require('../../assets/find/release.png'),
            theIndexImg:require('../../assets/userImg/suolong.jpg'),
            theMe:require('../../assets/userImg/me.jpg')
          }
      },
      components:{
        circleInfo:circleInfo,
        popup_zoom_img:popup_zoom_img,
      },
      computed:{
        popupVisible:{
          get: function () {
            return this.$store.getters.getPopupCircleOfFriends;
          },
          set: function () {

          }
        },
        circleList:{
          get:function(){
            return this.$store.getters.getCircleList;
          },
          set: function () {

          }
        }
      },
      methods:{
        closePopup() {
          this.$store.dispatch('toChangePopupCircleOfFriends');
        },
        getWidthAndHeight() {
          this.wrapperHeight = document.documentElement.clientHeight - 100;
          this.wrapperWidth=document.documentElement.clientWidth;
        },
        loadMore() {
          this.loading = true;
          setTimeout(() => {
           /* let last = this.list[this.list.length - 1];
            for (let i = 1; i <= 10; i++) {
              this.list.push(last + i);
            }*/
            this.loading = false;
          }, 2500);
        }
      },
      mounted(){
        this.getWidthAndHeight();
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding:0;
  }
  .mint-popup{
    width:100%;
    height:100%;
    background-color: #fff;
  }
  .mint-popup .mint-header ul{
    list-style: none;
    margin-left: 10px;
    height:36px;
  }
  .mint-popup .mint-header ul li{
    line-height: 36px;
    height:36px;
    display: inline-block;
    font-size:20px;
    color:#000;
  }
  .mint-popup .mint-header ul li button{
    background:#E1E5ED;
    border:0;
    outline: none;
    float:left;
  }
  .mint-popup .mint-header ul li span{
    float:left;
  }
  .mint-popup .mint-header button{
    background:#E1E5ED;
    border:0;
    outline: none;
    margin-right:15px;
  }
  .top{
    width:100%;
  }
  .top .top_content{
    list-style: none;
    margin-top: -60px;
    text-align: right;
  }
  .top .top_content span{
    color:#FFF;
    font-size:20px;
    min-width:100px;
    position:relative;
    top:-60px;
  }
  .top .top_content img{
    width:100px;
    border:3px solid #FFF;
    margin-right: 10px;
  }
  .fill{
    width:100%;
    height:100px;
  }
</style>
