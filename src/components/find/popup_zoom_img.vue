<template>
  <mt-popup v-model="popupVisible"  @click.native="closePopup">
    <slot>
      <mt-index-list :height="parseInt(wrapperHeight)" class="content">
        <mt-swipe :auto="0" :defaultIndex="nowImgNum">
          <mt-swipe-item  v-for="(list,index) in imgList" :key="index">
            <img :src="list.url" :key="list.url" :style="list.width?strWidth:strHeight">
          </mt-swipe-item>
        </mt-swipe>
      </mt-index-list>
      <div>
        <ul>
          <li>
            <span v-for="(list,index) in imgList" :key="index"></span>
          </li>
        </ul>
      </div>
    </slot>
  </mt-popup>
</template>

<script>
    export default {
        name: "popup_zoon_img",
      data(){
          return{
            wrapperHeight:0,
            wrapperWidth:0,
            strHeight:'',
            strWidth:'',
          }
      },
      computed:{
        popupVisible:{
          get: function () {
            return this.$store.getters.getPopupZoomImg;
          },
          set: function () {

          }
        },
        imgList:{
          get:function () {
            return this.$store.getters.getCircleImgList;
          },
          set:function () {
            
          }
        },
        nowImgNum:{
          get:function () {
            return this.$store.getters.getNowImgNum;
          },
          set:function () {
            
          }
        }
      },
      methods: {
        closePopup() {
          this.$store.dispatch('toChangePopupZoomImg');
        },
        getWidthAndHeight() {
          this.wrapperHeight = document.documentElement.clientHeight;
          this.wrapperWidth=document.documentElement.clientWidth;
          this.strHeight='height:'+this.wrapperHeight+'px;'
          this.strWidth='width:'+this.wrapperWidth+'px;'
        },
      },
      created(){
        this.getWidthAndHeight();
      },
      mounted(){

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
    background-color: #000;
  }
  .content{
    text-align: center;
  }
  .content img{
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
</style>
