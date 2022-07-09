<template>
  <div>
    <ul>
      <li @click="btn('/my/myOne')">
        <router-link to="/my/myOne">myOne</router-link>
      </li>
      <li @click="btn('/my/myTwo')">
        <router-link to="/my/myTwo">myTwo</router-link>
      </li>
      <li @click="btn('/my/myThree')">
        <router-link to="/my/myThree">myThree</router-link>
      </li>
      <button @click="random">随机展示</button>
    </ul>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["/my/myOne", "/my/myTwo", "/my/myThree"],
      ran: "",
      color: "",
    };
  },
  methods: {
    btn(target) {
      this.$router.push({
        path: target,
      });
    },
    random() {
      let ran = Math.floor(Math.random() * 4);
      this.ran = ran;
      // console.log(ran);
      this.$router.push({
        path: this.arr[ran],
      });
      this.color = "red";
    },
  },
};
</script>

<style>
.router-link-active {
  color: red;
}
</style>
