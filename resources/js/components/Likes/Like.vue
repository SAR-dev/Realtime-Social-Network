<template>
    <div class="mt-2">
        <v-btn  v-if="loggedIn" small text icon :color="color" @click="likeit"><v-icon small>mdi-thumb-up</v-icon></v-btn>
        <span class="caption grey--text">{{ count }} likes</span>
    </div>
</template>

<script>
export default {
    props: ['content'],
    data(){
        return{
            liked: this.content.liked,
            count: this.content.like_count
        }
    },
    methods: {
        likeit(){
            if (User.loggedIn()){
               this.liked ? this.decr() : this.incr() 
               this.liked = !this.liked
            }
        },
        incr(){
            axios.post(`/api/like/${this.content.id}`)
                .then(res => this.count ++)
        },
        decr(){
            axios.delete(`/api/like/${this.content.id}`)
                .then(res => this.count --)
        }
    },
    computed: {
        color(){
            return this.liked ? 'pink' : 'grey lighten-1'
        },
        loggedIn(){
            return User.loggedIn()
        }
    },
    created() {
        Echo.channel('likeChannel')
            .listen('LikeEvent', (e) => {
                if(this.content.id == e.id){
                    e.type == 1 ? this.count++ : this.count--
                }
            })  
    },
}
</script>

<style>
    
</style>