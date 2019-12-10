<template>
    <v-card class="mx-auto mb-4" outlined max-width="600">
      <v-card-title>
        <v-btn fab small depressed color="light-blue" class="mr-2">
          <v-icon color="white" elevation="5">mdi-video</v-icon>
        </v-btn>
        <span class="subtitle-1 font-weight-bold grey--text text--darken-2">Tutorial</span>
      </v-card-title>

      <v-card-text class="headline font-weight-bold">
        <p class="px-4">
          <router-link
            :to="post.path"
            style="text-decoration: none"
            class="grey--text text--darken-2"
          >{{ post.title | truncate(100) }}</router-link>
        </p>
        <div
          class="body-2 grey--text px-4 py-3 text--darken-2 postList"
        >{{ post.body | striphtml | truncate(200)}}</div>
        <v-img
        v-if="post.body.match(/([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif)\b[-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)"
        :src="post.body | getImage | getFirst"
        lazy-src="https://i.imgur.com/leQ6wgU.png"
        aspect-ratio="1"
        class="grey mx-auto round"
        max-width="300"
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
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3 mr-1">
          <v-img
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="caption">{{ post.user }}</v-list-item-title>
          <span class="grey--text small-text">Published {{ post.created_at }}</span>
        </v-list-item-content>

        <v-row align="center" justify="end">
          <v-btn icon small class="mr-1">
            <v-icon color="cyan">mdi-heart-outline</v-icon>
          </v-btn>
          <span class="caption mr-2">256</span>
          <span class="mr-1">·</span>
          <v-btn icon small class="mr-1" :to="post.path">
            <v-icon small color="cyan">mdi-message-reply-text</v-icon>
          </v-btn>
          <span class="caption">45</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["post"],
  data() {
    return {};
  }
};
</script>

<style>
</style>