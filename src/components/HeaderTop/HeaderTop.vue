<template>
    <div class="HeaderTop">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "HeaderTop"
}
</script>

<style scoped>
    .HeaderTop{
        height: 50px;
        line-height: 50px;
        padding-left: 15px;
        font-size: var(--headerTop-fontsize);
        color: var(--headerTop-color);
        background-image: linear-gradient(to right,  var(--headerTop-bgStart), var(--headerTop-bgEnd));
    }
</style>