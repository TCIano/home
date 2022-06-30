<template>
  <div>
    <ul>
      <li v-for="item in stuArr" :key="item.id">
        {{item.name}} - {{item.sex}} - {{item.hobby}}
      </li>
    </ul>
    <br>
    <h1>遍历对象</h1>
    <ul>
      <li v-for="(item, key) in tObj" :key="item">
        {{item}} - {{key}}
      </li>
    </ul>
    <h1>遍历数字</h1>
    <ul>
      <li v-for="item in count" :key="item">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ["汪毅琦", "张岩", "魏从阳", "余志欣"],
      stuArr: [
        {
          id: 1001,
          name: "张岩",
          sex: "男",
          hobby: "大傻杯",
        },
        {
          id: 1002,
          name: "魏从阳",
          sex: "渣男",
          hobby: "爱戴绿帽子",
        },
      ],
      tObj: {
        name: "余志欣",
        age: 80,
        class: "智障",
      },
      count: 10,
    };
  },
}
</script>

<style>

</style>