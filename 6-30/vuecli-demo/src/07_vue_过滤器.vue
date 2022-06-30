<template>
  <div>
    <!-- 2.过滤器的使用
      1. 在插值表达式 和  v-bind的表达式里可以用
      {{ message | 过滤器的名称 }}

      实现一个把所有字母转换成大写的过滤器
     -->
    <div>{{msg}}</div>
    <div>{{msg | resv('|')}}</div>
    <p :title="msg | toUp | resv('|')">鼠标悬停</p>
  </div>
</template>

<script>
export default {
  name: 'VuecliDemoApp',
  // 过滤器的使用步骤
  // 1. 注册
  // 1.1 局部注册
  // filters: {
  //   过滤器的名称 (val) {
  //     return 处理后的值
  //   }
  // },
  // 只在当前的.vue文件里生效
  data() {
    return {
      msg: 'hello world',
    }
  },
  filters: {
    toUp: (value) => {
      return value.toUpperCase()
    },
    // formatDate(value) => {
    //   return
    // }
  },
}
</script>
