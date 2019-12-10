<template>
  <v-container id="disc">
    <v-row>
      <v-col cols="8">
        <v-row>
          <v-col cols="12" v-for="(post, i) in questions" :key="i">
            <v-card outlined>
              <v-list-item three-line>
                <v-list-item-content class="align-self-start">
                  <v-list-item-title class="headline mb-2">
                    <router-link
                      :to="post.path"
                      style="text-decoration: none"
                      class="grey--text text--darken-2"
                    >"{{ post.title }}"</router-link>
                  </v-list-item-title>

                  <v-list-item-subtitle three-line>{{ post.body | striphtml }}</v-list-item-subtitle>
                  <v-row align="center" justify="start" class="ml-1 pt-5">
                    <v-btn icon class="mr-1">
                      <v-icon color="cyan">mdi-heart-outline</v-icon>
                    </v-btn>
                    <span class="subheading mr-2">256</span>
                    <span class="mr-1">·</span>
                    <v-btn icon class="mr-1" :to="post.path">
                      <v-icon color="cyan">mdi-message-reply-text</v-icon>
                    </v-btn>
                    <span class="subheading">45</span>
                  </v-row>
                </v-list-item-content>

                <v-list-item-avatar size="125" tile>
                  <v-img
                    v-if="post.body.match(/([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif)\b[-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)"
                    :src="post.body | getImage | getFirst"
                    lazy-src="https://i.imgur.com/leQ6wgU.png"
                    aspect-ratio="1"
                    class="grey lighten-2 mx-auto my-3"
                    max-width="400"
                    max-height="200"
                  >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-row>
                  </template>
                  </v-img>
                </v-list-item-avatar>
              </v-list-item>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="4">
        <v-card class="mx-auto mt-4" max-width="300" outlined>
          <v-img :src="image.sample" height="200px"></v-img>

          <v-card-title>
            <div class="subtitle-1">IMPORTANT DOCS</div>
            <span class="grey--text subtitle-1">1,000 miles of wonder</span>
          </v-card-title>

          <v-card-actions>
            <v-btn icon @click="show = !show" class="mx-auto">
              <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-card-text>I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.</v-card-text>
            </div>
          </v-expand-transition>
        </v-card>

        <v-card class="mx-auto mt-4" max-width="300" height="300" outlined>
          <v-card-title>
            <div class="subtitle-1">ADVERTISEMENT</div>
          </v-card-title>
          <v-card-text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae debitis vel aperiam itaque,
            laudantium repellendus suscipit aut illum ad corrupti voluptate voluptatibus dolores, veniam
            incidunt harum fugit! Quaerat, inventore expedita?
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      questions: {},
      show: false,
      image: {
        sample: require("./../../assets/2664275.png")
      }
    };
  },
  computed: {
      ...mapState([
          'posts'
      ])
  },
  created() {
        this.questions = this.posts.filter(item => {
          return item.category_id == 10;
        });
      }
};
</script>

<style>
</style>