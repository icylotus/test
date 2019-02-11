<template>
    <div>
      <mt-index-list :height="parseInt(wrapperHeight)">
        <mt-index-section index="☆" :show-indicator="showIndicator" class="thIindexList">
          <mt-cell title="新的朋友" ><img slot="icon" :src="newFriend" height="32px;"></mt-cell>
          <mt-cell title="群聊"><img slot="icon" :src="qunliao" height="32px;"></mt-cell>
          <mt-cell title="标签"><img slot="icon" :src="label" height="32px;"></mt-cell>
          <mt-cell title="公众号"><img slot="icon" :src="gongzhonghao" height="32px;"></mt-cell>
        </mt-index-section>
        <mt-index-section v-for="(alphabetList,index) in theIndex" v-if="alphabetList.data!=''"
                          :index="theTemplate[index]" :key="index" class="thIindexList">
          <div v-for="(list,index) in alphabetList.data" :key="index" @click="showPopupDetailds(list.id)">
            <mt-cell :title="list.name">
              <img slot="icon" :src="list.img" height="32px;">
            </mt-cell>
          </div>
        </mt-index-section>
      </mt-index-list>
    </div>
</template>

<script>
    export default {
        name: "myIndexList",
    data(){
          return{
            wrapperHeight:0,
            showIndicator:false,
            gongzhonghao:require('../../assets/addressBook/gongzhonghao.png'),
            label:require('../../assets/addressBook/label.png'),
            newFriend:require('../../assets/addressBook/newFriend.png'),
            qunliao:require('../../assets/addressBook/qunliao.png'),
          }
    },
      computed: {
        theIndex:{
          get:function () {
            return this.$store.getters.getAddressBook;
          },
          set:function () {

          }
        },
        theTemplate:{
          get:function () {
            return this.$store.getters.getTemplate;
          },
          set:function () {

          }
        }
      },
      methods:{
          getIdnex(){
           this.$store.dispatch('toClearAddressBook');
          },
        showPopupDetailds(item){
          this.$store.dispatch('toChangePopupDetails');
          this.$store.dispatch('toGetUserInfo',item);
          this.$store.dispatch('toGetUserChatList',item);
          this.$store.dispatch('toCheckChatList',item);
          //this.$store.dispatch('toMakeTheMessCount',item);
        },
      },
      mounted() {
        this.getIdnex();
      },
      created(){
        this.wrapperHeight = document.documentElement.clientHeight-100;
      }
    }
</script>

<style scoped>
  .thIindexList{
    text-align: left;
  }
  .thefirst p{
    display: none;

  }
  .mint-indexsection-index{
    text-align: left;
  }
</style>
