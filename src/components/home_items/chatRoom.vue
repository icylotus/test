<template>
    <mt-popup position="right" v-model="popupVisible">
      <slot>
        <mt-header style="background-color: #232C40;">
          <ul slot="left">
            <li>
              <button slot="left" @click="closePopup()">
                <img :src="backIcon" height="32" slot="icon" />
              </button>
              {{userInfo.name}}
            </li>
          </ul>
          <button slot="right">
            <img :src="morePoint" width="32" slot="icon" />
          </button>
        </mt-header>

        <div class="page-loadmore-wrapper"  ref="wrapper" :style="'height:'+wrapperHeight+ 'px;'+'width:'
        +wrapperWidth+'px;'">
          <mt-loadmore ref="loadmore" :top-method="loadTop">
            <div>
              <ul v-for="(list,index) in chatInfo" :key="index">
                <li v-if="list.sender==1" class="left">
                  <img :src="userInfo.img" height="50"/>
                  <div>
                  <p>{{list.message}}</p>
                  </div>
                </li>

                <li v-else class="right">
                  <img :src="meImg" height="50"/>
                  <div>
                  <p>{{list.message}}</p>
                  </div>
                </li>

              </ul>
            </div>
          </mt-loadmore>
        </div>

        <div>
          <mt-tabbar ref="bottom">
            <button>
              <img :src="luyin" height="32"/>
            </button>
            <input type="text" v-model="theNowMessage">
            <button>
              <img :src="biaoqin" height="32"/>
            </button>
            <button v-if="isMessage">
              <img :src="more" height="32"/>
            </button>
            <button v-else
                    style="border-radius: 3px; background-color: #0DBD00;width: 50px;height:100%;"
                    @click="submitMessage(theNowMessage)">
              发送
            </button>
          </mt-tabbar>
        </div>
      </slot>
    </mt-popup>
</template>

<script>
    export default {
        name: "chatRoom",
      data(){
          return{
            luyin:require('../../assets/chatRoom/luyin.png'),
            biaoqin:require('../../assets/chatRoom/biaoqin.png'),
            more:require('../../assets/chatRoom/more.png'),
            backIcon:require('../../assets/chatRoom/backIcon_white.png'),
            morePoint:require('../../assets/chatRoom/morePoint.png'),
            wrapperHeight:0,
            wrapperWidth:0,
            meImg:require('../../assets/userImg/me.jpg'),
            theNowMessage:'',
            message:
              {
                message:'',
                date:'',
                sender:0
              },
            isMessage:true,

          }
      },
      watch:{
        theNowMessage:function (item) {
          if(item!=''){
            this.isMessage=false;
          }else{
            this.isMessage=true;
          }
        }
      },
      computed:{
        popupVisible:{
          get:function () {
            return this.$store.getters.getPopupChatRoom;
          },
          set:function () {

          }
        },
        userInfo:{
          get:function () {
            return this.$store.getters.getUserInfo;
          },
          set:function () {

          }
        },
        chatInfo:{
          get:function () {
            return this.$store.getters.getUserChatList;
          },
          set:function () {

          }
        },
      },
      methods:{
        loadTop() {
          setTimeout(() => {
            this.$refs.loadmore.onTopLoaded();
          }, 1500);
        },
        closePopup(){
          this.$store.dispatch('changePopupChatRoom');
        },
        submitMessage(item){
          let time=new Date();
          let date=time.getFullYear()+'-'+(time.getMonth()+1)+'-'+time.getDate()+' '+time.getHours()+':'+time.getMinutes();
          this.message.message=item;
          this.message.date=date;
          let temp=JSON.parse(JSON.stringify(this.message));
          this.$store.dispatch('addChatList',temp);
          this.theNowMessage='';
          item='';
          if(!this.userInfo.toMessageList){
            this.$store.dispatch('toGetUserChatList',this.userInfo.id);
            this.$store.dispatch('toMakeToMessageList',this.userInfo.id);
          }
          setTimeout(()=>{
            this.$store.dispatch('toReplyMessage',date);
          },1000);
        },
        replyMessage(){

        }
      },
      mounted() {
        this.wrapperHeight = document.documentElement.clientHeight-80;
        this.wrapperWidth=document.documentElement.clientWidth;
       // this.submitMessage();
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
.mint-tabbar{
  border-top: 1px solid #ccc;
  box-shadow: 0px -2px 3px #ccc;
  height:40px;
  background:#FFF
}
  .mint-tabbar input[type="text"]{
    width:70%;
    height:35px;
    margin: 0;
    float: left;
    border-top: 0;
    border-left:0;
    border-right: 0;
    border-bottom:1px solid #54BF39;
    outline: none;
    margin-left:10px;
  }
.mint-tabbar button{
  float:left;
  border:0px;
  outline: none;
  margin-left:10px;
  border-radius: 20px;
  height:32px;
  background: #fff;
}
.mint-tabbar button:active{
  background: #ccc;
}
.page-loadmore-wrapper{
  overflow: scroll;
  display: inline-block;
  background: #E1E5ED;
}
  .mint-loadmore div ul{
    list-style: none;
    display: inline-block;
    width:100%;
  }
.left{
  float: left;
  width:100%;
  margin:10px 5px;
}
.left img{
  float: left;
  margin-left:10px;
}
.left div{
  float: left;
  background-color:#fff;
  margin-left: 10px;
  padding:12px;
  max-width:650px;
  position: relative;
  -moz-border-radius:    10px;
  -webkit-border-radius: 10px;
  border-radius:10px;
  font-size:17px;
  display: table-cell;
  vertical-align: middle;

}
.left div:before{
  content:"";
  position: absolute;
  right: 100%;
  top: 18px;
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-right: 10px solid #fff;
  border-bottom: 5px solid transparent;
}
  .right{
    float:right;
    margin:10px 5px;
    width:100%;
  }
  .right img{
    float: right;
    margin-right:10px;
  }
.right div{
  float: right;
  background-color:#9EEA6A;
  margin-right: 10px;
  padding:12px;
  max-width:650px;
  position: relative;
  -moz-border-radius:    10px;
  -webkit-border-radius: 10px;
  border-radius:10px;
  font-size:17px;
  display: table-cell;
  vertical-align: middle;
}
.right div:before{
  content:"";
  position: absolute;
  left: 100%;
  top: 18px;
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-left: 10px solid #9EEA6A;
  border-bottom: 5px solid transparent;
}

</style>
