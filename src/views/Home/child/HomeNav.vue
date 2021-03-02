<template>
  <div>
    <div class="nav1">
      <div>
        <div><img src="@/assets/img/homeNav/huoguo.png" /></div>
        <span>火锅</span>
      </div>
      <div>
        <div><img src="@/assets/img/homeNav/sweet.png" /></div>
        <span>甜品</span>
      </div>
      <div>
        <div><img src="@/assets/img/homeNav/zizhu.png" /></div>
        <span>自助餐</span>
      </div>
      <div>
        <div><img src="@/assets/img/homeNav/fastfood.png" /></div>
        <span>小吃快餐</span>
      </div>
    </div>
    <div class="nav2">
      <div>
        <div><img src="@/assets/img/homeNav/xican.png" /></div>
        <span>西餐</span>
      </div>
      <div>
        <div><img src="@/assets/img/homeNav/shaokao.png" /></div>
        <span>烧烤</span>
      </div>
      <div>
        <div><img src="@/assets/img/homeNav/kaoyu.png" /></div>
        <span>烤鱼</span>
      </div>
      <div>
        <div><img src="@/assets/img/homeNav/haixian.png" /></div>
        <span>海鲜</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "HomeNav"
};
</script>

<style scoped>
.nav1,.nav2{
    width: 345rem;
    /* height: 50rem; */
    text-align: center;
    background-color: var(--comp-bg);
    color: var(--comp-color);
    margin: 0rem auto;

    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .nav1{
    margin-top: 15rem;
    border-top-left-radius: 10rem;
    border-top-right-radius: 10rem;
  }
  .nav2{
    padding-bottom: 15rem;
    border-bottom-left-radius: 10rem;
    border-bottom-right-radius: 10rem;
  }
  .nav1,.nav2{
    padding-top: 15rem;
  }
  .nav1 img,.nav2 img{
    width: 50rem;
    height: 50rem;
    vertical-align: middle;
    margin-bottom: 5px;
  }
</style>