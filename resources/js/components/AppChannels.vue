<template>
  <v-container>
    <v-row>
      <v-col cols="8" v-if="cat == 0">
        <welcome></welcome>
      </v-col>
      <v-col cols="8" v-if="cat == 1">
        <comics v-for="post in filtered" :key="post.path" :post=post></comics>
      </v-col>
      <v-col cols="8" v-if="cat == 2">
        <novel v-for="post in filtered" :key="post.path" :post=post></novel>
      </v-col>
      <v-col cols="8" v-if="cat == 4">
        <art v-for="post in filtered" :key="post.path" :post=post></art>
      </v-col>
      <v-col cols="8" v-if="cat == 3">
        <creative v-for="post in filtered" :key="post.path" :post=post></creative>
      </v-col>
      <v-col cols="8" v-if="cat == 5">
        <tutorial v-for="post in filtered" :key="post.path" :post=post></tutorial>
      </v-col>
      <v-col cols="8" v-if="cat == 6">
        <cosplay v-for="post in filtered" :key="post.path" :post=post></cosplay>
      </v-col>
      <v-col cols="8" v-if="cat == 7">
        <news v-for="post in filtered" :key="post.path" :post=post></news>
      </v-col>
      <v-col cols="8" v-if="cat == 8">
        <coArticle v-for="post in filtered" :key="post.path" :post=post></coArticle>
      </v-col>
      <v-col cols="8" v-if="cat == 9">
        <vocaloid v-for="post in filtered" :key="post.path" :post=post></vocaloid>
      </v-col>
      <v-col cols="4">
        <v-card class="sticky style-4" flat outlined width="250px">
          <v-list rounded dense>
            <v-subheader>Channels</v-subheader>
            <v-list-item-group color="cyan accent-4">

              <v-list-item @click="comicsfilter">
                <v-list-item-icon>
                  <v-icon>mdi-book-open-page-variant</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Comics</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item @click="novelfilter">
                <v-list-item-icon>
                  <v-icon>mdi-book-open</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Novel</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item @click="creativefilter">
                <v-list-item-icon>
                  <v-icon>mdi-drama-masks</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Creative</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item @click="artfilter">
                <v-list-item-icon>
                  <v-icon>mdi-folder-image</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Art</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item @click="tutorialfilter">
                <v-list-item-icon>
                  <v-icon>mdi-video</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Tutorial</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item @click="cosplayfilter">
                <v-list-item-icon>
                  <v-icon>mdi-human-child</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Cosplay</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item @click="vocaloidfilter">
                <v-list-item-icon>
                  <v-icon>mdi-microphone-variant</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Vocaloid</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item @click="newsfilter">
                <v-list-item-icon>
                  <v-icon>mdi-newspaper-variant-multiple-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>News</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-list-item @click="articlefilter">
                <v-list-item-icon>
                  <v-icon>mdi-file-document-edit-outline</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>Article</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

import welcome from "./Channels/Welcome";
import art from "./Channels/Art";
import coArticle from "./Channels/Article";
import comics from "./Channels/Comics";
import cosplay from "./Channels/Cosplay";
import creative from "./Channels/Creative";
import news from "./Channels/News";
import novel from "./Channels/Novel";
import tutorial from "./Channels/Tutorial";
import vocaloid from "./Channels/Vocaloid";

export default {
  components: {
    welcome,
    art,
    coArticle,
    comics,
    cosplay,
    creative,
    news,
    novel,
    tutorial,
    vocaloid
  },
  data() {
    return {
      filtered: null,
      cat: 0,
      questions: {},
    };
  },
  computed: {
      ...mapState([
          'posts'
      ])
  },
  created() {
      this.questions = this.posts;
  },
  methods: {
    comicsfilter(){
      this.filtered = this.questions.filter(item => {
        return item.category_id == 1
      });
      this.cat = 1; 
    },
    novelfilter(){
      this.filtered = this.questions.filter(item => {
        return item.category_id == 2
      });
      this.cat = 2; 
    },
    creativefilter(){
      this.filtered = this.questions.filter(item => {
        return item.category_id == 3
      });
      this.cat = 3; 
    },
    artfilter(){
      this.filtered = this.questions.filter(item => {
        return item.category_id == 4
      });
      this.cat = 4; 
    },
    tutorialfilter(){
      this.filtered = this.questions.filter(item => {
        return item.category_id == 5
      });
      this.cat = 5; 
    },
    cosplayfilter(){
      this.filtered = this.questions.filter(item => {
        return item.category_id == 6
      });
      this.cat = 6; 
    },
    newsfilter(){
      this.filtered = this.questions.filter(item => {
        return item.category_id == 7
      });
      this.cat = 7; 
    },
    articlefilter(){
      this.filtered = this.questions.filter(item => {
        return item.category_id == 8
      });
      this.cat = 8; 
    },
    vocaloidfilter(){
      this.filtered = this.questions.filter(item => {
        return item.category_id == 9
      });
      this.cat = 9; 
    },
  },
  
};
</script>

<style scoped>

</style>