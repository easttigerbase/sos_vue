<template>
  <div class="basicCard">
    <ApprovalLine></ApprovalLine>
    <v-divider style="margin: 0 24px 36px 24px"></v-divider>
    <div style="min-height: 600px">
    <component style="margin: auto; " :is="id"></component>
    </div>
  </div>
</template>

<script>
import ApprovalLine from "@/components/Workflow/components/ApprovalLine/ApprovalLine";
import VacationApplication from "@/components/Workflow/docs/VacationApplication";
export default {
  name: "WorkflowDraft",
  components: {ApprovalLine,VacationApplication},
  props:{
    id:String
  }

}
</script>

<style scoped>

</style>