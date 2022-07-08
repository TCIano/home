<template>
  <div>
    <input type="text" name="" id="" v-model="ipt" v-num="ipt" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      ipt: "",
    };
  },
  directives: {
    num: {
      update(ele, binding, vnode) {
        console.log(ele);
        console.log(ele.value);
        ele.value = ele.value.replace(/[^\d.]/g, "");
        //以上步骤只改变了输入框内的值,并没有关联data里面的数据
        console.log(binding);
        console.log(vnode);
        //可以根据vnode找到context 下的vue实例，从而给实例 上面挂载 输入框的内容(输入框内容可以在binding中找到)
        vnode.context[binding.expression] = ele.value;
      },
    },
  },
};
</script>

<style></style>
