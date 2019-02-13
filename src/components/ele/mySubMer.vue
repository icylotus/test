<template>
    <a v-bind:href="merUrl" class="mySubMer">
      <div>
        <ul>
          <li><img v-bind:src="merImage"></li>
          <li style="display: inline-block;
                     margin:10px 0;
                     color:#606266;
                     font-size:15px;">
            {{merDistance}}分钟</li>
        </ul>
        <ul>
          <li style="font-weight: bold;font-size:20px;margin:20px auto 10px auto">{{merTitle}}</li>
          <li>
            <el-rate v-model="merRate" disabled text-color="#ff9900" score-template="{value}"></el-rate>
          </li>
          <li v-if="merShippingFee!=0" class="fee">配送费￥{{merShippingFee}}</li>
          <li v-else class="fee">免配送费</li>
        </ul>
      </div>
    </a>
</template>

<script>
    export default {
        name: "mySubMer",
      props:[
        'merTitle',
        'merUrl',
        'merImage',
        "merRate",
        'merShippingFee',
        'merDistance'
      ],
    }
</script>

<style scoped>
.mySubMer{
  text-decoration: none;
  color:#303133;
  display: inline-block;
}
.mySubMer:hover{
  color:#409EFF;
}
.mySubMer div{
  display: inline-block;
}
  .mySubMer div ul{
    list-style: none;
    display: inline-block;
    float:left;
  }
.mySubMer div ul li img{
  float:left;
  display: inline-block;
}
  .mySubMer div ul li span{
    display: inline-block;
    margin:10px 0;
    color:#606266;
    font-size:15px;
    font-weight: normal;
  }
  .fee{
    font-size:14px;
    color:#606266;
    margin:10px 0;
  }
</style>
<style>
  .el-rate__icon{
    font-size:15px;
  }
</style>
