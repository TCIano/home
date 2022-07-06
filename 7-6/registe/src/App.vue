<template>
  <div id="all">
    <div class="btn">
      <a href="javascript:;" @click="componentId = 'registerVue'">注册界面</a>
      <a href="javascript:;" @click="componentId = 'loginVue'">登录界面</a>
    </div>

    <keep-alive>
      <component :is="componentId">
        <!-- 注册界面 -->
        <template v-slot:address>
          <span>地址：</span>
          <input type="text" name="" id="" placeholder="请输入地址" />
        </template>
        <template v-slot:password>
          <span>输入密码：</span>
          <input type="password" name="" id="" placeholder="请输入密码" />
        </template>
        <template v-slot:vaild>
          <input type="number" name="" id="" />
          <button>验证码</button>
        </template>
        <!-- 登录页面 -->
      </component>
    </keep-alive>
  </div>
</template>

<script>
import registerVue from "./components/registerUser.vue";
import loginVue from "./components/loginUser.vue";
export default {
  data() {
    return {
      componentId: "registerVue",
    };
  },
  components: {
    registerVue,
    loginVue,
  },
};
</script>

<style scoped>
.btn {
  display: flex;
  height: 30px;
}
#all {
  margin: 0 auto;
  /* text-align: center; */
  width: 500px;
  height: 600px;
  padding-top: 20px;
  background-color: #ccc;
}
a:hover {
  border-bottom: 3px solid skyblue;
}
a {
  display: inline-block;
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  margin-left: 90px;
  /* margin-right: 50px; */
  text-decoration: none;
  font-size: 20px;
  color: black;
}
input {
  height: 20px;
  border-radius: 5px;
}
</style>
