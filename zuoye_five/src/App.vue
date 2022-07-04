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
  data() {
    return {};
  },
  components: {
    SearchBook,
    BodyBook,
    AddBook,
  },
};
</script>

<style></style>
