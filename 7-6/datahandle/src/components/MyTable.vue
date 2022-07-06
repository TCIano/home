<template>
  <div>
    <table border="1">
      <thead>
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>头像</th>
        </tr>
      </thead>
      <thead>
        <tr v-for="item in arr" :key="item.id">
          <td>
            <slot name="id" :row="item">序号</slot>
            <!-- {{ index + 1 }} -->
          </td>
          <td>
            <slot name="name" :row="item"></slot>
          </td>
          <td>
            <slot name="age" :row="item"></slot>
          </td>
          <td>
            <slot name="img" :row="item"></slot>
          </td>
        </tr>
      </thead>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["arr"],
};
</script>
