<template>
    <div class="blue-grey lighten-5">
        <app-toolbar></app-toolbar>
        <div style="margin-top:60px"></div>
        <router-view></router-view>
         <!-- <router-view :key="$route.fullPath"></router-view> -->
    </div>
</template>

<script>
import AppToolbar from './components/AppToolbar'

export default {
    components: {
        AppToolbar,
    },
    created() {
        this.$store.dispatch('loadPosts')
    },
}
</script>

<style scoped>
    
</style>