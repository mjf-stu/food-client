<template>
  <div>
    <order-header-top />
    <div
      v-if="
        orderInfo !== 0 && getUserInfo.uId !== undefined
      "
      class="orderContain"
    >
      <order-item
        class="orderItem"
        v-for="item of orderInfo"
        :key="item.id"
        :orderInfo="item"
      />
    </div>
    <div
      v-else-if="getUserInfo.uId === undefined"
    >
      <div class="toLogin" @click="toLogin">去登录</div>
    </div>
    <div
      v-else-if="orderInfo === 0"
    >
      <div class="toHome" @click="toHome">去逛逛</div>
    </div>
  </div>
</template>

<script>
import { getOrder } from "@/network/user_req.js"

import { mapGetters } from "vuex"

import OrderHeaderTop from "./child/OrderHeaderTop.vue"
import OrderItem from "./child/OrderItem.vue"

export default {
  name: "Order",
  components: {
    OrderHeaderTop,
    OrderItem,
  },
  data() {
    return {
      orderInfo: null,
    };
  },
  computed: {
    ...mapGetters("userLogin", ["getUserInfo"]),
  },
  created() {
    this.getOrder(this.getUserInfo.uId)
  },
  methods: {
    getOrder(uId) {
      if (this.getUserInfo.uId !== undefined) {
        getOrder(uId).then((val) => {
          this.orderInfo = val
        })
      }
    },
    toHome(){
      this.$router.push("/Home")
    },
    toLogin(){
      this.$router.push("/Login")
    }
  },
};
</script>

<style scoped>
.orderContain {
  height: calc(100vh - 50px - 50px);
  overflow: auto;
}
.orderItem {
  margin: 10px;
}
.toHome , .toLogin{
  padding: 0rem 15rem;
  height: 40rem;
  text-align: center;
  line-height: 40rem;
  border-radius: 5px;
  background-image: linear-gradient(
    to right,
    var(--headerTop-bgStart),
    var(--headerTop-bgEnd)
  );

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  z-index: 8;
}
</style>