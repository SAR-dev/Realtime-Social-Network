require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue'

import Vuetify from 'vuetify'
Vue.use(Vuetify)

import store from './store'
import router from './router.js'

import User from './Helpers/User'
window.User = User

import Exception from './Helpers/Exception'
window.Exception = Exception

window.EventBus = new Vue();

Vue.component('AppHome', require('./AppHome.vue').default);

import markdown from './markdown'
Vue.directive('markdown', markdown);

Vue.filter('striphtml', function (value) {
    var div = document.createElement("div");
    div.innerHTML = value;
    var text = div.textContent || div.innerText || "";
    text = text.replace(/@spoiler/g, '').replace(/@bold/g, '').replace(/@italic/g, '').replace(/@link/g, '').replace(/@image/g, '').replace(/[*]/g, '')
    var regex = /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif)\b[-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    text = text.replace(regex, "");
    return text;
});

Vue.filter('getImage', function (value) {
    var body = value;
    var regex = /([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif)\b[-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
    var image = body.match(regex);
    return image;
});
  
Vue.filter('truncate', function(value, limit){
if (value.length > limit) {
    value = value.substring(0, limit - 3) + "...";
    }
    return value;
});

Vue.filter('getFirst', function(value){
    return value[0];
});

Vue.filter('emoticon', function (value) {
    var emoticon = value;
    emoticon = emoticon.replace(/@grinning/g, '<span>&#128512</span>')
                        .replace(/@smile/g, '<span>&#128516</span>')
                        .replace(/@bigsmile/g, '<span>&#128513</span>')
                        .replace(/@lol/g, '<span>&#129315</span>')
                        .replace(/@laugh/g, '<span>&#128514</span>')
                        .replace(/@senti/g, '<span>&#128578</span>')
                        .replace(/@wink/g, '<span>&#128521</span>')
                        .replace(/@3heart/g, '<span>&#129392</span>')
                        .replace(/@2heart/g, '<span>&#128525</span>')
                        .replace(/@kiss/g, '<span>&#128536</span>')
                        .replace(/@money/g, '<span>&#129297</span>')
                        .replace(/@zipper/g, '<span>&#129296</span>')
                        .replace(/@smirk/g, '<span>&#128527</span>')
                        .replace(/@lying/g, '<span>&#129317</span>')
                        .replace(/@relieved/g, '<span>&#128524</span>')
                        .replace(/@droll/g, '<span>	&#129316</span>')
                        .replace(/@drunk/g, '<span>&#129396</span>')
                        .replace(/@dizzy/g, '<span>&#128565</span>')
                        .replace(/@cowboy/g, '<span>&#129312</span>')
                        .replace(/@sunglass/g, '<span>&#128526</span>')
                        .replace(/@confused/g, '<span>&#128533</span>')
                        .replace(/@wow/g, '<span>&#128562</span>')
                        .replace(/@cry/g, '<span>&#128557</span>')
                        .replace(/@devil/g, '<span>&#128520</span>')
                        .replace(/@ogre/g, '<span>&#128121</span>')
                        .replace(/@100/g, '<span>&#128175</span>')
                        .replace(/@raise/g, '<span>&#9995</span>')
                        .replace(/@ok/g, '<span>&#128076</span>')
                        .replace(/@victory/g, '<span>&#9996</span>')
                        .replace(/@fuck/g, '<span>&#128405</span>')
                        .replace(/@up/g, '<span>&#128077</span>')
                        .replace(/@down/g, '<span>&#128078</span>')
                        .replace(/@clap/g, '<span>&#128079</span>')
                        .replace(/@pray/g, '<span>&#129330</span>')
                        .replace(/@handshake/g, '<span>&#129309</span>')
                        .replace(/@angry/g, '<span>&#128544</span>');
    return emoticon;
});

Vue.filter('reverse', function(value) {
    return value.slice().reverse();
});

const app = new Vue({
    el: '#app',
    store,
    router,
    vuetify: new Vuetify({
        theme: {
            themes: {
                light: {
                    primary: '#6200ee',
                    secondary: '#bb86fc'
                }
            }
        },
        icons: {
            iconfont: 'mdi'
        }
    })
});
