<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>序号</th>
          <th>书名</th>
          <th>作者</th>
          <th>出版商</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="item.id" v-for="item in list">
          <td>{{ item.id }}</td>
          <td>{{ item.bookname }}</td>
          <td>{{ item.author }}</td>
          <td>{{ item.publisher }}</td>
          <td>
            <a href="#" @click="delFn(item.id)">删除</a> |
            <a href="#" @click="detailFn(item.id)">详情</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    this.$axios({
      url: "/api/getbooks",
    }).then((res) => {
      this.list = res.data.data;
    });
  },
};
</script>

<style scoped>
table,
table tr th,
table tr td {
  padding: 10px 75px;
  border-collapse: collapse;
  border: 1px solid;
}
</style>
