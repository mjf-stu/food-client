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
    width: calc(375rem - 30 - 15);
    height: 30rem;
    border-radius: 15rem;
    padding-left: 15rem;
    line-height: 30rem;
  }
.searchitem span{
    margin-left: 10rem;
}
</style>