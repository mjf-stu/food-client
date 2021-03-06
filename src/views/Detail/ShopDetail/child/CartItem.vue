<template>
  <div class="CartItemContain">
    <div class="left">
      <img :src="foodItem.foodImg" />
    </div>
    <div class="right">
      <div class="top">
        <div class="title">{{ foodItem.name }}</div>
      </div>
      <div class="bottom">
        <div>
          <span>￥{{ foodItem.money }}</span>
        </div>
        <div class="CounterContainer">
          <img
            src="@/assets/img/Counter/decrement.png"
            @click="decrement"
            v-show="foodNumber > 0"
          />
          {{ foodNumber === 0 ? "" : foodNumber }}
          <img src="@/assets/img/Counter/increment.png" @click="increment" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    foodItem: {
      type: Object,
      default: {},
    },
    shop_id:{
      type: Number,
      default: 0
    }
  },
  methods: {
    //   与Menu不同的是---cartitem中的物品一定存在购物车中，所以只需要传入shop——id与foodid就可以进行增删
    increment() {
      this.$store.commit({
        type:"shopCart/addGoods",
        shop_id: this.shop_id,
        id: this.foodItem.id
      })
    },
    decrement() {
      // console.log(this.$store.state.shopCart)
      this.$store.commit({
        type:"shopCart/reduceGoods",
        shop_id: this.shop_id,
        id: this.foodItem.id
      })
    },
  },
  computed:{
    foodNumber(){
      return this.$store.getters["shopCart/getGoodsNumber"](this.shop_id,this.foodItem.id)
    }
  }
}
</script>

<style scoped>
.CartItemContain {
  display: flex;
  padding: 10px 5px 10px 0px;
}
.CartItemContain .left img {
  width: 75rem;
  height: 75rem;
  vertical-align: middle;
}
.CartItemContain .right {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.CartItemContain .title{
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: bold;
  color: rgb(40, 40, 40);
}
.CartItemContain .bottom {
  display: flex;
  justify-content: space-between;
  position: relative;
}
.CartItemContain span {
  color: rgb(251, 78, 68);
  font-size: 17px;
  font-weight: 500;
  opacity: 0.9;
}

.CartItemContain .CounterContainer {
  text-align: center;
  position: absolute;
  right: 0px;
  bottom: 0px;
}
.CartItemContain .CounterContainer img {
  width: 25px;
  vertical-align: middle;
}
</style>