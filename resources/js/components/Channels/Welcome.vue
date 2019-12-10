<template>
  <v-container>
    <v-img :src="image.sample" class="mt-10">
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular indeterminate color="grey"></v-progress-circular>
        </v-row>
      </template>
    </v-img>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      image: {
        sample: require("./../../../assets/2664275.png")
      }
    };
  }
};
</script>

<style scoped>
.container {
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
}

p {
  text-align: center;
  font-size: 50px;
  overflow: hidden;
  color: #4dba87;
  margin: 1px;
}

.Two {
  font-size: 25px;
}

.fadeOne-enter-active,
.fadeOne-leave-active {
  transition: all 0.5s ease-out;
}
.fadeOne-enter,
.fadeOne-leave-to {
  clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
  transform: translate(0%, 100%);
}

.fadeTwo-enter-active,
.fadeTwo-leave-active {
  transition: all 0.5s ease-out;
}
.fadeTwo-enter,
.fadeTwo-leave-to {
  clip-path: polygon(0% 100%, 100% 100%, 0% 100%, 0% 100%);
  transform: translate(0%, -100%);
}
</style>