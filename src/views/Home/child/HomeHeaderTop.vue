<template>
  <div>
    <transition name="header">
      <header-top v-show="isShow">
        <slot>首页</slot>
      </header-top>
    </transition>
    <transition name="search">
      <div class="headerTop" v-show="!isShow">
        <home-search-comp class="search" />
      </div>
    </transition>
  </div>
</template>

<script>
//引入公共组件
import HeaderTop from "@/components/HeaderTop/HeaderTop.vue";
//引入兄弟组件
import HomeSearchComp from "./HomeSearchComp.vue";

export default {
  name: "HomeHeaderTop",
  components: {
    // 注册公共组件
    HeaderTop,
    // 注册兄弟组件
    HomeSearchComp,
  },
  props: {
    isShow: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.headerTop {
  height: 50rem;
  padding-left: 15rem;
}
.search {
  width: 270rem;
  margin-top: 10rem;
}
.search-enter-active,
.header-enter-active,
.header-enter-active,
.search-leave-active {
  transition: opacity 700ms;
}
.search-enter,
.header-enter {
  opacity: 0;
}
</style>