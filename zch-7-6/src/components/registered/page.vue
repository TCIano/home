<template>
  <div>
    <table>
      <slot name="region">
        <span>选择所在地区(实名认证主体所在地)</span>
        <br />
        <input type="checkbox" />中国大陆 <input type="checkbox" />中国香港
      </slot>
      <br />
      <span>手机号码：</span>
      <br />
      <input type="" placeholder="请输入手机号" />
      <br />
      <input type="text" placeholder="请输入验证码" /><button>
        发送验证码
      </button>
      <br />
      <slot name="password">
        <span>登录密码</span>
        <br />
        <input type="password" placeholder="请输入密码" />
        <br />
        <input type="password" placeholder="再次输入密码" />
        <br />
      </slot>
      <slot name="inviteCode">
        <span>邀请码(选填)</span>
        <br />
        <input type="text" placeholder="输入客户经理邀请码" />
      </slot>
    </table>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
