<template>
  <div class="father">
      <div v-for=" n in intScore" :key="n">
        <i class="iconfont icon-xingxing1 starbg" :style="starFontSize"></i>
      </div>
      <div v-if="pointScore > 0">
          <div class="container">
            <div class="starcon" :style="pointStar">
                <i class="iconfont icon-xingxing1 starbg" :style="starFontSize"></i>
            </div>
            <div class="starcon">
                <i class="iconfont icon-xingxing starborder" :style="starFontSize"></i>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "StarAssess",
  props:{
      avgScore:{
          type: Number,
          default: 0
      },
      starSize:{
          type: Number,
          default: 16
      }
  },
  data(){
      return {
          intScore: 0,
          pointScore: 0,
          pointStar:{
              overflow: "hidden",
              width: 0
          },
          starFontSize:{
              "font-size": "16px"
          }
      }
  },
  created(){
    this.intScore = parseInt(this.avgScore)
    this.pointScore = this.avgScore - this.intScore 
    this.pointStar.width = this.starSize * this.pointScore + "px"
    this.starFontSize["font-size"] = this.starSize + "px"
    console.log(this.starFontSize)
  }
};
</script>

<style scoped>
.father {
  display: flex;
}

.starbg {
  color: #ff4b10;
  /* font-size: 40px; */
}
.starborder {
  color: black;
  /* font-size: 40px; */
}
.container {
  position: relative;
}
.starcon {
  position: absolute;
  left: 0px;
  top: 0px;
}
/* .starcon:nth-child(1) {
  width: 10px;
  overflow: hidden;
} */
</style>