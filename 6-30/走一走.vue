<template>
  <div>
    <ul>
        <li v-for="item in str" :key="item">{{item}}</li>
    </ul>
    <button @click="zou">走</button>
  </div>
</template>

<script>
export default {
    name:'',
    data(){
        return{
            str:['帅哥','美女','程序员']
        }
    },
    methods: {
        zou(){
            this.str.push(this.str[0])
            this.str.shift()
        }
    },

}
</script>

<style>

</style>