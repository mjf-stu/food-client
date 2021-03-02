<template>
    <div ref="BetterScrollWrapper">
        <div class="content">
          <slot></slot>
        </div>
    </div>
</template>

<script>
import BS from "@better-scroll/core"
export default {
  name: "BetterScroll",
  props: {
    isOnScroll: {
      type: Number,
      default: 0
    }
  },
  mounted(){
    let bs  = new BS(this.$refs.BetterScrollWrapper,{
        probeType: this.isOnScroll,
        // 允许content的元素进行点击事件
        click: true
    })

    if(this.isOnScroll){
      // 注意这里要使用箭头函数，因为bs.on所以如果使用普通函数this是betterScroll
      bs.on("scroll",(pos)=>{
        // pos:{x: 0, y: -2}
        this.$emit("listenScroll",pos.y)
      })
    }

  }
}
</script>

<style scoped>

</style>