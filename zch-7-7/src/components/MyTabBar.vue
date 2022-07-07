<template>
  <div class="my-tab-bar">
    <div class="tab-item" 
    v-for="item in list"
    :class="{current:item.componentName == currentIndex}"
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
// 目标: 点谁谁亮
// 1. 绑定点击事件 - 传入索引值
// 2. 循环索引 - 保存索引 对比
// 3. 点击把索引值同步给selIndex变量上, 引发上面判断的更新
export default {
  props: {
    list: {
        type: Array,
        validator(val){
            console.log(val);
            if(val.length >= 2 && val.length <= 5){
                return true;
            }
            return false;
        }
    }
  },
  data() {
    return {
        currentIndex: 'MyGoodsList'
    };
  },
  methods: {
        clickFn(val) {
            this.currentIndex = val;
            this.$emit("changeTab", val)
        }
  },
};
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
  }
}

.current {
  color: #1d7bff;
}
</style>