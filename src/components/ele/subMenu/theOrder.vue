<template>
    <div class="theOrder">
      <ul class="title">
        <span>近三个月订单</span>
        <hr/>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "theOrder"
    }
</script>

<style scoped>
.theOrder{
  display: inline-block;
  float:left;
  text-align: left;
  width:100%;
}
.title{
  list-style: none;
  display: inline-block;
  text-align: left;
  width:980px;
}
.title span{
  font-size:20px;
  font-weight: bold;
  color:#303133;
  margin:30px auto 20px 30px;
  display: inline-block;
}
.title hr{
  margin:0px 20px;
  background-color:#E4E7ED;
}
</style>
