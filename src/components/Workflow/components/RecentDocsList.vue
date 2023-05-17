<template>
  <v-sheet>
    <v-card>
      <v-card-title class="basicTitle" >최근 결재문서</v-card-title>
      <v-divider class="ml-4 mr-4"></v-divider>
      <v-item class="pa-4" multiple>
        <v-row>
          <v-col
              v-for="(item, i) in items"
              :key="i"
              cols="12"
              md="12"
              @click="clickItem"
              class="ma-0 pa-0"
          >
            <v-btn width="100%" text  >
            <v-item >
              <v-row class="align-center" >
                <v-col cols="2" class="basicGreenTextBold">
                  <span :style="getColorStatus(item.workflowStatus)">{{getStrStatus(item.workflowStatus)}}</span>
                </v-col>
                <v-col cols="5"  class="text-left">
                  <span>[{{item.workflowName}}]{{item.docName}}</span>
                </v-col>
                <v-col cols="1">
                  <v-btn ></v-btn>
                </v-col>
                <v-col cols="2">
                  <span >{{item.employeeName}}</span>
                </v-col>
                <v-col cols="2">
                  <span>{{item.recentDate}}</span>
                </v-col>
              </v-row>
            </v-item>
            </v-btn>
          </v-col>
        </v-row>

      </v-item>
    </v-card>
  </v-sheet>
</template>

<script>
export default {
  name: "RecentDocsList",
  data:function () {
    return{

      items:[
        {
          workflowName:'출장확인서',
          docName:'출장확인서',
          workflowStatus:'req',
          isSelected:false,
          recentDate:'22.11.25',
          uploadDate:'22.11.20',
          employeeName:'신동호'
        },
        {
          workflowName:'검수확인서',
          docName:'ㄹㄴㅇㄹㄷㄹ',
          workflowStatus:'complete',
          isSelected:false,
          recentDate:'22.11.25',
          uploadDate:'22.11.20',
          employeeName:'신동호'
        },{
          workflowName:'출장확인서',
          docName:'출장확인서',
          workflowStatus:'req',
          isSelected:false,
          recentDate:'22.11.25',
          uploadDate:'22.11.20',
          employeeName:'신동호'
        },{
          workflowName:'출장확인서',
          docName:'출장확인서',
          workflowStatus:'req',
          isSelected:false,
          recentDate:'22.11.25',
          uploadDate:'22.11.20',
          employeeName:'신동호'
        },{
          workflowName:'출장확인서',
          docName:'출장확인서',
          workflowStatus:'req',
          isSelected:false,
          recentDate:'22.11.25',
          uploadDate:'22.11.20',
          employeeName:'신동호'
        },{
          workflowName:'출장확인서',
          docName:'출장확인서',
          workflowStatus:'req',
          isSelected:false,
          recentDate:'22.11.25',
          uploadDate:'22.11.20',
          employeeName:'신동호'
        },{
          workflowName:'출장확인서',
          docName:'출장확인서',
          workflowStatus:'req',
          isSelected:false,
          recentDate:'22.11.25',
          uploadDate:'22.11.20',
          employeeName:'신동호'
        },{
          workflowName:'출장확인서',
          docName:'출장확인서',
          workflowStatus:'req',
          isSelected:false,
          recentDate:'22.11.25',
          uploadDate:'22.11.20',
          employeeName:'신동호'
        },{
          workflowName:'출장확인서',
          docName:'출장확인서',
          workflowStatus:'req',
          isSelected:false,
          recentDate:'22.11.25',
          uploadDate:'22.11.20',
          employeeName:'신동호'
        },{
          workflowName:'출장확인서',
          docName:'출장확인서',
          workflowStatus:'req',
          isSelected:false,
          recentDate:'22.11.25',
          uploadDate:'22.11.20',
          employeeName:'신동호'
        },{
          workflowName:'출장확인서',
          docName:'출장확인서',
          workflowStatus:'req',
          isSelected:false,
          recentDate:'22.11.25',
          uploadDate:'22.11.20',
          employeeName:'신동호'
        },{
          workflowName:'출장확인서',
          docName:'출장확인서',
          workflowStatus:'req',
          isSelected:false,
          recentDate:'22.11.25',
          uploadDate:'22.11.20',
          employeeName:'신동호'
        },{
          workflowName:'출장확인서',
          docName:'출장확인서',
          workflowStatus:'req',
          isSelected:false,
          recentDate:'22.11.25',
          uploadDate:'22.11.20',
          employeeName:'신동호'
        },

      ]
    }
  },
  methods:{
    getStrStatus(item){
      return item==='req'?'결재할문서':'완료문서'
    },
    getColorStatus(item){
      return item==='req'?'color:green':'color:gray'
    },
    clickItem(){
      alert('clieck')
    },
  },
  computed:{


  }
}
</script>

<style scoped>

</style>