<template>
  <div>
    <span>选择所在地区（实名认证主体所在地）</span><br />
    <input type="checkbox" class="inputcheckbox" />中国大陆
    <input type="checkbox" class="inputcheckbox" />中国香港
    <span>手机号码</span>
    <input type="text" placeholder="输入手机号码" class="inputborder" />
    <input type="text" placeholder="输入验证码" class="inputborder1" />
    <button class="btn1">发送验证码</button><br />
    <span>登录密码</span>
    <input type="text" placeholder="输入密码" class="inputborder" />
    <button class="btn">注册</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
    };
  },
};
</script>
<style>
span {
  font-size: 12px;
  margin: 60px;
  color: green;
}
.inputcheckbox {
  margin-left: 55px;
}
.inputborder1 {
  width: 100px;
  height: 40px;
  border: 2px solid green;
  line-height: 40px;
  margin: 10px 15px 10px 60px;
  padding-left: 10px;
}
.btn1 {
  height: 45px;
  background-color: #b2d235;
  border: 2px solid green;
  line-height: 40px;
}
</style>
