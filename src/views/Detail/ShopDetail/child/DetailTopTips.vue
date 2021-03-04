<template>
  <div class="shopInfo" v-if="Object.keys(shopInfo).length!==0">
    <div class="up">
      <div><img :src="shopInfo.shopImg" /></div>
      <div class="ellipsis">
        <div class="shopName ellipsis">{{ shopInfo.name }}</div>
        <div class="shopMsg">
          <i class="iconfont icon-xingxing1"></i
          ><span>{{ shopInfo.avgScore }}</span>
        </div>
      </div>
    </div>
    <div class="down">
      <div>公告：欢迎光临，很高兴为您服务</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailTopTips",
  props:{
      shopInfo:{
          type:Object,
          default:{}
      }
  }
};
</script>

<style >
.shopInfo {
  width: 325rem;
  /* height: 100rem; */
  background-color: #ffffff;
  box-shadow: 0 0 4px #adadad;
  border-radius: 20px;
  padding: 10px 10rem;
  line-height: 25px;

  position: absolute;
  left: 50%;
  top: 50px;
  transform: translateX(-50%);
}
.shopInfo img {
  width: 45px;
  height: 45px;
}
.shopInfo i {
  color: #f9c147;
}
.shopInfo span {
  color: #666666;
}
.shopInfo .shopMsg,
.shopInfo i {
  font-size: 12px;
}
.shopInfo .up {
  display: flex;
}
.up > div:nth-child(2) {
  margin-left: 10px;
}
.shopInfo .shopName {
  font-size: 20px;
}
.shopInfo .down {
  color: #666666;
}
</style>