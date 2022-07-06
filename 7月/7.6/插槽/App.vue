<template>
  <div>
    <MyMain>
      <template v-slot:idd="scoped">
        <p>{{ scoped.row.id }}</p>
      </template>
      <template v-slot:name="scoped">
        <input v-model="scoped.row.name" />
      </template>
      <template v-slot:age="scoped">
        <input type="number" name="" id="" v-model="scoped.row.age" />
      </template>
      <template v-slot:touxA="scoped">
        <a :href="scoped.row.headImgUrl">{{ scoped.row.headImgUrl }}</a>
      </template>
      <template v-slot:touxP="scoped">
        <img :src="scoped.row.headImgUrl" alt="" />
      </template>
      <template v-slot:touxW="scoped">
        {{ scoped.row.headImgUrl }}
      </template>
    </MyMain>
  </div>
</template>

<script>
import MyMain from './components/MyMain.vue';
export default {
  components: {
    MyMain,
  },
};
</script>

<style></style>
