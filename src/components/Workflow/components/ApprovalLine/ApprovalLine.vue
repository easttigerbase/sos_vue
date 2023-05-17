<template>
  <div style="padding:12px">

      <div class="basicTitle">
        <v-btn color="#1565C0" dark><span>상신</span></v-btn>
        <v-btn style="margin-left: 12px"><span>임시저장</span></v-btn>
      </div>
      <div class="d-flex"  style="padding-left: 4px">
        <NodeObj v-for="(item,i) in items" :key="i" :item="item"></NodeObj>
      </div>

  </div>
</template>

<script>
import NodeObj from "@/components/Workflow/components/ApprovalLine/NodeObj";
export default {
  name: "ApprovalLine",
  components: {NodeObj},
  data:function () {
    return {
      items:[
        {
          name:"신동호",
          process:"기안자",
        },
        {
          name:"신동호",
          process:"일반결재",
        },
        {
          name:"신계철",
          process:"참조결재",
        },
        {
          name:"김숙향",
          process:"협의결재",
        }
      ]
    }

  }
}
</script>

<style scoped>

</style>