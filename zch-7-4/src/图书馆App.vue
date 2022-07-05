<template>
<div>
<SearchBook @find="findBook"></SearchBook>
<BodyBook :list="list" @del="delFn" @detail="detailFn"></BodyBook>
<AddBook v-if="isShow" @add="addBook" ref="addbook"></AddBook>
</div>
</template>

<script>
import SearchBook from './components/SearchBook.vue'
import BodyBook from './components/BodyBook.vue'
import AddBook from './components/AddBook.vue'
  export default {
    data(){
      return {
        list: [],
        isShow: true,
      }
    },
    components: {
      SearchBook,
      BodyBook,
      AddBook,
    },
    created() {
      this.getList();
    },
    methods: {
    findBook() {
      const params = {};
      this.bookname ? (params.bookname = this.bookname) : "";
      this.getList(params)
    },
      getList(params = {}) {
      this.$axios({
        url: "/api/getbooks",
        params: params,
      }).then((res) => {
        this.list = res.data.data;
      });
    },
      addBook(bookObj) {
        this.$refs.addbook.disabled = true;
        this.$axios({
        url: '/api/addbook',
        method: 'POST',
        data: {
          ...bookObj,
          appkey: "7250d3eb-18e1-41bc-8bb2-11483665535a",
        },
      }).then((res) => {
        this.$refs.addbook.disabled = false;
        alert(res.data.msg)
        if(res.data.status === 200 || res.data.status === 201) {
            this.getList();
        }
      })
    },
      delFn(id){
        this.$axios({
          url: '/api/delbook',
          params: {id},
        }).then(() => {
          this.getList();
        })
      },
      detailFn(id) {
      this.$axios({
        url: "/api/getbooks",
        params: { id },
      }).then((res) => {
        const info = res.data.data && res.data.data[0];
        alert(
          `作者：${info.author}; 出版社：${info.publisher}; 书名：${info.bookname}`
        );
      });
    },
    }
  }
</script>

<style lang="scss" scoped>

</style>
