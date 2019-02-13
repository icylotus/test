<template>
    <ul>
      <li>
        <span>当前位置:</span>
      </li>
      <li>
          <slot>

          </slot>
      </li>
      <li>
        <a href="/#">[切换位置】</a>
      </li>
    </ul>
</template>

<script>
    export default {
        name: "place"
    }
</script>

<style scoped>
  *{
    margin:0px;
    padding:0px;
  }
  ul{
    list-style: none;
    margin:20px auto auto 20px;
    display: inline-block;
    float:left;
  }
  ul li{
    display: inline-block;
    float:left;
    font-size:13px;
    margin-left:8px;
  }
  ul li span{
    color:#597178;
  }
  ul li a{
    text-decoration: none;
  }
 ul li a span{
   color:#000000;
 }
  ul li a span:hover{
    color:#597178;
  }
</style>
