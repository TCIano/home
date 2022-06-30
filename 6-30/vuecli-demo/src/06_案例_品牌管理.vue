<template>
  <div id="app">
    <div class="container">
      <!-- 顶部框模块 -->
      <div class="form-group">
        <div class="input-group">
          <h4>品牌管理</h4>
        </div>
      </div>

      <!-- 数据表格 -->
      <table class="table table-bordered table-hover mt-2">
        <thead>
          <tr>
            <th>编号</th>
            <th>资产名称</th>
            <th>价格</th>
            <th>创建时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value) in list" :key="value.id">
            <td>{{value.id}}</td>
            <td>{{value.name}}</td>

            <!-- 如果价格超过100，就有red这个类 -->
            <td :class="{'red':value.price > 100}">{{value.price}}</td>
            <td>{{value.time}}</td>
            <td><a href="#" @click="del(value.id)">删除</a></td>
          </tr>
          <!-- <tr style="background-color: #EEE">
              <td>统计:</td>
              <td colspan="2">总价钱为: 0</td>
              <td colspan="2">平均价: 0</td>
          </tr> -->
        </tbody>
        <!-- 
        <tfoot >
          <tr>
            <td colspan="5" style="text-align: center">暂无数据</td>
          </tr>
        </tfoot>
            -->
      </table>

      <!-- 添加资产 -->
      <form class="form-inline" style="display:flex;">
        <div class="form-group">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="资产名称" v-model.trim="pn" />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div class="form-group">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="价格" v-model.number="pr" />
          </div>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <!-- 阻止表单提交 -->
        <button class="btn btn-primary" @click.prevent="addPr">添加资产</button>
      </form>
    </div>
  </div>
</template>

<script>
// 1. 明确需求
// 2. 标签+样式+默认数据
// 3. 下载bootstrap, main.js引入bootstrap.css
// 4. 把list数组 - 铺设表格
// 5. 修改价格颜色
import 'bootstrap/dist/css/bootstrap.css'
export default {
  data() {
    return {
      pn: '',
      pr: 0,
      list: [
        { id: 100, name: '外套', price: 199, time: new Date('2010-08-12') },
        { id: 101, name: '裤子', price: 34, time: new Date('2013-09-01') },
        { id: 102, name: '鞋', price: 25.4, time: new Date('2018-11-22') },
        { id: 103, name: '头发', price: 19900, time: new Date('2020-12-12') },
      ],
    }
  },
  methods: {
    addPr() {
      if (this.pn == '' || this.pr == 0) {
        return alert('请输入')
      }
      //先判断数据 是否为空,如果为空就固定一个id防止空数组推数据找不到id
      let id = this.list[this.list.length - 1]
        ? this.list[this.list.length - 1].id + 1
        : 100
      this.list.push({
        id,
        name: this.pn,
        price: this.pr,
        time: new Date(),
      })
      this.pn = ''
      this.pr = 0
    },
    del(id) {
      let index = this.list.findIndex((ele) => {
        //获取当前形参的id对应的数据
        // ele是遍历的每个数组的每一项
        return id == ele.id
      })
      // console.log(index)
      this.list.splice(index, 1)
    },
  },
}
</script>

<style >
.red {
  color: red;
}
</style>
