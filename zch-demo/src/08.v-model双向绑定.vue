<template>
  <div>
 <div>
      <span>用户名:</span>
      <input type="text" v-model="username" />
      <br>
      <span>密码:</span>
      <input type="password" v-model="pass" />
      <br>
     <span>来自于: </span>
      <!-- 下拉菜单要绑定在select上 -->
      <select v-model="from">
        <option value="北京市">北京</option>
        <option value="南京市">南京</option>
        <option value="天津市">天津</option>
      </select>
<br>

<br>
         <span>来自于: </span>
      <!-- 下拉菜单要绑定在select上 -->
      <select v-model="from1" multiple>
        <option value="北京市">北京</option>
        <option value="南京市">南京</option>
        <option value="天津市">天津</option>
      </select>
      <br>
      <br>
      <span>爱好: </span>
      <input type="checkbox" v-model="hobby" value="抽烟">抽烟
      <input type="checkbox" v-model="hobby" value="喝酒">喝酒
      <input type="checkbox" v-model="hobby" value="写代码">写代码
      <br>
      <span>爱好: </span>
      <input type="checkbox" v-model="hobby1" value="抽烟">抽烟
      <input type="checkbox" v-model="hobby1" value="喝酒">喝酒
      <input type="checkbox" v-model="hobby1" value="写代码">写代码
      <br>
      <span>性别: </span>
      <input type="radio" value="男" name="sex" v-model="gender">男
      <input type="radio" value="女" name="sex" v-model="gender">女
      <br>
      <br>
      <span>自我介绍</span>
      <textarea v-model="intro"></textarea>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        username: "",
        pass: '',
        from: "",
        from1: [],
        hobby: [],
        hobby1: '',
        gender: "",
        intro: ''
      }
    },
    methods: {
      
    }
  }
</script>

<style lang="scss" scoped>

</style>