<template>
    <div>
    <h4>体育-改变人生</h4>
    <div>
        <router-link to="/sports/newspage">体育的主页</router-link>
        <router-link to="/sports/domestic">国内的体育</router-link>
        <router-link to="/sports/foreign">国外的体育</router-link>
    </div>
    <div>
        <router-view></router-view>
    </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>