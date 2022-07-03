<template>
  <section class="todoapp">
    <TodoHeader @add="addFn" @allCheck="checkAll"></TodoHeader>
    <TodoMain :arr="getList" @del="delFn"></TodoMain>
    <TodoFooter
      :count="count"
      @filterDate="filterDateFn"
      @clearDone="clearDone"
    ></TodoFooter>
  </section>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoMain from "./components/TodoMain.vue";
import TodoFooter from "./components/TodoFooter.vue";
export default {
  data() {
    return {
      type: "", //存储底部全部/未完成/已完成按钮内容
      list: JSON.parse(localStorage.getItem("list")) || [],
    };
  },
  methods: {
    //输入框添加内容
    addFn(val) {
      let id =
        this.list.length == 0 ? 100 : this.list[this.list.length - 1].id + 1;
      this.list.push({
        id,
        name: val,
        isDone: false,
      });
      //删除元素
    },
    delFn(val) {
      //拿到子组件的id
      //取到当前行索引
      let index = this.list.findIndex((item) => item.id == val);
      this.list.splice(index, 1);
    },
    //过滤数据
    filterDateFn(val) {
      this.type = val;
      //过滤数据交给computed
    },
    //清除已完成，都变味未完成
    clearDone() {
      this.list.forEach((item) => (item.isDone = false));
    },
    //全选
    checkAll(val) {
      this.list.forEach((item) => (item.isDone = val));
    },
  },
  computed: {
    //统计剩余代办
    count() {
      return this.list.filter((item) => item.isDone == false);
    },
    // 过滤数据？
    getList() {
      if (this.type == "no") {
        return this.list.filter((item) => !item.isDone);
      } else if (this.type == "yes") {
        return this.list.filter((item) => item.isDone);
      } else {
        return this.list;
      }
    },
  },
  watch: {
    //侦听数组
    list: {
      deep: true,
      handler() {
        localStorage.setItem("list", JSON.stringify(this.list || []));
      },
    },
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
};
</script>

<style></style>
