<template>
  <div class="searchitem" @click="toSearch">
    <i class="iconfont icon-search"></i><span>输入店名进行查询</span>
  </div>
</template>

<script>
export default {
  name: "HomeSearchComp",
  // 自定义函数或事件监听
  methods:{
    toSearch(){
      this.$router.push("/Search")
    }
  }
};
</script>

<style scoped>
.searchitem{
    background-color: #ebebeb;
    color: #b7b7b7;
    /* 375减去左内边距和父元素的内边距 */
    width: 330rem;
    height: 30rem;
    border-radius: 15rem;
    padding-left: 15rem;
    line-height: 30rem;
    margin: 0rem auto;
  }
.searchitem span{
    margin-left: 10rem;
}
</style>