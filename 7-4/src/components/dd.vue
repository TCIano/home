<template>
  <div id="form">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>序号</th>
          <th>书名</th>
          <th>作者</th>
          <th>出版社</th>
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
            < a href=" ">删除详情</ a>
          </td>
        </tr>
      </tbody>
    </table>

    <p>新增图书信息</p >
    <div>
      <input type="text" placeholder="书名" v-model="bookObj.bookname" />
    </div>
    <div>
      <input type="text" placeholder="作者" v-model="bookObj.author" />
    </div>
    <div>
      <input type="text" placeholder="出版社" v-model="bookObj.publisher" />
    </div>
    <button @click="sendFn">新增</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      bookName: '',
      bookObj: {
        // 参数名提前和后台的参数名对上-发送请求就不用再次对接了
        bookname: '',
        author: '',
        publisher: '',
      },
    };
  },
  mounted() {
    this.$axios({
      url: '/api/getbooks',
      method: 'GET',
    }).then((res) => {
      this.list = res.data.data;
    });
  },
  methods: {
    sendFn() {
      this.$axios({
        url: '/api/addbook',
        method: 'POST',
        data: {
          appkey: '7250d3eb-18e1-41bc-8bb2-11483665535a',
          ...this.bookObj,
        },
      });
    },
  },
};
</script>
<style lang="css">
th,
td {
  width: 150px;
  height: 50px;
}
td {
  text-align: center;
  line-height: 50px;
}
</style>