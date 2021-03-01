<template>
    <div>
        <header-top>
            <slot>订单</slot>
        </header-top>
    </div>
</template>

<script>
import HeaderTop from "@/components/HeaderTop/HeaderTop.vue"
export default {
  name: "OrderHeaderTop",
  components: { 
      HeaderTop
  }
}
</script>

<style>

</style>