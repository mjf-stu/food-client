<template>
    <div>
        <order-header-top/>
        <h1>Order</h1>
    </div>
</template>

<script>
import OrderHeaderTop from './child/OrderHeaderTop.vue'
export default {
  name: "Order",
  components: {
        OrderHeaderTop
  }
}
</script>

<style scoped>

</style>