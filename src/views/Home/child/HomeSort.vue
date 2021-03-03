<template>
  <div class="sort">
    <div>全部美食</div>
    <div>附近商家</div>
    <div>只能排序</div>
    <div>筛选选项</div>
  </div>
</template>

<script>
export default {
  name: "HomeSort",
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
.sort > div::after {
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
</style>