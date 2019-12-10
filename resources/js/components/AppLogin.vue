<template>
  <v-card outlined class="mx-auto pa-10" max-width="500" style="margin-top: 80px">
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
        <v-col cols="12">
          <v-text-field
            outlined
            color="blue darken-2"
            v-model="form.email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12">
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
        <v-col cols="12">
          <v-btn
            :disabled="!valid"
            @click="validate"
            depressed
            class="blue darken-2 white--text float-left px-5"
          >Log In</v-btn>
          <v-btn text class="blue--text text--darken-2 float-right" link to="/signup">Sign Up</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      form: {
        name: "",
        email: "",
        password: ""
      },
      show: false,
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
        this.login();
      }
    },
    login() {
      User.login(this.form);
    }
  },
  computed: {},
  created() {
    if (User.loggedIn()) {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
</style>