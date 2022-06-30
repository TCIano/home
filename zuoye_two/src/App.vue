<template>
  <div>
    <p v-show="isShow">我是v-show指令</p>
    <button @click="isShow = !isShow">click me show</button>
    <br>

    <p v-show="isIf">我是v-if指令</p>
    <button @click="isIf = !isIf">click me if</button>
    <br>

    <p v-if="age >= 18">成年人</p>
    <p v-else-if="age >= 12 && age <= 18">青少年</p>
    <p v-else>儿童</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      isIf: false,
      age:17
    }
  }
}
</script>

<style>

</style>