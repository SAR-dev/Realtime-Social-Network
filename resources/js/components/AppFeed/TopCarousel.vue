<template>
<v-container>
  <v-sheet class="mx-auto">
    <v-slide-group v-model="model" center-active>
      <v-slide-item v-for="(n, i) in items" :key="i" v-slot:default="{ active, toggle }">
        <v-card
          :color="active ? 'primary' : 'grey lighten-1'"
          class="ma-4"
          height="100"
          width="65"
          @click="toggle"
        >
          <v-row class="fill-height" align="center" justify="center">
              <v-img :src="n.src" height="100" width="65" aspect-ratio="1">
                  <v-card-title class="align-end fill-height caption white--text">{{n.artist}}</v-card-title>
              </v-img>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</v-container>
</template>

<script>
export default {
  data: () => ({
    model: null,
    items: [
        {
          src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          artist: "Foster the",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          artist: "Ellie Goulding",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          artist: "Foster the",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          artist: "Ellie Goulding",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          artist: "Foster People",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          artist: "Ellie Goulding",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          artist: "Foster the",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          artist: "Ellie Goulding",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          artist: "Foster  People",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          artist: "Ellie Goulding",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          artist: "Foster  People",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          artist: "Ellie Goulding",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          artist: "Foster  People",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          artist: "Ellie Goulding",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          artist: "Foster  People",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          artist: "Ellie Goulding",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
          artist: "Foster  People",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
          artist: "Ellie Goulding",
        },
      ]
  })
};
</script>

<style>
</style>