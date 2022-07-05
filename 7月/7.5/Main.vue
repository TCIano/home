<template>
  <div id="app">
    <input
      type="text"
      placeholder="搜索-书本名称"
      v-model.trim="bname"
      @keydown.enter="enter"
    />
    <table class="tb">
      <tr>
        <th>序号</th>
        <th>书名</th>
        <th>作者</th>
        <th>出版商</th>
        <th>操作</th>
      </tr>
      <tr v-for="item in list" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.bookname }}</td>
        <td>dsad</td>
        <td>dsad</td>
        <td>
          <button @click="del(item.id)">删除</button
          ><button @click="LookBook(item.id)">详情</button>
        </td>
      </tr>
    </table>

    <input type="text" placeholder="书名" v-model="bookObj.bookname" /><br />
    <input type="text" placeholder="作者" v-model="bookObj.author" /><br />
    <input type="text" placeholder="出版社" v-model="bookObj.publisher" /><br />
    <button @click="addFn">新增</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bname: '',
      list: [],
      bookName: '',
      bookObj: {
        bookname: '',
        author: '',
        publisher: '',
      },
    };
  },
  mounted() {
    this.getList();
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
    enter() {
      if (this.bname == '') {
        return alert('输入不能为空');
      }
      this.list = this.list.filter((obj) => obj.bookname == this.bname);
    },
    del(id) {
      this.$axios({
        url: '/api/delbook',
        method: 'GET',
        params: {
          id,
        },
      }).then((res) => {
        console.log(res);
        if (res.data.status !== 200) return alert(res.data.msg);
        this.getList();
      });
    },
    getList() {
      this.$axios({
        url: '/api/getbooks',
      }).then((res) => {
        this.list = res.data.data;
      });
    },
    addFn() {
      this.$axios({
        url: '/api/addbook',
        method: 'POST',
        data: {
          ...this.bookObj,
        },
      }).then((res) => {
        console.log(res);
        this.getList();
      });
      (this.bookObj.bookname = ''),
        (this.bookObj.author = ''),
        (this.bookObj.publisher = '');
    },
    LookBook(id) {
   this.$axios({
        url: '/api/getbooks',
        params:{id}
      }).then((res) => {
        const Book=res.data.data[0]
        alert(`作者${Book.author}出版社${Book.publisher}书名${Book.bookname}`)
      });
    },
  },
};
</script>

<style scoped>
#app {
  width: 600px;
  margin: 0 auto;
}
.tb {
  border-collapse: collapse;
  width: 100%;
}
.tb th {
  background-color: #0094ff;
  color: white;
}
.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}
</style>
