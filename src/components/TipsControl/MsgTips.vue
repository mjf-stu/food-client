<template>
  <div class="MsgTips" :class="{ show: isshow === 1 }">{{ msg }}</div>
</template>

<script>
export default {
  name: "MsgTips",
  data() {
    return {
      msg: "提示信息",
      isshow: 0,
      showDebounce: null
    };
  },
  created(){
      this.showDebounce = this.debounce(()=>{this.isshow = 0},1000)
  },
  mounted() {
    //  注意使用箭头函数否者this的指向会出错
    this.$bus.$on("showTips", (info) => {
      this.msg = info;
      this.isshow = 1;
      this.showDebounce()
    // setTimeout(() => {
    //               this.isshow = 0
    //           }, 1000);
    });
  },
  methods:{
      debounce(fn,dely){
          let timer = null
          return function(){
              if(timer) clearTimeout(timer)
              timer = setTimeout(() => {
                  fn()
              }, dely);
          }
      }
  }
};
</script>

<style scoped>
.MsgTips {
  color: #ffffff;
  padding: 10rem 15rem;
  background-color: #000000c0;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  z-index: var(--tips-index);
  opacity: 0;
  transition: opacity 1000ms;
}
.show {
  opacity: 1;
}
</style>