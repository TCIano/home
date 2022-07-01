<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model.trim="uname" placeholder="请输入姓名" />
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model.trim="age" placeholder="请输入年龄" />
    </div>
    <div>
      <span>性别:</span>
      <select v-model="gender">
        <option :value="1">男</option>
        <option :value="0">女</option>
      </select>
    </div>
    <div>
      <button @click="add(editIndex)">{{isEdit?'修改':'添加'}}</button>
    </div>
    <div>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item,index) in arr" :key="index">
          <td>{{index + 1}}</td>
          <td>{{item.uname}}</td>
          <td>{{item.age}}</td>
          <td>{{{0:'女',1:'男'}[item.gender]}}</td>
          <td>
            <button @click="del(index)">删除</button>
            <button @click="edit(item,index)">编辑</button>
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
      //当前编辑行的索引
      editIndex: null, //用来保存点击编辑时候获取的索引
      isEdit: false, //用来改变添加修改功能
      uname: '',
      age: '',
      gender: 0,
      arr: [],
    }
  },
  methods: {
    add(index) {
      if (this.uname == '' || this.age == '') {
        return alert('请输入')
      }
      if (this.isEdit == true) {
        //如果当前编辑行索引不为空，那就根据索引修改当前行，
        // 把输入框内容赋值给当前数组元素
        // this.$set(this.arr, index, {
        //   uname: this.uname,
        //   age: this.age,
        //   gender: this.gender,
        // })
        this.arr[index].uname = this.uname
        this.arr[index].age = this.age
        this.arr[index].gender = this.gender
        //把信息索引置空
        this.editIndex = null
      } else {
        this.arr.push({
          uname: this.uname,
          age: this.age,
          gender: this.gender,
        })
      }
      this.uname = ''
      this.age = ''
      this.gender = 0
    },
    del(index) {
      this.arr.splice(index, 1)
    },
    edit(item, index) {
      //点击编辑之后获取当前索引
      this.editIndex = index
      //把当前内容赋值到输入框中
      this.uname = item.uname
      this.age = item.age
      this.gender = item.gender
      //改变按钮内容
      this.isEdit = true
    },
  },
}
</script>
