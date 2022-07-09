<template>
  <div>
    <Table :arr="list">
      <template #header>
        <th>#</th>

        <th>商品名称</th>

        <th>价格</th>

        <th>标签</th>

        <th>操作</th>
      </template>
      <template #body="scoped">
        <td>{{ scoped.row.id }}</td>

        <td>{{ scoped.row.goods_name }}</td>

        <td>{{ scoped.row.goods_price }}</td>

        <td>
          <input
            type="text"
            class="tag-input form-control"
            style="width: 100px"
            v-focus
            v-if="scoped.row.inputShow"
            @blur="scoped.row.inputShow = false"
            v-model="scoped.row.inputValue"
            @keydown.enter="emterFn(scoped.row)"
            @keydown.esc="scoped.row.inputValue = ''"
          />
          <button
            v-else
            class="btn btn-primary btn-sm add-tag"
            @click="scoped.row.inputShow = true"
          >
            +Tag
          </button>
          <span
            v-for="(item, index) in scoped.row.tags"
            :key="index"
            class="badge badge-warning"
          >
            {{ item }}
          </span>
        </td>
        <td>
          <button
            class="btn btn-danger btn-sm"
            @click="del(scoped.row.id)"
            v-jin="'admin'"
          >
            删除
          </button>
          <button
            class="btn btn-danger btn-sm"
            @click="del(scoped.row.id)"
            v-jin="'pink'"
          >
            完成
          </button>
          <button
            class="btn btn-danger btn-sm"
            @click="del(scoped.row.id)"
            v-jin="'add1'"
          >
            普通
          </button>
        </td>
      </template>
    </Table>
  </div>
</template>

<script>
import Table from '../components/MyTable.vue';
export default {
  components: {
    Table,
  },
  data() {
    return {
      list: [],
      people: ['admin', 'add1', 'pink'],
      arr: [1, 2, 3],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.$axios({
        url: '/api/goods',
      }).then((res) => {
        console.log(res);
        res.data.data.forEach((ell) => {
          ell.inputShow = false;
        });
        this.list = res.data.data;
      });
    },
    del(id) {
      let index = this.list.findIndex((ell) => ell.id == id);
      this.list.splice(index, 1);
    },
    emterFn(obj) {
      if (obj.inputValue.trim() == '') {
        return alert('enter message');
      }
      obj.tags.push(obj.inputValue);
      obj.inputValue = '';
    },
  },
  directives: {
    jin: {
      inserted(el, binding, vnode) {
        vnode.context.people = binding.expression;
        if (vnode.context.people.includes('admin')) {
          el.style.display = 'block';
        } else if (vnode.context.people.includes('add')) {
          el.style.backgroundColor = 'green';
        } else {
          el.style.backgroundColor = 'black';
        }
      },
    },
  },
};
</script>
<style lang="less" scoped>
.badge {
  margin-right: 5px;
}
</style>
