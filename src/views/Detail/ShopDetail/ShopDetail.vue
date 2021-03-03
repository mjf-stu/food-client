<template>
    <div class="container">
        <header-top class="header-top">
            <i class="iconfont icon-fanhui iconSize" @click="toBack"></i>
        </header-top>
        <detail-top-tips :shopInfo="shopInfo" ref="tips"/>
        <div class="tabControl" style="margin-top:70rem;">
            <div id="selected">点菜</div>
            <div>订单</div>
            <div>评价</div>
        </div>
    </div>
</template>

<script>
// 引入公共组件
import HeaderTop from "@/components/HeaderTop/HeaderTop.vue"

// 引入子组件
import DetailTopTips from "./child/DetailTopTips.vue"

export default {
  name: "ShopDetail",
  components: { 
    // 公共组件
      HeaderTop,
    // 子组件
      DetailTopTips
  },
  data(){
      return{
          shopInfo:{}
      }
  },
  methods:{
      toBack(){
        this.$router.go(-1)
      }
  },
  created(){
      this.shopInfo =  this.$route.query.shopInfo
  },
  mounted(){

  }
}
</script>

<style scoped>
.container{
    position: relative;
}
.header-top{
    height: 90px;
}
.iconSize{
    font-size: 25rem;
}

.tabControl{
    /* background-color: yellow; */
    display: flex;
}
.tabControl div{
    margin: 0px 10px;
    font-size: 18px;
    font-weight: 700;
    opacity: 0.6;
}
#selected{
    position: relative;
    opacity: 0.9;
}
#selected::after{
    content: '';
    height: 2px;
    width: 25px;
    display: block;
    background-color: rgb(255, 213, 99);

    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
}
</style>