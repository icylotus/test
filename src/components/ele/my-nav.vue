<template>
    <div class="my-nav">
      <ul class="navA" v-bind:class="'a'+selectedA">
        <span>商家分类:</span>
        <my-a v-for="(list,index) in merList" :key="index" :class="'a'+index">
          <a href="javascript:void(0);" @click="changeA(index,list.subMerIndex,list.title)">{{list.title}}</a>
        </my-a>
      </ul>
      <ul class="subNavA" v-bind:class="'b'+subSelectedA" v-show="subMer">
        <my-a class="b">
          <a href="javascript:void(0);" @click="changeSubA('b')">全部</a>
        </my-a>
        <my-a v-for="(list,index) in subMerList" :key="index" :class="'b'+index">
          <a href="javascript:void(0);" @click="changeSubA(index)">{{list.title}}</a>
        </my-a>
      </ul>
      <div>

      </div>
    </div>
</template>

<script>
  import myA from '@/components/ele/myA'
  import bus from '@/components/ele/bus'

  export default {
        name: "my-nav",
      components:{
          myA:myA
      },
      data(){
          return{
            selectedA:'',
            subSelectedA:'',
            subMer:false,
            merList:[
              {
                title:'全部商家',
                url:'/#',
                subMerIndex:''
              },
              {
                title:'美食',
                url:'/#',
                subMerIndex:'subMerList'
              },
              {
                title:'快餐便当',
                url:'/#',
                subMerIndex:'subMerList'
              },
              {
                title:'特色菜系',
                url:'/#',
                subMerIndex:'subMerList'
              },
              {
                title:'异国料理',
                url:'/#',
                subMerIndex:'subMerList'
              },
              {
                title:'小吃夜宵',
                url:'/#',
                subMerIndex:'subMerList'
              },
              {
                title:'甜品饮品',
                url:'/#',
                subMerIndex:'subMerList'
              },
              {
                title:'果蔬生鲜',
                url:'/#',
                subMerIndex:'subMerList'
              },
              {
                title:'商店超市',
                url:'/#',
                subMerIndex:'subMerList'
              },
              {
                title:'鲜花绿食',
                url:'/#',
                subMerIndex:'subMerList'
              },
              {
                title:'早餐',
                url:'/#',
                subMerIndex:'subMerList'
              },
              {
                title:'午餐',
                url:'/#',
                subMerIndex:'subMerList'
              },
              {
                title:'下午茶',
                url:'/#',
                subMerIndex:'subMerList'
              },
              {
                title:'晚餐',
                url:'/#',
                subMerIndex:'subMerList'
              },
              {
                title:'夜宵',
                url:'/#',
                subMerIndex:'subMerList'
              }
            ],
            subMerList:[
              {
                title:'简餐便当',
                url:'/#',
              },
              {
                title:'小吃炸串',
                url:'/#',
              },
              {
                title:'面食粥点',
                url:'/#',
              }
              ,{
                title:'地方菜系',
                url:'/#',
              },
              {
                title:'汉堡披萨',
                url:'/#',
              },
              {
                title:'香锅冒菜',
                url:'/#',
              },
              {
                title:'日韩料理',
                url:'/#',
              },
              {
                title:'轻食西餐',
                url:'/#',
              },
            ]
          }
      },
      methods:{
          changeA(item,mer,title){
            this.selectedA=item;
            this.subMer=true;
            if(mer==''){
              this.subMer=false;
            }
            bus.$emit('passFoodClass',title);
          },
        changeSubA(item){
          this.subSelectedA=item;
        }
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .my-nav{
    margin-top:80px;
    border:1px #CCC solid;
    text-align: left;
    box-shadow: 0 1px 1px #CCC;
    padding:10px 0;
    background-color: #FFF;
  }
  .navA{
    margin-left:20px;
    top:0px;
    list-style: none;
    display: inline-block;
  }
  .navA span{
    float:left;
    display: inline-block;
    font-size:15px;
    color:#597178;
    margin-top: 5px;
    margin-right: 10px;
  }
  .subNavA{
    margin-left:100px;
    top:0px;
    list-style: none;
    display: inline-block;
  }
  .a0 .a0,
  .a1 .a1,
  .a2 .a2,
  .a3 .a3,
  .a4 .a4,
  .a5 .a5,
  .a6 .a6,
  .a7 .a7,
  .a8 .a8,
  .a9 .a9,
  .a10 .a10,
  .a11 .a11,
  .a12 .a12,
  .a13 .a13,
  .a14 .a14{
    background-color: #A7D6E8;
  }
  .bb .b,
  .b0 .b0,
  .b1 .b1,
  .b2 .b2,
  .b3 .b3,
  .b4 .b4,
  .b5 .b5,
  .b6 .b6,
  .b7 .b7,
  .b8 .b8,
  .b9 .b9{
    background-color: #C7EFFF;
  }


</style>
