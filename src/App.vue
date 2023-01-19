<template>
  <!-- App.vue -->

  <v-app>

      <!-- -->
    <nav-drawer app></nav-drawer>
    <!-- Sizes your content based upon application components -->
    <v-main style="padding-left: 56px">

      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>

import NavDrawer from "@/components/Nav/NavDrawer";
export default {
  name: 'App',

  components: {
    NavDrawer

  },

  data: () => ({
    //
  }),
};
</script>
