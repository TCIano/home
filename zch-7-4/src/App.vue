<template>
<div>
<SearchBook></SearchBook>
<BodyBook></BodyBook>
<AddBook></AddBook>
</div>
</template>

<script>
import SearchBook from './components/SearchBook.vue'
import BodyBook from './components/BodyBook.vue'
import AddBook from './components/AddBook.vue'
  export default {
    data(){
      return {}
    },
    components: {
      SearchBook,
      BodyBook,
      AddBook,
    }
  }
</script>

<style lang="scss" scoped>

</style>
