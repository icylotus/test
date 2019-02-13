<template>
    <div class="popoverContent">
      <ul class="title">
        <li>
          {{popoverTitle}}
        </li>
        <li>
          <span>{{popoverTitle}}</span>
        </li>
      </ul>
      <hr/>
      <ul class="content">
        <li v-show="popoverShow">
          <span style="background-color: fuchsia;color:#fff;margin-right:5px;">新</span>新店开业，欢迎光临</li>
        <li v-show="popoverShow">
          <span style="background-color: darkgray;color:#606266;margin-right:5px;">保</span>该商户已由灵能灵险承保，食品安全有保障</li>
        <li style="margin:10px 0;">
          <span style="border-radius:3px;color:#000;font-size:15px;padding:3px 10px;background-color: #DCDFE6">配送费：{{popoverShippingFee}}</span>
          <span style="border-radius:3px;color:#000;font-size:15px;padding:3px 10px;background-color: #DCDFE6">平均{{popoverDistance}}后到达</span>
        </li>
        <li style="margin:10px 0;">
          {{popoverType}}
        </li>
      </ul>

    </div>
</template>

<script>
    export default {
        name: "popoverContent",
      data(){
          return {
            popoverShow:false,
          }
      },
      props:[
        'popoverTitle',
        'popoverType',
        'popoverIndex',
        'popoverDistance',
        'popoverShippingFee'
      ],
      methods:{
          isPopoverShow(){
            if(this.popoverType=='美食'){
              this.popoverShow=true;
            }
          }
      },
      created() {
        this.isPopoverShow();
      }
    }
</script>

<style scoped>
*{
  margin: 0;
  padding:0;
}
  .popoverContent{
  }
  .popoverContent hr{
    margin:5px 0;
  }
  .popoverContent ul{
    list-style: none;
  }
  .title{

  }
  .title li{
    font-size:20px;
    color:#000000;
  }
  .title li span{
    font-size:12px;
    color:#606266;
  }
  .content li span{
    padding:3px;
    display: inline-block;
    font-size:12px;
    border-radius: 2px;
  }
</style>
