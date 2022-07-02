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
      <tr v-for="item in list" :key="item.id" >
        <td><input type="checkbox" v-model="item.c"/></td>
        <td>{{item.name}}</td>
        <td>{{item.price}}</td>
        <td>
        <span @click="item.count <=0 ? 0 : item.count--">-</span>
          <input type="text" v-model="item.count" />
          <span @click="item.count++">+</span>
        </td>
        <td>{{item.price * item.count}}</td>
        <td><button @click="delFn(item.id)">删除</button></td>
      </tr>

      <tr v-if="list.length === 0">
        <td colspan="4">没有数据咯~</td>
      </tr>
    </table>
    <br />
    <button @click="dell()">删除选中商品</button>
    <button @click="delCar()">清理购物车</button>
    <br />
    <div style="margin-top: 20px">
      <h2>统计:</h2>
      <p>已经选中商品件数:{{allCount}}</p>
      <p>总价:{{allPrice}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: "奔驰", time: "2020-08-01", price: 198, count: 1 ,c:false},
        { id: 2, name: "宝马", time: "2020-08-02", price: 298, count: 2 ,c:false},
        { id: 3, name: "奥迪", time: "2020-08-03", price: 398, count: 1 ,c:false},
      ],
     
     
    };
  },
  methods: {
    //
    delFn(id) {
        const index = this.list.findIndex(item=>item.id == id);
        console.log(index);
        this.list.splice(index, 1);
    },
    dell() {
      //实现选中状态复选框 删除
     this.list  = this.list.filter(item=> {
        return !item.c
      })
      console.log(arr);
    },
    delCar() {
      this.list=[]
    }
    
    

  },
  computed: {
   
    allPrice() {
      return this.list
        .reduce((sum, next) => {
          return (sum += next.price *next.count);
        }, 0)
        .toFixed(2);
    },
    allCount() {
      return this.list
        .reduce((sum, next) => {
          return (sum += +next.count);
        }, 0)
    },
    isAll:{
        set(val) {
            console.log(val);
            this.list.forEach(item=> item.c = val)
        },
        get() {
             return this.list.every(obj => obj.c === true)
        }
    }
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
