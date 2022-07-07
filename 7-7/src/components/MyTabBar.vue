<template>
  <div class="my-tab-bar">
  	<div class="tab-item" 
    :class="{ current :item.componentName == currentIndex}"
    v-for="item in list" 
    :key="item.componentName"
    @click="clickFn(item.componentName)"
    >
      <!-- 图标 -->
      <span class="iconfont" :class="item.iconText"></span>
      <!-- 文字 -->
      <span>{{item.text}}</span>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        list: {
            type: Array,
         required: true,
      // 自定义校验规则
      validator(value) {
        // value就是接到数组
        if (value.length >= 2 && value.length <= 5) {
          return true; // 符合条件就return true
        } else {
          console.error("数据源必须在2-5项");
          return false;
        }
      },
        },
    },
   data() {
            return {
                currentIndex:'MyGoodsList'
            }
    },
    methods: {
        clickFn(val) {
            console.log(val);
            this.currentIndex = val
            this.$emit('change',val)
        }
    }
}
</script>

<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
}
    
.current {
  color: #1d7bff;
}
</style>