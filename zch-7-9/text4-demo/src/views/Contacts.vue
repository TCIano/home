<template>
    <div>
    <ul>
        <li>
            <router-link to="/contacts/all_contacts">All_contacts</router-link>
        </li>
        <li>
            <router-link to="/contacts/alice">Alice</router-link>
        </li>
        <li>
            <router-link to="/contacts/bob">Bob</router-link>
        </li>
        
    </ul>
    <div>
        <button>随机显示</button>
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