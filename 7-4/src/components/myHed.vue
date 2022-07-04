<template>
  <div>
    <div class="main">
      <input type="text" :placeholder="'搜索-书本名称'" v-model="bName">
      <button @click="findFn">搜索</button>
      <table class="table table-bordered table-hover">
        <thead>
          <tr>
            <th>id</th>
            <th>书名</th>
            <th>作者</th>
            <th>出版社</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody id="tb">
          <tr v-for="item in list" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.bookname}}</td>
            <td>{{item.author}}</td>
            <td>{{item.publisher}}</td>
            <td>
            <button @click="delFn(item.id)">删除</button>
            <button @click="DetailsFn(item.id)">详情</button>
              </td>
            
          </tr>
        </tbody>
      </table>
      <!-- <button @click="getBooks">获取</button> -->
      <div>
    
    <input type="text" 
    :placeholder="'书名'"
    v-model="bookObj.bookname"
    >
    <br>
    <input type="text"
     :placeholder="'作者'"
     v-model="bookObj.author"
     >
    <br>
    <input type="text" 
    :placeholder="'出版社'"
    v-model="bookObj.publisher"
    >
    <br>
    <button id="btnAdd" 
    class="btn btn-primary"
    @click="sendFn"
    >添加</button>
    
    </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";
axios.defaults.baseURL = "http://123.57.109.30:3006";
export default {
  data() {
    return {
      list: [],
      bName: '',
       bookObj: {
         // 参数名提前和后台的参数名对上-
         // 发送请求就不用再次对接了
        bookname: '',
        author: '',
        publisher: '',
      },
    };
  },
  mounted() {
    axios({
      url: "http://www.liulongbin.top:3006/api/getbooks",
    }).then((res) => {
      this.list = res.data.data;
    });
    
     
  },
  methods: {
    //添加
    sendFn() {
        axios({
        url: 'http://www.liulongbin.top:3006/api/addbook',
        method: 'POST',
        data: {
          ...this.bookObj
       },
        }).then(res => {
      console.log(res);
    });
    },
    findFn() {
      axios({
        url: "http://www.liulongbin.top:3006/api/getbooks",
        params: {
        bookname:this.bName
      }
    }).then((res) => {
      this.list = res.data.data;
    });
    },
    // /api/delbook
    delFn(id) {
      console.log(id);//当前点击的id
      axios({
        url: "http://www.liulongbin.top:3006/api/delbook",
        params: {
          id:id
        }
    }).then((res) => {
      console.log(res);
      console.log(id);
    });
    },
    DetailsFn(id) {
      console.log(id);
      
    }
  }
};
</script>

<style>
.main {
  width: 1200px;
  margin: 0 auto;
  /* background-color: pink; */
}
</style>