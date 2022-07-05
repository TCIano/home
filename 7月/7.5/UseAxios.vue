<template>
  <div>
    <p>1. 获取所有图书信息</p>
    <button @click="getBooks">点击-查看控制台</button>
    <hr />
    <p>2. 查询某本书籍信息</p>
    <input type="text" placeholder="请输入要查询 的书名" v-model="bookname" />
    <button @click="findBooks">查询</button>
    <hr />
    <p>3. 新增图书信息</p>
    <div>
      <input type="text" placeholder="书名" v-model="bookObj.bookname" />
    </div>
    <div>
      <input type="text" placeholder="作者" v-model="bookObj.author" />
    </div>
    <div>
      <input type="text" placeholder="出版社" v-model="bookObj.publisher" />
    </div>
    <button @click="addBook">发布</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bName: '',
      bookObj: {
        bookname: '',
        author: '',
        publisher: '',
      },
      bookname: '',
    };
  },
  methods: {
    getBooks() {
      console.log(
        this.$axios({
          url: '/api/getbooks',
        }).then((res) => {
          console.log(res);
        })
      );
    },
    addBook() {
      this.$axios({
        url: '/api/addbook',
        data: {
          appkey: '7250d3eb-18e1-41bc-8bb2-11483665535a',
          ...this.bookObj,
        },
      }).then((res) => {
        console.log(res);
      });
    },
    findBooks(){
        this.$axios({
             url:'/api/getbooks',
             params:{
                bookname:this.bookname
             }
        }).then(res=>{
            console.log(res);
        })
    }
  },
};
</script>

<style></style>
