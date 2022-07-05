<template>
  <footer class="footer">
    <span class="todo-count">剩余{{count}}<strong>数量值</strong></span>
    <ul class="filters">
      <li>
        <a :class="{selected:isSet=='all'}" href="javascript:;" @click="change(isSet='all')" >全部</a>
      </li>
      <li>
        <a href="javascript:;" @click="change(isSet='no')" :class="{selected:isSet=='no'} " >未完成</a>
      </li>
      <li>
        <a href="javascript:;" @click="change(isSet='yes')" :class="{selected:isSet=='yes'}">已完成</a>
      </li>
    </ul>
    <button class="clear-completed" @click="chu">清除已完成</button>
  </footer>
</template>

<script>
export default {
  data(){
    return{
      isSet:'all'
    }
  },
props:['count'],
methods:{
  chu(){
    this.$emit('clear')
  },
  change(val){
    this.isSet=val
    this.$emit('check',val)
  }
}
}
</script>