<template>
  <v-container class="pa-0 ma-0 reply">
      <v-list-item three-line class="px-0">
        <v-list-item-content class="pt-0">
          <div dark class="body-2 mb-1 pl-4 py-1 light-blue white--text font-weight-medium">
            {{ data.user }}
            <span class="small-text white--text ml-2">{{ data.created_at }}</span>
            <div v-if="!editing" class="float-right">
              <div v-if="own">
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn x-small text color="white" v-on="on"><v-icon>mdi-dots-horizontal</v-icon></v-btn>
                  </template>
                  <v-list class="replyList">
                    <v-list-item>
                      <v-btn x-small text @click="edit">Edit</v-btn>
                    </v-list-item>
                    <v-list-item>
                      <v-btn x-small text color="pink" @click="destroy">Delete</v-btn>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </div>
            </div>
          </div>

          <editreply :reply="data" v-if="editing"></editreply>

          <v-list-item-subtitle
            v-else
            v-html="this.$options.filters.emoticon(data.reply)"
            class="grey--text text--darken-2 px-4"
          ></v-list-item-subtitle>
          <div class="float-left">
            <like :content="data" class="ml-4"></like>
          </div>
        </v-list-item-content>
      </v-list-item>
  </v-container>
</template>

<script>
import editreply from "./EditReply";
import like from "../Likes/Like";

export default {
  components: {
    editreply,
    like
  },
  props: ["data", "index"],
  data() {
    return {
      editing: false,
    };
  },
  computed: {
    own() {
      return User.own(this.data.user_id);
    },
  },
  methods: {
    destroy() {
      EventBus.$emit("deleteReply", this.index);
    },
    edit() {
      this.editing = true;
    },
    listen() {
      EventBus.$on("cancelEditing", () => {
        this.editing = false;
      });
    }
  },
  created() {
    this.listen();
  }
};
</script>

<style>
.replyList .v-list-item {
  min-height: 25px !important;
}
</style>