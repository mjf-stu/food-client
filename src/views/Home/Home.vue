<template>
    <div>
        <home-header-top/>
        <!-- 圆角残留的颜色 -->
        <div class="bgRadius"></div>
        <div class="content"></div>
    </div>
</template>

<script>
import HomeHeaderTop from "./child/HomeHeaderTop.vue"
export default {
    name : "Home",
    components: {
        HomeHeaderTop
    }
}
</script>

<style scoped>
/* 圆角残留的颜色设置 */
  .bgRadius{
    height: 40px;
    background-image: linear-gradient(to right,  var(--headerTop-bgStart), var(--headerTop-bgEnd));
  }
  .content{
    width: 375px;
    height: 200px;
    border-radius: 40px;
    background-color: #fcfcfc;
    position: absolute;
    left: 0px;
    top: 50px;
  }
</style>