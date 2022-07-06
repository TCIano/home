<template>
  <div id="all">
    <div class="email">
      <span>邮箱号：</span>
      <input type="text" name="" id="" placeholder="请输入邮箱" />
    </div>
    <div class="vaild">
      <slot name="vaild"></slot>
    </div>
    <div class="address">
      <slot name="address">1212</slot>
    </div>
    <div class="password">
      <slot name="password"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#all {
  margin: 0 auto;
  font-size: 15px;
  height: 300px;
  /* line-height: 300px; */
  margin-top: 50px;
  text-align: center;
}
input {
  height: 20px;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
