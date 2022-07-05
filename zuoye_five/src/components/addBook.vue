<template>
  <div>
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
      bookObj: {
        bookname: "",
        author: "",
        publisher: "",
      },
      disabled: false,
    };
  },

  mounted() {},

  methods: {
    getList(params = {}) {
      this.$axios({
        url: "/api/getbooks",
        params: params,
      }).then((res) => {
        this.list = res.data.data;
      });
    },
    addFn(obj) {
      this.$refs.addbook.disabled = true;
      this.$axios({
        url: "/api/addbook",
        method: "POST",
        data: {
          ...obj,
          appkey: "7250d3eb-18e1-41bc-8bb2-11483665535a",
        },
      }).then((res) => {
        this.$refs.addbook.disabled = false;
        // this.$refs.addbook.clear();
        alert(res.data.msg);
        if (res.data.status == 200 || res.data.status == 201) {
          this.getList();
        }
      });
    },
  },
};
</script>

<style>
.main {
  width: 1200px;
  margin: 0 auto;
  /* background-color: pink; */
}
input {
  margin-bottom: 15px;
  border-radius: 3px;
}
</style>
