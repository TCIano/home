<template>
  <div>
    <MyTableVue :arr="list">
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
        <!-- <td>{{ scope.row.tags }}</td> -->
        <td>
          <input
            ref="ipt"
            type="text"
            class="tag-input form-control"
            style="width: 100px"
            v-if="scope.row.inputVisible"
            v-focus
            @blur="scope.row.inputVisible = false"
            v-model.trim="scope.row.inputValue"
            @keydown.enter="addFn(scope, $event)"
            @keydown.esc="scope.row.inputValue = ''"
          />
          <button
            class="btn btn-primary btn-sm add-tag"
            v-else
            @click="scope.row.inputVisible = true"
          >
            +Tag
          </button>

          <span
            style="margin-right: 10px"
            class="badge badge-warning"
            v-for="(item, index) in scope.row.tags"
            :key="index"
          >
            {{ item }}
          </span>
        </td>

        <td>
          <button
            class="btn btn-danger btn-sm"
            @click="del(scope.row.id)"
            v-change="1"
          >
            删除
          </button>

          <button
            class="btn btn-success btn-sm"
            @click="del(scope.row.id)"
            v-change="2"
          >
            成功
          </button>
          <button
            class="btn btn-primary btn-sm"
            @click="del(scope.row.id)"
            v-change="3"
          >
            主要
          </button>
        </td>
      </template>
    </MyTableVue>
  </div>
</template>

<script>
import MyTableVue from "./components/MyTab.vue";
export default {
  data() {
    return {
      arr: [1, 2, 3], //1显示2隐藏3高亮
      list: [],
    };
  },
  components: {
    MyTableVue,
  },
  directives: {
    change: {
      inserted(ele, binding, vnode) {
        console.log(ele);
        console.log(binding);
        console.log(vnode);
        vnode.context.arr = binding.expression;
        console.log(vnode.context.arr);
        if (vnode.context.arr == 2) {
          ele.style.display = "none";
        } else if (vnode.context.arr == 3) {
          ele.style.color = "black";
        }
      },
    },
  },
  methods: {
    //获取列表
    getList() {
      this.$axios({
        url: "/api/goods",
      }).then((res) => {
        console.log(res);
        this.list = res.data.data;
      });
    },
    del(id) {
      const index = this.list.findIndex((item) => item.id == id);
      this.list.splice(index, 1);
    },
    addFn(val, e) {
      console.log(e);
      if (val.row.inputValue.length == 0) return alert("请输入内容");
      val.row.tags.push(val.row.inputValue);
      val.row.inputValue = "";
      e.target.blur();
    },
  },
  created() {
    this.getList();
  },
};
</script>

<style lang="less" scoped></style>
