<template>
  <div>
    <SearchBook></SearchBook>
    <BodyBook></BodyBook>
    <AddBook></AddBook>
  </div>
</template>

<script>
import SearchBook from "./components/searchBook.vue";
import BodyBook from "./components/bodyBook.vue";
import AddBook from "./components/addBook.vue";
export default {
  name: "App",
  data() {
    return {
      list: [],
      bookname: "",
      isShow: false,
    };
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
    getList(params = {}) {
      this.$axios({
        url: "/api/getbooks",
        params: params,
      }).then((res) => {
        this.list = res.data.data;
      });
    },
  },
};
</script>

<style></style>
