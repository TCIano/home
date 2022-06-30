<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model.trim="nmame"/>
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model.trim.number="age"/>
    </div>
    <div>
      <span>性别:</span>
      <select v-model="from">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button @click.prevent="addFn">添加/修改</button>
    </div>
    <div>
      <table
        border="1"
        cellpadding="10"
        cellspacing="0"
        
      >
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item, index) in arr" :key="index">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.age}}</td>
          <td>{{item.sex}}</td>
          <td>
            <button @click="delFn(item.id)">删除</button>
            <button >编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      arr: [
        {
          id: 1,
          name: 'Tom',
          age: 19,
          sex: '男',
        },
        {
          id: 2,
          name: 'Jone',
          age: 21,
          sex: '女',
        }
      ],
      name: '',
      age: '',
      from: [],
    } 
  },
  methods: {
    addFn() {
      if(this.name.length == 0 || this.age == 0) {
        this.name = ''
        this.age = ''
        return alert('请输入姓名和年龄')
      }
      this.arr.push({
        id: this.arr[this.arr.length - 1].id + 1,
        name: this.name,
        age: this.age,
        
      })
      // 清空输入的值
      this.name = ''
      this.age = ''
    },
    delFn(id) {
      const index = this.arr.findIndex(ele => ele.id == id)
      this.arr.splice(index, 1)
    }
  }
}
</script>
<style>

</style>