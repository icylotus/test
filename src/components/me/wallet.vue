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

        <div class="top">
          <ul :style="'width:'+ulWidth+'px;'" @click="showPopupReceivePayment">
            <li>
              <img :src="getAndPay" height="50px">
            </li>
            <li>
              收付款
            </li>
          </ul>

          <ul :style="'width:'+ulWidth+'px;'" @click="showPopupCoins">
            <li>
              <img :src="coins" height="50px">
            </li>
            <li>
              零钱
            </li>
            <li>
              ￥9999999
            </li>
          </ul>

          <ul :style="'width:'+ulWidth+'px;'" @click="showToast">
            <li>
              <img :src="bankCrad" height="50px">
            </li>
            <li>
              银行卡
            </li>
          </ul>

        </div>


        <div class="center" :style="'height:'+divCenterHeight+'px'">
          <li>腾讯服务</li>
          <ul v-for="(list,index) in tencentSerives" :key="index" :style="'width:'+ulWidth+'px;height:'+ulWidth+'px;'">
            <li>
              {{list.data}}
            </li>
          </ul>
        </div>
        <div class="bottom" :style="'height:'+divBottomHeight+'px'">
          <li>第三方服务</li>
          <ul v-for="(list,index) in otherSerives" :key="index" :style="'width:'+ulWidth+'px;height:'+ulWidth+'px;'">
            <li>
              {{list.data}}
            </li>
          </ul>
        </div>

        </mt-index-list>
        <receive-payment>

        </receive-payment>
      <popup-coins>

      </popup-coins>
    </slot>
  </mt-popup>
</template>

<script>
  import { Toast } from 'mint-ui'
  import receivePayment from './receivePayment'
  import popupCoins from './popupCoins'
  export default {
        name: "wallet",
      data(){
          return{
            wrapperHeight:0,
            backIcon:require('../../assets/chatRoom/backIcon_white.png'),
            morePoint:require('../../assets/chatRoom/morePoint.png'),
            getAndPay:require('../../assets/appMoreIcons/getandpay_moreIcon.png'),
            coins:require('../../assets/me/lingqian.png'),
            bankCrad:require('../../assets/me/ka.png'),
            tencentSerives:[
              {data:'信用卡还款'},{data:'手机充值'},{data:'理财通'},
              {data:'生活缴费'},{data:'Q币充值'},{data:'城市服务'},{data:'腾讯公益'},
            ],
            otherSerives:[
              {data:'火车票机票'},{data:'滴滴出行'},{data:'京东优选'},{data:'美团外卖'},{data:'电影演出赛事'},
              {data:'吃喝玩乐'},{data:'酒店'},{data:'拼多多'},{data:'蘑菇街女装'},{data:'唯品会特卖'},{data:'转转二手'},
            ],
            clientHeight:0,
            clientWidth:0,
            ulWidth:0,
            divCenterHeight:0,
            divBottomHeight:0
          }
      },
      computed:{
        popupVisible:{
          get: function () {
            return this.$store.getters.getPopupWallet;
          },
          set: function () {

          }
        }
      },
      methods:{
        getWidthAndHeight(){
          this.wrapperHeight = document.documentElement.clientHeight-100;
          this.clientHeight = document.documentElement.clientHeight;
          this.clientWidth = document.documentElement.clientWidth;
          this.ulWidth=this.clientWidth/3-2;
          this.divCenterHeight=this.ulWidth*Math.ceil(this.tencentSerives.length/3)+45;
          this.divBottomHeight=this.ulWidth*Math.ceil(this.otherSerives.length/3)+45;

        },
        closePopup() {
          this.$store.dispatch('toChangePopupWallet');
        },
        showPopupReceivePayment(){
          this.$store.dispatch('toChangePopupreceivePayment');
        },
        showPopupCoins(){
          this.$store.dispatch('toChangePopupCoins');
        },
        showToast(){
          Toast({
            message: '功能未完成!',
            duration: 2000
          });
        },
      },
      components:{
        receivePayment:receivePayment,
        popupCoins:popupCoins
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
  .top{
    background:#828282;
    height:170px;
    color:#FFF;
  }
  .top ul{
    list-style: none;
    float: left;
    height:100%;
  }
  .top ul:active{
    background-color: #5E5E5E;
  }
  .top ul li:first-child{
    margin-top:40px;
  }
  .top ul li{
    margin-top:5px;
  }
  .center{
    background-color: #fff;
    margin-top:10px;
  }
  .center li {
    text-align: left;
    margin:10px;
    padding-top:10px;
  }
  .center ul{
    border:1px solid #CCC;
    list-style: none;
    float: left;
  }
  .center ul li{
    text-align: center;
  }
  .bottom{
    background-color: #fff;
    margin-top:10px;
  }
  .bottom li{
    text-align: left;
    margin:10px;
    padding-top:10px;
  }
  .bottom ul{
    border:1px solid #CCC;
    list-style: none;
    float: left;
  }
  .bottom ul li{
    text-align: center;
  }
</style>
