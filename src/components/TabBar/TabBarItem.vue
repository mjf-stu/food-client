<template>
    <div class="TabBarItem">
        <div><slot name="itemIcon"></slot></div>
        <div><slot name="itemName"></slot></div>
    </div>
</template>

<script>
export default {
    name : "TabBarItem"
}
</script>

<style scoped>
.TabBarItem{
    flex: 1 1;
    text-align: center;
    line-height: 20px;
    font-size: var(--tabbarName-fontsize);
}
</style>