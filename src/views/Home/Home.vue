<template>
    <div>
        <home-header-top/>
        <!-- 圆角残留的颜色 -->
        <div class="bgRadius"></div>
        <better-scroll class="wrapper">
            <div class="baby"></div>
        </better-scroll>
    </div>
</template>

<script>
import HomeHeaderTop from "./child/HomeHeaderTop.vue"
import BetterScroll from "@/components/BetterScroll/BetterScroll.vue"
export default {
    name : "Home",
    components: {
        HomeHeaderTop,
        BetterScroll,
    }
}
</script>

<style scoped>
/* 圆角残留的颜色设置 */
  .bgRadius{
    height: 40px;
    background-image: linear-gradient(to right,  var(--headerTop-bgStart), var(--headerTop-bgEnd));
  }
/* betterscroll的容器宽高 */
  .wrapper{
    width: calc(375rem - 20rem);
    position: absolute;
    left: 0px;
    top: 50px;
    bottom: 50px;
    overflow: hidden;
    background-color: #e6e6e6;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    padding: 10rem 10rem 0rem 10rem;
  }
</style>