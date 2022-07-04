<template>
  <div>
    <input
      type="text"
      placeholder="搜索-书本名称"
      v-model.trim="bookName"
      @keydown.enter="searchBook"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      bookName: "",
    };
  },
  methods: {
    searchBook() {
      this.$emit("searchBook", this.bookName);
      this.bookName = "";
    },
  },
};
</script>

<style scoped>
input {
  margin-bottom: 5px;
  width: 150px;
  height: 20px;
  border: 1px solid blue;
  padding-left: 10px;
}
</style>
