<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll">
    <label for="toggle-all"></label> 
    <!-- label 可以关联一个表单标签 -->
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keydown.enter="enter"
      v-model.trim="task"
    />
  </header>
</template>

<script>
export default {
 data(){
  return{
    task:''
  }
 },
 methods:{
  enter(){
    this.$emit('create',this.task)
    this.task=''
  }
 },
 computed:{
  isAll:{
    get(){
      return this.$parent.list.every(obj=>obj.isDone==true)
    },
    set(val){
      this.$parent.list.forEach(obj=>obj.isDone=val)
    }
  }
 }
}
</script>