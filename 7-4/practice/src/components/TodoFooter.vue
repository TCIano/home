<template>
  <footer class="footer">
    <span class="todo-count"
      >剩余<strong>{{ count }}</strong></span
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
          href="javascript:;"
          :class="{ selected: isSel == 'no' }"
          @click="change('no')"
          >未完成</a
        >
      </li>
      <li>
        <a
          href="javascript:;"
          :class="{ selected: isSel == 'yes' }"
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
      isSel: "all",
    };
  },
  props: {
    arr: {
      type: Array,
      default: () => {
        [];
      },
    },
  },
  methods: {
    change(val) {
      this.isSel = val;
      this.$emit("exchangeDate", val);
    },
    //清除已完成
    clear() {
      this.$parent.list.forEach((element) => {
        element.isDone = false;
      });
    },
  },
  computed: {
    count() {
      return this.arr.length;
    },
  },
  watch: {
    arr: {
      deep: true,
      handler(val) {
        val.filter((item) => item.isDone == false);
      },
    },
  },
};
</script>
