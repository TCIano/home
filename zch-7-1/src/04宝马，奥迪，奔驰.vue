<template>
  <div id="app">
    <table class="tb">
      <tr>
        <th><input type="checkbox" v-model="isAll"/>全选</th>
        <th>商品</th>
        <th>单价</th>
        <th>数量</th>
        <th>小记</th>
        <th>操作</th>
      </tr>
      <!-- 循环渲染的元素tr -->
      <tr v-for="item in list" :key="item.id">
        <td><input type="checkbox" v-model="item.c"/></td>
        <td>{{item.name}}</td>
        <td>{{item.price}}</td>
        <td><span @click="minus(item.id)">-</span><input type="text" v-model="item.count"/><span @click="buy(item.id)">+</span></td>
        <td>{{item.count * item.price}}</td>
        <td><button @click="del">删除</button></td>
      </tr>

      <tr v-if="list.length === 0">
        <td colspan="4">没有数据咯~</td>
      </tr>
    </table>
    <br />
    <button @click="delBtn">删除选中商品</button>
    <button @click="delFn">清理购物车</button>
    <br />
    <div style="margin-top: 20px">
      <h2>统计</h2>
      <p>{{allCount}}</p>
      <p>{{allPrice}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: "奔驰", time: "2020-08-01",price: 3300000, count: 0, c: false},
        { id: 2, name: "宝马", time: "2020-08-02",price: 3200000, count: 0, c: false},
        { id: 3, name: "奥迪", time: "2020-08-03",price: 3000000, count: 0, c: false},
      ],  
          
    };
  },
  methods: {
    del(id) {
      const index = this.list.findIndex(ele => ele.id = id)
      // 删除按钮 - 得到索引, 删除数组里元素
      this.list.splice(index, 1);
    },
    buy(val) {
        const index = this.list.findIndex(ele => ele.id == val)
        this.list[index].count++;
    },
    minus(val) {
        const index = this.list.findIndex(ele => ele.id == val)
        // this.list.item.count <= 0 ? 0 : 'item.count--'
        if(this.list[index].count <= 0) {
            return this.list[index].count = 0
        }else{
            this.list[index].count--;
        }
    },
    delBtn() {
        // filter()把传入的函数依次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素。
        this.list = this.list.filter(ele=> {return !ele.c})
    },
    delFn() {
        
      // 删除按钮 - 得到索引, 删除数组里元素
        this.list=[]
    }
  },
    computed: {
    allPrice() {
        return this.list.reduce((sum, next) => {
            return sum + next.count * next.price
        }, 0)
    },
    allCount() {
        return this.list.reduce((sum, next) => {
            return sum + next.count
        }, 0)
    },
    isAll: {
        set(val) {
            this.list.forEach((ele) => (ele.c = val))
        },
        get() {
            return this.list.every((ele)=> ele.c)
        }
    }
  }
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
