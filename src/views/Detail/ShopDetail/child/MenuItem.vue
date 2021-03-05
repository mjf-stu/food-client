<template>
  <div class="contain">
    <div class="left">
      <img :src="foodItem.foodImg" />
    </div>
    <div class="right">
      <div class="top">
        <div class="title">{{ foodItem.foodName }}</div>
        <div class="description">{{ foodItem.description }}</div>
        <div class="other">
          <span>月售{{ foodItem.saleCount }}</span>
          <span>{{ foodItem.praiseContent }}</span>
        </div>
      </div>
      <div class="bottom">
        <div>
          <span id="money">￥{{ foodItem.minPrice }}</span>
          <span class="amount">{{ foodItem.spec }}</span>
          <span class="originMoney">{{ foodItem.originPrice }}</span>
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
  name: "MenuItem",
  components: {},
  props: {
    foodItem: {
      type: Object,
      default: {},
    },
  },
  methods: {
    increment() {
      this.$store.commit({
        type:"shopCart/addGoods",
        shop_id: this.foodItem.shop_id,
        id: this.foodItem.id,
        foodInfo: this.foodItem
      })
    },
    decrement() {
      console.log(this.$store.state.shopCart)
      this.$store.commit({
        type:"shopCart/reduceGoods",
        shop_id: this.foodItem.shop_id,
        id: this.foodItem.id
      })
    },
  },
  created(){
  },
  computed:{
    foodNumber(){
      return this.$store.getters["shopCart/getGoodsNumber"](this.foodItem.shop_id,this.foodItem.id)
    }
  }
};
</script>

<style scoped>
.contain {
  display: flex;
  padding: 10px 5px 10px 0px;
}
.left img {
  width: 75rem;
  height: 75rem;
  vertical-align: middle;
}
.right {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.title,
.description,
.other {
  margin-bottom: 4px;
  color: rgb(104, 104, 104);
}
.title {
  font-size: 18px;
  color: rgb(40, 40, 40);
}
.description {
  font-size: 13px;
}
.other {
  font-size: 12px;
}
.bottom {
  display: flex;
  justify-content: space-between;
  position: relative;
}
.bottom span {
  color: rgb(104, 104, 104);
}
#money {
  color: rgb(251, 78, 68);
  font-size: 17px;
  font-weight: 500;
  opacity: 0.9;
}
.amount {
  font-size: 13px;
}
.originMoney {
  text-decoration-line: line-through;
  font-size: 12px;
}
.CounterContainer {
  text-align: center;
  position: absolute;
  right: 0px;
  bottom: 0px;
}
.CounterContainer img {
  width: 25px;
  vertical-align: middle;
}
</style>