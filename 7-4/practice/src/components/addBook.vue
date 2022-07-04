<template>
  <div id="all">
    <label for=""
      >书名： <input type="text" v-model="objBook.bookname"
    /></label>

    <label for="">作者： <input type="text" v-model="objBook.author" /></label>

    <label for=""
      >出版社：<input type="text" v-model="objBook.publisher"
    /></label>
    <button @click.once="add" :style="{ background: color }">添加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: "skyblue",
      objBook: {
        bookname: "",
        author: "",
        publisher: "",
      },
    };
  },

  methods: {
    add() {
      this.$emit("addBook", this.objBook);
      //   this.objBook.bookname = "";
      //   this.objBook.author = "";
      //   this.objBook.publisher = "";
      this.color = "#ccc";
    },
  },
};
</script>

<style scoped>
h4 {
  height: 5px;
  font-size: 13px;
  color: #fff;
  background: blue;
}
#all {
  margin-top: 10px;
  border: 2px solid skyblue;
  box-shadow: 10px 5px 5px;
  height: 130px;
}
button {
  width: 50px;
  width: 60px;
  color: #fff;
  margin-left: 5px;
  background-color: skyblue;
}
input {
  margin-left: 10px;
}
label {
  margin: 5px;
  display: inline-block;
  width: 100%;
  text-align: left;
}
</style>
