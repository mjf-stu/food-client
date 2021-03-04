<template>
  <div class="contain">
    <div class="left">
      <img
        :src="foodItem.foodImg"
      />
    </div>
    <div class="right">
      <div class="top">
        <div class="title">{{foodItem.foodName}}</div>
        <div class="description">{{foodItem.description}}</div>
        <div class="other"><span>月售{{foodItem.saleCount}}</span> <span>{{foodItem.praiseContent}}</span></div>
      </div>
      <div class="bottom">
        <div><span id="money">￥{{foodItem.minPrice}}</span><span>{{foodItem.spec}}</span><span>{{foodItem.originPrice}}</span></div>
        <div>
          <img />
          111
          <img />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props:{
    foodItem:{
      type:Object,
      default:[]
    }
  }
};
</script>

<style scoped>
.contain {
  display: flex;
  padding: 10px 5px 10px 0px;
}
.left img {
  width: 75rem;
  height: 75rem;
  vertical-align: middle;
}
.right {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.title,.description,.other{
  margin-bottom: 4px;
  color: rgb(104, 104, 104);
}
.title {
  font-size: 18px;
  color: rgb(40, 40, 40);
}
.description {
  font-size: 13px;
}
.other {
  font-size: 12px;
}
.bottom{
    display: flex;
    justify-content: space-between;
}
.bottom span{
  color: rgb(104, 104, 104);
}
#money{
    color: rgb(251, 78, 68);
    font-size: 17px;
    font-weight: 600;
    opacity: 0.9;
}
</style>