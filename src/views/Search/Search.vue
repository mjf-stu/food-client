<template>
  <div>
    <search-header-top />
    <div class="searchControl">
      <div class="iconfont icon-search icon"></div>
      <div class="input">
        <input type="text" placeholder="根据商家名进行搜索" v-model="cateName"/>
      </div>
      <div class="search" @click="search(cateName)">搜索</div>
    </div>
    <div class="shopContain" 
    :class="{noloadtips:noload===1,loadtips:noload===0}" 
    @scroll="loading">
        <shop-item v-for="item of shop.list" :key="item.shop_id" :shopInfo="item"/>
    </div>
  </div>
</template>

<script>
import { shopList } from "@/network/shop_req.js"

import SearchHeaderTop from "./child/SearchHeaderTop.vue"
import ShopItem from "@/components/ShopItem/ShopItem.vue"

export default {
  name: "Search",
  components: {
    SearchHeaderTop,
    ShopItem,
  },
  data() {
    return {
      shop: {
        page: 0,
        cateName: "",
        list: [],
      },
      cateName:"",
      noload:null,
      isload:0
    }
  },
  methods:{
      search(name){
          shopList(0,name).then(val=>{
            //   console.log(val)
            // 每次搜索进行一次shoplist初始化
            this.shop.page = 0
            this.shop.cateName = name
            this.shop.list = val
            // 初始化最底部key
            this.noload = 0
          })
      },
      loading(event){
          let scrollele=event.target
        //   可以加入一个key防止请求的同时用户反复拖动滚动条导致还未请求完就请求下一页
          if(scrollele.offsetHeight+scrollele.scrollTop>scrollele.scrollHeight-30 && this.isload ===0){
              this.isload = 1
              if(this.noload === 0){
                  this.shop.page++
                  shopList(this.shop.page,this.shop.cateName)
                  .then(val=>{
                    //   console.log(val)
                    if(val.length===0){
                      this.shop.page--
                      this.noload = 1
                      this.isload = 0
                    }
                    else{
                      this.shop.list.push(...val)
                      this.isload = 0
                    }
                  })
              }
              else{
                  this.isload = 0
              }
          }
      }
  }
}
</script>

<style scoped>
.searchControl {
  height: 40rem;
  display: flex;
  line-height: 40rem;
  text-align: center;
  margin-top: 10px;
}
.icon {
  width: 40rem;
  background-color: #eceaea;
}
.input {
  background-color: #eceaea;
  flex: 1;
}
input {
  width: 100%;
  background-color: #eceaea;
}
.search {
  color: #ff8800;
  width: 60rem;
}
.shopContain{
    width: 375rem;
    height: calc(100vh - 110px - 40rem);
    overflow-x: hidden;
    overflow-y:scroll
}
.loadtips::after{
    content: '正在加载中！！！！！！';
    display: block;
    text-align: center;
    height: 50rem;
    line-height: 50rem;
}
.noloadtips::after{
    content: '已经到最底下了哦';
    display: block;
    text-align: center;
    height: 50rem;
    line-height: 50rem;
}
</style>