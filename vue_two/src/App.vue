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
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button @click="addFn()">添加/修改</button>
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
        <tr v-for="item in arr" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.age}}</td>
          <td>{{item.sex}}</td>
          <td>
            <button @click="delFn(item.id)">删除</button>
            <button @click="bjFn(item.id)">编辑</button>
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
      sex:'',
      age:'',
      name:'',
      arr:[
        {
        id:1,
        name:'zs',
        age: 18,
        sex:'男'
      },
      {
        id:2,
        name:'ls',
        age: 19,
        sex:'男'
      },{
        id:3,
        name:'ww',
        age: 17,
        sex:'男'
      }
      ]
    }
  },
  methods: {
    // 添加功能
    addFn() {
      // console.log(this.name);
      if(this.name=='' || this.age==''||this.sex=='') {
          return alert("Please enter")
        }
       this.arr.push({
        id:this.arr[this.arr.length - 1].id+1,
        name:this.name,
        age:this.age,
        sex:this.sex,
      })
    },
    // 删除功能
    delFn(id) {
      const inedx = this.arr.findIndex(ele=>{
        return ele.id == id
      })
      console.log(inedx);
      this.arr.splice(inedx, 1);
    },
    // 编辑功能
    bjFn(id) {
      const index1 =this.arr.find(ele=>{
        return ele.id == id
      })
      this.name = index1.name
      this.age = index1.age
      this.sex = index1.sex
      
    }
  },
}
</script>
