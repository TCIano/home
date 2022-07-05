<template>
  <div id="app">
    <table class="tb">
      <tr>
        <th><input type="checkbox" v-model="isAll" />全选</th>
        <th>商品</th>
        <th>单价</th>
        <th>数量</th>
        <th>小记</th>
        <th>操作</th>
      </tr>
      <!-- 循环渲染的元素tr -->
      <tr v-for="item in list" :key="item.id">
        <td>
          <input type="checkbox" v-model="item.c" />
        </td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td>
          <button @click="jian(item.id)">-</button
          ><input type="text" v-model="item.count" /><button
            @click="add(item.id)"
          >
            +
          </button>
        </td>
        <td>{{ item.count * item.price }}</td>
        <td><button @click="del(item.id)">删除</button></td>
      </tr>

      <tr v-if="list.length === 0">
        <td colspan="4">没有数据咯~</td>
      </tr>
    </table>
    <br />
    <button @click="delll">删除选中商品</button>
    <button @click="delAll">清理购物车</button>
    <br />
    <div style="margin-top: 20px">
      <h2>统计</h2>
      <p>已经选中商品件数{{ allCount }}</p>
      <p>总价{{ allPrice }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: '奔驰', price: 550000, count: 0, c: false },
        { id: 2, name: '宝马', price: 650000, count: 0, c: false },
        { id: 3, name: '奥迪', price: 450000, count: 0, c: false },
      ],
      newArr: [],
    };
  },
  methods: {
    del(id) {
      // 删除按钮 - 得到索引, 删除数组里元素
      let index = this.list.findIndex((ell) => ell.id == id);
      this.list.splice(index, 1);
    },
    delll() {
      this.list = this.list.filter((item) => {
        return !item.c;
      });
    },
    delAll() {
      this.list = [];
    },
    add(val) {
      let index = this.list.findIndex((ell) => ell.id == val);
      this.list[index].count++;
    },
    jian(val) {
      let index = this.list.findIndex((ell) => ell.id === val);
      if (this.list[index].count <= 0) {
        return this.list[index].count == 0;
      }
      this.list[index].count--;
    },
  },
  computed: {
    isAll: {
      set(val) {
        this.list.forEach((ell) => (ell.c = val));
      },
      get() {
        return this.list.every((ell) => ell.c == true);
      },
    },
    allPrice() {
      return this.list.reduce((sum, text) => {
        if (text.c) {
          return (sum += text.price * text.count);
        }
        return sum;
      }, 0);
    },
    allCount() {
      return this.list.reduce((sum, text) => {
        if (text.c) {
          return (sum = sum + text.count);
        }
        return sum;
      }, 0);
    },
  },
};
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
</style>
