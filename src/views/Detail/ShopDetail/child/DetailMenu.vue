<template>
  <div class="menu">
    <!-- 左侧导航栏 -->
    <div class="menuNav">
      <div class="navContain">
        <div
          class="navItem"
          v-for="(item, index) of tagList"
          :key="item.id"
          :class="{ selected: index === current }"
          @click="select(index, item.food_tag_name)"
        >
          <img :src="item.icon" v-if="item.icon !== ''" />
          {{ item.food_tag_name }}
          <!-- 显示在右上角的计数器 -->
          <div class="tagCount" v-show="getTagCount(item.shop_id,item.food_tag_name)>0">
            {{getTagCount(item.shop_id,item.food_tag_name)}}
          </div>
        </div>
      </div>
    </div>
    <!-- 右侧商品列表 -->
    <div class="menuList">
      <!-- 商品列表的分类title显示 -->
      <div class="currentNav">{{ currentItem }}</div>
      <div class="itemContain" @scroll="itemContainScroll" ref="itemContain">
        <template v-for="(tag, index) in tagList">
          <div :key="tag.id">
            <!-- 商品对应的title -->
            <div class="itemTitle" v-if="index !== 0" :ref="'tag' + index">
              {{ tag.food_tag_name }}
            </div>
            <!-- 商品对应的item -->
            <menu-item
              v-for="item of foodList[index]"
              :foodItem="item"
              :key="item.id"
            />
          </div>
        </template>
      </div>
    </div>
    <!-- 底部提交订单栏 -->
    <div class="menuCart">
      <div class="left">
        <img src="@/assets/img/Detail/cartOFF.png"/>
        <span>请选择你的订单</span>
      </div>
      <div class="right">
        <div>1份起送</div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入axios请求函数
import { shopDetail } from "@/network/shop_req.js";

// 引入公共组件
import MenuItem from "./MenuItem.vue";

export default {
  components: { MenuItem },
  name: "DetailMenu",
  props: {
    shop_id: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      current: 0,
      currentItem: "",
      tagList: [],
      foodList: [],
      // 记录conatin有所有的tagoffsetTop
      tagY: [0],
      // 用来控制监视的滚动在一定范围内只会进行1次内容的更改
      currentTag: 0,
    };
  },
  created() {
    // 获取点菜tabControl的对应数据
    this.getShopDetail(this.shop_id);

    // console.log(this.foodList)
  },
  updated() {
    // 获取各个itemTitle的offsetTop
    if (this.tagY.length === 1) {
      for (let i = 1; i <= this.tagList.length - 1; i++) {
        this.tagY[i] = this.$refs["tag" + i][0].offsetTop;
      }
      this.tagY[this.tagY.length] = Number.MAX_VALUE;
    }
  },
  methods: {
    // 事件相关===============
    // 监听menuItem的点击事件
    select(index, tagName) {
      // 更改nav样式
      this.current = index;
      // 更改currentItem显示对应的tag
      this.currentItem = tagName;
      // 更改当前的tag索引
      this.currentTag = index;
      // 跳转到对应tag的scrollTop
      this.$refs.itemContain.scrollTop = this.tagY[this.currentTag];
    },

    // 监听itemcontain的滚动条
    itemContainScroll(event) {
      let y = event.target.scrollTop;
      for (let i = 0; i < this.tagY.length - 1; i++) {
        if (y > this.tagY[i] && y < this.tagY[i + 1] && this.currentTag !== i) {
          // 更改currentItem显示对应的title
          this.currentItem = this.tagList[i].food_tag_name;
          // 更改nav的样式
          this.current = i;
          // 更改当前currentTag索引
          this.currentTag = i;
          break;
        }
      }
    },

    //   数据库请求相关=============
    //   获取详情数据
    getShopDetail(shop_id) {
      shopDetail(shop_id).then((val) => {
        for (let item of val) {
          this.tagList.push(item.tag);
          this.foodList.push(item.spus);
        }
        this.currentItem = this.tagList[0].food_tag_name;
      });
    },

    // 自定义函数=============
    getTagCount(shop_id,tagName){
      return this.$store.getters["shopCart/getGoodsNumberByTagName"](shop_id,tagName)
    }
  },
};
</script>

<style scoped>
.menu {
  height: 100%;
  display: flex;
}
.menuNav {
  width: 80rem;
  height: 100%;
  background-color: #f5f5f5;
  text-align: center;
  overflow: auto;
}


/* 左边纵向导航栏 */
.navContain {
  height: 130%;
}
.navItem {
  width: 80rem;
  height: 45rem;
  line-height: 45rem;
  color: #666666;
  position: relative;
}
.navItem img {
  width: 15rem;
  height: 15rem;
  vertical-align: middle;
  position: relative;
  bottom: 2px;
}
.selected {
  background-color: #ffffff;
}
.tagCount{
  position: absolute;
  top: 0px;
  right: 0px;
  width: 14px;
  height: 14px;
  background-color: #FF0000;
  color: #FFFFFF;
  border-radius: 7px;
  font-size: 12px;
  line-height: 14px;
}

/* 右边物品列表 */
.menuList {
  width: 285rem;
  height: calc(100% - 45rem);
}

.currentNav {
  width: calc(100% - 10px);
  height: 45rem;
  line-height: 45rem;
  color: #666666;
  padding-left: 10px;
}
.itemContain {
  height: 100%;
  overflow-y: auto;
}
/* 防止底部购物栏阻挡最后一个menuItem */
.itemContain::after{
  content: '';
  display: block;
  height: 50px;
}

.itemTitle {
  padding-left: 10px;
  color: #666666;
}
.menuItem {
}

/* 底部购物选项栏 */
.menuCart{
  width: 355rem;
  height: 50px;
  color: #bebebe;
  line-height: 50px;

  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
}
.menuCart .left{
  display: flex;
  flex: 1;

  font-size: 12px;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  background-color: #000000;
}
.menuCart img{
  width: 47px;
  height: 69px;
  
  position: relative;
  bottom: 19px;
  left: 12.5rem;
}
.menuCart .left span{
  margin-left: 20px;
}

.menuCart .right{
  width: 110rem;
  height: 50px;
  text-align: center;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  background-image: linear-gradient(to right,  var(--headerTop-bgStart), var(--headerTop-bgEnd));
}

</style>