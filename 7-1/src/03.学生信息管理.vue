<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model.trim="name"/>
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model.trim="age"/>
    </div>
    <div>
      <span>性别:</span>
      <select v-model="sex">
        <option value="1">男</option>
        <option value="0">女</option>
      </select>
    </div>
    <div>
      <button @click="addFn">添加/修改</button>
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
        <tr v-for="item in list" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.age}}</td>
          <td>{{ { 0: "女", 1: "男" }[item.sex] }}</td>
          <td>
            <button >删除</button>
            <button @click="editFn">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          id: 100,
          age: 18,
          name: "章三",
          sex: 1, // 1男 0女
        },
        {
          id: 101,
          age: 18,
          name: "章三三",
          sex: 0, // 1男 0女
        },
      ],
      name:'',
      age:'',
      sex:0
    }
  },
  methods:{
    addFn() {
      if(this.name==''||this.age==0) {
        return alert('Please enter a name and age.');
      }
      const id = this.list[this.list.length-1].id +1;
      this.list.push({
        id,
        name:this.name,
        age:this.age,
        sex:this.sex
      })
    },
    editFn() {
      
    }
  }
}
</script>
