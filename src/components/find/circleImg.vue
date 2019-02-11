<template>
    <div class="overall">
      <ul v-for="(list,index) in imgList" @click="showPopupZoomImg(index)" :key="index" :width="imgWidth+'px'">
       <img :src="list.url" :width="imgWidth+'px'">
      </ul>
    </div>
</template>

<script>
    export default {
        name: "circleImg",
      data(){
          return{

          }
      },
      methods: {
        showPopupZoomImg(item) {
          this.$store.dispatch('toChangePopupZoomImg');
          this.$store.dispatch('toGetTheCircleImgList',this.imgList);
          this.$store.dispatch('toGetTheNowImgNum',item);
        },
      },
      props:[
        'imgList',
        'imgWidth',
      ]
    }
</script>

<style scoped>
.overall{
  width: 100%;
}
.overall ul{
  margin-right: 5px;
  display: inline-block;
}
  .overall ul img{
    float:left;
  }
</style>
