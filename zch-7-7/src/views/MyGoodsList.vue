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
      <template #body="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goods_name }}</td>
        <td>{{ scope.row.goodss_price }}</td>
        <td>
          <input
            class="tag-input form-control"
            style="width: 100px"
            type="text"
            v-focus
            v-model="scope.row.inputValue"
            v-if="scope.row.inputVisible"
            @blur="scope.row.inputVisible = false"
            @keydown.enter="enterFn(scope.row)"
            @keydown.esc="scope.row.inputValue = ''"
          />
          <button
            v-else
            style="display: block"
            class="btn btn-primary btn-sm add-tag"
            @click="scope.row.inputVisible = true"
          >
            +Tag
          </button>
          <!-- {{scope.row.tags}} -->
          <span
            style="margin-right: 8px"
            v-for="(str, ind) in scope.row.tags"
            :key="ind"
            class="badge badge-warning"
          >
            {{ str }}
          </span>
        </td>
        <td>
          <button
            class="btn btn-danger btn-sm"
            @click="removeBtn(scope.row.id)"
          >
            删除
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from '../components/MyTable.vue'
export default {
  components: {
    MyTable,
  },
  data() {
    return {
      list: [],
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      this.$axios({
        url: '/api/goods',
      }).then((res) => {
        console.log(res.data.data)
        res.data.data.forEach((ele) => {
          ele.inputVisible = false
        })
        this.list = res.data.data
      })
    },
    removeBtn(id){
        let index = this.list.findIndex(ele => ele.id == id)
        this.list.splice(index, 1)
    },
    enterFn(obj){
        if(obj.inputValue.trim() == ""){
            alert('请输入数据')
            return;
        }
        obj.tags.push(obj.inputValue)
        obj.inputValue = ''
    }
  },
}
</script>

<style lang="scss" scoped></style>
