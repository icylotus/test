<template>
  <mt-popup position="right" v-model="popupVisible">
    <slot>
      <mt-header style="background-color: #232C40;">
        <ul slot="left">
          <li>
            <button slot="left" @click="closePopup()">
              <img :src="backIcon" height="32" slot="icon" />
            </button>
            详细资料
          </li>
        </ul>
        <button slot="right">
          <img :src="morePoint" width="32" slot="icon" />
        </button>
      </mt-header>

      <mt-index-list :height="parseInt(wrapperHeight)">
        <li></li>
        <div class="userInfo">
          <ul class="userInfo_img">
            <img :src="userInfo.img" width="60px">
          </ul>
          <ul v-if="userInfo.nickName!=''" class="userInfo_info">
            <li>
              {{userInfo.nickName}}
              <img v-if="userInfo.sex=='男'" height="20px" :src="nan">
              <img v-if="userInfo.sex=='女'" height="20px" :src="nv">
            </li>
            <li>微信号： {{userInfo.weixinNum}}</li>
            <li>昵称： {{userInfo.name}}</li>
          </ul>
          <ul v-else class="userInfo_info">
            <li>{{userInfo.name}}</li>
            <li>微信号： {{userInfo.weixinNum}}</li>
          </ul>
        </div>
        <li></li>


        <div class="userOther">
          <mt-cell title="设置备注和标签">
            
          </mt-cell>
          <li></li>
          <mt-cell title="地区">
            <span :style="'width:'+spanWidth+'px'">{{userInfo.addressArea}}</span>
          </mt-cell>
          <mt-cell title="个人相册">

          </mt-cell>
          <mt-cell title="更多">

          </mt-cell>
          <li></li>
          <ul>
            <li>
              <button class="submit" @click="showPopupChatRoom" :style="'width:'+buttonWidth+'px;height:'+buttonHeight+'px'">
                发消息
              </button>
            </li>
            <li></li>
            <li>
              <button class="videoCall" :style="'width:'+buttonWidth+'px;height:'+buttonHeight+'px'">
                视频通话
              </button>
            </li>
          </ul>
        </div>
      </mt-index-list>
    </slot>
  </mt-popup>
</template>

<script>
    export default {
        name: "userDetails",
      data(){
          return{
            backIcon:require('../../assets/chatRoom/backIcon_white.png'),
            morePoint:require('../../assets/chatRoom/morePoint.png'),
            nan:require('../../assets/addressBook/nan.png'),
            nv:require('../../assets/addressBook/nv.png'),
            wrapperHeight:0,
            spanWidth:0,
            buttonHeight:0,
            buttonWidth:0

          }
      },
      methods:{
        closePopup() {
          this.$store.dispatch('toChangePopupDetails');
        },
        showPopupChatRoom(){
          this.$store.dispatch('changePopupChatRoom');
          let _this=this;
          setTimeout(function () {
            _this.$store.dispatch('toChangePopupDetails');
          },300);
        }
      },
      computed: {
        popupVisible: {
          get: function () {
            return this.$store.getters.getPopupDetails;
          },
          set: function () {

          }
        },
        userInfo:{
          get:function () {
            return this.$store.getters.getUserInfo;
          },
          set:function () {
            
          }
        }
      },
      created(){
        this.wrapperHeight = document.documentElement.clientHeight-100;
        this.spanWidth=document.documentElement.clientWidth*0.65;
        this.buttonWidth=document.documentElement.clientWidth-40;
        this.buttonHeight=this.buttonWidth*0.13;
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
    background-color: #E1E5ED;
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
  }
  .mint-popup .mint-header ul li button{
    background:#232C40;
    border:0;
    outline: none;
    float:left;
  }
  .mint-popup .mint-header ul li span{
    float:left;
  }
  .mint-popup .mint-header button{
    background:#232C40;
    border:0;
    outline: none;
    margin-right:10px;
  }
  .userInfo{
    height:70px;
    padding:10px;
    background-color: #FFF;
  }
  .userInfo .userInfo_img{
    float: left;
    width:60px;
    height:60px;
    margin-left: 10px;
    box-shadow: 1px 1px #ccc,0px -1px #ccc,-1px 0px #ccc;
  }
  .userInfo .userInfo_info{
    float:left;
    list-style: none;
    margin-left:20px;
  }
  .userInfo .userInfo_info li{
    text-align: left;
  }
  .userInfo .userInfo_info li:first-child{
    font-size:25px;
    font-weight: bold;
  }
  .userOther{

  }
  .userOther .mint-cell{
    text-align:left;
    font-weight: bold;
  }
  .userOther .mint-cell .mint-cell-title{
    width:40%;
  }
  .userOther .mint-cell span{
    display: inline-block;
    text-align: left;
  }
  .userOther ul li button{
    font-size:20px;
    border:0px;
    border-radius: 3px;
    box-shadow:  1px 1px #ccc,0px -1px #ccc,-1px 0px #ccc;
    outline: none;
  }
  .userOther ul li .submit{
    background-color: #9EEA6A;
  }
  .userOther ul li .submit:active{
    background-color: #4B7840;
  }
  .userOther ul li .videoCall{
    background-color: #FFF;
  }
  .userOther ul li .videoCall:active{
    background-color: #636363;
  }
</style>
