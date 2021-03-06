<template>
  <div class="tools">
    <div class="logout">
      <span>退出账号</span><span class="iconfont itemlogo">&#xe624;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserOptions"
};
</script>

<style scoped>
.tools{
  background-color: #FFFFFF;
}
.tools div{
  padding: 15px 10px 15px 10px;
  color: #b5b5b5;
  display: flex;
  justify-content: space-between;
}
.itemlogo{
  display: inline-block;
  transform: rotate(180deg);
}
</style>