<template>
  <v-card class="mx-auto pa-10" max-width="500" outlined style="margin-top: 80px">
    <v-row>
      <v-col cols="12" class="text-center">
        <span class="display-1 teal--text font-weight-bold">C</span>
        <span class="display-1 orange--text font-weight-bold">O</span>
        <span class="display-1 cyan--text font-weight-bold">M</span>
        <span class="display-1 brown--text font-weight-bold">I</span>
        <span class="display-1 blue-grey--text font-weight-bold">C</span>
        <span class="display-1 yellow--text text--accent-4 font-weight-bold">S</span>
        <span class="mx-1"></span>
        <span class="display-1 teal--text font-weight-bold">G</span>
        <span class="display-1 cyan--text font-weight-bold">H</span>
        <span class="display-1 blue-grey--text font-weight-bold">O</span>
        <span class="display-1 orange--text font-weight-bold">R</span>
      </v-col>
    </v-row>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row>
        <v-col cols="12" class="pb-0">
          <v-text-field
            outlined
            color="blue darken-2"
            v-model="form.name"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="pb-0">
          <v-text-field
            outlined
            color="blue darken-2"
            v-model="form.email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="pb-0">
          <v-text-field
            outlined
            color="blue darken-2"
            v-model="form.password"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="passwordRules"
            :type="show ? 'text' : 'password'"
            label="Password"
            hint="At least 8 characters"
            counter
            @click:append="show = !show"
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="pb-0">
          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Do you agree to our License agreement?"
            required
            class="mt-0"
          ></v-checkbox>
        </v-col>
        <v-col cols="12">
          <v-btn
            :disabled="!valid"
            @click="validate"
            depressed
            class="blue darken-2 white--text float-left px-5"
          >Sign Up</v-btn>
          <v-btn text class="blue--text text--darken-2 float-right" link to="/login">Log In</v-btn>
        </v-col>
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
          <template v-slot:activator="{ on }">
            <v-btn color="light-blue" dark v-on="on" x-small text>License Agreement</v-btn>
          </template>
          <v-card>
            <v-toolbar dark color="light-blue">
              <v-btn icon dark @click="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>License Agreement</v-toolbar-title>
              <div class="flex-grow-1"></div>
              <v-toolbar-items>
                <v-btn dark text @click="dialog = false">Close</v-btn>
              </v-toolbar-items>
            </v-toolbar>
            <h1>Lorem Ipsum</h1>
          </v-card>
        </v-dialog>
      </v-row>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      valid: true,
      lazy: false,
      checkbox: true,
      form: {
        name: "",
        email: "",
        password: ""
      },
      show: false,
      nameRules: [
        v => !!v || "Name is required",
        v => {
          const pattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
          return pattern.test(v) || "Invalid Name";
        }
      ],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      passwordRules: [
        v => !!v || "E-mail is required",
        v => v.length >= 8 || "Min 8 characters"
      ]
    };
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.signup();
      }
    },
    signup() {
      axios
        .post("/api/auth/signup", this.form)
        .then(res => {
          User.responseAfterLogin(res);
          this.$router.push("/");
        })
        .catch(error => console.log(error.response.data));
    }
  },
  created() {
    if (User.loggedIn()) {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
</style>