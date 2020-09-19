<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-toolbar-title>The Crow's Nest</v-toolbar-title>
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
            <router-view></router-view>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer
      color="indigo"
      app
    >
      <v-spacer></v-spacer>
      <span class="white--text">Scurvy Studios &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
  }
</script>