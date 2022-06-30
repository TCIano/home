<template>
  <div>
    <ul>
      <li v-for="(item,index) in arr" :key="index">{{item}}</li>
    </ul>
    <h2>遍历数组</h2>
    <ul>
      <li v-for="value in  stuArr" :key="value.id">{{value.name}}-{{value.sex}}-{{value.hobby}}</li>
    </ul>
    <h1>遍历对象</h1>
    <ul>
      <li v-for="(value,key) in tObj" :key="key">{{key}}-{{value}}</li>
    </ul>
    <h1>遍历数字</h1>
    <ul>
      <li v-for="value in count" :key="value">{{value}}</li>
    </ul>
  </div>
</template>

<script>
export default {
    return {
      arr: ['小明', '小欢欢', '大黄'],
      stuArr: [
        {
          id: 1001,
          name: '孙悟空',
          sex: '男',
          hobby: '吃桃子',
        },
        {
          id: 1002,
          name: '猪八戒',
          sex: '男',
          hobby: '背媳妇',
        },
      ],
      tObj: {
        name: '小黑',
        age: 18,
        class: '1期',
      },
      count: 10,
    }
  },
}
</script>

<style>
</style>
