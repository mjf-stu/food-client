<template>
  <div class="container">
    <div class="msg">
      <div>
        <img :src="shopInfo.shopImg" @load="imgLoad"/>
      </div>
      <div>
        <div class="shopName">{{shopInfo.name}}</div>
        <div class="msgMiddle">
          <div :style="starAssessWidth">
              <star-assess :avgScore="shopInfo.avgScore" :starSize="starSize"/>
          </div>
          <span>￥{{shopInfo.avgPrice}}/人</span><span>{{shopInfo.areaName}}</span>
        </div>
        <div class="ellipsis">
          <span>{{shopInfo.cateName}}</span>
          <span class="tagMsg" v-for="item of shopInfo.smartTags" :key="item.id">{{item.tagMsg}}</span>
        </div>
      </div>
    </div>
    <div class="prefer" v-for="item of shopInfo.preferMsg" :key="item.id">
      <div><span v-if="item.promotion!==''">{{item.promotion}}</span></div>
      <div class="ellipsis"><img :src="item.icon"/><span>{{item.content}}</span></div>
    </div>
  </div>
</template>

<script>
// 引入公共组件
import StarAssess from "../StarAssess/StarAssess.vue"

export default {
  name: "ShopList",
  components:{
    StarAssess
  },
  props:{
    shopInfo:{
      type:Object,
      default:{}
    },
    starSize:{
      type:Number,
      default:16
    }
  },
  data(){
    return{
      starAssessWidth:{
        width: "0rem"
      }
    }
  },
  created(){
    this.starAssessWidth.width = 5 * this.starSize + "rem"
  },
  methods:{
    // 监听图片加载事件
    imgLoad(){
      this.$emit("imgLoadOK")
    }
  }
};
</script>

<style scoped>
.container {
  width: 365rem;
  font-size: 12rem;
  background-color: #ffffff;
  color: var(--comp-color);

  border-bottom: 1px solid #e4e4e4;
  padding: 10rem 0rem 8rem 10rem;
}


.msg,
.prefer {
  /* overflow: hidden; */
  display: flex;
  align-items: center;
}


.shopName {
    font-size: 16rem;
    color: #000000;
}
.msgMiddle{
  display: flex;
}
.msgMiddle span{
  margin-left: 20rem;
}
.tagMsg{
  color: var(--ShopList-tagcolor);
  margin-left: 10rem;
}


.msg img {
  height: 80rem;
  width: 80rem;
  vertical-align: middle;
}
.msg > div:nth-child(2){
  line-height: 25rem;
}
.msg > div:nth-child(2),
.prefer > div:nth-child(2) {
  margin-left: 10rem;
  flex: 1;
}


.prefer {
  margin-top: 6rem;
}
.prefer img{
  width: 15rem;
  height: 15rem;
  vertical-align: top;
  position: relative;
  bottom: 2rem;
}
.prefer > div {
  padding-top: 8rem;
}
.prefer > div:nth-child(1) {
  width: 80rem;
  text-align: right;
  border-top: 1px transparent solid;
  position: relative;
  bottom: 2rem;
}
.prefer > div:nth-child(1) span{
  border: 1px solid #ffe7b8;
  color: #ffa462;
  padding: 1px;
  border-radius: 5px;
}
.prefer > div:nth-child(2) {
  border-top: 1px #dadada solid;
}
.prefer > div:nth-child(2) span{
  margin-left: 5rem;
}
</style>