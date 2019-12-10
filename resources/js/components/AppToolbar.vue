<template>
  <nav>
    <v-app-bar dense flat app style="border-bottom: 1px solid rgba(128, 128, 128, 0.2)" color="light-blue darken-3" dark>
        
        <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase">
        <span class="title white--text font-weight-bold">C</span>
        <span class="title white--text font-weight-bold">O</span>
        <span class="title white--text font-weight-bold">M</span>
        <span class="title white--text font-weight-bold">I</span>
        <span class="title white--text font-weight-bold">C</span>
        <span class="title white--text text--accent-4 font-weight-bold mr-1">S</span>
        <span class="title white--text font-weight-bold ml-1">G</span>
        <span class="title white--text font-weight-bold">H</span>
        <span class="title white--text font-weight-bold">O</span>
        <span class="title white--text font-weight-bold">R</span>
        </v-toolbar-title>
        
        <v-spacer></v-spacer>

        <notificationcenter v-if="loggedIn"></notificationcenter>

        <v-toolbar-items class="d-none d-md-block">

            <v-tooltip bottom v-for="link in loggedInLinks" :key="link.text">
            <template v-slot:activator="{ on }">
                <v-btn text v-on="on" link :to="link.route" class="white--text">
                    <v-icon>
                    {{ link.icon }}
                    </v-icon>
                </v-btn>
            </template>
            <span>{{ link.text }}</span>
            </v-tooltip>
        </v-toolbar-items>

    </v-app-bar>

    <v-navigation-drawer temporary v-model="drawer" app class="light-blue darken-3">
        <v-col class="text-center">
            <v-avatar class="mt-5 avatar" size="100">
                <img src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light">
            </v-avatar>
            <p class="white--text mt-1 title">Sayed Rafi</p>
            <p class="body-2 white--text mt-n2">Web Developer</p>
        </v-col>
        <v-list dense nav>
            <v-list-item v-for="link in loggedInLinks" :key="link.text" link :to="link.route">
                <v-list-item-icon>
                    <v-icon class="white--text">
                        {{ link.icon }}
                    </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                    <v-list-item-title class="white--text">
                        {{ link.text }}
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>    
        </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import notificationcenter from './AppNotification'

export default {
    components: {
        notificationcenter,
    },
    data() {
        return {
            loggedIn: User.loggedIn(),
            reloadState: 0,
            drawer: false,
            links: [
                { icon: 'mdi-home', text: 'Home', route: '/', show: true },
                { icon: 'mdi-circle-edit-outline', text: 'Post', route: '/post', show: User.loggedIn() },
                { icon: 'mdi-layers', text: 'Channels', route: '/channels', show: true },
                { icon: 'mdi-book-open', text: 'Series', route: '/series', show: true },
                { icon: 'mdi-account-group-outline', text: 'Discussion', route: '/discussion', show: true },
                { icon: 'mdi-face-recognition', text: 'Profile', route: '/profile', show: User.loggedIn() },
                { icon: 'mdi-account-arrow-left', text: 'Log In', route: '/login', show: !User.loggedIn() },
                { icon: 'mdi-account-arrow-right', text: 'Log Out', route: '/logout', show: User.loggedIn() },
                { icon: 'mdi-account-plus', text: 'Sign Up', route: '/signup', show: !User.loggedIn() },
            ]
        }
    },
    methods: {
        
    },
    computed: {
        loggedInLinks(){
            return this.links.filter(item => {
                return item.show == true
            })
        },
    },
    created() {
        EventBus.$on('logout', () => {
            User.logout()
        })
    },
};
</script>

<style>
    .avatar img {
        object-fit: cover;
    }
    .avatar-drop {
        height: 40px;
        width: 40px;
    }
    .avatar-drop img {
        object-fit: cover;
    }
</style>