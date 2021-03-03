<template>
    <div>
        <home-header-top :isShow="HeaderisShow"/>
        <home-sort 
          class="home-sort-fix" 
          v-show="SortisShow"
          ref="home-sort1"/>
        <better-scroll 
          class="wrapper"
          :isOnScroll="3"
          @listenScroll="listenScroll"
          :isPullUpLoad="true"
          @loadShopList="loadShopList"
          ref="bs">
            <div class="baby">
              <home-search-comp ref="search-comp"/>
              <home-nav/>
              <home-sort ref="home-sort2"/>
              <shop-item 
                v-for="item of shopDatas.data"
                :shopInfo="item"
                :key="item.shop_id"
                :starSize="16"
                @imgLoadOK="imgLoad"/>
            </div>
        </better-scroll>
    </div>
</template>

<script>
// 引入js工具类
import debounce from "@/JSUtil/debounce.js"

// 引入axios请求函数
import {shopList} from "@/network/shop_req"

//引入公共组件
import BetterScroll from "@/components/BetterScroll/BetterScroll.vue"
import ShopItem from "@/components/ShopItem/ShopItem.vue"
import StarAssess from '@/components/StarAssess/StarAssess.vue'

//引入子组件
import HomeHeaderTop from "./child/HomeHeaderTop.vue"
import HomeSearchComp from "./child/HomeSearchComp.vue"
import HomeNav from './child/HomeNav.vue'
import HomeSort from './child/HomeSort.vue'

export default {
    name : "Home",
    components: {
      //公共组件注册
      BetterScroll,
      ShopItem,
      StarAssess,

      //子组件的注册
      HomeHeaderTop,
      HomeSearchComp,
      HomeNav,
      HomeSort,
    },
    data(){
      return {
        //控制头部是否切换
        HeaderisShow: true,

        //获取searchItem的高度
        searchCompOffsetTop: 0,
        searchCompHeight: 0,

        //控制筛选栏是否显示
        SortisShow: false,
        sortCompOffsetTop: 0,

        //请求数据列表
        shopDatas:{
          // 默认没有区分类型
          type:"all",
          page:-1,
          data:[]
        },

        // 图片加载更新滚动条防抖函数
        bsDebounce: null
      }
    },
    //生命周期函数
    created(){

      // 获取后台shoplist数据 通过methods方法来请求
      this.getShopList(this.shopDatas)

    },
    mounted(){
      //通过$refs获取对应的组件---通过$el获取这个组件的dom对象
      this.searchCompOffsetTop = this.$refs["search-comp"].$el.offsetTop
      this.searchCompheight = this.$refs["search-comp"].$el.offsetHeight

      this.sortCompOffsetTop = this.$refs["home-sort2"].$el.offsetTop

      // 创建滚动条更新防抖函数
      this.bsDebounce = debounce(this.$refs.bs.updateScroll,500)
    },
    //自定义函数与事件
    methods:{
      //自定义事件区域================================

      // betterScroll的事件================================
      // 监听滚动条的滚动距离
      listenScroll(y){
        // 判断header组件是否切换
        if(y<-(this.searchCompOffsetTop+this.searchCompheight)){
          this.HeaderisShow = false
        }
        else{
          this.HeaderisShow = true
        }
        // 判断筛选栏是否显示
        this.SortisShow = this.sortCompOffsetTop <= -y?true : false
      },

      //监听下拉加载数据事件
      loadShopList(bs){
        this.getShopList(this.shopDatas).then(val=>{bs.finishPullUp()})
      },


      // shopItem的事件================================
      // 图片加载事件
      imgLoad(){
        this.bsDebounce()
        // this.$refs.bs.updateScroll()
      },
      
      // 函数区域================================

      // 数据库请求函数================================
      // 获取列表数据函数
      getShopList(shopDatas){
        // shopList.page = shopList.page + 1
        let page = ++shopDatas.page
        let type = shopDatas.type
        return shopList(page,type).then(results=>{
          shopDatas.data.push(...results)
          // console.log(this.shopDatas)
        }).catch(err=>{console.log("获取shoplist出错"+err)})
      }
    }
}
</script>

<style scoped>
  .home-sort-fix{
    margin-top: 0rem;
    position: absolute;
    top: 48px;
    left: 0px;
    right: 0px;
    z-index: var(--sort-index);
  }
/* betterscroll的容器宽高 */
  .wrapper{
    width: 375rem;
    position: absolute;
    left: 0rem;
    top: 49px;
    z-index: var(--bs-index);
    bottom: 50px;
    overflow: hidden;
    background-image: linear-gradient(to right,  var(--headerTop-bgStart), var(--headerTop-bgEnd));
  }
  .baby{
    /* height: 1000px; */
    width: 375rem;
    background-color: #f5f5f5;
    /* 设置圆角 */
    border-top-left-radius: 24rem;
    border-top-right-radius: 24rem;
    padding-top: 15rem;
  }
</style>