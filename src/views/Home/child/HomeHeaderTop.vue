<template>
    <div>
        <header-top>
            <slot>首页</slot>
        </header-top>
    </div>
</template>

<script>
import HeaderTop from "@/components/HeaderTop/HeaderTop.vue"
export default {
  name: "HomeHeaderTop",
  components: { 
      HeaderTop
  }
}
</script>

<style>

</style>