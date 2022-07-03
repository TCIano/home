<template>
  <footer class="footer">
    <span class="todo-count"
      >剩余<strong>{{ count.length }}</strong></span
    >
    <ul class="filters">
      <li>
        <a
          :class="{ selected: isSel == 'all' }"
          href="javascript:;"
          @click="change('all')"
          >全部</a
        >
      </li>
      <li>
        <a
          :class="{ selected: isSel == 'no' }"
          href="javascript:;"
          @click="change('no')"
          >未完成</a
        >
      </li>
      <li>
        <a
          :class="{ selected: isSel == 'yes' }"
          href="javascript:;"
          @click="change('yes')"
          >已完成</a
        >
      </li>
    </ul>
    <button class="clear-completed" @click="clear">清除已完成</button>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      isSel: "all", //默认全部选中，no 为未完成 yes为已完成
    };
  },
  props: ["count"],
  methods: {
    change(val) {
      //每次点击把 当前isSel赋值给 按钮
      this.isSel = val;
      //子组件的 选中的 值传递给 父组件
      this.$emit("filterDate", val);
    },
    //清除已完成
    clear() {
      this.$emit("clearDone");
    },
  },
};
</script>
