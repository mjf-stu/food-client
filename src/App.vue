<template>
    <div>
        <h1>你好</h1>
        <router-view/>
    </div>
</template>

<script>
export default {
    name : "App"
}
</script>

<style scoped>
/* 引入样式去重 */
@import url("assets/css/reset.css");
@import url("assets/css/CommonClass.css");
p{
    width: 50rem;
    height: 100rem;
    border: 1px;
}
</style>