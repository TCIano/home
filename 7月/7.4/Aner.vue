<template>
  <div>
    <button :class="`one-button-${type}`" @click="clickFn">{{title}}</button>
  </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default:'按钮组件'
        },
        type:{
            type:String,
            default:'primary',
            validator(val){
                console.log(val);
                return ['primary','success','warning','danger'].includes(val)
            }
        }
    },
    methods:{
        clickFn(){
            this.$emit('task')
        }
    }
}
</script>

<style scoped>
button {
  color: #fff;
  outline: none;
  border: none;
  padding: 8px 24px;
  border-radius: 4px;
  font-size: 18px;
}
.one-button-primary{
    background-color: skyblue;
}
.one-button-success{
    background-color: hotpink;
}
.one-button-warning{
    background-color: yellow;
}
.one-button-danger{
    background-color: red;
}
</style>