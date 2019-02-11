<template>
  <mt-popup class="popup_search" position="top" v-model="getpopup_visible">
    <slot>
      <div>
        <ul>
          <button slot="left" @click="showPopupSearch()">
            <img :src="backIcon" height="32" slot="icon" />
          </button>
          <input type="text" slot="right" placeholder="搜索">
        </ul>
      </div>
      <div class="popup_search_content">
        <ul class="popup_search_content_up">
          <li>
            搜索指定内容
          </li>
        </ul>
        <ul class="popup_search_content_bottom">
          <li>
            <span>朋友圈</span>
            |
            <span>文章</span>
            |
            <span>公众号</span>
          </li>
          <li>
            <span>小说</span>
            |
            <span>音乐</span>
            |
            <span>表情</span>
          </li>
        </ul>
      </div>
    </slot>
  </mt-popup>
</template>

<script>
    export default {
        name: "popup_search",
      data(){
          return{
            backIcon:require('../../assets/icons/backIcon.png'),
            popupVisible:false,
          }
      },
      methods:{
        showPopupSearch(){
          this.$store.dispatch('changePopupSearch');
        }
      },
      computed:{
        getpopup_visible:{
          get:function (){
            return this.$store.getters.getpopup_visible;
          },
          set:function () {

          }
        }
      },
    }
</script>

<style scoped>
  .popup_search{
    width:100%;
    height:100%;
  }
  .popup_search div{
    margin-top: 5px;
  }
  .popup_search div ul{
    width:100%;
  }
  .popup_search div ul button{
    border:0;
    background-color: #FFF;
    width: 35px;
    height:35px;
    float: left;
    margin-right: 10px;
  }
  .popup_search div ul button:hover{
    background-color: rgba(48,53,64,0.5);
  }
  .popup_search div ul img:hover{
    background-color: rgba(48,53,64,0);
  }
  .popup_search div ul img{
    background-color: #FFF;
  }
  .popup_search div ul input[type="text"]{
    width:85%;
    height:32px;
    margin: 0;
    float: left;
    border-top: 0;
    border-left:0;
    border-right: 0;
    border-bottom:1px solid #54BF39;
    outline: none;
  }

  .popup_search_content{
    width:100%;
    display: inline-block;
    padding-top:12%;
  }
  .popup_search_content .popup_search_content_up{
    width:100%;
    list-style: none;
    margin:20px auto;
    display: inline-block;
  }
  .popup_search_content .popup_search_content_up li{
    padding-bottom: 10px;
    display: block;
    color:#CCCCCC;
  }
  .popup_search_content .popup_search_content_bottom{
    width:100%;
    list-style: none;
    display: inline-block;
  }
  .popup_search_content .popup_search_content_bottom li{
    width:100%;
    display: inline-block;
    text-align: center;
    margin-bottom: 20px;
    color:#606266;
  }
  .popup_search_content .popup_search_content_bottom li span{
    display: inline-block;
    color:#54BF39;
    width:100px;
    height:30px;
  }
</style>
