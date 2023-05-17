<template>

    <v-app-bar
        color="blue darken-3"
        dark
        dense
        class="ma-0 pa-0 mb-2"
        rounded
    >
      <div @click="titleClicked">
        <span class="text-h6 font-weight-bold overline">{{appTitle}}</span>
        <span>&nbsp;-&nbsp;</span>
        <span class=" font-weight-bold overline ">s s o t r o n</span>
      </div>
      <div style="padding-left: 16px">
          <v-btn  v-for="(item,idx) in this.toolbarItems" :key="idx" text link :href="item.href">{{item.name}}</v-btn>
      </div>
    </v-app-bar>
</template>

<script>
export default {
  name: "AppBarTitle",
  props:{
    appTitle:String,
    toolbarItems:Array,
    titleLink:String
  },
  methods:{
    titleClicked(){
      this.$router.push(this.titleLink)
    }
  }
}
</script>

<style scoped>

</style>