<template>
  <mt-popup position="right" v-model="popupVisible">
    <slot>
      <mt-header style="background-color: #6BBF34;">
        <ul slot="left">
          <li>
            <button slot="left" @click="closePopup()">
              <img :src="backIcon" height="32" slot="icon" />
            </button>
           收付款
          </li>
        </ul>
      </mt-header>

      <mt-index-list :height="parseInt(wrapperHeight)">
        <div class="top" :style="'width:'+divWidth+'px'">
          <ul class="top_top">
            <li>
              <img :src="getAndPay" height="20px">
              <span>向商家付款</span>
            </li>
            <button @click="showSubPopup">
              <img :src="morePoint" slot="icon"  height="30px">
            </button>
          </ul>
          <ul class="top_center1">
            <li>这是条形码</li>
          </ul>
          <ul class="top_center2">
            <li>二维码</li>
          </ul>
          <hr :style="'width:'+(divWidth-40)+'px'"/>
          <ul class="top_bottom" @click="showSubPopup_payment">
            <li>
              零钱
            </li>
            <span>优先使用此支付方式付款</span>
          </ul>
        </div>
        <div class="bottom" :style="'width:'+divWidth+'px'">
          <mt-cell v-for="(list,index) in dataList" :key="index" :title="list">

          </mt-cell>
        </div>
      </mt-index-list>
      <sub-popup-tip>

      </sub-popup-tip>
      <payment-met>

      </payment-met>
    </slot>
  </mt-popup>
</template>

<script>
  import subPopupTip from './subPopupTip'
  import paymentMet from './paymentMet'

  export default {
        name: "receivePayment",
      data(){
          return{
            dataList:[
              '二维码收款',
              '赞赏码',
              '群收款',
              '面对面红包',
              '转账到银行',
            ],
            backIcon:require('../../assets/chatRoom/backIcon_white.png'),
            getAndPay:require('../../assets/me/getandpay_Icon.png'),
            morePoint:require('../../assets/me/morePoint2.png'),
            wrapperHeight:0,
            clientHeight:0,
            clientWidth:0,
            divWidth:0,
          }
      },
      computed:{
        popupVisible:{
          get: function () {
            return this.$store.getters.getPopupReceivePayment;
          },
          set: function () {

          }
        },
      },
      components:{
        subPopupTip:subPopupTip,
        paymentMet:paymentMet,
      },
      methods:{
        getWidthAndHeight() {
          this.wrapperHeight = document.documentElement.clientHeight - 100;
          this.clientHeight = document.documentElement.clientHeight;
          this.clientWidth = document.documentElement.clientWidth;
          this.divWidth=this.clientWidth-40;
        },
        closePopup() {
          this.$store.dispatch('toChangePopupreceivePayment');
        },
        showSubPopup(){
          this.$store.dispatch('toChangeSubPopupreceivePayment');
        },
        showSubPopup_payment(){
          this.$store.dispatch('toChangeSubPopupPaymentMet');
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
    background-color: #6BBF34;
  }
  .mint-header{
    background:#6BBF34;
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
    background:#6BBF34;
    border:0;
    outline: none;
    float:left;
    margin-right:10px;
  }
  .mint-popup .mint-header ul li span{
    float:left;
  }
  .mint-index-list{
    padding:auto 20px;
  }
  .mint-popup .mint-index-list .mint-indexlist-content{
    text-align: center;
  }
  .top{
    background-color: #fff;
    border-radius: 3px;
    margin-left: 20px;
    margin-top: 10px;
  }
  .top ul{
    list-style: none;
  }
  .top .top_top{
    color:#6BBF34;
    height:40px;
    background-color: #E8EDE1;
  }
  .top .top_top li{
    padding:10px;
  }
  .top .top_top li img{
    float: left;
  }
  .top .top_top li span{
    float: left;
    margin-left: 10px;
  }
  .top .top_top button{
    width:40px;
    height:40px;
    float: right;
    margin-top: -20px;
    border:0px;
    background-color: #E8EDE1;;
    outline: none;
  }
  .top .top_top button:active{
    background-color: #5E5E5E;
  }
  .top .top_center1{
    height:100px;
    line-height: 100px;
  }
  .top .top_center2{
    height:100px;
    line-height: 100px;
  }
  .top .top_bottom{
    height:70px;
    text-align: left;

  }
  .top .top_bottom li{
    font-size:20px;
    font-weight: bold;
    margin-left:20px;
    margin-top: 10px;
  }
  .top .top_bottom span{
    margin-left:20px;
  }
  .top hr{
    margin-top:7px;
    *margin: 0;
    border: 0;
    color: #5E5E5E;
    background-color: #5E5E5E;
    height: 1px;
    margin-left: 20px;
  }
  .bottom{
    background-color: #75E354;
    border-radius: 4px;
    margin-left: 20px;
    margin-top: 10px;
  }
  .bottom .mint-cell{
    background-color: #75E354;
    text-align: left;
    padding-left:10px;
    padding-bottom:10px;
    color:#fff;
    font-size:22px;
  }
</style>
