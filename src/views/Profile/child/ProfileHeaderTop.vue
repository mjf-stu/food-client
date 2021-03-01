<template>
    <div>
        <header-top>
            <slot>个人信息</slot>
        </header-top>
    </div>
</template>

<script>
import HeaderTop from "@/components/HeaderTop/HeaderTop.vue"
export default {
  name: "ProfileHeaderTop",
  components: { 
      HeaderTop
  }
}
</script>

<style>

</style>