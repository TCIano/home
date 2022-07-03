<template>
  <section class="todoapp">
    <!-- 除了驼峰, 还可以使用-转换链接 -->
    <TodoHeader @create="createFn"></TodoHeader>
    <TodoMain :list="list" @del="deleteFn"></TodoMain>
    <TodoFooter></TodoFooter>
  </section>
</template>

<script>

import TodoHeader from "./components/TodoHeader";
import TodoMain from "./components/TodoMain";
import TodoFooter from "./components/TodoFooter";


export default {
  data() {
    return {
      list: [
        { id: 100, name: "吃饭", isDone: true },
        { id: 101, name: "睡觉", isDone: false },
        { id: 102, name: "打豆豆", isDone: true },
      ],
    }
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  methods: {
    createFn(val){
      const id = this.list[this.list.length - 1] ? 
      this.list[this.list.length - 1].id + 1 : 100
      this.list.push({
        id,
        name: val,
        isDone: false,
      })
    },
    deleteFn(id){
      const index = this.list.findIndex(ele => ele.id === id)
      this.list.splice(index, 1)
    }
  }
};
</script>