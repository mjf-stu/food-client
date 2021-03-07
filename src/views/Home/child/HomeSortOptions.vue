<template>
  <div class="OptionsContain" @click="exit">
      <div class="listContain" v-show="isshow===1">
          <div @click="selectOptions('')">默认排序</div>
          <div @click="selectOptions('avgScore')">按评分排</div>
          <div @click="selectOptions('avgPrice')">按价格排</div>
      </div>
      <div class="listContain" v-show="isshow===2">
          <div>按评分排---第二个智能选项</div>
          <div>按价格排</div>
      </div>
      <div class="listContain" v-show="isshow===3">
          <div>按评分排---第三个智能选项</div>
          <div>按价格排</div>
      </div>
      <div class="listContain" v-show="isshow===4">
          <div>按评分排---第四个智能选项</div>
          <div>按价格排</div>
      </div>
  </div>
</template>

<script>
export default {
  name: "HomeSortOptions",
  data(){
      return{
          isshow:0
      }
  },
  methods:{
      exit(){
          this.$emit("exitOptions")
      },
      selectOptions(option){
          this.$emit("selectOptions",option)
      }
  }
}
</script>

<style scoped>
.OptionsContain{
    background-color: #00000042;
}
.listContain{
    background-color: #FFFFFF;
}
.listContain div{
    border-bottom: 1px solid #e4e4e4;
    padding: 10px;
}
</style>