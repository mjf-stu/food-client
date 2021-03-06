<template>
  <div class="CartListContain">
      <!-- 空白黑色薄膜 -->
      <transition name="outCart">
      <div class="outCart" @click="outCart"></div>
      </transition>
      <!-- 底部购物车列表 -->
      <div class="inCart">
        <div class="cleanCart" ><span @click="cleanCart">清空购物车</span></div>
        <div class="cartList">
          <cart-item 
            v-for="item of getAllGoods().goods" 
            :key="item.id" :foodItem="item" 
            :shop_id="shop_id"/>
        <!-- <detail-menu/> -->
        </div>
      </div>
  </div>
</template>

<script>
import CartItem from './CartItem.vue'
export default {
  name: "CartList",
  components: { CartItem },
  props:{
    shop_id:{
      type:Number,
      default:0
    }
  },
  methods:{
    getAllGoods(){
      return this.$store.getters["shopCart/getAllGoods"](this.shop_id)
    },
    outCart(){
      this.$emit("outCart")
    },
    cleanCart(){
      this.$store.commit({
        type:"shopCart/cleanGoods",
        shop_id:this.shop_id
      })
    }
  }
}
</script>

<style scoped>
.CartListContain{
  position: absolute;
  left: 0px;
  right: 0px;
  top: -165px;
  bottom: 0px;
  z-index: 1;
  display: flex;
  flex-direction: column;
}
.CartListContain::after{
  content: '';
  height: 80px;
  background-color: #ffffff;
  display: block;
}
.CartListContain .outCart{
  background-color: #14141450;
  flex: 1;
}
/* .CartListContain .inCart{
} */
.CartListContain .cleanCart{
  height: 50px;
  text-align: right;
  line-height: 50px;
  padding-right: 20px;
  color: #666666;
  background-color: #ffffff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.CartListContain .cartList{
  background-color: #ffffff;
  max-height: 300rem;
  overflow: auto; 
}

.outCart-enter-active,.outCart-leave-active{
  transition: opacity 300ms;
}
.outCart-enter,.outCart-leave-to{
  opacity: 0;
}
</style>