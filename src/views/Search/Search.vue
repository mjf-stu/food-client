<template>
    <div>
        <search-header-top/>
        <h1>Search</h1>
    </div>
</template>

<script>
import SearchHeaderTop from './child/SearchHeaderTop.vue'

export default {
  name: "Search",
  components: { 
      SearchHeaderTop 
  },
  data(){
      return {
          obj:{
              a:[2,3],
              b:3
          }
      }
  }
}
</script>

<style scoped>

</style>