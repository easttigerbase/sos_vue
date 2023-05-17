<template>
  <v-container fluid>
    <AppBarTitle appTitle="자재관리"></AppBarTitle>
    <router-view></router-view>
  </v-container>
</template>

<script>
import AppBarTitle from "@/components/AppBar/AppBarTitle";
export default {
  name: "MaterialView",
  components: {AppBarTitle}
}
</script>

<style scoped>

</style>