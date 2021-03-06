<template>
    <div class="userContain">
        <profile-header-top/>
        <user-info/>
        <user-options class="userOptions"/>
    </div>
</template>

<script>
import ProfileHeaderTop from './child/ProfileHeaderTop.vue'
import UserInfo from './child/UserInfo'
import UserOptions from './child/UserOptions.vue'

export default {
  name: "Profile",
  components: { 
    ProfileHeaderTop,
    UserInfo,
    UserOptions
  }
}
</script>

<style scoped>
.userContain{
  background-color: #f1f1f1;
  height: 100vh;
}
.userOptions{
  margin-top: 10px;
}
</style>