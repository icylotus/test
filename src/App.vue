<template>
  <div id="app">
    <div v-if="choose" class="indexTop">
      <ul class="indexNav">
        <li>
          <router-link to="/vitaIndex" @click.native="toHiddenTop('vita')">个人简历</router-link>
        </li>
      </ul>
      <ul class="indexNav">
        <li>
          <router-link to="/weChatIndex"  @click.native="toHiddenTop('weixin')">手机版“微信”</router-link>
        </li>
      </ul>
      <ul class="indexNav">
        <li>
          <router-link to="/elementIndex"  @click.native="toHiddenTop('ele')">PC版“饿了么”</router-link>
        </li>
      </ul>
      <div class="intro">
        <ul class="indexTip">
          <li>
            声明:该网站模仿制作的其他网站均是学习，练习使用，并未进行任何商用或违法使用，侵删。
          </li>
        </ul>
        <ul class="weChatIntro">
          <li>手机版“微信”介绍:</li>
          <li>
            <pre>
              “微信”主要使用了前端框架“vue”和UI框架“mint-ui”，通过vuex进行组件间的通信，主要功能有:
              1.在微信页点击消息框可进入对话框，发送消息后会自动回复。
              2.在通讯录页点击用户并与用户“对话”后，该用户会更新到微信页。
              3.实现了微信朋友圈的部分功能。
              4.在“我”中，点击个人信息可以查看个人详细信息。
              5.“钱包”中可以进入收付款与零钱，在收付款中可以选择默认支付方式。
            </pre>
          </li>
        </ul>
        <ul class="elmIntro">
          <li>PC版“饿了么”介绍:</li>
          <li>
            <pre>
              “饿了么”主要使用了前端框架“vue”和UI框架“element-ui”，主要功能有:
              1.在首页点击商家分类会出现子选项，同时筛选商家的种类
              2.首页中可对商家进行搜索。
              3.在我的订单-》账户余额中通过表格显示账户变化，点击分类筛选交易类型
              4.在我的订单-》地址管理中可以对地址进行增、删、改操作，并可以进行数据校验。
            </pre>
          </li>
        </ul>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
    }
  },
  computed:{
    choose:{
      get:function () {
        return this.$store.getters.getTheIndexTop;
      },
      set:function () {
        
      }
    }
  },
  methods:{
    toHiddenTop(item){
      this.$store.dispatch('toChangeTheIndexTop');
      let _this=this;
      if(item=='weixin'){
        setTimeout(function () {
          _this.$router.push('/home');
        })
      }
      if(item=='ele'){
        setTimeout(function () {
          _this.$router.push('/eleHome');
        })
      }
      if(item=='vita'){
       setTimeout(function () {
          _this.$router.push('/isMe');
        },500);
      }
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  margin: 0;
  padding:0;
}
  .indexTop{
    width:1200px;
    height:60px;
    background-color: #4C7CE6;
    position: absolute;
    left:50%;
    margin-left: -600px;

  }
  .indexTop .indexNav{
    list-style: none;
    float:left;
    width:400px;
    height:100%;
  }
  .indexTop .indexNav:hover{
    background-color: #47D1A3;
  }
  .indexTop .indexNav li{
    width:100%;
    height:100%;
  }
  .indexTop .indexNav li a{
    text-decoration: none;
    font-size:25px;
    color:#FFF;
    width:100%;
    height:100%;
    display: inline-block;
    line-height: 60px;
  }
  .intro{
    margin-top: 60px;
  }
  .intro ul{
    list-style: none;
    margin-top: 20px;
    text-align: left;
  }
  .indexTop .intro .indexTip{
    padding-top: 20px;
  }
  .intro ul li pre{
    font-size:18px;
    line-height: 28px;
  }
</style>
