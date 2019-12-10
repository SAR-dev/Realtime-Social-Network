<template>
  <v-container class="showPost">
    <v-card max-width="900" class="mx-auto pa-md-10 pa-5" outlined>
      <v-list-item>
        <v-list-item-avatar color="grey darken-3" size="50">
          <v-img
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-subtitle>
            <span class="light-blue--text text--darken-4 font-weight-medium body-1">{{ data.user }}</span>
            <br />
            <span class="grey--text small-text">{{ data.created_at }}</span>
          </v-list-item-subtitle>
          <div class="float-right">
            <span class="caption mr-2 grey--text">
              256
              <v-icon x-small>mdi-heart</v-icon>
            </span>
            <span class="mr-1">·</span>
            <span class="caption mr-2 grey--text">
              {{data.reply_count}}
              <v-icon x-small>mdi-message-reply-text</v-icon>
            </span>
          </div>
        </v-list-item-content>
      </v-list-item>

      <h1 class="grey--text text--darken-2 headline font-weight-bold my-5">{{ data.title }}</h1>

      <div :key="data.body" v-html="data.body"></div>

      <v-card-actions class="mt-4">
        <div v-if="own">
          <v-btn text x-small outlined color="amber darken-4" @click="edit">Edit</v-btn>
          <v-btn text x-small outlined color="red" @click="destroy">Delete</v-btn>
        </div>
        <div class="flex-grow-1"></div>
        <div>
          <v-btn icon class="mr-1" @click="loveIt" v-if="loggedIn">
            <v-icon :color="color">mdi-heart-outline</v-icon>
          </v-btn>
          <span class="subheading mr-2" v-if="loggedIn">{{count}}</span>
          <span class="mr-1">·</span>
          <v-btn icon class="mr-1">
            <v-icon color="cyan">mdi-message-reply-text</v-icon>
          </v-btn>
          <span class="subheading">{{data.reply_count}}</span>
        </div>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      count: null,
      loved: null
    };
  },
  methods: {
    destroy() {
      axios
        .delete(`/api/question/${this.data.slug}`)
        .then(res => this.$router.push("/"))
        .catch(error => console.log(error.response.data));
    },
    edit() {
      EventBus.$emit("startEditing");
    },
    loveIt() {
      if (User.loggedIn()) {
        this.loved ? this.decr() : this.incr();
        this.loved = !this.loved;
      }
    },
    incr() {
      axios.post(`/api/love/${this.data.slug}`).then(res => this.count++);
    },
    decr() {
      axios.delete(`/api/love/${this.data.slug}`).then(res => this.count--);
    }
  },
  computed: {
    own() {
      return User.own(this.data.user_id);
    },
    color() {
      return this.loved ? "pink" : "cyan";
    },
    loggedIn() {
      return User.loggedIn();
    }
  },
  created() {
    Echo.channel('loveChannel')
      .listen('LoveEvent', (e) => {
          if(this.data.id == e.id){
              e.type == 1 ? this.count++ : this.count--
          }
    })  

    EventBus.$on("newReply", () => {
      this.data.reply_count++;
    });

    Echo.private("App.User." + User.id()).notification(notification => {
      this.data.reply_count++;
    });

    EventBus.$on("deleteReply", () => {
      this.data.reply_count--;
    });

    Echo.channel("deleteReplyChannel").listen("DeleteReplyEvent", e => {
      this.data.reply_count--;
    });
  },
  watch: {
    data(newVal, oldVal) {
      (this.count = newVal.love_count), (this.loved = newVal.loved);
    }
  }
};
</script>

<style>
</style>