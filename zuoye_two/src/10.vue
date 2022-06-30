<template>
  <div>
    <p v-bind:style="{ color:'red',fontSize:'100px'}">asdfghjkl</p>
    <p v-bind:style="{ color:colorColor,fontSize:'100px'}">asdfghjkl</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      colorColor:"green"
    }
  }
}
</script>

<style>

</style>