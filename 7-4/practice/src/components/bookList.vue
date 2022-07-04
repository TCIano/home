<template>
  <tbody>
    <tr v-for="item in arr" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.bookname }}</td>
      <td>{{ item.author }}</td>
      <td>{{ item.publisher }}</td>
      <td>
        <a href="javascript:;" @click="del(item.id)">删除</a>
        <a href="javascript:;" @click="detail(item.id)">详情</a>
      </td>
    </tr>
  </tbody>
</template>

<script>
export default {
  props: {
    arr: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    del(id) {
      this.$emit("delBooks", id);
    },
    detail(id) {
      this.$emit("showDetail", id);
    },
  },
};
</script>

<style scoped>
tbody tr td {
  border: 1px solid;
  text-align: center;
}
a {
  margin-left: 10px;
  margin-right: 10px;
  text-decoration: none;
}
</style>
