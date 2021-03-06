<template>
  <div class="userInfo">
    <div v-if="Object.keys(getUserInfo).length === 0" @click="toLogin">
      <img src="@/assets/img/UserLogo/userOff.png" />
      <span>登录/注册</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "UserInfo",
  computed: {
    ...mapGetters("userLogin", ["getUserInfo"]),
  },
  methods:{
    toLogin(){
      this.$router.push("/Login")
    }
  }
};
</script>

<style scoped>
.userInfo {
  height: 80px;
  background-image: linear-gradient(
    to right,
    var(--headerTop-bgStart),
    var(--headerTop-bgEnd)
  );
  line-height: 80px;
  padding-left: 10px;
  color: #49423d;
}
.userInfo img {
  vertical-align: middle;
  width: 60px;
  height: 60px;
}
.userInfo span {
  margin-left: 10px;
}
</style>