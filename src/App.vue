<template>
  <!-- App.vue -->

  <v-app style="">
      <!--
    <nav-drawer app></nav-drawer>
      초대장 임시
      <v-main style="padding-left: 56px">
    -->
    <!-- Sizes your content based upon application components -->
    <v-main >
      <!-- Provides the application the proper gutter -->
        <!-- If using vue-router -->
        <router-view></router-view>

    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>

//import NavDrawer from "@/components/Nav/NavDrawer";
export default {
  name: 'App',

  components: {
    //NavDrawer

  },

  data: () => ({
    //
  }),
};
</script>
