<template>
    <div ref="BetterScrollWrapper">
        <div class="content">
          <slot></slot>
        </div>
    </div>
</template>

<script>
import BS from "@better-scroll/core"
import PullUp from "@better-scroll/pull-up"

BS.use(PullUp)

export default {
  name: "BetterScroll",
  props: {
    isOnScroll: {
      type: Number,
      default: 0
    },
    isPullUpLoad:{
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      bs : null
    }
  },
  mounted(){
    this.bs  = new BS(this.$refs.BetterScrollWrapper,{
        probeType: this.isOnScroll,
        // 允许content的元素进行点击事件
        click: true,
        // 下拉加载功能
        pullUpLoad: this.isPullUpLoad
    })

    if(this.isOnScroll && this.bs !==null){
      // 注意这里要使用箭头函数，因为bs.on所以如果使用普通函数this是betterScroll
      this.bs.on("scroll",(pos)=>{
        // pos:{x: 0, y: -2}
        this.$emit("listenScroll",pos.y)
      })
    }

    if(this.isPullUpLoad && this.bs !==null){
      // 需要使用箭头函数否则this指向的是bs
      this.bs.on("pullingUp",()=>{
        //加载完成调用否则下次无法继续加载
        this.$emit("loadShopList",this.bs)
        // this.bs.finishPullUp()
      })
    }
  },
  methods:{
    // 刷新滚动条的可滚动高度
    updateScroll(){
      if(this.bs!==null){
        this.bs.refresh()
      }
    }
  }
}
</script>

<style scoped>

</style>