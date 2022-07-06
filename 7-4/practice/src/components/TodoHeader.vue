<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll" />
    <label for="toggle-all"></label>
    <!-- label 可以关联一个表单标签 -->
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model.trim="task"
      @keydown.enter="add"
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
    add() {
      if (this.task.length == 0) return alert("请输入内容");
      this.$emit("addList", this.task);
      this.task = "";
    },
  },
  computed: {
    isAll: {
      get() {
        return this.$parent.list.every((item) => item.isDone);
      },
      set(val) {
        this.$emit("allCheck", val);
      },
    },
  },
};
</script>
