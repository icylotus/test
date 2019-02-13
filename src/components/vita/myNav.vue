<template>
    <div class="overall">
      <ul>
        <li v-for="(list,index) in navList" :key="index" @click="goToPages(list.url)">
          {{list.name}}
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "myNav",
      data(){
          return{}
      },
      props:[
        'navList'
      ],
      methods:{
       goToPages(item){
         this.$router.push('/'+item);
       }
      }
    }
</script>

<style scoped>
  .overall{
    width:100%;
    height:40px;
    background:#3992B3;
    text-align: left;
  }
  .overall ul{
    list-style: none;
    margin-left: 400px;
  }
  .overall ul li{
    width:150px;
    height:100%;
    float:left;
    line-height: 40px;
    font-size:18px;
    color:#FFF;
    text-align: center;
    margin-right: 20px;
    cursor:pointer;
  }
  .overall ul li:hover{
    color:#3992B3;
    background-color: #FFF;
    transition: background-color 400ms;

  }

</style>
