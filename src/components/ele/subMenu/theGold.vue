<template>
  <div class="theGold">
    <ul class="title">
      <span>我的金币</span>
      <hr/>
    </ul>
    <ul class="center">
      <li>
        当前账户金币：<span>{{goldNum}}</span>个
        <a href="/#">如何获得金币?</a>
      </li>
    </ul>
    <ul class="tip">
      <li>最近30天金币记录</li>
    </ul>
    <ul class="theTable">
    <el-table :data="dataArray"  height="250" border style="width: 100%"
              stripe  :default-sort = "{prop: 'date', order: 'descending'}">
      <el-table-column
        prop="date"
        label="创建时间"
        width="180"
        sortable
        column-key="date">
      </el-table-column>
      <el-table-column
        prop="name"
        label="金币变化"
        width="180">
      </el-table-column>
      <el-table-column
        prop="details"
        label="详情">
      </el-table-column>
    </el-table>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "theGlod",
      methods:{
      },
      data(){
          return{
            goldNum:9999999999,
            dataArray:[
              {
                date:'2019-1-20',
                name:'+20000',
                details:'我饿了么公司就送你20000个金币了'
              },
              {
                date:'2019-1-21',
                name:'-1000',
                details:'有钱随便花'
              },
              {
                date:'2019-1-22',
                name:'+1000000',
                details:'钱随便就能赚的回来'
              },
              {
                date:'2019-1-23',
                name:'+2340',
                details:'金币来的就是把这么容易'
              },
              {
                date:'2019-1-24',
                name:'-10090',
                details:'饿了么里的东西这么好，当然要多花点了'
              },
            ],
          }
      }
    }
</script>

<style scoped>
.theGold{
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
  .center{
    list-style: none;
    display: inline-block;
    text-align: left;
    background-color: #F2F6FC;
    padding:20px auto 20px auto;
    margin-left: 20px;
    width:940px;
    margin-top: 10px;
    height: 70px;
  }
  .center li{
    margin:20px auto auto 30px;
    font-size: 15px;
  }
  .center li a{
    text-decoration: none;
    margin-left:40px;
    color:#2597BA;
  }
  .center li span{
    color: #F05D5D;
    font-size: 25px;
    font-weight: bold;
  }
  .tip{
    list-style: none;
    display: inline-block;
    text-align: left;
    margin-left: 20px;
  }
  .tip li{
    margin:20px 30px;
    font-size: 13px;
    color:#606266;
  }
  .theTable{
    margin-left: 20px;
    width:940px;
  }
  .el-table__header{
    background-color:#F2F6FC ;
  }
</style>
