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
  mounted(){
    console.log(this)
    let bs  = new BS(this.$refs.BetterScrollWrapper,{
        
    })
  }
}
</script>

<style scoped>

</style>