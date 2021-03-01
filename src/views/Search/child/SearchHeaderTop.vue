<template>
    <div>
        <header-top>
            <slot>搜索</slot>
        </header-top>
    </div>
</template>

<script>
import HeaderTop from "@/components/HeaderTop/HeaderTop.vue"
export default {
  name: "SearchHeaderTop",
  components: { 
      HeaderTop
  }
}
</script>

<style>

</style>