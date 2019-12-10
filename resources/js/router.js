import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Feed from './components/AppFeed'
import Login from './components/AppLogin'
import Logout from './components/AppLogout'
import Signup from './components/AppSignup'
import Read from './components/AppFeed/Explore'
import Profile from './components/AppProfile'
import Post from './components/AppPost'
import Channels from './components/AppChannels'
import Discussion from './components/AppDiscussion'
import Series from './components/AppBook'
import Getseries from './components/ExploreSeries/Explore'

const routes = [
    {
        path: '/',
        component: Feed
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/logout',
        component: Logout
    },
    {
        path: '/signup',
        component: Signup
    },
    {
        // Add Post ID in path
        path: '/posts/:slug',
        component: Read
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/post',
        component: Post
    },
    {
        path: '/channels',
        component: Channels
    },
    {
        path: '/discussion',
        component: Discussion
    },
    {
        path: '/series',
        component: Series
    },
    {
        path: '/series/:slug',
        component: Getseries
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router