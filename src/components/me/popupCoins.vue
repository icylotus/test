<template>
  <mt-popup position="right" v-model="popupVisible">
    <slot>
      <mt-header style="background-color: #FFF;">
        <ul slot="left">
          <li>
            <button slot="left" @click="closePopup()">
              <img :src="backIcon" height="32" slot="icon" />
            </button>
            零钱
          </li>
        </ul>
        <button slot="right">
          零钱明细
        </button>
      </mt-header>

      <mt-index-list :height="parseInt(wrapperHeight)">
        <div class="top">
          <ul class="message">
            <li><img :src="theCoins"></li>
            <li>我的零钱</li>
            <li>￥999988.35</li>
          </ul>
          <ul class="btnUL">
            <li>
              <button class="submit" @click="showToast('充值')" :style="'width:'+buttonWidth+'px;height:'+buttonHeight+'px'">
                充值
              </button>
            </li>
            <li>
              <button class="videoCall" @click="showToast('提现')" :style="'width:'+buttonWidth+'px;height:'+buttonHeight+'px'">
                提现
              </button>
            </li>
          </ul>
        </div>
        <div class="bottom">
          <ul>
            <li>
              <mt-cell title="零钱通">
                <span>随时支付，并享收益</span>
              </mt-cell>
            </li>
          </ul>
        </div>
      </mt-index-list>
    </slot>
  </mt-popup>
</template>

<script>
  import { Toast } from 'mint-ui';
    export default {
        name: "popupCoins",
      data(){
          return{
            backIcon:require('../../assets/icons/backIcon.png'),
            theCoins:require('../../assets/me/coins.png'),
            wrapperHeight:0,
            buttonWidth:0,
            buttonHeight:0
          }
      },
      computed:{
        popupVisible:{
          get:function () {
            return this.$store.getters.getSubPopupCoins;
          },
          set:function () {

          }
        }
      },
      methods:{
        closePopup() {
          this.$store.dispatch('toChangePopupCoins');
        },
        getWidthAndHeight() {
          this.wrapperHeight = document.documentElement.clientHeight - 100;
          this.buttonWidth=document.documentElement.clientWidth-40;
          this.buttonHeight=this.buttonWidth*0.13;
        },
        showToast(item){
          Toast({
            message: '你已'+item+'成功!',
            duration: 2000
          });
        },
      },
      mounted(){
        this.getWidthAndHeight();
      },
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
    background-color: #E8EDE1;
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
    background:#FFF;
    border:0;
    outline: none;
    float:left;
  }
  .mint-popup .mint-header ul li span{
    float:left;
  }
  .mint-popup .mint-header button{
    background:#FFF;
    border:0;
    outline: none;
    margin-right:10px;
    font-size:17px;
  }
  .top{
    background:#FFF;
    padding-bottom: 40px;
    padding-top: 30px;
  }
  .message{
    background:#FFF;
  }
  .message li{
    margin-top:10px;
    font-size:30px;
  }
  .btnUL{
    margin-top: 20px;
    background:#FFF;
  }
  .btnUL li{
    margin-top: 15px;
  }
  .btnUL li button{
    font-size:20px;
    border:0px;
    border-radius: 3px;
    box-shadow:  1px 1px #ccc,0px -1px #ccc,-1px 0px #ccc;
    outline: none;
  }
  .btnUL li .submit{
    background-color: #9EEA6A;
  }
  .btnUL li .submit:active{
    background-color: #4B7840;
  }
  .btnUL li .videoCall{
    background-color: #FFF;
  }
  .btnUL li .videoCall:active{
    background-color: #636363;
  }
  .bottom{
    margin-top: 10px;
  }
</style>
