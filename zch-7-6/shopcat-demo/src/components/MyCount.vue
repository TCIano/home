<template>
  <div class="my-counter">
    <button type="button" class="btn btn-light" 
    :disabled="fatherobj.goods_count <= 1"
    @click="fatherobj.goods_count > 1 && fatherobj.goods_count--"
    >-</button>
    <input type="number" class="form-control inp" 
    v-model.number="fatherobj.goods_count"
    >
    <button type="button" class="btn btn-light"
    @click="fatherobj.goods_count++"
    >+</button>
  </div>
</template>

<script>
export default {
    props: {
        fatherobj: {
            type: Object,
            default: ()=> ({})
        },
    },
    watch: {
        fatherobj: {
            deep: true,
            handler(){
                if(this.fatherobj.goods_count < 1){
                    this.fatherobj.goods_count = 1
                }
            }
        }
    }
}
</script>

<style lang="less" scoped>
.my-counter {
  display: flex;
  .inp {
    width: 45px;
    text-align: center;
    margin: 0 10px;
  }
  .btn, .inp{
    transform: scale(0.9);
  }
}
</style>