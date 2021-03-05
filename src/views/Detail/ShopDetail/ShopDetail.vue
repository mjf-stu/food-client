<template>
<div>
    <div class="container-top">
        <header-top class="header-top">
            <i class="iconfont icon-fanhui iconSize" @click="toBack"></i>
        </header-top>
        <detail-top-tips :shopInfo="shopInfo" ref="tips"/>
    </div>
    <div>
        <tab-control class="tabControl" :itemNames="['点菜','评价','商家']" @changeTable="changeTable"/>
        <div class="otherInfo">
            <detail-menu v-show="infoShow===0" :shop_id="shopInfo.shop_id"/>
            <div v-show="infoShow===1">品论</div>
            <div v-show="infoShow===2">商家</div>
        </div>
    </div>
</div>
</template>

<script>
// 引入公共组件
import HeaderTop from "@/components/HeaderTop/HeaderTop.vue"

// 引入子组件
import DetailTopTips from "./child/DetailTopTips.vue"
import TabControl from "./child/ShopDetailTabControl.vue"
import DetailMenu from "./child/DetailMenu.vue"

export default {
  name: "ShopDetail",
  components: { 
    // 公共组件
      HeaderTop,
    // 子组件
      DetailTopTips,
      TabControl,
      DetailMenu
  },
  data(){
    return{
        shopInfo:{},
        foodInfo:{
            msg:"这里是点菜区域"
        },
        sorceInfo:{
            msg:"不好意思暂时还未有评价信息"
        },
        storeInfo:{
            msg:"不好意思暂时还未提供门店信息"
        },
        // 控制tabcontrol显示那个分块
        infoShow:0,
    }
  },
  created(){
    this.shopInfo =  this.$route.query.shopInfo
  },
  methods:{
    //   自定义事件与原生事件
    toBack(){
      this.$router.go(-1)
    },
    // 监听tabcontrol的点击事件
    changeTable(index){
      this.infoShow = index
    },

  },
}
</script>

<style scoped>
.container-top{
    position: relative;
}
.header-top{
    height: 80px;
}
.iconSize{
    font-size: 25rem;
}
.otherInfo{
    height: auto;
    background-color: #FFFFFF;

    position:absolute;
    top: 165px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: var(--menu-index);
}
.tabControl{
  margin-top: 55px;
}

</style>