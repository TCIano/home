<template>
  <div id="all">
    <div>
      <!-- <slot name="phone"> -->
      <span>手机号码：</span>
      <input type="number" name="" id="" placeholder="请输入手机号码" />
      <!-- </slot> -->
      <!-- <span>手机号码：</span>
      <input type="text" name="" id="" placeholder="请输入手机号码" /> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#all {
  font-size: 15px;
  height: 300px;
  /* line-height: 300px; */
  margin-top: 50px;
  text-align: center;
}
input {
  height: 20px;
  border-radius: 5px;
}
</style>
