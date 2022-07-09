<template>
    <div>
    <h6>Bob</h6>
    <ul>
        <li>
            <router-link to="/contacts/bob/blog">blog</router-link>
        </li>
        <li>
            <router-link to="/contacts/bob/fax">fax</router-link>
        </li>
    </ul>
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