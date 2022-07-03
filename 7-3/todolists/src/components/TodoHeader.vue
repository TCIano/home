<template>
  <header class="header">
    <h1>todos</h1>
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
      v-model="isChecked"
    />
    <label for="toggle-all"></label>
    <!-- label 可以关联一个表单标签 -->
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model.trim="task"
      @keydown.enter="enter"
    />
  </header>
</template>

<script>
export default {
  data() {
    return {
      task: "",
    };
  },
  methods: {
    //获取输入框内容
    enter() {
      //把内容传给父组件
      if (this.task.length == 0) return alert("请输入内容");
      this.$emit("add", this.task);
      //清空输入框
      this.task = "";
    },
  },
  computed: {
    isChecked: {
      get() {
        //把父组件的 isDon额拿过来 如果 都为true 那么让 全选选中，如果有一个isDOne为false 就让他不选择
        return this.$parent.list.every((item) => item.isDone);
      },
      set(val) {
        // 拿到全选按钮的 的内容 给到其他复选框
        // 传给父组件
        this.$emit("allCheck", val);
      },
    },
  },
};
</script>
