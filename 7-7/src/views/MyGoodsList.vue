<template>
  <div>
    <MyTable :arr="list">
      <template #header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #tbody="scope">
        <td>{{scope.row.id}}</td>
        <td>{{scope.row.goods_name}}</td>
        <td>{{scope.row.goods_price}}</td>
        <td>
            <input
            type="text"
            class="tag-input form-control"
            style="width: 100px"
            v-if="scope.row.inputValue"
            v-gfocus
          />
          <button 
          v-else
          @click="scope.row.inputValue = true"
          class="btn btn-primary btn-sm add-tag">+Tag</button>
          <span class="badge badge-warning" 
          v-for="(item,index) in scope.row.tags" 
          :key="index">
             {{item}} 
          </span>
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="delFn(scope.row.id)">删除</button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from "../components/MyTable.vue";
export default {
  data() {
    return {
        list: [],
        
    };
  },
  components: {
    MyTable,
  },
  created() {
    this.$axios({
      url: "/api/goods",
    }).then((res) => {
        this.list.forEach(item => {
            item.inputShow = false
        })
      this.list = res.data.data;
      console.log(this.list);
    });
    },
    methods: {
        delFn(id) {
            const index = this.list.findIndex(ele => ele.id == id);
        this.list.splice(index, 1);
    }
  }
};
</script>

<style>
</style>