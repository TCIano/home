<template>
  <div id="app">
    <table class="tb">
      <tr>
        <th><input type="checkbox" v-model="checkAll" @click="isAllSelected" />全选</th>
        <th>商品</th>
        <th>单价</th>
        <th>数量</th>
        <th>小记</th>
        <th>操作</th>
      </tr>
      <!-- 循环渲染的元素tr -->
      <tr v-for="(item,index) in list" :key="item.id">
        <td><input type="checkbox" v-model="check" :value="item.id" /></td>
        <td>{{item.name}}</td>
        <td>{{item.price}}</td>
        <td><span @click="subCount(item.id)">-</span><input type="text" :value="item.count" /><span @click="addCount(item.id)">+</span></td>
        <td>{{item.price*item.count}}</td>
        <td><button @click="del(index)">删除</button></td>
      </tr>

      <tr v-if="list.length === 0">
        <td colspan="6">没有数据咯~</td>
      </tr>
    </table>
    <br />
    <button @click="delSelected()">删除选中商品</button>
    <button @click="delAll">清理购物车</button>
    <br />
    <div style="margin-top: 20px">
      <h2>统计</h2>
      <p>已经选中商品件数:{{this.check.length}}</p>
      <p>总价:{{allPrice}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: '奔驰', price: 350000, count: 0 },
        { id: 2, name: '宝马', price: 300000, count: 0 },
        { id: 3, name: '奥迪', price: 310000, count: 0 },
      ],
      check: [], //存储小复选框当前行的id
      checkAll: false, //默认全选为不选中
    }
  },
  methods: {
    del(index) {
      // 删除按钮 - 得到索引, 删除数组里元素
      this.list.splice(index, 1)
    },
    //+
    addCount(id) {
      console.log(id)
      for (let i = 0; i < this.check.length; i++) {
        console.log(this.check[i])
        if (this.check[i] == id) {
          let index = this.list.findIndex((item) => {
            return item.id == id
          })
          console.log(index)
          this.list[index].count++
        }
      }
    },
    //-
    subCount(id) {
      for (let i = 0; i < this.check.length; i++) {
        let index = this.list.findIndex((item) => {
          return item.id == id
        })
        console.log(index)
        this.list[index].count == 0
          ? (this.list[index].count = 0)
          : this.list[index]--
      }
    },
    //清理购物车
    delAll() {
      this.list = []
    },
    //全选
    isAllSelected() {
      console.log(this.checkAll)
      if (this.checkAll) {
        this.check = []
      } else {
        this.list.forEach((item) => {
          if (this.check.indexOf(item.id) == -1) {
            this.check.push(item.id)
          }
        })
      }
    },
    //删除选中
    delSelected() {
      console.log(this.check)
      //用来保存过滤出来的元素
      let arr = []
      // for (let i = 0; i < this.check.length; i++) {
      //   arr = this.list.filter((item) => {
      //     // console.log(item.id)
      //     console.log(this.check[i])
      //     return item.id !== this.check[i]
      //   })
      //   console.log(arr)
      // }
      //匹配选中的数组和原来数据里面id，如果匹配不到说明，数组里的这个元素没有被选中，
      // 那么就把这个没选中的元素重新渲染到原数组里，相当于删除了选中元素。
      for (let i = 0; i < this.list.length; i++) {
        if (this.check.indexOf(this.list[i].id) == -1) {
          // console.log(this.check.indexOf(i))
          arr.push(this.list[i])
        }
      }
      this.list = arr
      this.check = []
    },
  },
  computed: {
    //总价计算属性
    allPrice() {
      return this.list.reduce((arr, curr) => {
        return arr + curr.count * curr.price
      }, 0)
    },
  },
  watch: {
    check() {
      if (this.check.length == this.list.length && this.list.length !== 0) {
        this.checkAll = true
      } else {
        this.checkAll = false
      }
    },
  },
}
</script>

<style>
#app {
  width: 600px;
  margin: 10px auto;
}

.tb {
  border-collapse: collapse;
  width: 100%;
}

.tb th {
  background-color: #0094ff;
  color: white;
}

.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
span {
  cursor: pointer;
}
</style>
