<template>
    <div>
        <home-header-top :isShow="isShow"/>
        <better-scroll 
          class="wrapper"
          :isOnScroll="2"
          @listenScroll="listenScroll">
            <div class="baby">
              <home-search-comp ref="search-comp"/>
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

export default {
    name : "Home",
    components: {
      //公共组件注册
      BetterScroll,

      //子组件的注册
      HomeHeaderTop,
      HomeSearchComp
    },
    data(){
      return {
        //控制头部是否切换
        isShow: true,
        //获取searchItem的高度
        searchCompOffsetTop: 0,
        searchCompHeight: 0,
      }
    },
    //生命周期函数
    mounted(){
      //通过$refs获取对应的组件---通过$el获取这个组件的dom对象
      this.searchCompOffsetTop = this.$refs["search-comp"].$el.offsetTop
      this.searchCompheight = this.$refs["search-comp"].$el.offsetHeight
    },
    //自定义函数与事件
    methods:{
      //监听自定义事件
      listenScroll(y){
        if(y<-(this.searchCompOffsetTop+this.searchCompheight)){
          this.isShow = false
        }
        else{
          this.isShow = true
        }
      },
    }
}
</script>

<style scoped>
/* betterscroll的容器宽高 */
  .wrapper{
    width: 375rem;
    position: absolute;
    left: 0px;
    top: 50px;
    bottom: 50px;
    overflow: hidden;
    background-image: linear-gradient(to right,  var(--headerTop-bgStart), var(--headerTop-bgEnd));
  }
  .baby{
    height: 1000px;
    width: calc(375rem - 30);
    background-color: #f5f5f5;
    /* 设置圆角 */
    border-top-left-radius: 24rem;
    border-top-right-radius: 24rem;
    padding: 15rem 15rem 0rem 15rem;
  }
</style>