<template>
<!-- 外边距100 - （90 - 50算出tip组件多余高度）+ 10 外边距加空隙 -->
  <div class="tabControl">
    <div 
      class="tabControlItem"
      v-for="(item,index) of itemNames" 
      :key="index"
      :class="{selected:current === index}"
      @click="select(index)">
        {{item}}
    </div>
    <!-- <div class="tabControlItem" :class="{selected:true}">点菜</div>
    <div class="tabControlItem">订单</div>
    <div class="tabControlItem">评价</div> -->
  </div>
</template>

<script>
export default {
  name: "ShopDetailTabControl",
  props:{
    itemNames:{
      type:Array,
      default:[]
    }
  },
  data(){
    return {
      current: 0
    }
  },
  methods:{
    select(index){
      this.current = index
      this.$emit("changeTable",index)
    }
  }
}
</script>

<style scoped>
.tabControl{
    /* background-color: yellow; */
    display: flex;
}
.tabControlItem{
    margin: 0px 10px;
    font-size: 18px;
    font-weight: 700;
    opacity: 0.6;
}
.selected{
    position: relative;
    opacity: 0.9;
}
.selected::after{
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