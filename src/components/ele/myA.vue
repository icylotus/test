<template>
  <li>
    <slot>
    </slot>
  </li>
</template>

<script>
    export default {
        name: "myA"
    }
</script>

<style scoped>
*{
  margin:0px;
  padding: 0px;
}
li{
  padding:5px 10px;
  border-radius: 2px;
  float:left;

}
li:hover{
  background-color: #A7D6E8;
  transition: background-color 0.2s;
}
  li a{
    color:#474F52;
    text-decoration: none;
  }
</style>
