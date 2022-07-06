<template>
  <div>
  <UserTable>
    <template v-slot:id="scope">
      <input v-model="scope.row.id">
    </template>
        <template v-slot:name="scope">
      <input v-model="scope.row.name">
    </template>
        <template v-slot:age="scope">
      <input v-model="scope.row.age">
    </template>
        <template v-slot:count="scope">
      <img :src="scope.row.headImgUrl" alt="" width="60px">
    </template>
  </UserTable>
  </div>
</template>

<script>
import UserTable from './views/07_UserTable.vue'
  export default {
    components: {
      UserTable
    }
  }
</script>

<style lang="scss" scoped>

</style>