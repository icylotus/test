<template>
    <div class="balance">
      <ul class="title">
        <span>我的金币</span>
        <hr/>
      </ul>
      <ul class="center">
        <li>
          当前账户余额：<span>{{goldNum}}</span>元
          <el-popover
            placement="top"
            width="200"
            trigger="hover"
            content="暂不支持提现，可使用余额消费">
            <button class="theButton" slot="reference">提现</button>
          </el-popover>
        </li>
      </ul>
      <ul class="tip">
        <li>账户资产明细</li>
      </ul>
      <ul class="theChoose">
        <li style="width:100%" :class="activeA">
          <span>分类</span>
          <my-a v-for="(list,index) in theClass" :key="index" :class="'a'+index">
            <a href="javascript:void(0)" @click="makeActiveA('a'+index,list.title)">{{list.title}}</a>
          </my-a>
        </li>
        <li style="width:100%" :class="activeB">
          <span>时间</span>
          <my-a v-for="(list,index) in time" :key="index" :class="'b'+index">
            <a href="javascript:void(0)" @click="makeActiveB('b'+index)">{{list.title}}</a>
          </my-a>
        </li>
      </ul>
      <ul class="theTable">
        <el-table :data="tempData"  height="250" border style="width: 100%"
                  stripe  :default-sort = "{prop: 'date', order: 'descending'}">
          <el-table-column
            prop="date"
            label="创建时间"
            width="200"
            sortable
            column-key="date">
          </el-table-column>
          <el-table-column
            prop="class"
            label="交易类型"
            width="300">
          </el-table-column>
          <el-table-column
            prop="name"
            label="金额变化"
            width="200">
          </el-table-column>
          <el-table-column
            prop="details"
            label="余额">
          </el-table-column>
        </el-table>
      </ul>
    </div>
</template>

<script>
  import myA from '@/components/ele/myA'
    export default {
        name: "theAccountBalance",
      data(){
          return{
            goldNum:9999999999999,
            tempData:[],
            dataArray:[
              {
                date:'2019-1-20',
                name:'+20000',
                class:'充值',
                details:'我饿了么公司就送你20000个块钱了'
              },
              {
                date:'2019-1-21',
                name:'-1000',
                class:'余额消费',
                details:'有钱随便花'
              },
              {
                date:'2019-1-22',
                name:'+1000000',
                class:'充值',
                details:'钱随便就能赚的回来'
              },
              {
                date:'2019-1-23',
                name:'+2340',
                class:'充值',
                details:'钱来的就是把这么容易'
              },
              {
                date:'2019-1-24',
                name:'-10090',
                class:'余额消费',
                details:'饿了么里的东西这么好，当然要多花点了'
              },
            ],
            theClass:[
              {
                title:'全部',
              },
              {
                title:'充值',
              },
              {
                title:'余额消费',
              },
              {
                title:'第三方支付消费',
              },
              {
                title:'支付失败退款',
              },
              {
                title:'订单退款',
              },
              {
                title:'提现',
              },
            ],
            time:[
              {
                title:'今天'
              },
              {
                title:'近7天'
              },
              {
                title:'近15天'
              },
              {
                title:'1个月'
              }
            ],
            activeA:'',
            activeB:'',

          }
      },
      components:{
        myA:myA,
      },
      methods:{
          makeActiveA(item,mess){
            this.activeA=item;
            let array=this.dataArray;
            if(mess=='全部'){
              this.tempData=array;
            }else{
              array=array.filter(function (str) {
                if(str.class==mess){
                  return str;
                }
              });
              this.tempData=array;
            }
          },
          makeActiveB(item){
          this.activeB=item;
        },
        dataAndTemp(){
            this.tempData=this.dataArray;
        }
      },
      mounted() {
          this.dataAndTemp();
      }
    }
</script>

<style scoped>
.balance{
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
.theButton{
  width:80px;
  height:30px;
  border:0px;
  color:#FFF;
  background-color: #909399;
  border-radius: 2px;
  margin-left:20px
}
.center li span{
  color: #F05D5D;
  font-size: 25px;
  font-weight: bold;
  margin:auto 5px;
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
  .theChoose{
    list-style: none;
    display: inline-block;
    text-align: left;
    padding:20px auto 20px auto;
    margin-left: 20px;
    width:940px;
    margin-top: 10px;
    height: 70px;
  }
  .theChoose li{
    display: inline-block;
  }
  .theChoose li span{
    display: inline-block;
    float: left;
    padding:5px 10px;
  }
.a0 .a0,
.a1 .a1,
.a2 .a2,
.a3 .a3,
.a4 .a4,
.a5 .a5,
.a6 .a6{
  background-color: #A7D6E8;
}
.b0 .b0,
.b1 .b1,
.b2 .b2,
.b3 .b3{
  background-color: #C7EFFF;
}
.theTable{
  margin-left: 20px;
  width:940px;
}
</style>
