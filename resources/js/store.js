import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex, axios)

const URL = '/api/question';

export default new Vuex.Store({
    state: {
        posts: []
    },
    actions: {
        loadPosts ({ commit }) {
            axios
                .get(URL)
                .then(data => {
                    let posts = data.data.data
                    commit ('SET_POSTS', posts)
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },
    mutations: {
        SET_POSTS (state, posts) {
            state.posts = posts
        },
    },
    getters: {
        
    }
})