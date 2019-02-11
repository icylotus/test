import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
  messageCount: 66,
  popup_visible:false,
  popup_more_visible:false,
  popup_chatRoom:false,
  popup_details:false,
  popup_wallet:false,
  popup_receivePayment:false,
  subPopup_receivePayment:false,
  subPopup_paymentMet:false,
  popup_coins:false,
  popup_myInfo:false,
  popup_circle_of_friends:false,
  popup_zoom_img:false,
  userInfo:'',
  userChatList:'',
  addressBookAlreadyRun:false,
  addressBook:[
    {
      data:[

      ]
    },
    {
      data:[

      ]
    }
    ,
    {
      data:[

      ]
    }
    ,
    {
      data:[

      ]
    }
    ,
    {
      data:[

      ]
    }
    ,
    {
      data:[

      ]
    }
    ,
    {
      data:[

      ]
    }
    ,
    {
      data:[

      ]
    }
    ,
    {
      data:[

      ]
    }
    ,
    {
      data:[

      ]
    }
    ,
    {
      data:[

      ]
    }
    ,
    {
      data:[

      ]
    }
    ,
    {
      data:[

      ]
    }
    ,
    {
      data:[

      ]
    },
    {
      data:[

      ]
    },
    {
      data:[

      ]
    }
    ,
    {
      data:[

      ]
    }
    ,
    {
      data:[

      ]
    },
    {
      data:[

      ]
    }
    ,
    {
      data:[

      ]
    }
    ,
    {
      data:[

      ]
    }
    ,
    {
      data:[

      ]
    }
    ,
    {
      data:[

      ]
    }
    ,
    {
      data:[

      ]
    }
    ,
    {
      data:[

      ]
    },
    {
      data:[

      ]
    }




  ],
  template:['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
  repleMessage:{
    message:'',
    date:'',
    sender:1
  },
  theReply:[
    '是呀，你说的对!',
    '你怎么才回复我也，早干嘛去了',
    '那你很棒棒呀！',
    '*_*！',
    '*✧⁺˚⁺ପ(๑･ω･)੭ु⁾⁾ 好好学习天天向上',
    '(。＿ 。） ✎＿学习计划走起',
    '(҂‾ ▵‾)σ(˚▽˚’!)/随叫随到',
    '_(:_」∠)_ 玩手机',
    '( ≖ଳ≖)ㄑ看电视没劲…',
    '(o´罒`o)哼',
    '∩( ・ω・)∩萌萌哒',
    '|ω･`)暗中观察',
    '( ´﹀\` )礼貌的微笑',
    '<－biubiu－⊂(\`ω´∩)',
    'ง(ˇﻌˇ)ง',
    '(#→⌒→)',
    '(ノ◕ω◕)ノ',
    '╮(╯3╰)╭睡眠不足',
    '你丑你先睡(*^︹^*)',
    '⭐凌晨三点╮（￣﹏￣）╭⭐'
  ],
  userList:[
    {
      id:1,
      name:'caprpe diem',
      nickName:'肯德基',
      img:require('../assets/userImg/tianyi.jpg'),
      weixinNum:'wxid_83723n1l9d7z23',
      tel:'13667000275',
      addressArea:'江西 抚州',
      sex:'女',
      theNewMess:'恩恩',
      newMessCount:0,
      recentTime:"09:20",
      toMessageList:true,
      theIndex:'c'
    },
    {
      id:2,
      name:'特朗普',
      nickName:'川普',
      img:require('../assets/userImg/telangpu.jpg'),
      weixinNum:'wxid_83723n1l9d7z23',
      tel:'181811818181818',
      addressArea:'美国 华盛顿州',
      sex:'男',
      theNewMess:'周先生你好呀',
      newMessCount:5,
      recentTime:"昨天",
      toMessageList:true,
      theIndex:'t'
    },
    {
      id:3,
      name:'鸣人',
      nickName:'',
      img:require('../assets/userImg/mingre.jpg'),
      weixinNum:'wxid_83723n1l9d7z23',
      tel:'456778900',
      addressArea:'火影世界 木叶村',
      sex:'男',
      theNewMess:'啥是gay',
      newMessCount:1,
      recentTime:"8：05",
      toMessageList:true,
      theIndex:'m'
    },
    {
      id:4,
      name:'佐助',
      nickName:'',
      img:require('../assets/userImg/zuozhu.jpg'),
      weixinNum:'wxid_83723n1l9d7z23',
      tel:'0i0i0i0i',
      addressArea:'火影世界 木叶村',
      sex:'男',
      theNewMess:'那撸脱',
      newMessCount:1,
      recentTime:"23：05",
      toMessageList:true,
      theIndex:'z'
    },
    {
      id:5,
      name:'宇智波-鼬',
      nickName:'',
      img:require('../assets/userImg/you.jpg'),
      weixinNum:'wxid_83723n1l9d7z23',
      tel:'13667000275',
      addressArea:'江西 抚州',
      sex:'男',
      theNewMess:'',
      newMessCount:0,
      recentTime:"09:20",
      toMessageList:false,
      theIndex:'y'
    },
    {
      id:6,
      name:'宇智波-班',
      nickName:'',
      img:require('../assets/userImg/ban.jpg'),
      weixinNum:'wxid_83723n1l9d7z23',
      tel:'13667000275',
      addressArea:'江西 抚州',
      sex:'男',
      theNewMess:'',
      newMessCount:0,
      recentTime:"09:20",
      toMessageList:false,
      theIndex:'y'
    },
    {
      id:7,
      name:'我爱罗',
      nickName:'',
      img:require('../assets/userImg/woailuo.jpeg'),
      weixinNum:'wxid_83723n1l9d7z23',
      tel:'13667000275',
      addressArea:'江西 抚州',
      sex:'男',
      theNewMess:'',
      newMessCount:0,
      recentTime:"09:20",
      toMessageList:false,
      theIndex:'w'
    },
    {
      id:8,
      name:'索隆',
      nickName:'',
      img:require('../assets/userImg/suolong.jpg'),
      weixinNum:'wxid_83723n1l9d7z23',
      tel:'13667000275',
      addressArea:'江西 抚州',
      sex:'男',
      theNewMess:'',
      newMessCount:0,
      recentTime:"09:20",
      toMessageList:false,
      theIndex:'s'
    }
  ],
  chatList: [
    {
      id: 1,
      content: [
        {
          message:'我科三也挂灯光上了',
          date:'2018-9-12 11:14',
          sender:1
        },
        {
          message:'痛苦，路都没上',
          date:'2018-9-12 11:15',
          sender:1
        },
        {
          message:'痛苦，路都没上',
          date:'2018-9-12 11:15',
          sender:1
        },{
          message:'痛苦，路都没上',
          date:'2018-9-12 11:15',
          sender:1
        },{
          message:'痛苦，路都没上',
          date:'2018-9-12 11:15',
          sender:1
        },{
          message:'痛苦，路都没上',
          date:'2018-9-12 11:15',
          sender:1
        },{
          message:'痛苦，路都没上',
          date:'2018-9-12 11:15',
          sender:1
        },{
          message:'痛苦，路都没上',
          date:'2018-9-12 11:15',
          sender:1
        },{
          message:'痛苦，路都没上',
          date:'2018-9-12 11:15',
          sender:1
        },{
          message:'痛苦，路都没上',
          date:'2018-9-12 11:15',
          sender:1
        },{
          message:'痛苦，路都没上',
          date:'2018-9-12 11:15',
          sender:1
        },{
          message:'痛苦，路都没上',
          date:'2018-9-12 11:15',
          sender:1
        },
        {
          message:'。',
          date:'2019-01-27 10:55',
          sender:0
        }
      ]
    },
    {
      id:2,
      content:[
        {
          message:'新年快乐呀',
          date:'2019-01-27 10:55',
          sender:1,
        },
        {
          message:'你们美国也过年么',
          date:'2019-01-27 10:55',
          sender:0
        },
        {
          message:'能放假的节日大家没有不喜欢的吧',
          date:'2019-01-27 10:55',
          sender:1
        },
        {
          message:'的确',
          date:'2019-01-27 10:57',
          sender:0
        },
        {
          message:'是呀',
          date:'2019-01-27 10:57',
          sender:1
        },
        {
          message:'周先生你好呀',
          date:'2019-01-27 10:57',
          sender:1
        }
      ]
    },
    {
      id:3,
      content:[
        {
          message:'啥是gay',
          date:'2019-01-27 10:57',
          sender:1
        }
      ]
    },
    {
      id:4,
      content:[
        {
          message:'那撸脱',
          date:'2019-01-27 10:57',
          sender:1
        }
      ]
    }
  ],
  myCircleInfo:{
    name:'iron man',
    img:require('../assets/userImg/me.jpg'),
    indexImg:require('../assets/userImg/you.jpg'),
  },
  CircleList:[
    {
      userId:1,
      contentText:'what`s beauty?',
      date_millisecond:'1549597787620',
      contentImg: [
        {
          url:require('../assets/userImg/you.jpg'),
          width:true,
        },
        {
          url:require('../assets/userImg/me.jpg'),
          width:true,
        },
        {
          url:require('../assets/userImg/ban.jpg'),
          width:true,
        },
      ]
    },
    {
      userId:2,
      contentText:'what`s beauty?',
      date_millisecond:'1549690187620',
      contentImg: [
        {
          url:require('../assets/userImg/you.jpg'),
          width:true,
        },
      ]
    },
    {
      userId:3,
      contentText:'所以到底啥是’配齐‘?',
      date_millisecond:'1549700187620',
      contentImg: [
        {
          url:require('../assets/userImg/library.jpg'),
          width:true,
        },
      ]
    },
    {
      userId:3,
      contentText:'这颜色好看么?',
      date_millisecond:'1549710187620',
      contentImg: [
        {
          url:require('../assets/userImg/color.jpg'),
          width:false,
        },
      ]
    },
    {
      userId:1,
      contentText:'学习！奋斗！加油！你可以的！',
      date_millisecond:'1549710187620',
      contentImg: [
        {
          url:require('../assets/userImg/tianyi.jpg'),
          width:true,
        },
      ]
    },
    {
      userId:4,
      contentText:'流浪地球强呀',
      date_millisecond:'1549710187620',
      contentImg: [
        {
          url:require('../assets/userImg/liulangdiqiu.jpg'),
          width:true,
        },
      ]
    },
    {
      userId:4,
      contentText:'所以下一部流浪地球在哪里',
      date_millisecond:'1549710187620',
      contentImg: [
        {
          url:require('../assets/userImg/liulangdiqiu.jpg'),
          width:true,
        },
        {
          url:require('../assets/userImg/tianyi.jpg'),
          width:true,
        },
      ]
    },
    {
      userId:6,
      contentText:'校园生活结束了，要步入社会了呀',
      date_millisecond:'1549710187620',
      contentImg: [
      ]
    },
    {
      userId:6,
      contentText:'明天   我来了',
      date_millisecond:'1549710187620',
      contentImg: [
        {
          url:require('../assets/userImg/suolong.jpg'),
          width:true,
        },
      ]
    },
    {
      userId:6,
      contentText:'看什么看四眼仔，信不信我打爆你的眼镜',
      date_millisecond:'1549710187620',
      contentImg: [
        {
          url:require('../assets/userImg/kongfu.jpg'),
          width:true,
        },
      ]
    },
  ],
  circleUserInfo:'',
  circleImgList:'',
  imgArray:[],
  imgSize:[],
  wrapperWidth:0,
  wrapperHeight:0,
  nowImgNum:0,

};
const getters={
  getNowImgNum(state){
    return state.nowImgNum;
  },
  getImgArray(state){
    return state.imgArray
  },
  getImgSize(state){
    return state.imgSize
  },
  getMessageCount(state){
    return state.messageCount;
  },
  getpopup_visible(state){
    return state.popup_visible;
  },
  getPopup_more_visible(){
    return state.popup_more_visible;
  },
  getPopupChatRoom(){
    return state.popup_chatRoom
  },
  getUserList(){
    return state.userList;
  },
  getChatList(){
    return state.chatList;
  },
  getUserInfo(){
    return state.userInfo;
  },
  getUserChatList(){
    return state.userChatList;
  },
  getAddressBook(){
    return state.addressBook;
  },
  getTemplate(){
    return state.template;
  },
  getPopupDetails(){
    return state.popup_details;
  },
  getPopupWallet(){
    return state.popup_wallet;
  },
  getPopupReceivePayment(){
    return state.popup_receivePayment;
  },
  getSubPopupReceivePayment(){
    return state.subPopup_receivePayment;
  },
  getSubPopupPaymentMet(){
    return state.subPopup_paymentMet;
  },
  getSubPopupCoins(){
    return state.popup_coins;
  },
  getPopupMyInfo(){
    return state.popup_myInfo;
  },
  getPopupCircleOfFriends(){
    return state.popup_circle_of_friends;
  },
  getCircleList(){
    return state.CircleList;
  },
  getMyCircleInfo(){
    return state.myCircleInfo;
  },
  getCircleUserInfo() {
    return state.circleUserInfo;
  },
  getPopupZoomImg(){
    return state.popup_zoom_img;
  },
  getCircleImgList(){
    return state.circleImgList;
  }
};
const mutations={
  getTheNowImgNum(state,item){
    state.nowImgNum=item;
  },
  changePopup_visible(state){
    state.popup_visible=!state.popup_visible;
  },
  changePopup_more_visible(state){
    state.popup_more_visible=!state.popup_more_visible;
  },
  changePopup_chatRoom(state){
    state.popup_chatRoom=!state.popup_chatRoom;
  },
  changePopup_details(state){
    state.popup_details=!state.popup_details;
  },
  changePopup_wallet(state){
    state.popup_wallet=!state.popup_wallet;
  },
  changePopup_receivePayment(state){
    state.popup_receivePayment=!state.popup_receivePayment;
  },
  changeSubPopup_receivePayment(state){
    state.subPopup_receivePayment=!state.subPopup_receivePayment;
  },
  changeSubPopup_paymentMet(state){
    state.subPopup_paymentMet=!state.subPopup_paymentMet;
  },
  changePopup_coins(state){
    state.popup_coins=!state.popup_coins;
  },
  changePopup_myInfo(state){
    state.popup_myInfo=!state.popup_myInfo;
  },
  changePopup_circle_of_friends(state){
    state.popup_circle_of_friends=!state.popup_circle_of_friends;
  },
  changePopup_zoom_img(){
    state.popup_zoom_img=!state.popup_zoom_img
  },
  addchat_list(state,item){
    for(var i=0;i<state.chatList.length;i++){
      if(state.chatList[i].id==state.userInfo.id){
        state.chatList[i].content.push(item);
        break;
      }
    }
  },
  getTheUserInfo(state,item){
    for(let i=0;i<state.userList.length;i++){
      if(state.userList[i].id==item){
        state.userInfo=state.userList[i];
        break;
      }
    }
  },
  getTheChatInfo(state,item){
    for(let i=0;i<state.chatList.length;i++){
      if(state.chatList[i].id==item){
        state.userChatList=state.chatList[i].content;
        break;
      }
    }
  },
  clearUserChatList(state){
    state.userChatList='';
  },
  replyMessage(state,item) {
    for (let i=0;i<state.chatList.length;i++){
      if(state.chatList[i].id==state.userInfo.id){
        state.repleMessage.date=item;
        state.repleMessage.message=state.theReply[parseInt(Math.random()*21)];
        let temp=JSON.parse(JSON.stringify(state.repleMessage));
        state.chatList[i].content.push(temp);
        break;
      }
    }
  },
  clearAddressBook(state) {
    if (!state.addressBookAlreadyRun) {
      state.addressBookAlreadyRun=true;
      for (let i = 0; i < 26; i++) {
        for (let j = 0; j < state.userList.length; j++) {
          if (state.userList[j].theIndex == state.template[i]) {
            let temp3 = {
              id: JSON.parse(JSON.stringify(state.userList[j].id)),
              name: JSON.parse((JSON.stringify(state.userList[j].name))),
              img:JSON.parse(JSON.stringify(state.userList[j].img))
            };
            state.addressBook[i].data.push(temp3)
          }
        }
      }
    }
  },
  checkChatList(state,item){
    let isHad=false;
    for(let i=0;i<state.chatList.length;i++){
      if(state.chatList[i].id==item){
        isHad=true;
      }
    }
    if(!isHad){
      let temp={
        id:item,
        content:[]
      };
      temp=JSON.parse(JSON.stringify(temp));
      state.chatList.push(temp)
    }
  },
  makeToMessageList(state,item){
   for(let i=0;i<state.userList.length;i++){
     if(state.userList[i].id==item){
       Vue.set(state.userList[i], `toMessageList`, true);
       break;
     }
   }
  },
  makeTheMessCount(state,item){
    for(let i=0;i<state.userList.length;i++){
      if(state.userList[i].id==item){
        Vue.set(state.userList[i],`newMessCount`, 0);
        break;
      }
    }
  },
  getTheCircleUserInfo(state,item){
    for(let i=0;i<state.userList.length;i++){
      if(state.userList[i].id==item){
        state.circleUserInfo=state.userList[i];
      }
    }
  },
  getTheCircleImgList(state,item){
    state.circleImgList=item;
  },
  /*getWrapperWidth_height(state,item1,item2){
    state.wrapperHeight=item1;
    state.wrapperWidth=item2;
  },
  */
};
const actions ={
  toGetTheNowImgNum(context,item){
    context.commit('getTheNowImgNum',item);
  },
  changePopupSearch(context) {
    context.commit('changePopup_visible');
  },
  changePopupMore(context){
    context.commit('changePopup_more_visible');
  },
  changePopupChatRoom(context){
    context.commit('changePopup_chatRoom');
  },
  addChatList(context,item){
    context.commit('addchat_list',item);
  },
  toGetUserInfo(context,item){
    context.commit('getTheUserInfo',item);
  },
  toGetUserChatList(context,item){
    context.commit('clearUserChatList');
    context.commit('getTheChatInfo',item);
  },
  toReplyMessage(context,item){
    context.commit('replyMessage',item);
  },
  toClearAddressBook(context){
    context.commit('clearAddressBook');
  },
  toCheckChatList(context,item){
    context.commit('checkChatList',item);
  },
  toMakeToMessageList(context,item){
    context.commit('makeToMessageList',item)
  },
  toMakeTheMessCount(context,item){
    context.commit('makeTheMessCount',item);
  },
  toChangePopupDetails(context){
    context.commit('changePopup_details');
  },
  toChangePopupWallet(context){
    context.commit('changePopup_wallet');
  },
  toChangePopupreceivePayment(context){
    context.commit('changePopup_receivePayment');
  },
  toChangeSubPopupreceivePayment(context){
    context.commit('changeSubPopup_receivePayment');
  },
  toChangeSubPopupPaymentMet(context){
    context.commit('changeSubPopup_paymentMet');
  },
  toChangePopupCoins(context){
    context.commit('changePopup_coins');
  },
  toChangePopupMyInfo(context){
    context.commit('changePopup_myInfo');
  },
  toChangePopupCircleOfFriends(context){
   context.commit('changePopup_circle_of_friends');
  },
  toGetTheCircleUserInfo(context,item){
    context.commit('getTheCircleUserInfo',item);
  },
  toChangePopupZoomImg(context){
    context.commit('changePopup_zoom_img');
  },
  toGetTheCircleImgList(context,item){
    context.commit('getTheCircleImgList',item);
  },
  /*
  toGetWrapperWidth_height(context,item1,item2){
    context.commit('getWrapperWidth_height',item1,item2);
  },
  toCalImg(context){
    context.commit('calImg');
  }
  */
};
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
