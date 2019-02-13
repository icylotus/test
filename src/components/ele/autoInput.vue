<template>
  <ul>
    <li>
      <el-input placeholder="搜索商家，美食..." v-model="input" v-bind:class="inputWidth" size="small"
                @focus="changeInputWidth" @blur="changeInputWidth">
        <el-button icon="el-icon-search" @click="search" slot="suffix"></el-button>
      </el-input>
      </li>
  </ul>
</template>

<script>
  import bus from '@/components/ele/bus'
    export default {
        name: "autoInput",
      data(){
          return{
            input:'',
            inputWidth:'blurInput'
          }
      },
      methods:{
          search() {
            let val=this.input;
            bus.$emit('inceptMessage',val);
          },
        changeInputWidth(){
          if(this.inputWidth=='blurInput'){
            this.inputWidth='fouceInput';
          }else{
            this.inputWidth='blurInput';
          }
        }
      }

    }
</script>

<style scoped>
  *{
    margin:0;
    padding:0;
  }
  ul{
    list-style: none;
    width:500px;
    display: inline-block;
    float:right;
    margin-top: 20px;
  }
  ul li{
    float:right;
  }
  .el-input{
    display: inline-block;
  }
  .el-button{
    width:30px;
    height:30px;
    border:0px;
    margin:1px 0px auto auto;
  }
  .fouceInput{
    width:400px;
    transition: width 0.4s;
  }
  .blurInput{
    width:300px;
    transition: width 0.4s;
  }
</style>
