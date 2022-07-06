<template>
  <div>
    <a href="#" @click="comName = 'Tel'">手机注册</a>
    <a href="#" @click="comName = 'Email'">邮箱注册</a>
    <div style="border: 5px solid #a3cf62">
      <keep-alive>
        <component :is="comName"> </component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Tel from "./components/01/UserInfo.vue";
import Email from "./components/01/UserName.vue";

export default {
  data() {
    return {
      comName: "Tel",
    };
  },
  components: {
    Tel,
    Email,
  },
};
</script>

<style>
a {
  color: #7fb80e;
  margin: 50px;
  text-decoration: none;
}
.inputborder {
  width: 200px;
  height: 40px;
  border: 2px solid green;
  line-height: 40px;
  margin: 10px 60px;
  padding-left: 10px;
}
.btn {
  width: 220px;
  height: 40px;
  background-color: #b2d235;
  border: 2px solid green;
  line-height: 40px;
  margin: 20px 60px;
}
</style>
