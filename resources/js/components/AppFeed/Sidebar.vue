<template>
  <v-container>
    <v-row>
      <v-card class="mx-auto mt-4" max-width="300" outlined>
        <v-card-title>
          <div class="subtitle-1">Upcoming Events DOCS</div>
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
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  }
};
</script>

<style>
</style>