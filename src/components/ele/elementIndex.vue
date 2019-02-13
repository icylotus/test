<template>
  <div id="app" v-if="!choose">
    <el-container>
      <el-header>
        <el-menu mode="horizontal">
          <img src="../../assets/food/还不饿.png" height="60"/>
          <el-menu-item index="1" @click="changePage('eleHome')">
            首页
          </el-menu-item>
          <el-menu-item index="2" @click="changePage('myOrder')">
            我的订单
          </el-menu-item>
          <el-menu-item index="3">
            加盟合作
          </el-menu-item>
          <el-menu-item index="4">
            我的客服
          </el-menu-item>
          <el-menu-item index="5"  @click="toIndex">
            点击返回主页
          </el-menu-item>
        </el-menu>
      </el-header>

      <el-main>
        <router-view/>
      </el-main>

      <el-footer>
      </el-footer>
    </el-container>

  </div>
</template>

<script scoped>
export default {
  name: 'App',
  data(){
    return{
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
    changePage(item){
      if(item=='eleHome'){
        this.$router.push('/eleHome');
      }
      if(item=='myOrder'){
        this.$router.push('/myOrder');
      }
      if(item=='join'){
        this.$router.push('/join');
      }
      if(item=='customerService'){
        this.$router.push('/customerService');
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
  *{
    margin:0;
    padding:0;
  }
  body{
    background-color:#F2F6FC;;
  }
  .el-menu{
    background-color: #6390FF;
    padding:0 200px;

  }
.el-menu img{
  float:left;
}
.el-menu--horizontal>.el-menu-item{
  color:#ffffff;
}
.el-menu--horizontal>.el-menu-item:hover{
  color:#000000;
  background-color:#0039B3;
}
  .el-menu-item a{
    text-color:#fff;
    text-decoration: none;
    font-size:18px;
    width:100%;
    height:100%;
  }
  .router-link{
    width:100%;
    height:100%;
  }
  .el-main{
    padding:0 20px;
    width:1200px;
    position:absolute;
    left:50%;
    margin-left: -600px;
    margin-top: 60px;
  }
</style>
