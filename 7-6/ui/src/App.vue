<template>
  <div>
    <div class="btn">
      <button @click="componentId = 'userLoginVue'">登录</button>
      <button @click="componentId = 'userRester'" style="margin-left: 30px">
        注册
      </button>
    </div>
    <component :is="componentId"></component>
  </div>
</template>

<script>
import userLoginVue from "./components/userLogin.vue";
import userRester from "./components/userRester.vue";
export default {
  data() {
    return {
      componentId: "userRester",
    };
  },
  components: {
    userLoginVue,
    userRester,
  },
};
</script>

<style>
body {
  width: 500px;
  height: 500px;
  margin: 0 auto;
  text-align: center;
}
.btn {
  margin-left: 150px;
  margin-bottom: 20px;
  text-align: center;
}
</style>
