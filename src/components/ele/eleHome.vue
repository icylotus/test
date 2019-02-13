<template>
  <div ref="list" v-on:scroll="handleScroll" class="home">
    <place><a href="/#"><span>{{currentPlace}}</span></a></place>
    <autoInput></autoInput>
    <myNav></myNav>
    <my-mer></my-mer>
  </div>
</template>

<script>
  import place from '@/components/ele/place'
  import autoInput from '@/components/ele/autoInput'
  import myNav from '@/components/ele/my-nav'
  import myMer from '@/components/ele/myMer'
  import Vue from 'vue'
  export default{
    data(){
      return {
        recommendList:[], //存放滚动区域要显示的数据
        isLoading:false, //默认没有在加载数据
        currentPlace:'共青城'
      }
    },
    methods:{
      //获取数据
      getRecommendList(){
        //表示正在加载数据
        this.isLoading=true;
        /*$.ajax.get('news/before/'+preDay).then(res=>{
          this.recommendList.push(res);
          //数据请求完成
          this.isLoading=false;
        })*/
      },
      handleScroll(){
        const $list=this.$refs.list;
        //如果数据有在加载中则这次请求退出
        if(this.isLoading) return;
        //已经滚动的距离加页面的高度等于整个内容区高度时,视为接触到底部
        //scrollTop 获取到顶部的滚动距离
        // clientHeight 表示页面视口高度
        // scrollHeight 页面内容的高度
        if($list.scrollTop+document.body.clientHeight>=$list.scrollHeight){
          this.getRecommendList();
        }
      }
    },
    mounted(){
      this.getRecommendList()
    },
    components:{
      place:place,
      autoInput:autoInput,
      myNav:myNav,
      myMer:myMer
    }
  }
  let bus=new Vue();
</script>

<style scoped>
*{
  margin:0;
  padding:0;
}
  .home{
    width:100%;
    height:100%;
    display: inline-block;
}
</style>
