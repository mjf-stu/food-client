<template>
    <div>
        <tab-bar class="tabbar"/>
        <keep-alive exclude="ShopDetail,Order">
            <router-view/>
        </keep-alive>
        <msg-tips/>
    </div>
</template>

<script>
// 组件的引入
import TabBar from "./components/TabBar/TabBar.vue"

import MsgTips from "./components/TipsControl/MsgTips.vue"


export default {
    name : "App",
    components : {
        TabBar,
        MsgTips
    }
}
</script>

<style scoped>
/* 引入样式去重 */
@import url("assets/css/reset.css");
/* 公共样式 */
@import url("assets/css/CommonClass.css");
/* iconfont类 */
@import url("assets/css/iconClass/iconfont.css");

/* tabbar */
.tabbar{
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
}
</style>