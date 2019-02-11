<template>
    <mt-popup position="right" v-model="popupVisible" :modal="modalVisible">
      <slot>
        <div class="modal" @click="closePopup">
        </div>
        <div class="content">
          <ul>
            <li>
              <button>
                <img :src="weixin_more" width="24px">
                <span>发起群聊</span>
              </button>
            </li>
            <hr/>
            <li>
              <button>
                <img :src="add_more" width="24px">
                <span>添加朋友</span>
              </button>
            </li>
            <hr/>
            <li>
              <button>
                <img :src="shaoyishao_more" width="24px">
                <span>扫一扫</span>
              </button>
            </li>
            <hr/>
            <li>
              <button>
                <img :src="getandpay_more" width="24px">
                <span>收付款</span>
              </button>
            </li>
            <hr/>
            <li>
              <button>
                <img :src="help_more" width="24px">
                <span>帮助与反馈</span>
              </button>
            </li>

          </ul>
        </div>
      </slot>
    </mt-popup>
</template>

<script>
    export default {
        name: "popup_more",
      data(){
          return{
            modalVisible:false,
            weixin_more:require('../../assets/appMoreIcons/add_moreIcon.png'),
            add_more:require('../../assets/appMoreIcons/add_moreIcon.png'),
            getandpay_more:require('../../assets/appMoreIcons/getandpay_moreIcon.png'),
            help_more:require('../../assets/appMoreIcons/help_moreIcon.png'),
            shaoyishao_more:require('../../assets/appMoreIcons/shaoyishao_moreIcon.png')
          }
      },
      computed:{
        popupVisible:{
          get:function () {
            return this.$store.getters.getPopup_more_visible;
          },
          set:function () {

          }
        }
      },
      methods:{
          closePopup(){
            this.$store.dispatch('changePopupMore');
          }
      }
    }
</script>

<style scoped>
*{
  margin:0;
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
    display: inline-block;
    top:40px;
    right:10px;
    position: absolute;
    background-color: #303133;
    width:200px;
  }
  .content ul hr{
    height:1px;
    background:#212429;
    border:0px;
    margin:0;
  }
  .content ul{
    list-style: none;
  }
  .content ul li button{
    padding:5px auto 5px 5px;
    width:200px;
    border:0;
    height:45px;
    text-align: left;
    line-height: 45px;
    background-color: #383E4D;
    color:#fff;
    outline: none;
  }
  .content ul li button img{
    margin-left:10px;
    margin-top: 5px;
  }
.content ul li button span{
  font-size: 20px;
  margin-left:15px;
}
.content ul li button:active{
  background: #212429;
}
</style>
