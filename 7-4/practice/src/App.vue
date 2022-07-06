<template>
  <section class="todoapp">
    <div>
      <TodoHeaderVue @addList="addList" @allCheck="allCheck" />
      <todo-main-vue :arr="filterDate" @delList="delList" />
      <todo-footer-vue :arr="filterDate" @exchangeDate="exchangeDate" />
    </div>
  </section>
</template>

<script>
import "./assets/styles/base.css";
import "./assets/styles/index.css";
import TodoFooterVue from "./components/TodoFooter.vue";
import TodoHeaderVue from "./components/TodoHeader.vue";
import TodoMainVue from "./components/TodoMain.vue";
export default {
  data() {
    return {
      type: "all", //存储当前被选中的下标
      list: [
        { id: 100, name: "吃饭", isDone: true },
        { id: 101, name: "睡觉", isDone: false },
        { id: 102, name: "打豆豆", isDone: true },
      ],
    };
  },
  methods: {
    //添加代办
    addList(task) {
      let id =
        this.list.length == 0 ? 100 : this.list[this.list.length - 1].id + 1;
      this.list.push({
        id,
        name: task,
        isDone: false,
      });
    },
    //删除某一项
    delList(id) {
      const index = this.list.findIndex((item) => item.id == id);
      this.list.splice(index, 1);
    },
    //筛选数据
    exchangeDate(val) {
      this.type = val;
    },
    //全选
    allCheck(val) {
      this.list.forEach((item) => (item.isDone = val));
    },
  },
  computed: {
    filterDate() {
      if (this.type == "yes") {
        return this.list.filter((item) => item.isDone == true);
      } else if (this.type == "no") {
        return this.list.filter((item) => item.isDone == false);
      } else {
        return this.list;
      }
    },
  },
  components: {
    TodoFooterVue,
    TodoHeaderVue,
    TodoMainVue,
  },
};
</script>

<style></style>
