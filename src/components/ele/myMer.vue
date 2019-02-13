<template>
    <div class="myMer">
      <el-popover trigger="hover" placement="right-start"  v-for="(merList,index) in merArray" :key="index" class="mer">
        <popover-content :popoverTitle="merList.title" :popoverType="merList.type"
                         :popoverDistance="merList.distance"
                         :popoverShippingFee="merList.shippingFee"
                         :popoverIndex="index"></popover-content>
        <my-sub-mer slot="reference" :mer-image="merList.image" :mer-title="merList.title"
                    :mer-url="merList.url" :merRate="merList.rate"
                    :merDistance="merList.distance"
                    :merShippingFee="merList.shippingFee">
        </my-sub-mer>
      </el-popover>
    </div>
</template>

<script>
  import mySubMer from '@/components/ele/mySubMer'
  import bus from '@/components/ele/bus'
  import popoverContent from '@/components/ele/popoverContent'
    export default {
        name: "myMer",
      components:{
        mySubMer:mySubMer,
        popoverContent:popoverContent,
      },
      methods: {
        getMer() {
          let messStr=this.mess;
          let foodClassStr=this.foodClass;
          let tempArray=this.mer;
          if(messStr==''&&foodClassStr==''){
            return this.mer;
          }
          if(messStr!=''&foodClassStr!=''){
            console.log('123456');
            tempArray=tempArray.filter(function(item){
              if(item.type==foodClassStr){
                return item;
              }
            });
            tempArray = tempArray.filter(function (item) {
              if (item.title.indexOf(messStr) !== -1) {
                return item;
              }
            });
            return tempArray;
          }
          if(foodClassStr==''){
            tempArray=this.mer;
            console.log('---');
            tempArray = tempArray.filter(function (item) {
              if (item.title.indexOf(messStr) !== -1) {
                return item;
              }
            });
          }
          if(messStr==''){
            tempArray=this.mer;
            tempArray=tempArray.filter(function(item){
              if(item.type==foodClassStr){
                return item;
              }
            });
          }
          return tempArray;
        },
        getMerArray(){
          this.merArray=this.mer;
        }
      },
      mounted () {
        bus.$on('inceptMessage',(msg) => {
          this.mess=msg;
          this.merArray=this.getMer();
        });
        bus.$on('passFoodClass',(msg) => {
          if(msg=='全部商家'){
            msg='';
          }
          this.foodClass=msg;
          this.merArray=this.getMer();
        });
        this.getMerArray();
      },
      data(){
        return{
          merArray:[],
          tempMer:[],
          mess:'',
          foodClass:'',
          mer:[
            {
              title:'面条',
              url:'/#',
              type:'美食',
              rate:4,
              shippingFee:2,
              distance:20,
              image:require('../../assets/food/14meiweishiwu_01.png')
            },
            {
              title:'蛋糕',
              url:'/#',
              type:'美食',
              rate:3.1,
              shippingFee:0,
              distance:24,
              image:require('../../assets/food/14meiweishiwu_02.png')
            },
            {
              title:'汉堡',
              url:'/#',
              type:'美食',
              rate:3.7,
              shippingFee:0,
              distance:29,
              image:require('../../assets/food/14meiweishiwu_03.png')
            },
            {
              title:'三明治',
              url:'/#',
              type:'快餐便当',
              rate:2.7,
              shippingFee:0,
              distance:30,
              image:require('../../assets/food/14meiweishiwu_04.png')
            },
            {
              title:'咖啡',
              url:'/#',
              type:'甜品饮品',
              rate:3.2,
              shippingFee:4,
              distance:39,
              image:require('../../assets/food/14meiweishiwu_05.png')
            },
            {
              title:'牛排',
              url:'/#',
              type:'快餐便当',
              rate:3,
              shippingFee:5,
              distance:40,
              image:require('../../assets/food/14meiweishiwu_06.png')
            },
            {
              title:'红茶',
              url:'/#',
              type:'下午茶',
              rate:2.9,
              shippingFee:3,
              distance:37,
              image:require('../../assets/food/14meiweishiwu_07.png')
            },
            {
              title:'啤酒',
              url:'/#',
              type:'商店超市',
              rate:3.1,
              shippingFee:2,
              distance:33,
              image:require('../../assets/food/14meiweishiwu_08.png')
            },
            {
              title:'热狗',
              url:'/#',
              type:'快餐便当',
              rate:3.2,
              shippingFee:2,
              distance:31,
              image:require('../../assets/food/14meiweishiwu_09.png')
            },
            {
              title:'沙拉',
              url:'/#',
              type:'果蔬生鲜',
              rate:3.3,
              shippingFee:2,
              distance:10,
              image:require('../../assets/food/14meiweishiwu_10.png')
            },
            {
              title:'薯片',
              url:'/#',
              type:'快餐便当',
              rate:3.4,
              shippingFee:2,
              distance:60,
              image:require('../../assets/food/14meiweishiwu_11.png')
            },
            {
              title:'甜甜圈',
              url:'/#',
              type:'甜品饮品',
              rate:3.5,
              shippingFee:2,
              distance:20,
              image:require('../../assets/food/14meiweishiwu_12.png')
            },
            {
              title:'冰棒',
              url:'/#',
              type:'甜品饮品',
              rate:3.6,
              shippingFee:5,
              distance:30,
              image:require('../../assets/food/14meiweishiwu_13.png')
            },
            {
              title:'炸鸡腿',
              url:'/#',
              type:'快餐便当',
              rate:4.7,
              shippingFee:5,
              distance:36,
              image:require('../../assets/food/14meiweishiwu_14.png')            }
          ],
        }
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding:0;
  }
  .myMer{
    border:1px #ccc solid;
    margin-top:20px;
    display: inline-block;
    padding: 0 1px;
    background-color: #FFF;
  }
  .mer{
    width:289px;
    float:left;
    display: inline-block;
  }
  .mer:hover{
    background-color: #DFE4F0;
  }
  .el-popover{
    border: 4px #606266 solid;
  }
</style>
