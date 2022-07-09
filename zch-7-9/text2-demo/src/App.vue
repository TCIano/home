<template>
    <div>
    <div>
        <router-link to="/page">主页</router-link>
        <router-link to="/news">新闻</router-link>
        <router-link to="/sports">体育</router-link>
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