<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-toolbar-title>The Crow's Nest</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="secondary" class="mr-4" to="/signup">Sign Up</v-btn>
      <v-btn color="accent" @click="signin">Sign In</v-btn>
    </v-app-bar>

    <v-main>
      <v-container
        class="fill-height align-stretch"
        fluid
      >
        <v-row
          no-gutters
          align="stretch"
        >
          <v-col class="text-center">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer
      color="indigo"
      app
    >
      <v-spacer />
      <span class="white--text">Scurvy Studios &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  methods: {
    signin() {
      return this.$auth.loginWithRedirect();
    },
  },
};
</script>
