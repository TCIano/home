<template>
  <div>
    <input type="text" placeholder="书名" v-model="bookObj.bookname" />
    <br />
    <input type="text" placeholder="作者" v-model="bookObj.author" />
    <br />
    <input type="text" placeholder="出版社" v-model="bookObj.publisher" />
    <br />
    <button @click="add" 
    :disabled="disabled"
    
    >新增{{isShow ? "隐藏" : "显示"}}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookObj: {
        // 参数名提前和后台的参数名对上-发送请求就不用再次对接了
        bookname: '',
        author: '',
        publisher: '',
      },
        bookname: '',
        disabled: false,
        isShow: false,
    }
  },
  methods: {
        add() {
      if (
        !this.bookObj.bookname.trim() ||
        !this.bookObj.author.trim() ||
        !this.bookObj.publisher.trim()
      ) {
        return alert("Please enter a book message");
      }
      this.$emit("add", this.bookObj);
    },
    clear() {
      this.bookObj.bookname = "";
      this.bookObj.author = "";
      this.bookObj.publisher = "";
    },
  },
}
</script>

<style lang="scss" scoped></style>
