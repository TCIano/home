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
            <a href=""><button>删除</button><button>详情</button></a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
    data(){
        return{
            list: []
        }
    },
    mounted() {
        this.$axios({
            url: '/api/getbooks',
        }).then((res) => {
            this.list = res.data.data
        })
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
