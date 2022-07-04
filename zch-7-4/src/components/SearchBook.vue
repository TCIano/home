<template>
  <div>
    <input
      type="text"
      placeholder="搜索-书本名称"
      v-model="bookname"
      @keydown.enter="findBook"
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
    findBook() {
      this.$axios({
        url: '/api/getbooks',
        params: {
          bookname: this.bookname,
        },
      }).then((res) => {
        console.log(res)
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
