<template>
  <div id="app">
    <mt-header style="background-color: #232C40;">
      <span slot="left">微信({{$store.state.messageCount}})</span>
      <ul slot="right">
        <li>
          <mt-button @click="showPopupSearch()">
            <img :src="search" height="32" slot="icon"/>
          </mt-button>
          <mt-button @click="showPopupMore">
            <img :src="jia" height="32" slot="icon"/>
          </mt-button>
        </li>
      </ul>
    </mt-header>

    <popup_search>

    </popup_search>

    <popup_more>

    </popup_more>

    <div>
      <router-view></router-view>
    </div>


    <mt-tabbar :fixed="fixed" v-model="selected" v-bind:class="fontColor">
      <mt-tab-item id="weixin" @click.native="selectedTabbar('weixin')">
        <img :src="weixinIcon" slot="icon">
          <span class="weixin">微信</span>
      </mt-tab-item>
      <mt-tab-item id="addressBook" @click.native="selectedTabbar('addressBook')">
        <img :src="addressBookIcon" slot="icon">
          <span class="addressBook">通讯录</span>
      </mt-tab-item>
      <mt-tab-item id="find" @click.native="selectedTabbar('find')">
        <img :src="findIcon" slot="icon">
        <span class="find">发现</span>
      </mt-tab-item>
      <mt-tab-item if="me" @click.native="selectedTabbar('me')">
        <img :src="meIcon" slot="icon">
        <span class="me">我</span>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  import popup_search from './appItems/popup_search'
  import popup_more from './appItems/popup_more'

  export default {
  name: 'wechatIndex',
  data() {
    return {
      jia: require('../assets/icons/jia.png'),
      search: require('../assets/icons/search.png'),
      fixed:true,
      selected:'weixin',
      addressBook:require('../assets/icons/addressBook.png'),
      me:require('../assets/icons/me.png'),
      weixin:require('../assets/icons/weixin.png'),
      addressBook_isSelected:require('../assets/icons/addressBook_isSelected.png'),
      me_isSelected:require('../assets/icons/me_isSelected.png'),
      weixin_isSelected:require('../assets/icons/weixin_isSelected.png'),
      find:require('../assets/icons/find.png'),
      find_isSelected:require('../assets/icons/find_isSelected.png'),
      weixinIcon:'',
      addressBookIcon:'',
      meIcon:'',
      findIcon:'',
      modalVisible:false,
      fontColor:'',
    }
  },
  methods:{
    selectedTabbar(item){
        this.weixinIcon=this.weixin;
        this.addressBookIcon=this.addressBook;
        this.meIcon=this.me;
        this.findIcon=this.find;
      if(item=='weixin')
      {
        this.weixinIcon=this.weixin_isSelected;
        this.$router.push('/home');
        this.fontColor=item;
      }
      if(item=='me')
      {
        this.$router.push('/me');
        this.meIcon=this.me_isSelected;
        this.fontColor=item;
      }
      if(item=='addressBook')
      {
        this.$router.push('/addressBook');
        this.addressBookIcon=this.addressBook_isSelected;
        this.fontColor=item;
      }
      if(item=='find')
      {
        this.$router.push('/find');
        this.findIcon=this.find_isSelected;
        this.fontColor=item;
      }
    },
    iconReady(){
      this.weixinIcon=this.weixin_isSelected;
      this.addressBookIcon=this.addressBook;
      this.meIcon=this.me;
      this.findIcon=this.find;
    },
    showPopupSearch(){
      this.$store.dispatch('changePopupSearch');
    },
    showPopupMore(){
      this.$store.dispatch('changePopupMore');
    }
  },
  created(){
    this.iconReady();
    let _this=this;
    setTimeout(function () {
      _this.selectedTabbar('weixin');
    },500);
  },
  components:{
    popup_search:popup_search,
    popup_more:popup_more
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
  padding:0;
  margin:0;
}
  .mint-header{
    margin:0;
    background-color: #232C40;
  }
  .mint-header .is-left span{
    font-size:20px;
  }
.mint-header .is-right ul{
  list-style: none;
}
.mint-header .is-right ul li .mint-button{
  margin-left:15px;
}
.mint-tabbar .mint-tab-item a{
  text-decoration: none;
  color:#606266;
}
.mint-tabbar .mint-tab-item .is-selected,
.mint-tabbar .mint-tab-item .is-selected a,
.mint-tabbar .mint-tab-item .is-selected .mint-tab-item-label
{
  color:#54BF39;
}
  .weixin .weixin,
  .addressBook .addressBook,
  .find .find,
  .me .me{
    color:#54BF39;
  }
  .mint-toast{
    z-index:2500;
  }
</style>
