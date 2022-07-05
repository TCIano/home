<template>
  <div>
    <section class="todoapp">
      <Header @create="createFn" />
      <Main :list="showList" @del='delFn'/>
      <Floor :count='count' @clear="clearFn" @check='checkFn'/>
    </section>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Floor from './components/Floor.vue';
import Main from './components/Main.vue';
export default {
  data() {
    return {
      list: JSON.parse(localStorage.getItem('list'))||[],
      isGet:'all'
    };
  },
  components: {
    Header,
    Floor,
    Main,
  },
  methods: {
    createFn(val) {
        if(this.list.length==0){
            return alert('输出不能为空')
        }
      let id = this.list[this.list.length - 1]
        ? this.list[this.list.length - 1].id + 1
        : 100;
      this.list.push({
        name: val,
        isDone: false,
        id,
      });
      
    },
    delFn(id){
        let index=this.list.findIndex(obj=>obj.id==id)
        this.list.splice(index,1)
    },
    clearFn(){
        this.list.forEach(obj=>obj.isDone=false)
    },
    checkFn(val){
        this.isGet=val
    }
  },
  computed:{
    count(){
        return this.list.filter(obj=>!obj.isDone).length
    },
    showList(){
        if(this.isGet=='no'){
          return  this.list.filter(obj=>!obj.isDone)
        }else if(this.isGet=='yes'){
         return   this.list.filter(obj=>obj.isDone==true)
        }else{
            return this.list
        }
    }
  },
  watch:{
    list:{
        deep:true,
        handler(val){
            localStorage.setItem('list',JSON.stringify(val||[]))
        }
    }
  }
};
</script>

<style></style>
