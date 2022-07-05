<template>
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
      <tr v-for="item in list" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.bookname}}</td>
        <td>{{item.author}}</td>
        <td>{{item.publisher}}</td>
        <td>
            <a href="" @click="delFn(item.id)">删除</a> <a href="" @click="detail(item.id)">详情</a>
        </td>
      </tr>
    </tbody>
    <tfoot v-if="list.length <= 0">
          <tr>
            <td>暂无数据</td>
          </tr>
    </tfoot>
  </table>
</template>

<script>
export default {
    data(){
        return{}
    },
    props: {
      list: {
        type: Array,
        default: () => [],
      }
    },
    methods: {
      del(id){
        this.$emit("del", id)
      },
      detail(id){
        this.$emit("detail", id)
      }
    }
}
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
