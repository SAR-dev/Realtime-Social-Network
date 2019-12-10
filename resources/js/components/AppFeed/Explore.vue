<template>
<div v-if="question">
    <edit
    :data = question 
    v-if="editing"
    ></edit>

    <show
    v-else 
    :data = question
    ></show>

    <newreply
    v-if="!editing && loggedIn"
    :questionSlug = "question.slug"
    ></newreply>

    <replies
    v-if="!editing" 
    :question="question"
    ></replies>

   

    <v-container v-if="!loggedIn">
        <v-row>
            <v-col cols="12 text-center" class="grey lighten-1 round">
                <router-link to="/login" style="text-decoration: none" class="white--text">Login to join the conversation</router-link>
            </v-col>
        </v-row>
    </v-container>
    
</div>
</template>

<script>
import show from './PostsShow'
import edit from './PostsEdit'
import replies from '../Reply/Replies'
import newreply from '../Reply/NewReply'

export default {
    components:{
        show,
        edit,
        replies,
        newreply,
    },
    data() {
        return {
            question:{},
            editing: false
        }
    },
    created() {
        this.listen()
        this.getPost()
    },
    methods: {
        listen(){
            EventBus.$on('startEditing',()=>{
                this.editing = true
            })

            EventBus.$on('cancelEditing', () =>{
                this.editing = false
                this.getPost()
            })
        },
        getPost(){
            axios.get(`/api/question/${this.$route.params.slug}`)
            .then(res => this.question = res.data.data)
        }
    },
    computed: {
        loggedIn(){
            return User.loggedIn()
        }
    },
}
</script>

<style scoped>
    
</style>