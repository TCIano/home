<template>
  <div>
    <MyTable :list="list">
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
        <td>{{ scope.row.goods_price }}</td>
        <td>
          <!-- 点击切换输入框 ，需要每一项 都一个用来接收切换结果的元素 -->
          <!-- 如果要自定的话，需要给每一项定义一个属性？ -->
          <input
            type="text"
            class="tag-input form-control"
            style="width: 100px"
            v-if="scope.row.inputVisible"
            v-focus
            @blur="scope.row.inputVisible = false"
            @keydown.enter="enter(scope, $event)"
            v-model.trim="scope.row.inputValue"
            @keydown.esc="scope.row.inputValue = ''"
          />
          <button
            class="btn btn-primary btn-sm add-tag"
            @click="scope.row.inputVisible = true"
            v-else
          >
            +Tag
          </button>

          <span
            v-for="(item, index) in scope.row.tags"
            :key="index"
            class="badge badge-warning"
            style="margin-right: 5px"
          >
            {{ item }}
          </span>
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="del(scope.row.id)">
            删除
          </button>
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
      //存放输入框内容用inputValue
    };
  },
  created() {
    this.$axios({
      url: "/api/goods",
    }).then((res) => {
      console.log(res.data.data);
      this.list = res.data.data;
    });
  },
  components: {
    MyTable,
  },
  methods: {
    del(id) {
      const index = this.list.findIndex((item) => item.id == id);
      this.list.splice(index, 1);
    },
    //回车事件
    enter(scope, e) {
      if (scope.row.inputValue.length == 0) return alert("请输入内容");
      // v-mode绑定给每个数据的inpuValue，让没一个数据不受其他数据的影响
      //tags 是一个数组，每次往数组里面添加元素即可
      scope.row.tags.push(scope.row.inputValue);
      //添加成功之后，置空
      scope.row.inputValue = "";
      //失去焦点,事件对象实现失去焦点
      e.target.blur();
    },
  },
};
</script>

<style></style>
