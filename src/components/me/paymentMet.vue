<template>
  <mt-popup position="bottom" v-model="subPopupVisible" :modal="modalVisible" >
    <slot>
      <div class="modal" @click="closePopup">
      </div>
      <div class="content">
        <ul>
          <li><span>选择优先的支付方式</span></li>
          <li>
            优先使用所选支付方式付款，如付款失败将尝试使用其他支付方式完成付款
          </li>
          <mt-radio
          align="right"
          :options="options"
          v-model="value"
          @change="closePopup">
          </mt-radio>
        </ul>
      </div>
    </slot>
  </mt-popup>
</template>

<script>
  import { Toast } from 'mint-ui';
    export default {
        name: "paymentMet",
      data(){
        return{
          modalVisible:true,
          value:'零钱',
          options:[
            {
              label: ' 建设银行储蓄卡(7896)',
              value: '建设银行储蓄卡(7896)'
            },
            {
              label: '零钱(剩余￥999999)',
              value: '零钱'
            },
          ],
          icon:require('../../assets/me/coins.png'),
        }
      },
      methods:{
        closePopup(){
          this.$store.dispatch('toChangeSubPopupPaymentMet');
        },
      },
      computed:{
        subPopupVisible:{
          get: function () {
            return this.$store.getters.getSubPopupPaymentMet;
          },
          set: function () {

          }
        },
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
    background-color: rgba(0,0,0,0);
  }
  .modal{
    width:100%;
    height:100%;
    background-color: rgba(0,0,0,0);
    z-index: 2000;
  }
  .content{
    bottom: 0px;
    width:100%;
    height:200px;
    background-color: #FFF;
    position: absolute;
    list-style: none;
    text-align: left;
  }
  .content ul{
    list-style: none;
  }
  .content ul li{
    font-size:15px;
    margin-left: 20px;
  }
  .content ul li span{
    font-size:20px;
    font-weight: bold;
  }
  .mint-cell{
    text-align: left;
  }
  .mint-radio{
    text-align: left;
  }
</style>
<style>
  .mint-toast{
    z-index:2500;
  }
</style>
