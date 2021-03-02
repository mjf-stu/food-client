<template>
    <div>
        <home-header-top :isShow="HeaderisShow"/>
        <home-sort 
          class="home-sort-fix" 
          v-show="SortisShow"
          ref="home-sort1"/>
        <better-scroll 
          class="wrapper"
          :isOnScroll="2"
          @listenScroll="listenScroll">
            <div class="baby">
              <home-search-comp ref="search-comp"/>
              <home-nav/>
              <home-sort ref="home-sort2"/>
            </div>
        </better-scroll>
    </div>
</template>

<script>
//引入公共组件
import BetterScroll from "@/components/BetterScroll/BetterScroll.vue"

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
      }
    },
    //生命周期函数
    mounted(){
      //通过$refs获取对应的组件---通过$el获取这个组件的dom对象
      this.searchCompOffsetTop = this.$refs["search-comp"].$el.offsetTop
      this.searchCompheight = this.$refs["search-comp"].$el.offsetHeight

      this.sortCompOffsetTop = this.$refs["home-sort2"].$el.offsetTop
    },
    //自定义函数与事件
    methods:{
      //监听自定义事件
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
    }
}
</script>

<style scoped>
  .home-sort-fix{
    margin-top: 0rem;
    position: absolute;
    top: 50px;
    left: 0px;
    right: 0px;
    z-index: var(--sort-index);
  }
/* betterscroll的容器宽高 */
  .wrapper{
    width: 375rem;
    position: absolute;
    left: 0rem;
    top: 50px;
    z-index: var(--bs-index);
    bottom: 50px;
    overflow: hidden;
    background-image: linear-gradient(to right,  var(--headerTop-bgStart), var(--headerTop-bgEnd));
  }
  .baby{
    height: 1000px;
    width: 375rem;
    background-color: #f5f5f5;
    /* 设置圆角 */
    border-top-left-radius: 24rem;
    border-top-right-radius: 24rem;
    padding-top: 15rem;
  }
  
</style>