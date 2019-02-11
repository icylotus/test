<template>
    <div>
      <userMessage v-for="(list,index) in messageList" :key="index" v-if="list.toMessageList==1" :id="index"
                    @click.native="showPopupChatRoom(list.id)">
      </userMessage>
      <chat-room></chat-room>
    </div>
</template>

<script>
  import userMessage from '@/components/home_items/userMessage'
  import chatRoom from '@/components/home_items/chatRoom'
    export default {
        name: "home",
      data(){
        return{
          userId:'',
        }
      },
      methods:{
        showPopupChatRoom(item){
          this.$store.dispatch('changePopupChatRoom');
          this.$store.dispatch('toGetUserInfo',item);
          this.$store.dispatch('toGetUserChatList',item);
          this.$store.dispatch('toMakeTheMessCount',item);
        },
      },
      components:{
        userMessage:userMessage,
        chatRoom:chatRoom
      },
      computed:{
          messageList: {
            get: function () {
              return this.$store.getters.getUserList;
            }
          }
      }
    }
</script>

<style scoped>

</style>
