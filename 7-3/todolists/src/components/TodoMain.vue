<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li :class="{ completed: item.isDone }" v-for="item in arr" :key="item.id">
      <div class="view">
        <input class="toggle" type="checkbox" v-model="item.isDone" />
        <label>{{ item.name }}</label>
        <button class="destroy" @click="del(item.id)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
    del(id) {
      //传递给父组件,拿到 id
      this.$emit("del", id);
    },
  },
  //引入父组件的数组元素
  props: {
    arr: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
