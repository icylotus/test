<template>
    <div class="vitaIndex" v-if="!choose">
      <div class="top">
        <ul>
          <li class="name">
            周进辉的个人网站
          </li>
          <li class="saying">
            学如逆水行舟，不进，则退。
          </li>
        </ul>
        <el-button type="primary" class="toBack" @click="toIndex">
          点击返回主页
        </el-button>
      </div>
      <div class="nav">
        <my-nav :navList="navList">

        </my-nav>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
  import myNav from './myNav';
    export default {
        name: "vitaIndex",
      data(){
        return{
          navList:[
            {
              name:'个人简历',
              url:'isMe'
            }
          ]
        }
      },
      computed: {
        choose: {
          get: function () {
            return this.$store.getters.getTheIndexTop;
          },
          set: function () {

          }
        }
      },
      methods:{
        toIndex(){
          this.$store.dispatch('toChangeTheIndexTop');
        },
      },
      components:{
        myNav:myNav,
      }
    }
</script>

<style scoped>
*{
  margin: 0;
  padding:0;
}
  .vitaIndex{
    width: 100%;
    height:100%;
  }
  .top{
    width: 100%;
    height:130px;
    background-color: #69B9D6;
  }
  .top ul{
    list-style: none;
    text-align: center;
    font-size:28px;
    color:#FFF;
    width:100%;
    height:80px;
    position: absolute;
    margin-top: 40px;
  }
  .top ul .name{
    position:absolute;
    width:800px;
    left:50%;
    margin-left: -400px;
    text-align: left;
  }

  .top ul .saying {
    position:absolute;
    width: 800px;
    left:50%;
    margin-left: -400px;
    margin-top: 40px;
    font-size:22px;
    text-align: left;
  }
  .nav{
  }
  .top .toBack{
    width:200px;
    height:30px;
  }
</style>
