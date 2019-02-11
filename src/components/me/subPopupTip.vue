<template>
  <mt-popup position="bottom" v-model="subPopupVisible" :modal="modalVisible" :closeOnClickModal="clickModal">
    <slot>
      <div class="modal" @click="closePopup">
      </div>
      <ul class="theTip">
        <li>
          <span>使用说明</span>
        </li>
        <li>
          <span>停止使用</span>
        </li>
      </ul>
    </slot>
  </mt-popup>
</template>

<script>
    export default {
        name: "subPopupTip",
      data(){
          return{
            modalVisible:true,
            clickModal:true,
          }
      },
      methods:{
        closePopup(){
          this.$store.dispatch('toChangeSubPopupreceivePayment');
        }
      },
      computed:{
        subPopupVisible:{
          get: function () {
            return this.$store.getters.getSubPopupReceivePayment;
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
  .theTip{
    bottom: 0px;
    width:100%;
    height:100px;
    background-color: #FFF;
    position: absolute;
    list-style: none;
  }
  .theTip li{
    width:100%;
    height:50px;
    line-height: 50px;
    text-align: left;
  }
  .theTip li span{
    margin-left:20px;
  }
  .theTip li:active{
    background-color: #5E5E5E;
  }
</style>
