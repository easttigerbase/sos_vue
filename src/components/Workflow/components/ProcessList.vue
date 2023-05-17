<template>
  <v-sheet>
    <v-row class="mt-2 mb-2 ml-1 mr-1 " >
      <v-col cols="6" class="text-center  pa-0 pr-1">
        <v-card>
        <v-card-title class="basicTitle"><span>진행중인 결재 문서</span></v-card-title>
        <v-list class="d-flex " >
          <v-list-item class="basicText mr-lg-6 ml-lg-6" @click="goToDoc('req')"><span>결재할 문서&nbsp;&nbsp;</span><span class="basicGreenTextBold" >{{reqNum}}</span></v-list-item>
          <v-list-item class="basicText mr-lg-6 ml-lg-6" @click="goToDoc('treat')">결재한 문서&nbsp;&nbsp;<span class="basicGreenTextBold" >{{treatNum}}</span></v-list-item>
          <v-list-item class="basicText mr-lg-6 ml-lg-6" @click="goToDoc('untreat')">결재예정문서&nbsp;&nbsp;<span class="basicGreenTextBold" >{{untreatNum}}</span></v-list-item>
        </v-list>
        </v-card>
      </v-col>
      <v-col cols="6" class="text-center pa-0 pl-1">
        <v-card>
        <v-card-title class="basicTitle"><span >완료된 결재 문서</span></v-card-title>
        <v-list class="d-flex">
          <v-list-item class="basicText mr-lg-4 ml-lg-4" @click="goToDoc('complete')">완료 문서</v-list-item>
          <v-list-item class="basicText mr-lg-4 ml-lg-4" @click="goToDoc('unapproved')">반려 문서</v-list-item>
          <v-list-item class="basicText mr-lg-4 ml-lg-4" @click="goToDoc('available')">문서 열람</v-list-item>
          <v-list-item class="basicText mr-lg-4 ml-lg-4" @click="goToDoc('temp')">임시보관함</v-list-item>
        </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-sheet>
</template>

<script>
export default {
  name: "ProcessList",
  data:function () {
    return {
      items:[
        {

        },
      ],
      reqNum:3,
      treatNum:5,
      untreatNum:0,
    }

  },
  methods:{
    goToDoc(){

    }
  }
}
</script>

<style scoped>

</style>