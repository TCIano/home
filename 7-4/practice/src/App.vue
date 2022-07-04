<template>
  <div id="app">
    <h1>图书列表</h1>
    <search-book @searchBook="searchBook" />
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
      <bookList :arr="bookList" @delBooks="delBooks" @showDetail="showDetail" />
    </table>
    <!-- <div v-show="isShow">dfasafa</div> -->
    <add-book @addBook="addBook"></add-book>
  </div>
</template>

<script>
import searchBook from "./components/searchBook.vue";
import bookList from "./components/bookList.vue";
import addBook from "./components/addBook.vue";
export default {
  data() {
    return {
      bookList: [], //存放传入的数组
      isShow: false, //默认弹出框为隐藏
    };
  },
  methods: {
    searchBook(val) {
      if (val.length == 0) return alert("请输入内容");
      console.log(val);
      this.bookList = this.bookList.filter((item) => item.bookname == val);
    },
    getlist() {
      this.$axios({
        url: "/api/getbooks",
        // params: {
        //   ...this.objBook,
        // },
      }).then((res) => {
        console.log(res);
        this.bookList = res.data.data;
        console.log(this.bookList);
      });
    },
    //删除书本
    delBooks(val) {
      console.log(val);
      //发起请求
      this.$axios({
        url: "/api/delbook",
        params: {
          id: val,
        },
      }).then((res) => {
        if (res.data.status !== 200) return alert(res.data.msg);
        console.log(res);
        // this.bookList = res.data.data;
        this.getlist();
      });
    },
    //详情展示
    showDetail(id) {
      console.log(id);
      const index = this.bookList.findIndex((item) => item.id == id);
      alert(
        `      书名:${this.bookList[index].bookname},
      作者:${this.bookList[index].author},
      出版社:${this.bookList[index].publisher}`
      );
      // this.isShow = true;
      // console.log(this.isShow);
    },
    //添加书本
    addBook(obj) {
      console.log(obj);
      //发起请求
      this.$axios({
        method: "POST",
        url: "/api/addbook",
        data: {
          ...obj,
        },
      }).then((res) => {
        if (res.data.status !== 201) return alert(res.data.msg);
        this.getlist();
        obj.bookname = "";
        obj.author = "";
        obj.publisher = "";
      });
    },
  },
  computed: {},
  mounted() {
    // this.getList();
  },
  created() {
    this.getlist();
  },
  components: {
    searchBook,
    bookList,
    addBook,
  },
};
</script>

<style scoped>
#app {
  position: relative;
  width: 600px;
  margin: 0 auto;
}
h1 {
  text-align: center;
}
table {
  width: 600px;
  margin: 0 auto;
  border: 1px solid;
}
table th {
  border: 1px solid;
  background: skyblue;
}
/* .mask {
  position: absolute;
  left: 50px;
  top: 30px;
} */
</style>
