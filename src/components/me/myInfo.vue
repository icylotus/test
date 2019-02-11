<template>
  <mt-popup position="right" v-model="popupVisible">
    <slot>
      <mt-header style="background-color: #232C40;">
        <ul slot="left">
          <li>
            <button slot="left" @click="closePopup()">
              <img :src="backIcon" height="32" slot="icon" />
            </button>
           个人信息
          </li>
        </ul>
      </mt-header>

      <mt-index-list :height="parseInt(wrapperHeight)">
        <div class="content">
          <li></li>
          <ul>
            <div @click="showToast('头像')">
              <mt-cell title="头像">
                <img class="theImg" :src="myImg" height="70px;">
              </mt-cell>
            </div>
            <div @click="showToast('昵称')">
              <mt-cell title="昵称">
                <span>iron man</span>
              </mt-cell>
            </div>
            <div @click="showToast('微信号')">
              <mt-cell title="微信号">
                <span>wxid_uhdsdhasjkdhjkashdk</span>
              </mt-cell>
            </div>
            <div @click="showToast('二维码名片')">
              <mt-cell title="二维码名片">
                <img :src="erweima" height="20px;">
              </mt-cell>
            </div>
            <div @click="showToast('更多')">
              <mt-cell title="更多">

              </mt-cell>
            </div>
          </ul>
          <li></li>
          <ul>
            <li>
              <div @click="showToast('我的地址')">
                <mt-cell title="我的地址">

                </mt-cell>
              </div>
            </li>
          </ul>
        </div>
      </mt-index-list>
    </slot>
  </mt-popup>
</template>

<script>
  import { Toast } from 'mint-ui'
    export default {
        name: "myInfo",
      data(){
          return{
            backIcon:require('../../assets/chatRoom/backIcon_white.png'),
            wrapperHeight:0,
            myImg:require('../../assets/userImg/me.jpg'),
            erweima:require('../../assets/me/erweima.png'),
          }
      },
      computed:{
        popupVisible:{
          get: function () {
            return this.$store.getters.getPopupMyInfo;
          },
          set: function () {

          }
        }
      },
      methods:{
        closePopup() {
          this.$store.dispatch('toChangePopupMyInfo');
        },
        getWidthAndHeight() {
          this.wrapperHeight = document.documentElement.clientHeight - 100;
        },
        showToast(item){
          Toast({
            message: '这是'+item,
            duration: 2000
          });
        },
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
  .content{

  }
  .theImg{
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .content .mint-cell{
    text-align: left;
    font-weight: bold;
  }
  .content .mint-cell span{
    font-weight: normal;
  }
</style>
