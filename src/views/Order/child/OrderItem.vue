<template>
  <div class="orderItem">
    <div><img :src="shopImg"/></div>
    <div class="right">
      <div class="top"><span class="ellipsis">{{shopName}}</span><span>订单完成</span></div>
      <div class="bottom">
        <div class="itemRow" v-for="(orderList,index) of foodMsg" :key="index">
            <span class="ellipsis" v-for="(orderItem,index) of orderList.split(' ')" :key="index">
                {{orderItem}}
            </span>
        </div>
        <div class="total">总额{{total}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {getShopById} from "@/network/shop_req.js"

export default {
  name: "OrderItem",
  props:{
      orderInfo:{
          type: Object,
          default: {}
      }
  },
  data(){
      return {
          foodMsg: [],
          total: "",
          shopImg: "",
          shopName: "",
      }
  },
  created(){
      this.foodMsg = this.orderInfo.foodMsg.split("@@@")
      this.total = this.orderInfo.total

      this.getShopById(this.orderInfo.shop_id)
  },
  methods:{
      getShopById(shop_id){
          getShopById(shop_id).then(val=>{
              this.shopImg = val.shopImg
              this.shopName = val.name
          })
      }
  }
}
</script>

<style scoped>
.orderItem{
  box-shadow: 0 0 4px #d1d1d1;
  padding: 10px;
  display: flex;
}
.orderItem img{
    width: 48px;
    height: 48px;
}
.right{
  padding-left: 10px;
  flex: 1;
  color: #666666;
}
.top{
  font-size: 18px;
  padding: 15px 0px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px #d1d1d1 solid;
}
.top span:nth-child(1){
  width: 180rem;
  display: inline-block;
}
.bottom{
  padding: 10px 0px;
}
.itemRow{
    margin-bottom: 10px;
}
.itemRow span:nth-child(1){
    width: 180rem;
    display: inline-block;
}
.total{
    text-align: right;
    margin-right: 20rem;
}
</style>