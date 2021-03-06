<template>
  <div class="tools">
    <div class="logout" @click="Logout">
      <span :class="{ok:Object.keys(getUserInfo).length!==0}">退出账号</span>
      <span class="iconfont itemlogo" :class="{ok:Object.keys(getUserInfo).length!==0}">&#xe624;</span>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapMutations} from "vuex"
export default {
  name: "UserOptions",
  computed:{
    ...mapGetters("userLogin",["getUserInfo"])
  },
  methods:{
    ...mapMutations("userLogin",["uLogout"]),
    Logout(){
      this.uLogout()
    }
  }
};
</script>

<style scoped>
.tools{
  background-color: #FFFFFF;
}
.tools div{
  padding: 15px 10px 15px 10px;
  display: flex;
  justify-content: space-between;
}
.itemlogo{
  display: inline-block;
  transform: rotate(180deg);
}
span{
  color: #b5b5b5;
}
.ok{
  color: #000000;
}
</style>