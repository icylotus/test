<template>
    <div>
      <my-index-list>
      </my-index-list>

      <chat-room>

      </chat-room>
      <user-details>

      </user-details>
    </div>
</template>

<script>
  import myIndexList from '@/components/addressBookItems/myIndexList'
  import ChatRoom from "./home_items/chatRoom";
  import userDetails from "./addressBookItems/userDetails";

  export default {
        name: "addressBook",
      components: {
        ChatRoom,
        myIndexList: myIndexList,
        userDetails:userDetails,
      },
      methods:{

      }
    }
</script>

<style scoped>

</style>
