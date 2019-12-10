<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="ma-0 pa-0 d-md-none">
                <topcarousel></topcarousel>
            </v-col>
            <v-col cols="12" md="7">
                <posts v-for="post in posts" :key="post.path" :post=post></posts>
            </v-col>
            <v-col cols="5" class="d-none d-md-block">
                <sidebar></sidebar>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState } from 'vuex'

import posts from './AppFeed/Posts'
import sidebar from './AppFeed/Sidebar'
import topcarousel from './AppFeed/TopCarousel'

export default {
    components: {
        posts,
        sidebar,
        topcarousel
    },
    data(){
        return{
        }
    },
    computed: {
        ...mapState([
            'posts'
        ])
    },
}
</script>

<style scoped>
    
</style>