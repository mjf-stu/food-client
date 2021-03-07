<template>
  <div class="sort">
    <div :class="{noClick: isclick === 0,isClick: isclick === 1}" @click="show(1)">{{sortName}}</div>
    <div>附近商家</div>
    <div>智能排序</div>
    <div>筛选选项</div>
  </div>
</template>

<script>
export default {
  name: "HomeSort",
  data(){
    return {
      isclick: 0,
      sortName: "默认排序"
    }
  },
  methods:{
    show(index){
      this.$emit("selectSort",index,this)
    }
  }
};
</script>

<style scoped>
.sort {
  height: 40rem;
  color: var(--comp-color);
  background-color: var(--comp-bg);
  border-bottom: var(--comp-borderBottom);

  padding-right: 15rem;
  margin-top: 15rem;
  display: flex;
  text-align: center;
  align-items: center;
}
.sort > div {
  position: relative;
  flex: 1;
}
.noClick::after {
  content: "";
  width: 0rem;
  height: 0rem;
  display: block;

  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-25%);

  border: 5rem transparent solid;
  border-top: 5rem var(--comp-color) solid;
}
.isClick::after{
  content: "";
  width: 0rem;
  height: 0rem;
  display: block;

  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-25%);

  border: 5rem transparent solid;
  border-bottom: 5rem var(--comp-color) solid;

}
</style>