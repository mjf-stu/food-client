<template>
  <div class="TabBarContain">
    <tab-bar-item
      class="TabBarItem"
      v-for="(item, index) of itemName"
      :key="index"
      v-on:click.native="selected(index)"
      :class="{ selected: current === index }"
    >
      <template v-slot:itemIcon>
        <span class="iconfont iconfontSize" :class="itemIcon[index]"></span>
      </template>
      <template v-slot:itemName> {{ item }} </template>
    </tab-bar-item>
  </div>
</template>

<script>
//引入组件
import TabBarItem from "./TabBarItem.vue";

export default {
  name: "TabBarContain",
  components: {
    TabBarItem,
  },
  props: {
    itemName: {
      type: Array,
      default: [],
    },
    itemIcon: {
      type: Array,
      default: [],
    },
    itemRouter: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      //   默认选中状态
      current: 0,
      route: this.$route
    };
  },
  watch:{
    //   监听route改变（如果通过回退按钮也要改变tabbar中的高亮）
      $route(){
          for(let i=0 ;i<this.itemRouter.length;i++){
              if(this.itemRouter[i]===this.$route.path){
                  this.current = i
              }
          }
      }
  },
  methods: {
    //   选中改变选中的item index
    selected(index) {
      // 跳转对应的路由
      this.$router.push(this.itemRouter[index]).catch(err=>{});
    },
  },
};
</script>

<style scoped>
.TabBarContain {
  height: 50px;
  display: flex;
  box-shadow: 0px -1px 1px var(--tabbarContain-shadow);
}
.iconfontSize{
  margin-top: 5px;
  font-size: var(--tabbarIcon-fontsize);
  display: inline-block;
}
/* 选中item变换颜色 */
.selected {
  color: var(--main-color);
}
</style>