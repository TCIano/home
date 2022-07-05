<template>
  <div>
    <input
      type="text"
      placeholder="搜索-书本名称"
      v-model="bookname"
      @keydown.enter="find"
    />
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
    }
  },
  methods: {
      find(){
        this.$emit("find")
      }
  },
}
</script>

<style lang="scss" scoped></style>
