<template>
  <v-container fluid>
    <AppBarTitle appTitle="결재" titleLink="/workflow/main" :toolbarItems="items"></AppBarTitle>
    <router-view></router-view>
  </v-container>
</template>

<script>
import AppBarTitle from "@/components/AppBar/AppBarTitle";
export default {
  name: "WorkflowView",
  components: {AppBarTitle},
  data:function () {
    return{
      items:[
        {name:'작성가능서식',href:'/workflow/available'},
      ]
    }
  }
  // process -> 결재할문서 req, 결재한문서 treat, 결재예정문서 untreat, 완료 문서 complete
}
</script>

<style scoped>

</style>