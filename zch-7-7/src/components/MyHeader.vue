<template>
  <div class="my-header" 
  :style="{baccklgroundColor: background, color}">{{ title }}</div>
</template>

<script>
// 目标: 让组件支持不同的项目情况
// 1. 需要关心哪些特性需要变化 (背景色, 文字颜色, 文字内容)
// 2. props等待使用者给我传具体的值
export default {
  props: {
    background: String,
    color: {
        type: String,
        default: "#fff"
    },
    title: {
        type: String,
        required: true,
    }
  }
}
</script>

<style lang="less" scoped>
  .my-header {
    height: 45px;
    line-height: 45px;
    text-align: center;
    background-color: #1d7bff;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
  }
</style>