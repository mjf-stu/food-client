<template>
    <tab-bar-contain :itemIcon="arrIcon" :itemName="arrName" :itemRouter="arrRouter"/>
</template>

<script>
import TabBarContain from './TabBarContain.vue'
export default {
  name: "TanBar",
  components: { TabBarContain },
  data: function(){
      return {
          arrIcon:["icon-home","icon-search","icon-order","icon-Profile"],
          arrName:["外卖","搜索","订单","我的"],
          arrRouter:["/Home","/Search","/Order","/Profile"],
      }
  }
}
</script>

<style scoped>

</style>