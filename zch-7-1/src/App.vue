<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" placeholder="请输入姓名" v-model.trim="demoArr.name"/>
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" placeholder="请输入年龄" v-model.trim.number="demoArr.age"/>
    </div>
    <div>
      <span>性别:</span>
      <select v-model="demoArr.sex">
        <option :value=1>男</option>
        <option :value=0>女</option>
      </select>
    </div>
    <div>
      <button @click.prevent="addFn">{{isEdit ? '添加' : '修改'}}</button>
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
          <td>{{{1:'男', 0:'女'}[item.sex]}}</td>
          <td>
            <button @click="delFn(item.id)">删除</button>
            <button @click="editFn(item)">编辑</button>
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
          sex: 1,
        },
        {
          id: 2,
          name: 'Jone',
          age: 21,
          sex: 0,
        }
      ],
      demoArr: {
      name: '',
      age: '',
      sex: 1,

      },
      isEdit:false,
      currentld: '',
    } 
  },
  methods: {
    addFn() {
      if(this.isEdit) {
        const index = this.arr.findIndex(ele=> ele.id == this.currentld);
        this.arr[index].name = this.name;
        this.arr[index].age = this.age;
        this.arr[index].sex = this.sex;
        this.currentld = ''
        this.clearFn()
        alert('修改完成')
        return;
      }
      if(this.name.length == 0 || this.age == 0) {
        this.name = ''
        this.age = ''
        return alert('请输入姓名和年龄')
      }
      const id = this.arr[this.arr.length - 1] ? 
      this.arr[this.arr.length - 1].id + 1 : 1
      this.arr.push({
        id,
        name: this.name,
        age: this.age,
        sex: this.sex,
      })
      this.clearFn();
      alert('添加完成')
    },
    editFn(data) {
      this.isEdit = true;
      console.log(data);
      this.name = data.name;
      this.age = data.age;
      this.sex = data.sex;
      this.currentld = data.id;
    },
    delFn(id) {
      const index = this.arr.findIndex(ele => ele.id == id)
      this.arr.splice(index, 1)
    },
    clearFn() {
      // 清空输入的值
      this.name = ''
      this.age = ''
      this.sex = 1
    }
  }
}
</script>
<style>

</style>