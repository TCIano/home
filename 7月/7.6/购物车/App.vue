<template>
  <div>
    <Header title="我的购物车" backgroundColor="red" color="black" />
    <Goods v-for="item in list" :key="item.id" :obj='item'/>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Goods from './components/Goods.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.$axios({
      url:'/api/cart'
    }).then(res=>{
      console.log(res.data.list);
      this.list=res.data.list
    })
  },
  components: {
    Header,
    Goods,
    Footer,
  },
};
</script>

<style></style>
