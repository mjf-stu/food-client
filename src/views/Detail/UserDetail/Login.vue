<template>
  <div class="LoginPage">
    <div class="toBack" @click="toBack"><i class="iconfont icon-fanhui fanhui"></i></div>
    <div class="appLogo">
      <div><img src="@/assets/img/UserLogo/appLogo.gif" /></div>
      <div><span>外面APP</span></div>
    </div>
    <div class="inputMsg">
      <div class="input">
        <input type="text" placeholder="请输入账号" minlength="6" v-model="userName"/>
      </div>
      <div class="input">
        <input type="text" placeholder="请输入密码" minlength="6" v-model="userPwd"/>
      </div>
      <div 
        class="submit"
        @click="Login"
        :class="{ok:userName.length>=6 && userPwd.length>=6}">
      登录</div>
    </div>
  </div>
</template>

<script>
// ajax请求函数
import {getUser} from "@/network/user_req.js"

export default {
  name: "Login",
  data(){
      return {
          userName:"",
          userPwd:""
      }
  },
  methods:{
      toBack(){
          this.$router.go(-1)
      },
      Login(){
        if(this.userName.length>=6 && this.userPwd.length>=6){
          getUser(this.userName,this.userPwd)
          .then(val=>{
            this.$store.commit({
              type:"userLogin/uLogin",
              userInfo:val
            })
            this.userName=""
            this.userPwd=""
            this.$router.replace("/Profile")
          })
        }
      }
  }
};
</script>

<style scoped>
.LoginPage{
    background-color: #ffffff;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: var(--login-index);
}
.toBack{
    margin: 10rem 0px 0px 10rem;
}
.fanhui{
    font-size: 22rem;
}
.appLogo {
  padding: 80rem 0px;
  margin: 0px auto;
  text-align: center;
  font-size: 14rem;
  font-weight: bold;
}
.input {
  border-bottom: 1px solid #cccccc80;
  padding: 10rem 0px;
  margin: 0px 15rem;
}
input{
    font-size: 16px;
    height: 20rem;
    width: 100%;
}
input::placeholder{
    color: #cccccc;
    font-size: 16px;
}
.submit{
    margin: 30rem 15rem;
    height: 40rem;
    color: rgb(153, 153, 153);
    background-color: rgb(229, 229, 229);
    text-align: center;
    line-height: 40rem;
    border-radius: 5px;
}
.ok{
    color: #FFFFFF;
    background-image: linear-gradient(to right,  var(--headerTop-bgStart), var(--headerTop-bgEnd));
}
</style>