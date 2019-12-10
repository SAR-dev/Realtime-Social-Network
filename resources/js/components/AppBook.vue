<template>
  <v-container class="series">
    <v-row>
      <v-col cols="8" offset="2">
        <h1
          class="display-2 font-weight-regular cyan--text text--darken-2 text-center mb-3"
        >SERIES LIST</h1>
        <v-card class="justify-start" flat outlined>
          <v-list dense>
            <v-list-item-group color="cyan">
              <v-list-item v-for="(item, index) in books" :key="index">
                <v-list-item-icon>
                  <v-icon>mdi-database</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <router-link :to="'/series/' + item.id" style="text-decoration: none" class="grey--text text--darken-2">
                    <v-list-item-title v-text="item.name"></v-list-item-title>
                  </router-link>
                </v-list-item-content>
                <v-list-item-action v-if="admin">
                  <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                      <v-btn x-small text v-on="on">
                        <v-icon>mdi-dots-horizontal</v-icon>
                      </v-btn>
                    </template>
                    <v-list class="replyList">
                      <v-list-item>
                        <v-btn x-small text @click="edit(index)">Edit</v-btn>
                      </v-list-item>
                      <v-list-item>
                        <v-btn x-small text color="pink" @click="destroy(item.slug)">Delete</v-btn>
                      </v-list-item>
                    </v-list>
                  </v-menu>
                </v-list-item-action>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="8" offset="2">
        <v-textarea label="Add Series" rows="1" outlined color="cyan" v-model="form.name"></v-textarea>
        <v-btn
          depressed
          color="amber"
          class="white--text float-right"
          @click="update"
          v-if="editSlug"
        >Update</v-btn>
        <v-btn depressed color="cyan" class="white--text float-right" @click="create" v-else>Create</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  component: {},
  data() {
    return {
      form: {
        name: null
      },
      books: {},
      editSlug: null,
      questions: {}
    };
  },
  computed: {
      ...mapState([
          'posts'
      ])
  },
  created() {
    this.questions = this.posts;
    axios.get("/api/book").then(res => (this.books = res.data.data));
  },
  methods: {
    create() {
      axios.post("/api/book", this.form).then(res => {
        this.books.unshift(res.data);
        this.form.name = null;
      });
    },
    destroy(slug, index) {
      axios
        .delete(`/api/book/${slug}`)
        .then(res => this.books.splice(index, 1));
    },
    edit(index) {
      this.form.name = this.books[index].name;
      this.editSlug = this.books[index].slug;
      this.books.splice(index, 1);
    },
    update() {
      axios.patch(`/api/book/${this.editSlug}`, this.form).then(res => {
        this.books.unshift(res.data);
        this.form.name = null;
        this.editSlug = null;
      });
    }
  },
  computed: {
    admin() {
      if (User.admin()) {
        return true;
      }
    }
  }
};
</script>

<style>
</style>